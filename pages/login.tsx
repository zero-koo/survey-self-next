import { Button, Input } from '@chakra-ui/react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useState } from 'react';

export default function Login() {
  const { data: session } = useSession();

  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  async function handleSignInCredentials() {
    await signIn('credentials', {
      redirect: false,
      ...userData,
    });
  }

  if (session) {
    return (
      <div>
        <p>Welcome, {session.user?.email}</p>
        <Button onClick={() => signOut()}>Sign out</Button>
      </div>
    );
  }

  return (
    <div>
      <Input
        value={userData.email}
        onChange={(e) => setUserData((data) => ({ ...data, email: e.target.value }))}
        placeholder="email"
      />
      <Input
        value={userData.password}
        onChange={(e) => setUserData((data) => ({ ...data, password: e.target.value }))}
        placeholder="password"
      />
      <Button onClick={handleSignInCredentials}>로그인</Button>
      <Button onClick={() => signIn('google')}>Sign in Google</Button>
    </div>
  );
}
