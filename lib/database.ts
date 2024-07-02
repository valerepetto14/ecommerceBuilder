import { PrismaClient } from "@prisma/client";
import envVars from "@/config/env";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (envVars.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
