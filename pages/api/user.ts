import { NextApiRequest, NextApiResponse } from 'next';

import { PrismaClient } from '@prisma/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const prisma = new PrismaClient();

  const { body, method } = req;

  try {
    if (method === 'POST') {
      const { name, email } = JSON.parse(body) as {
        [key: string]: string;
      };

      console.log('body', body);

      const { id } = await prisma.user.create({
        data: {
          name,
          email,
        },
      });

      res.status(200).json({ id, name, email });
    }
  } finally {
    prisma.$disconnect();
  }
}
