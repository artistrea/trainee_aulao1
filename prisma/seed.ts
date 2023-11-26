// prisma/seed.ts

import { prisma } from "./index";

async function seed() {
  await prisma.restaurante.create({
    data: {
      nome: "Rotisserie",
      cardapio: {
        create: {
          textoInicial: "Desde 1997 servindo o melhor filé!",
        },
      },
    },
  });
}

seed()
  .then(() => {
    console.log("Seed realizada com sucesso");
  })
  .catch((err) => {
    console.error(err.message);
  })
  .finally(() => {
    prisma.$disconnect();
  });
