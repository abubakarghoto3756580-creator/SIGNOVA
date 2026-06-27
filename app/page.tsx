import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Services from '@/components/Services';
import Doctors from '@/components/Doctors';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import Appointment from '@/components/Appointment';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Doctors />
      <WhyChooseUs />
      <Testimonials />
      <Appointment />
      <Contact />
      <Footer />
    </main>
  );
}
