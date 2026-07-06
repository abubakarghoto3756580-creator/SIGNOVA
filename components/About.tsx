'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Sparkles, HeartPulse, ShieldCheck, User } from 'lucide-react';
import { EASE, fadeUp, staggerContainer, viewportOnce } from '@/lib/animations';
import receptionImg from '../src/assets/images/clinic-reception-new.jpg';

const features = [
  { icon: Sparkles, text: 'Advanced Aesthetic Care' },
  { icon: HeartPulse, text: 'Expert Dental Care' },
  { icon: ShieldCheck, text: 'Safe & Hygienic' },
  { icon: User, text: 'Personalized for You' },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 overflow-hidden bg-signova-ivory relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-signova-cream rounded-l-full opacity-50 pointer-events-none -mr-[10%]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h4 className="font-cursive text-3xl md:text-4xl text-signova-gold mb-2">Our Story</h4>
            <h2 className="text-4xl md:text-6xl font-serif leading-[1.1] text-signova-dark mb-6">
              Redefining Healthcare <br /> <span className="italic text-signova-deep-gold">With Elegance</span>
            </h2>
            <div className="w-24 h-[1px] bg-signova-gold mb-8" />
            <p className="text-signova-dark opacity-80 mb-10 text-lg leading-relaxed font-light">
              At Signova, we believe medical care should be comfortable, dignified, and results-driven. Founded by M.F.S, our multidisciplinary team of experts combines clinical excellence with the warmth of luxury hospitality — right here in Sialkot.
            </p>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={staggerContainer(0.1, 0.2)}
              className="grid grid-cols-2 gap-6 mb-10"
            >
              {features.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div key={i} variants={fadeUp} className="flex items-center gap-3">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 8 }}
                      transition={{ duration: 0.3, ease: EASE }}
                      className="w-10 h-10 rounded-full bg-signova-gold/10 flex items-center justify-center text-signova-gold shrink-0 border border-signova-gold/20"
                    >
                      <Icon size={18} strokeWidth={1.5} />
                    </motion.div>
                    <span className="text-xs font-semibold uppercase tracking-wider opacity-80">{item.text}</span>
                  </motion.div>
                );
              })}
            </motion.div>
            
            <a href="#about" className="inline-flex items-center gap-2 text-signova-dark text-xs uppercase tracking-widest font-semibold border-b border-signova-gold pb-1 hover:text-signova-gold transition-colors duration-300">
              Discover Our Approach
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, ease: EASE }}
            className="relative flex justify-center"
          >
            <div className="relative h-[600px] w-full max-w-md rounded-2xl overflow-hidden shadow-2xl border border-signova-gold/20 group">
              <Image
                src={receptionImg}
                alt="Signova Clinic Reception"
                fill
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-signova-dark/60 via-transparent to-transparent mix-blend-overlay" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
