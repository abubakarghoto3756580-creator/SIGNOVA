'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Sparkles, HeartPulse, ShieldCheck, User } from 'lucide-react';

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
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="font-cursive text-3xl md:text-4xl text-signova-gold mb-2">Our Story</h4>
            <h2 className="text-4xl md:text-6xl font-serif leading-[1.1] text-signova-dark mb-6">
              Redefining Healthcare <br /> <span className="italic text-signova-deep-gold">With Elegance</span>
            </h2>
            <div className="w-24 h-[1px] bg-signova-gold mb-8" />
            <p className="text-signova-dark opacity-80 mb-10 text-lg leading-relaxed font-light">
              At Signova, we believe medical care should be comfortable, dignified, and results-driven. Founded by M.F.S, our multidisciplinary team of experts combines clinical excellence with the warmth of luxury hospitality — right here in Sialkot.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {features.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-signova-gold/10 flex items-center justify-center text-signova-gold shrink-0 border border-signova-gold/20">
                      <Icon size={18} strokeWidth={1.5} />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider opacity-80">{item.text}</span>
                  </div>
                );
              })}
            </div>
            
            <a href="#about" className="inline-flex items-center gap-2 text-signova-dark text-xs uppercase tracking-widest font-semibold border-b border-signova-gold pb-1 hover:text-signova-gold transition-colors">
              Discover Our Approach
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative h-[600px] w-full max-w-md rounded-2xl overflow-hidden shadow-2xl border border-signova-gold/20">
              <Image
                src="https://i.postimg.cc/wvxXjmrc/Clinic-reception-interior-Pakistan-202607010026-3.jpg"
                alt="Signova Clinic Interior"
                fill
                className="object-cover object-top"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-signova-dark/60 via-transparent to-transparent mix-blend-overlay" />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-56 rounded-xl overflow-hidden shadow-lg border border-signova-gold/20">
              <Image
                src="https://i.postimg.cc/wvxXjmrc/Clinic-reception-interior-Pakistan-202607010026-3.jpg"
                alt="Signova Reception"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-center text-xs uppercase tracking-widest text-signova-dark/70 font-semibold mt-3">Reception</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="relative h-56 rounded-xl overflow-hidden shadow-lg border border-signova-gold/20">
              <Image
                src="https://i.postimg.cc/sDGpxyTm/Clinic-treatment-room-interior-202607010026-2.jpg"
                alt="Signova Treatment Room"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-center text-xs uppercase tracking-widest text-signova-dark/70 font-semibold mt-3">Treatment Room</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
