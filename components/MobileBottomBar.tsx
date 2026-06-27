'use client';

import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function MobileBottomBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down a bit
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="md:hidden fixed bottom-4 left-4 right-4 z-50 flex items-center justify-between bg-white/95 backdrop-blur-xl border border-signova-gold/20 p-2 rounded-full shadow-2xl"
        >
          <a href="tel:+92524352215" className="flex-1 flex flex-col items-center justify-center p-2 text-signova-dark hover:text-signova-gold transition-colors">
            <Phone size={20} className="mb-1" />
            <span className="text-[9px] uppercase tracking-widest font-semibold">Call</span>
          </a>
          
          <div className="w-[1px] h-8 bg-signova-gold/20"></div>
          
          <a href="https://wa.me/923098644429" target="_blank" rel="noopener noreferrer" className="flex-1 flex flex-col items-center justify-center p-2 text-signova-dark hover:text-[#25D366] transition-colors">
            <MessageCircle size={20} className="mb-1" />
            <span className="text-[9px] uppercase tracking-widest font-semibold">WhatsApp</span>
          </a>

          <div className="w-[1px] h-8 bg-signova-gold/20"></div>
          
          <a href="#appointment" className="flex-[1.5] bg-signova-gold text-white rounded-full flex items-center justify-center gap-2 py-3 px-4 shadow-[0_5px_15px_rgba(200,163,106,0.3)]">
            <Calendar size={16} />
            <span className="text-[10px] uppercase tracking-widest font-semibold whitespace-nowrap">Book Now</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
