'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 overflow-hidden bg-signova-ivory relative">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-signova-cream rounded-l-full opacity-50 pointer-events-none -mr-[10%]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-signova-gold font-serif italic text-lg md:text-xl mb-4">Our Story</h4>
            <h2 className="text-5xl md:text-6xl font-serif leading-[1.1] text-signova-black mb-6">
              Redefining Healthcare <br /> <span className="italic font-light">With Elegance.</span>
            </h2>
            <div className="w-16 h-[1px] bg-signova-gold mb-8" />
            <p className="text-signova-black opacity-70 mb-6 text-lg leading-relaxed font-light">
              At Signova, we believe that medical care should not be intimidating. We have combined the clinical excellence of a world-class hospital with the luxury and comfort of a premium spa.
            </p>
            <p className="text-signova-black opacity-70 mb-10 text-lg leading-relaxed font-light">
              Our multidisciplinary team of experts in aesthetics, dentistry, and physiotherapy are dedicated to providing personalized care designed around your unique needs.
            </p>
            
            <a href="#about-us" className="inline-flex items-center gap-2 text-signova-black text-xs uppercase tracking-widest font-semibold border-b border-signova-gold pb-1 hover:text-signova-gold transition-colors">
              Discover Our Approach
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[600px] w-full rounded-t-[200px] rounded-b-[40px] overflow-hidden shadow-2xl border border-signova-beige">
              <Image
                src="https://picsum.photos/seed/about/800/1200"
                alt="Signova Clinic Interior"
                fill
                className="object-cover opacity-90 mix-blend-multiply"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-signova-cream/20 mix-blend-overlay" />
            </div>
            
            {/* Floating badge */}
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-signova-beige hidden md:block"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="font-serif text-5xl text-signova-gold mb-2">10+</div>
              <div className="text-signova-black opacity-70 font-semibold text-[10px] tracking-[0.2em] uppercase">Years of <br/> Excellence</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
