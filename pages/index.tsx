import { Button, Input } from '@chakra-ui/react';
import { PrismaClient } from '@prisma/client';
import { useEffect, useState } from 'react';
import BaseContainer from '../components/layouts/base-container';
import SurveyCardList from '../components/survey-card-list';

export default function Home({ users }: { users: any[] }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleCreateUser() {
    if (!name || !email) return;
    fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({ name, email }),
    });
  }

  useEffect(() => {
    console.log(users);
  }, []);
  return (
    <BaseContainer>
      <Input value={name} onChange={(e) => setName(e.target.value)}></Input>
      <Input value={email} onChange={(e) => setEmail(e.target.value)}></Input>
      <Button onClick={handleCreateUser}>create user</Button>
      <SurveyCardList />
    </BaseContainer>
  );
}

export async function getStaticProps() {
  const prisma = new PrismaClient();
  const users = await prisma.user.findMany();

  console.log('users getStaticProps', users);

  return {
    props: { users },
  };
}
