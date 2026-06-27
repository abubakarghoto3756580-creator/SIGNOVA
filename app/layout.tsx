import type {Metadata} from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });

export const metadata: Metadata = {
  title: 'Signova | Luxury Aesthetic & Dental Clinic',
  description: 'Premium Aesthetic, Dental, and Physiotherapy Clinic.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="font-sans bg-[#F8F3EC] text-[#2B2118] antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
