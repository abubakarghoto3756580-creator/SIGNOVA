'use client';

import { motion } from 'motion/react';
import { Instagram, Facebook } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-signova-dark text-signova-white pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <span className="font-serif text-3xl tracking-widest text-signova-gold">Signova</span>
            </Link>
            <p className="text-signova-white/60 font-light leading-relaxed mb-8">
              Signova Aesthetic & Dental Studio — by M.F.S<br/>
              Your Beauty. Your Smile. Our Expertise.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/signovaofficial" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-signova-gold/20 flex items-center justify-center text-signova-gold hover:bg-signova-gold hover:text-signova-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-signova-gold/20 flex items-center justify-center text-signova-gold hover:bg-signova-gold hover:text-signova-white transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6 text-signova-white">Treatments</h4>
            <ul className="space-y-4 font-light text-signova-white/70">
              <li><a href="#services" className="hover:text-signova-gold transition-colors">Aesthetic & Skin Care</a></li>
              <li><a href="#services" className="hover:text-signova-gold transition-colors">Dental & Smile Design</a></li>
              <li><a href="#services" className="hover:text-signova-gold transition-colors">Physiotherapy</a></li>
              <li><a href="#services" className="hover:text-signova-gold transition-colors">Hijama Therapy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6 text-signova-white">Quick Links</h4>
            <ul className="space-y-4 font-light text-signova-white/70">
              <li><a href="#about" className="hover:text-signova-gold transition-colors">Our Story</a></li>
              <li><a href="#doctors" className="hover:text-signova-gold transition-colors">Specialists</a></li>
              <li><a href="#workshop" className="hover:text-signova-gold transition-colors">Upcoming Workshop</a></li>
              <li><a href="#testimonials" className="hover:text-signova-gold transition-colors">Patient Stories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6 text-signova-white">Newsletter</h4>
            <p className="text-signova-white/60 font-light mb-4 text-sm">Subscribe for exclusive offers and wellness tips.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-signova-white/5 border border-signova-gold/20 rounded-l-sm py-3 px-6 text-signova-white placeholder-signova-white/40 focus:outline-none focus:border-signova-gold transition-colors font-light"
              />
              <button className="bg-signova-gold text-signova-white px-6 rounded-r-sm font-medium hover:bg-signova-deep-gold transition-colors text-xs uppercase tracking-widest">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-signova-gold/20 flex flex-col md:flex-row justify-between items-center gap-4 text-signova-white/50 text-[10px] uppercase tracking-[0.2em] font-semibold">
          <p>&copy; {new Date().getFullYear()} Signova Aesthetic & Dental Studio. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-signova-gold transition-colors">Privacy</a>
            <a href="#" className="hover:text-signova-gold transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
