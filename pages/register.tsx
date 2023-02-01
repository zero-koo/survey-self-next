import { Button, Input } from '@chakra-ui/react';
import { useState } from 'react';
import BaseContainer from '../components/layouts/base-container';

export default function Register() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  function handleCreateUser() {
    if (!email || !name || !password) return;
    fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
    });
  }

  return (
    <BaseContainer as="form">
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={'이메일'}
      ></Input>
      <Input value={name} onChange={(e) => setName(e.target.value)} placeholder={'이름'}></Input>
      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder={'비밀번호'}
        type={'password'}
      ></Input>
      <Button type="button" onClick={handleCreateUser}>
        create user
      </Button>
    </BaseContainer>
  );
}
