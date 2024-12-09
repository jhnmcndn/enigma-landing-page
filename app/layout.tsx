import type { Metadata } from 'next';
import { inter } from '@/styles/fonts/fonts';
import Header from '@/components/Header';
import './globals.css';

export const metadata: Metadata = {
  title: 'Enigma',
  description: 'Generated by create next app',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='en'>
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
