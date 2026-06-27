'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 border border-signova-gold rounded-full flex items-center justify-center">
            <span className="text-signova-gold font-serif text-xl">S</span>
          </div>
          <span className="font-serif text-2xl tracking-widest uppercase text-signova-brown">Signova</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-medium opacity-80">
          {['Home', 'About', 'Services', 'Doctors', 'Testimonials', 'Contact'].map((item, i) => (
            <Link key={item} href={`#${item.toLowerCase()}`} className={`text-signova-black hover:text-signova-gold transition-colors ${i === 0 ? 'border-b border-signova-gold pb-1' : ''}`}>
              {item}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="#appointment" className="px-6 py-2 border border-signova-gold text-signova-gold text-xs uppercase tracking-widest font-medium hover:bg-signova-gold hover:text-white transition-colors">
            Book Appointment
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button className="md:hidden text-signova-black" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-md absolute top-full left-0 w-full border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {['Home', 'About', 'Services', 'Doctors', 'Testimonials', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-lg font-medium text-signova-black hover:text-signova-gold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <a href="#appointment" className="bg-signova-black text-white px-6 py-3 rounded-full text-center mt-4">
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
