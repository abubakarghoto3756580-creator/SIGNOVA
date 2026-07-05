import type {Metadata} from 'next';
import { Inter, Cormorant_Garamond, Great_Vibes } from 'next/font/google';
import './globals.css';
import FloatingButtons from '@/components/FloatingButtons';
import ProgressBar from '@/components/ProgressBar';
import AnnouncementBar from '@/components/AnnouncementBar';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const cormorant = Cormorant_Garamond({ weight: ['300', '400', '500', '600', '700'], subsets: ['latin'], variable: '--font-serif', display: 'swap' });
const greatVibes = Great_Vibes({ weight: ['400'], subsets: ['latin'], variable: '--font-cursive', display: 'swap' });

export const metadata: Metadata = {
  title: "Signova Aesthetic & Dental Studio | Sialkot's #1 Luxury Clinic",
  description: "Signova by M.F.S — Sialkot's premium aesthetic, dental & physiotherapy clinic. Expert care by Dr. Fatima Maqbool (Gold Medalist) & Dr. Muhammad Abubakar. 50% OFF Grand Opening. Book: +92 309 8644429",
  keywords: "signova, aesthetic clinic sialkot, dental studio sialkot, physiotherapy sialkot, hijama sialkot, cupping therapy sialkot, Dr Fatima Maqbool, skin care sialkot, EMS training sialkot, best clinic sialkot",
  authors: [{ name: "Signova Aesthetic & Dental Studio by M.F.S" }],
  robots: "index, follow",
  openGraph: {
    title: "Signova Aesthetic & Dental Studio — Sialkot",
    description: "Your Beauty. Your Smile. Our Expertise. Sialkot's premier luxury medical studio. Grand Opening — 50% OFF!",
    url: "https://updatedsignova-lac.vercel.app/",
    siteName: "Signova Aesthetic & Dental Studio",
    locale: "en_PK",
  },
  twitter: {
    card: "summary_large_image",
    title: "Signova Aesthetic & Dental Studio | Sialkot",
    description: "Your Beauty. Your Smile. Our Expertise. Book your appointment today.",
  }
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} ${greatVibes.variable} scroll-smooth`}>
      <head>
        {/* === PHASE 4: SEO TAGS === */}
        <meta property="og:type" content="business.business" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              "name": "Signova Aesthetic & Dental Studio",
              "alternateName": "Signova by M.F.S",
              "description": "Sialkot's premier luxury aesthetic, dental and physiotherapy clinic",
              "url": "https://updatedsignova-lac.vercel.app/",
              "telephone": ["+92-52-4352215", "+92-309-8644429", "+92-309-8644449"],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1st Floor, Tariq Square, Kashmir Road, opposite Superior College, Pakka Garha Ghumman",
                "addressLocality": "Sialkot",
                "addressRegion": "Punjab",
                "addressCountry": "PK"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "32.4945",
                "longitude": "74.5229"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                  "opens": "16:00",
                  "closes": "22:00",
                  "description": "Dental Department"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
                  "opens": "17:00",
                  "closes": "21:00",
                  "description": "Physiotherapy"
                }
              ],
              "sameAs": [
                "https://instagram.com/signovaofficial",
                "https://facebook.com/signovaofficial"
              ],
              "medicalSpecialty": ["Dentistry", "PhysicalTherapy", "Dermatology"]
            })
          }}
        />
      </head>
      <body className="font-sans bg-signova-ivory text-signova-dark antialiased overflow-x-hidden w-full max-w-full" suppressHydrationWarning>
        {/* === PHASE 5: PROGRESS BAR === */}
        <ProgressBar />
        
        {/* === PHASE 5: ANNOUNCEMENT BAR === */}
        <AnnouncementBar />
        
        {children}
        <FloatingButtons />
      </body>
    </html>
  );
}
