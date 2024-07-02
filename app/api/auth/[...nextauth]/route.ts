import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/database";
import bcrypt from "bcryptjs";
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      status: string;
      phone: string;
      lastLogin: Date;
      img: string;
    };
  }
}

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "test@test.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Verificar que se pasen las credenciales
        if (!credentials?.email || !credentials?.password) {
          console.log("No credentials provided");
          return null;
        }

        // Buscar usuario por email
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        // Verificar si el usuario fue encontrado
        if (!user) {
          console.log("No user found with that email");
          return null;
        }

        // Comparar las contraseñas
        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        );
        // Si la contraseña es válida, devolver el usuario
        if (isValid) {
          await prisma.user.update({
            where: {
              id: user.id,
            },
            data: {
              lastLogin: new Date(),
            },
          });

          return {
            id: user.id,
            email: user.email,
            name: `${user.firstName} ${user.lastName}`,
            status: user.status,
            phone: user.phoneNumber,
            lastLogin: user.lastLogin,
          };
        } else {
          console.log("Password is invalid");
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token = { ...token, ...user };
      }
      return token;
    },
    session: async ({ session, token }) => {
      console.log("token", token);
      session.user = token as any;
      console.log("session", session);
      return session;
    },
  },
  pages: {
    signIn: "/signin",
    signOut: "/signin",
  },
});

export { handler as GET, handler as POST };
