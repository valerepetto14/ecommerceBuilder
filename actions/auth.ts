"use server";
import bcrypt from "bcryptjs";
import { SignUpSchema } from "@/schemas";
import * as z from "zod";
import prisma from "@/lib/database";

export const signUp = async (body: z.infer<typeof SignUpSchema>) => {
  try {
    console.log("bodyyyyy", body);
    const userExists = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });
    if (!userExists) {
      const hashedPassword = await bcrypt.hash(body.password, 10);
      const user = await prisma.user.create({
        data: {
          firstName: body.firstName,
          lastName: body.lastName,
          phoneNumber: body.phoneNumber,
          email: body.email,
          password: hashedPassword,
        },
      });
      return { success: "User created successfully", user };
    }
  } catch (error) {
    console.log("error", error);
    return { error: "User already exists" };
  }
};
