'use client';

import { motion } from 'motion/react';
import { ShieldCheck, Microscope, HeartHandshake, Sparkles } from 'lucide-react';
import Image from 'next/image';

const features = [
  { id: 1, title: 'Internationally Certified', icon: ShieldCheck, desc: 'Our practitioners hold global certifications and adhere to international standards.' },
  { id: 2, title: 'Modern Technology', icon: Microscope, desc: 'Equipped with the latest, FDA-approved medical and aesthetic technology.' },
  { id: 3, title: 'Exceptional Care', icon: HeartHandshake, desc: 'A patient-first approach ensuring comfort, privacy, and safety.' },
  { id: 4, title: 'Luxury Environment', icon: Sparkles, desc: 'A serene, spa-like clinic designed to make you feel relaxed from the moment you step in.' },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-signova-black text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-[url('https://picsum.photos/seed/pattern/1000/1000')] opacity-5 mix-blend-overlay pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-signova-gold font-serif italic text-lg md:text-xl mb-4"
            >
              Why Signova
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-serif leading-[1.1] mb-12"
            >
              The Gold Standard <br/><span className="italic font-light">in Medical Care.</span>
            </motion.h2>

            <div className="space-y-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div 
                    key={feature.id}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-signova-gold/10 flex items-center justify-center text-signova-gold border border-signova-gold/20">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif mb-2 text-white">{feature.title}</h3>
                      <p className="text-white/60 font-light leading-relaxed">{feature.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-t-[200px] rounded-b-[40px] overflow-hidden border border-signova-gold/20"
          >
            <Image
              src="https://picsum.photos/seed/clinic-equipment/800/1000"
              alt="Signova Advanced Equipment"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-signova-gold/10 mix-blend-overlay" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
