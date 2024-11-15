import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Navbar, Footer } from '@/app/components/Layout/index';
import Landing from './components/landing';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

const montaguSlab = localFont({
  src: '../app/fonts/MontaguSlab_24pt-Regular.ttf',
  variable: '--font-montagu-slab',
  weight: '400',
});

const montserrat = localFont({
  src: '../app/fonts/Montserrat-VariableFont_wght.ttf',
  variable: '--font-montserrat',
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Realtor',
  description: 'Manage your properties',
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montaguSlab.variable} ${montserrat.variable} antialiased`}
      >
        <Navbar />
        <Landing />
        <Footer />
      </body>
    </html>
  );
}
