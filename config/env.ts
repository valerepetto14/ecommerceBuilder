import { z } from "zod";

const envSchema = z.object({
  NEXTAUTH_URL: z.string(),
  NEXTAUTH_SECRET: z.string(),
  DATABASE_HOST: z.string(),
  DATABASE_USER: z.string(),
  DATABASE_PASS: z.string(),
  DATABASE_NAME: z.string(),
  DATABASE_PORT: z.string(),
  DATABASE_URL: z.string(),
  NODE_ENV: z.string(),
});

export type EnvConfig = z.infer<typeof envSchema>;

export const envConfig: EnvConfig = {
  NEXTAUTH_URL: process.env.NEXTAUTH_URL as string,
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET as string,
  DATABASE_HOST: process.env.DATABASE_HOST as string,
  DATABASE_USER: process.env.DATABASE_USER as string,
  DATABASE_PASS: process.env.DATABASE_PASS as string,
  DATABASE_NAME: process.env.DATABASE_NAME as string,
  DATABASE_PORT: process.env.DATABASE_PORT as string,
  DATABASE_URL: process.env.DATABASE_URL as string,
  NODE_ENV: process.env.NODE_ENV as string,
};

const envVars = envSchema.parse(envConfig);

export default envVars;
