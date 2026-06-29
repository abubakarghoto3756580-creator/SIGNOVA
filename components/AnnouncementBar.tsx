'use client';
import { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          exit={{ y: -50 }}
          className="bg-signova-gold text-signova-dark relative z-[100] px-4 py-2 flex items-center justify-center overflow-hidden"
        >
          <div className="w-full text-center text-xs md:text-sm font-semibold tracking-wide whitespace-nowrap overflow-hidden">
            <span className="inline-block animate-marquee md:animate-none">
              ✦ Grand Opening Special — 50% OFF on All Treatments ✦ Book Now: <a href="tel:+923098644429" className="underline hover:text-white transition-colors">+92 309 8644429</a> ✦
            </span>
          </div>
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute right-4 text-signova-dark hover:text-white transition-colors"
          >
            <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
