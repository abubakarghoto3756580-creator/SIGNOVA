'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Sparkles, Activity, Droplets, Smile, Zap, Heart } from 'lucide-react';
import { fadeUp, staggerContainer, viewportOnce, EASE } from '@/lib/animations';
import aestheticImg from '../src/assets/images/aesthetic-facial-new.jpg';
import massageImg from '../src/assets/images/massage_wellness_1783107041050.jpg';
import physioImg from '../src/assets/images/physiotherapy-new.jpg';

const services = [
  { id: 1, title: 'Dental & Smile Design', description: 'Scaling, polishing, implants, orthodontics, teeth whitening', image: 'https://i.postimg.cc/SNYWRqgT/Dentist-cleaning-patient-teeth-202607010026-4.jpg', icon: Smile },
  { id: 2, title: 'Aesthetic & Skin Care', description: 'Hydra Facial, Classic Facial, anti-aging treatments, skin resurfacing', image: aestheticImg, icon: Sparkles },
  { id: 3, title: 'Physiotherapy', description: 'Back pain, stroke recovery, muscle strengthening, post-op rehab', image: physioImg, icon: Activity },
  { id: 4, title: 'Hijama Therapy', description: 'Wet & dry cupping, detox, immunity boost, pain management', image: 'https://i.postimg.cc/rFRSscfJ/Therapist-performing-hijama-on-p-202607010026-2.jpg', icon: Droplets },
  { id: 5, title: 'EMS Training', description: 'Electric Muscle Stimulation for fitness and recovery', image: 'https://i.postimg.cc/Kzs9T2CD/file-00000000fc2c7206bf6caf81a7bad3da.png', icon: Zap },
  { id: 6, title: 'Massage & Wellness', description: 'Full Body Muscle Relaxation, Deep Tissue Massage', image: massageImg, icon: Heart },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-signova-ivory border-t border-signova-gold/10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, ease: EASE }}
            className="font-cursive text-3xl md:text-4xl text-signova-gold mb-2"
          >
            Our Expertise
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="text-4xl md:text-6xl font-serif leading-[1.1] text-signova-dark mb-6"
          >
            Bespoke Treatments
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
            className="flex justify-center"
          >
            <div className="w-24 h-[1px] bg-signova-gold mb-6" />
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.12)}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={fadeUp}
                whileHover={{ y: -8, transition: { duration: 0.35, ease: EASE } }}
                className="group relative bg-signova-white rounded-sm flex flex-col transition-shadow duration-500 border border-transparent hover:border-signova-gold hover:shadow-[0_20px_40px_rgba(200,163,106,0.18)]"
              >
                <div className="relative w-full aspect-[4/3] rounded-t-sm bg-signova-ivory border-b border-signova-gold/10 overflow-hidden">
                  {service.image ? (
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover rounded-t-sm transition-transform duration-700 ease-out group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-signova-gold/20">
                      <Icon size={48} strokeWidth={1} />
                    </div>
                  )}
                  <motion.div
                    whileHover={{ scale: 1.12, rotate: 6 }}
                    transition={{ duration: 0.3, ease: EASE }}
                    className="absolute -bottom-6 left-6 w-12 h-12 rounded-full bg-signova-gold flex items-center justify-center text-white border-2 border-signova-white shadow-md"
                  >
                    <Icon size={20} strokeWidth={1.5} />
                  </motion.div>
                </div>
                
                <div className="p-8 pt-10 flex flex-col">
                  <h3 className="font-serif text-2xl text-signova-dark mb-3">{service.title}</h3>
                  <p className="text-sm opacity-70 leading-relaxed text-signova-dark mb-5 line-clamp-2">
                    {service.description}
                  </p>
                  
                  <a href="#appointment" className="text-xs uppercase tracking-[0.2em] font-semibold text-signova-gold flex items-center gap-2 w-max group-hover:text-signova-deep-gold">
                    Explore <span className="text-lg group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
