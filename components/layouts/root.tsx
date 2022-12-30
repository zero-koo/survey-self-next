import { ReactElement } from 'react';
import RootHeader from './root-header';

export default function RootLayout({ children }: { children: ReactElement }) {
  return (
    <>
      <RootHeader />
      <main>{children}</main>
    </>
  );
}
