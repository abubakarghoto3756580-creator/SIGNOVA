'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Sparkles, Activity, Droplets, Smile, Zap, Heart } from 'lucide-react';

const services = [
  { id: 1, title: 'Dental & Smile Design', description: 'Scaling, polishing, implants, orthodontics, teeth whitening', image: 'https://i.postimg.cc/SNYWRqgT/Dentist-cleaning-patient-teeth-202607010026-4.jpg', icon: Smile },
  { id: 2, title: 'Aesthetic & Skin Care', description: 'Hydra Facial, Classic Facial, anti-aging treatments, skin resurfacing', image: 'https://i.postimg.cc/P5G18cck/Woman-receiving-hydrafacial-trea-202607010026.jpg', icon: Sparkles },
  { id: 3, title: 'Physiotherapy', description: 'Back pain, stroke recovery, muscle strengthening, post-op rehab', image: '', icon: Activity },
  { id: 4, title: 'Hijama Therapy', description: 'Wet & dry cupping, detox, immunity boost, pain management', image: 'https://i.postimg.cc/rFRSscfJ/Therapist-performing-hijama-on-p-202607010026-2.jpg', icon: Droplets },
  { id: 5, title: 'EMS Training', description: 'Electric Muscle Stimulation for fitness and recovery', image: 'https://i.postimg.cc/Kzs9T2CD/file-00000000fc2c7206bf6caf81a7bad3da.png', icon: Zap },
  { id: 6, title: 'Massage & Wellness', description: 'Full Body Muscle Relaxation, Deep Tissue Massage', image: 'https://i.postimg.cc/mrBMm9B5/Therapeutic-massage-in-spa-clinic-202607010026-2.jpg', icon: Heart },
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
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative bg-signova-white rounded-sm flex flex-col transition-all duration-300 border border-transparent hover:border-signova-gold hover:shadow-[0_15px_30px_rgba(200,163,106,0.15)]"
              >
                <div className="relative w-full h-44 rounded-t-sm bg-signova-ivory border-b border-signova-gold/10">
                  {service.image ? (
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover rounded-t-sm"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-signova-gold/20">
                      <Icon size={48} strokeWidth={1} />
                    </div>
                  )}
                  <div className="absolute -bottom-6 left-6 w-12 h-12 rounded-full bg-signova-gold flex items-center justify-center text-white border-2 border-signova-white shadow-md">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                </div>
                
                <div className="p-8 pt-10 flex flex-col flex-grow">
                  <h3 className="font-serif text-2xl text-signova-dark mb-3">{service.title}</h3>
                  <p className="text-sm opacity-70 leading-relaxed text-signova-dark mb-6 flex-grow">
                    {service.description}
                  </p>
                  
                  <a href="#appointment" className="text-xs uppercase tracking-[0.2em] font-semibold text-signova-gold flex items-center gap-2 mt-auto w-max group-hover:text-signova-deep-gold">
                    Explore <span className="text-lg group-hover:translate-x-2 transition-transform">→</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
