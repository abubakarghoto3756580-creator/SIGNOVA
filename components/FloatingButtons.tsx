'use client';

import { motion } from 'motion/react';
import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <motion.a
        href="tel:+92524352215"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="w-14 h-14 bg-signova-gold text-white rounded-full flex items-center justify-center shadow-lg hover:bg-signova-deep-gold hover:scale-110 transition-all duration-300"
      >
        <Phone size={24} />
      </motion.a>
      
      <motion.a
        href="https://wa.me/923098644429"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#20b858] hover:scale-110 transition-all duration-300 relative group"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75"></span>
        <MessageCircle size={28} className="relative z-10" />
      </motion.a>
    </div>
  );
}
