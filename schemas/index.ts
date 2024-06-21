import * as z from "zod";

interface SignUpData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export const SignInSchema = z.object({
  email: z.string().email({
    message: "Por favor, ingrese un correo electrónico válido",
  }),
  password: z
    .string()
    .min(8, {
      message: "La contraseña debe tener al menos 8 caracteres",
    })
    .max(20),
});

const passwordRegex = /^(?=.*[A-Z])(?=.*\d).+$/;

export const SignUpSchema = z
  .object({
    firstName: z
      .string()
      .min(3, {
        message: "Name must be at least 3 characters long",
      })
      .refine((value: string) => !/\d/.test(value), {
        message: "Name must not contain numbers",
      }),
    lastName: z
      .string()
      .min(3, {
        message: "Name must be at least 3 characters long",
      })
      .refine((value: string) => !/\d/.test(value), {
        message: "Name must not contain numbers",
      }),
    phoneNumber: z.string().min(10, {
      message: "Phone number must be at least 10 characters long",
    }),
    email: z.string().email({
      message: "Please enter a valid email",
    }),
    password: z
      .string()
      .min(8, {
        message: "Password must be at least 8 characters long",
      })
      .max(20)
      .refine((value: string) => passwordRegex.test(value), {
        message:
          "Password must contain at least one uppercase letter and one number",
      }),
    confirmPassword: z.string().optional(),
  })
  .refine((data: SignUpData) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
