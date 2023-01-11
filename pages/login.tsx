import { Button } from '@chakra-ui/react';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Login() {
  const { data: session } = useSession();

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
      <Button onClick={() => signIn('google')}>Sign in Google</Button>
    </div>
  );
}
