'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

// Simple decorative leaf SVG component
const Leaf = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" opacity="0.3"/>
    <path d="M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4ZM12 18C8.69 18 6 15.31 6 12C6 8.69 8.69 6 12 6C15.31 6 18 8.69 18 12C18 15.31 15.31 18 12 18Z" opacity="0.5"/>
    <path d="M12 2C8.69 2 6 8.69 6 12C6 15.31 8.69 22 12 22C15.31 22 18 15.31 18 12C18 8.69 15.31 2 12 2Z"/>
  </svg>
);

const LEAVES = [
  { x: 27.79, opacity: 0.17, w: 18, h: 18 },
  { x: 46.04, opacity: 0.26, w: 17, h: 10 },
  { x: 60.02, opacity: 0.28, w: 17, h: 14 },
  { x: 25.43, opacity: 0.20, w: 18, h: 16 },
  { x: 83.27, opacity: 0.18, w: 15, h: 11 },
  { x: 99.99, opacity: 0.21, w: 16, h: 18 },
];

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(160deg, #2B1A0E, #3D2A1A, #4A3020)' }}>
      {/* Floating Leaves */}
      <div suppressHydrationWarning className="absolute inset-0 overflow-hidden pointer-events-none">
        {LEAVES.map((leaf, i) => (
          <motion.div
            key={i}
            className="absolute text-signova-gold"
            initial={{ 
              y: '110vh', 
              x: `${leaf.x}vw`,
              rotate: 0,
              opacity: leaf.opacity
            }}
            animate={{ 
              y: '-10vh',
              x: `${(leaf.x + 10) % 100}vw`,
              rotate: 360 
            }}
            transition={{ 
              duration: 15 + (i * 2), 
              repeat: Infinity, 
              ease: "linear",
              delay: i * 1.5
            }}
          >
            <Leaf className={`w-${leaf.w} h-${leaf.h}`} />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
        {/* Grand Opening Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-block px-6 py-2 rounded-full border border-signova-gold/50 bg-signova-gold/10 backdrop-blur-sm shadow-[0_0_15px_rgba(200,163,106,0.3)]">
            <span className="text-signova-gold text-xs font-bold uppercase tracking-[0.2em]">Grand Opening — 50% OFF</span>
          </div>
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-cursive text-4xl md:text-5xl text-signova-gold mb-4"
        >
          Welcome to Signova
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-signova-white tracking-tight leading-[1.1] mb-2"
        >
          Your Beauty. Your Smile.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-4xl md:text-6xl font-serif italic text-signova-gold mb-8"
        >
          Our Expertise.
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-signova-ivory/80 font-light tracking-wide mb-12 max-w-2xl"
        >
          Sialkot&apos;s Premier Luxury Aesthetic & Dental Studio
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <a href="#appointment" className="bg-signova-gold text-white px-10 py-4 rounded-sm text-sm uppercase tracking-[0.2em] font-semibold shadow-[0_0_20px_rgba(200,163,106,0.4)] transition-all hover:scale-105 hover:bg-signova-deep-gold">
            Book Appointment →
          </a>
          <a href="#services" className="px-10 py-4 rounded-sm border border-signova-gold text-signova-gold text-sm uppercase tracking-[0.2em] font-semibold transition-all hover:bg-signova-gold/10">
            Explore Services
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-signova-ivory/50">Scroll</span>
        <motion.div 
          className="w-[1px] h-16 bg-gradient-to-b from-signova-gold to-transparent"
          animate={{ height: [0, 64, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
