import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Providers from './Providers';
import Navbar from '@/components/Navbar';
import SearchBox from '@/components/SearchBox';
import Footer from '@/components/Footer';
import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'WatchMe.',
  description: 'A simple web app for a movies overview',
};

export default function RootLayout({ children }) {
  return (
    <Suspense>
      <html lang="en">
        <body className={inter.className}>
          <Providers>
            <Header />
            <Navbar />
            <SearchBox />
            {children}
            <Footer />
          </Providers>
        </body>
      </html>
    </Suspense>
  );
}
