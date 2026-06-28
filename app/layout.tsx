import type {Metadata} from 'next';
import { Inter, Cormorant_Garamond, Great_Vibes } from 'next/font/google';
import './globals.css';
import FloatingButtons from '@/components/FloatingButtons';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const cormorant = Cormorant_Garamond({ weight: ['300', '400', '500', '600', '700'], subsets: ['latin'], variable: '--font-serif' });
const greatVibes = Great_Vibes({ weight: ['400'], subsets: ['latin'], variable: '--font-cursive' });

export const metadata: Metadata = {
  title: "Signova Aesthetic & Dental Studio | Sialkot's Premier Luxury Clinic",
  description: "Signova by M.F.S — Sialkot's luxury aesthetic, dental and physiotherapy studio. Expert care by Dr. Fatima Maqbool & Dr. Muhammad Abubakar. Book now: +92 309 8644429",
  keywords: "signova, aesthetic clinic sialkot, dental studio sialkot, physiotherapy sialkot, hijama sialkot, Dr Fatima Maqbool",
  openGraph: {
    title: "Signova Aesthetic & Dental Studio — Sialkot",
    description: "Your Beauty. Your Smile. Our Expertise. Book your appointment today.",
  }
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} ${greatVibes.variable} scroll-smooth`}>
      <body className="font-sans bg-signova-ivory text-signova-dark antialiased" suppressHydrationWarning>
        {children}
        <FloatingButtons />
      </body>
    </html>
  );
}
