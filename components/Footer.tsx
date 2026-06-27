'use client';

import { motion } from 'motion/react';
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-signova-ivory text-signova-black pt-24 pb-12 border-t border-signova-beige">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 border border-signova-gold rounded-full flex items-center justify-center">
                <span className="text-signova-gold font-serif text-xl">S</span>
              </div>
              <span className="font-serif text-2xl tracking-widest uppercase text-signova-brown">Signova</span>
            </Link>
            <p className="text-signova-black opacity-60 font-light leading-relaxed mb-8">
              The pinnacle of luxury medical care, combining world-class aesthetic, dental, and physiotherapy treatments.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-signova-beige flex items-center justify-center text-signova-black hover:bg-signova-gold hover:text-white transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6 text-signova-black">Treatments</h4>
            <ul className="space-y-4 font-light text-signova-black opacity-70">
              <li><a href="#" className="hover:text-signova-gold transition-colors">Aesthetic & Skin Care</a></li>
              <li><a href="#" className="hover:text-signova-gold transition-colors">Dental & Smile Design</a></li>
              <li><a href="#" className="hover:text-signova-gold transition-colors">Physiotherapy</a></li>
              <li><a href="#" className="hover:text-signova-gold transition-colors">Hijama Therapy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6 text-signova-black">Quick Links</h4>
            <ul className="space-y-4 font-light text-signova-black opacity-70">
              <li><a href="#about" className="hover:text-signova-gold transition-colors">Our Story</a></li>
              <li><a href="#doctors" className="hover:text-signova-gold transition-colors">Specialists</a></li>
              <li><a href="#testimonials" className="hover:text-signova-gold transition-colors">Patient Reviews</a></li>
              <li><a href="#contact" className="hover:text-signova-gold transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6 text-signova-black">Newsletter</h4>
            <p className="text-signova-black opacity-60 font-light mb-4">Subscribe for exclusive offers and wellness tips.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-white border border-signova-beige rounded-l-full py-3 px-6 text-signova-black placeholder-signova-black/40 focus:outline-none focus:border-signova-gold transition-colors"
              />
              <button className="bg-signova-gold text-white px-6 rounded-r-full font-medium hover:bg-signova-gold/90 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-signova-beige flex flex-col md:flex-row justify-between items-center gap-4 text-signova-black opacity-60 text-[10px] uppercase tracking-[0.2em] font-semibold">
          <p>&copy; {new Date().getFullYear()} Signova Aesthetic & Dental. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-signova-gold transition-colors">Privacy</a>
            <a href="#" className="hover:text-signova-gold transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
