import { prisma, type Prisma } from "../../../../prisma";

function create(restaurant: Prisma.RestauranteCreateInput) {
  return prisma.restaurante.create({
    data: restaurant,
  });
}

// Next.js API route support: https://nextjs.org/docs/api-route]s/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

function validRestaurant(r) {
  return { valid: true };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    const data = await prisma.restaurante.findMany({
      select: {
        id: true,
        nome: true,
        cardapio: true,
      },
    });

    res.status(200).json(data);
  } else if (req.method === "POST") {
    // create smth
    const restaurant = req.body;
    const { valid, errors } = validRestaurant(restaurant);

    if (valid) {
      const data = await create(restaurant);
      res.status(200).json(data);
    } else {
      res.status(400).json({ errors: errors });
    }
  }
}
