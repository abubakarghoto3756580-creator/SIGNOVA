'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const services = [
  { id: 1, title: 'Dental & Smile Design', description: 'Scaling, polishing, implants, orthodontics, teeth whitening', image: 'https://i.postimg.cc/SNYWRqgT/Dentist-cleaning-patient-teeth-202607010026-4.jpg' },
  { id: 2, title: 'Aesthetic & Skin Care', description: 'Hydra Facial, Classic Facial, anti-aging treatments, skin resurfacing', image: 'https://i.postimg.cc/P5G18cck/Woman-receiving-hydrafacial-trea-202607010026.jpg' },
  { id: 3, title: 'Physiotherapy', description: 'Back pain, stroke recovery, muscle strengthening, post-op rehab', image: '/images/services/physiotherapy.jpg' },
  { id: 4, title: 'Hijama Therapy', description: 'Wet & dry cupping, detox, immunity boost, pain management', image: 'https://i.postimg.cc/rFRSscfJ/Therapist-performing-hijama-on-p-202607010026-2.jpg' },
  { id: 5, title: 'EMS Training', description: 'Electric Muscle Stimulation for fitness and recovery', image: 'https://i.postimg.cc/Kzs9T2CD/file-00000000fc2c7206bf6caf81a7bad3da.png' },
  { id: 6, title: 'Massage & Wellness', description: 'Full Body Muscle Relaxation, Deep Tissue Massage', image: 'https://i.postimg.cc/mrBMm9B5/Therapeutic-massage-in-spa-clinic-202607010026-2.jpg' },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-signova-ivory border-t border-signova-gold/10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-cursive text-3xl md:text-4xl text-signova-gold mb-2"
          >
            Our Expertise
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif leading-[1.1] text-signova-dark mb-6"
          >
            Bespoke Treatments
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="w-24 h-[1px] bg-signova-gold mb-6" />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative bg-signova-white rounded-sm p-8 flex flex-col transition-all duration-300 border border-transparent hover:border-signova-gold hover:shadow-[0_15px_30px_rgba(200,163,106,0.15)]"
              >
                <div className="relative w-16 h-16 rounded-full bg-signova-ivory flex items-center justify-center text-signova-gold mb-6 border border-signova-gold/20 overflow-hidden shadow-sm">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <h3 className="font-serif text-2xl text-signova-dark mb-3">{service.title}</h3>
                <p className="text-sm opacity-70 leading-relaxed text-signova-dark mb-6 flex-grow">
                  {service.description}
                </p>
                
                <a href="#appointment" className="text-xs uppercase tracking-[0.2em] font-semibold text-signova-gold flex items-center gap-2 mt-auto w-max group-hover:text-signova-deep-gold">
                  Explore <span className="text-lg group-hover:translate-x-2 transition-transform">→</span>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
