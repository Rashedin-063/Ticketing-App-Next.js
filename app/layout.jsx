import { Inter } from 'next/font/google';
import '@/app/global.css'
import Nav from './(components)/Nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Ticketing App",
  description: "Built with Next.js 15",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} antialiased bg-page`}>
        <div className='flex flex-col min-h-screen mx-8 xl:mx-16'>
          <Nav />

          <div className='flex-grow overflow-y-auto  text-default-text'>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
