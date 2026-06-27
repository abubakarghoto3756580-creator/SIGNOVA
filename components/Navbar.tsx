'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const links = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Doctors', href: '#doctors' },
  { name: 'Results', href: '#results' },
  { name: 'Workshop', href: '#workshop' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-signova-ivory/80 backdrop-blur-xl shadow-sm py-4 border-b border-signova-gold/20' : 'bg-transparent py-6'}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <Link href="#home" className="flex flex-col">
            <span className={`font-serif text-3xl leading-none tracking-wide ${scrolled ? 'text-signova-dark' : 'text-signova-white'}`}>
              Signova
            </span>
            <span className={`text-[10px] uppercase tracking-widest mt-1 ${scrolled ? 'text-signova-gold' : 'text-signova-gold'}`}>
              Aesthetic & Dental Studio
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                className={`text-xs uppercase tracking-widest font-medium transition-colors hover:text-signova-gold ${scrolled ? 'text-signova-dark' : 'text-signova-white'}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href="#appointment" className="bg-signova-gold text-white px-6 py-3 rounded-sm text-xs uppercase tracking-widest font-medium hover:bg-signova-deep-gold transition-colors shadow-lg hover:shadow-signova-gold/30">
              Book Appointment
            </a>
          </div>

          {/* Mobile Nav Toggle */}
          <button className={`lg:hidden ${scrolled ? 'text-signova-dark' : 'text-signova-white'}`} onClick={() => setMobileMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </motion.header>

      {/* Mobile Full Screen Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-signova-dark flex flex-col justify-center items-center"
          >
            <button 
              className="absolute top-6 right-6 text-signova-gold"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={36} />
            </button>
            <div className="flex flex-col items-center gap-8 text-center">
              {links.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="font-serif text-4xl text-signova-ivory hover:text-signova-gold transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a 
                href="#appointment" 
                className="mt-8 border border-signova-gold text-signova-gold px-8 py-4 text-sm uppercase tracking-widest font-medium hover:bg-signova-gold hover:text-signova-dark transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
