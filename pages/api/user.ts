import { NextApiRequest, NextApiResponse } from 'next';
import { Prisma, PrismaClient } from '@prisma/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const prisma = new PrismaClient();

  const { body, method } = req;

  try {
    switch (method) {
      case 'POST': {
        const { name, email, password } = JSON.parse(body) as {
          [key: string]: string;
        };

        if (!name || !email || !password) {
          res.status(400).json({ error: 'Missing required data!' });
          return;
        }

        try {
          const { id } = await prisma.user.create({
            data: {
              name,
              email,
              password,
            },
          });
          res.status(200).json({ id, name, email });
        } catch (e) {
          if (e instanceof Prisma.PrismaClientKnownRequestError) {
            const [duplecated] = e.meta?.target as string[];
            if (e.code === 'P2002') {
              res.status(409).json({ error: `This ${duplecated} has already been registered.` });
            }
          }
        }
        return;
      }
      default: {
        throw Error;
      }
    }
  } catch (e) {
    res.status(500).json({ error: 'Request failed!' });
  } finally {
    prisma.$disconnect();
  }
}
