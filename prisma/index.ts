// prisma/index.ts
import { PrismaClient } from "@prisma/client";

// exportando tipagens a partir desse arquivo
export * from "@prisma/client";

// exportando o cliente
export const prisma = new PrismaClient();
