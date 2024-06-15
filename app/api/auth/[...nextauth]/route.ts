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
        console.log("isValid:", isValid);

        // Si la contraseña es válida, devolver el usuario
        if (isValid) {
          return {
            id: user.id,
            email: user.email,
            name: `${user.firstName} ${user.lastName}`,
            status: user.status,
            phone: user.phoneNumber,
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
    signIn: async ({ user }) => {
      // Puedes agregar lógica adicional si es necesario
      return true;
    },
    jwt: async (token, user) => {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.status = user.status;
        token.phone = user.phone;
      }
      return token;
    },
    session: async (session, token) => {
      session.user = {
        id: token.id,
        email: token.email,
        name: token.name,
        status: token.status,
        phone: token.phone,
      };
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
});

export { handler as GET, handler as POST };
