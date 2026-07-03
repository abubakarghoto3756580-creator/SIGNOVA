import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Services from '@/components/Services';
import Pricing from '@/components/Pricing';
import BeforeAfter from '@/components/BeforeAfter';
import Doctors from '@/components/Doctors';
import WhyChooseUs from '@/components/WhyChooseUs';
import Workshop from '@/components/Workshop';
import FAQ from '@/components/FAQ';
import Testimonials from '@/components/Testimonials';
import Appointment from '@/components/Appointment';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import MobileBottomBar from '@/components/MobileBottomBar';

export default function Home() {
  return (
    <main className="min-h-screen relative pb-20 md:pb-0 overflow-x-hidden w-full max-w-full">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Pricing />
      <BeforeAfter />
      <Doctors />
      <WhyChooseUs />
      <Workshop />
      <FAQ />
      <Testimonials />
      <Appointment />
      <Contact />
      <Footer />
      <MobileBottomBar />
    </main>
  );
}
