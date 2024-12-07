import { Inter } from 'next/font/google';
import '@/app/global.css'

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Ticketing App",
  description: "Built with Next.js 15",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
