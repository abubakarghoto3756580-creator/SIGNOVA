'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Award, CheckCircle2 } from 'lucide-react';

const doctors = [
  {
    id: 1,
    name: 'Dr. Fatima Maqbool',
    image: 'https://i.postimg.cc/GmkGPKwv/Man-in-medical-scrubs-portrait-202607010026.jpg',
    initials: 'FM',
    title: 'Consultant & Manual Physiotherapist',
    qualification: 'DPT, University of Sialkot (UOS)',
    badge: 'Gold Medalist ⭐',
    specialtyTags: ['Certified Cupping Therapist', 'Certified EMS Trainer'],
    treatments: 'Back pain, Knee pain, Neck stiffness, Sciatica, Cerebral palsy, Frozen shoulder, Generalized body weakness, Hijama therapy, Soft tissue massage, Post-operative exercises, Paralysis/Stroke, Vertigo, Ankle sprains, Osteoarthritis'
  },
  {
    id: 2,
    name: 'Dr. Muhammad Abubakar',
    image: 'https://i.postimg.cc/6QcZgQQN/1000095493-png-202607010026.jpg',
    initials: 'MA',
    title: 'Doctor of Physical Therapy',
    qualification: 'DPT, USKT',
    badge: null,
    specialtyTags: ['Certified in Cupping Therapy'],
    treatments: "Arthritis, Back Pain, Neck Pain, Frozen Shoulder, Spinal Issues, Stroke, Tennis Elbow, Facial & Bell's Palsy, Sciatica, Muscle Weakness, Peripheral Neuropathy, Plantar Fasciitis & Heel Spurs, Post Operative Conditions"
  }
];

export default function Doctors() {
  return (
    <section id="doctors" className="py-24 md:py-32 bg-signova-ivory border-t border-signova-gold/10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-cursive text-3xl md:text-4xl text-signova-gold mb-2"
          >
            Our Specialists
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif leading-[1.1] text-signova-dark mb-6"
          >
            World-Class Medical Minds
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

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-signova-white rounded-sm p-8 md:p-10 border border-transparent hover:border-signova-gold shadow-[0_5px_15px_rgba(200,163,106,0.05)] hover:shadow-[0_15px_30px_rgba(200,163,106,0.15)] transition-all flex flex-col"
            >
              <div className="flex flex-col items-center text-center mb-8">
                <div className="relative aspect-[3/4] w-full max-w-[220px] rounded-lg bg-signova-gold/10 flex items-center justify-center text-signova-gold border border-signova-gold/30 shrink-0 overflow-hidden shadow-sm mb-6">
                  {doctor.image ? (
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <span className="font-serif text-5xl tracking-widest">{doctor.initials}</span>
                  )}
                </div>
                <div className="max-w-md">
                  <h3 className="font-serif text-2xl md:text-3xl text-signova-dark mb-2">{doctor.name}</h3>
                  <p className="text-xs md:text-sm uppercase tracking-widest font-semibold text-signova-gold mb-2">
                    {doctor.title}
                  </p>
                  <p className="text-xs md:text-sm text-signova-dark/70 font-medium mb-2">{doctor.qualification}</p>
                  {doctor.badge && (
                    <div className="inline-flex items-center gap-1 bg-signova-deep-gold text-white px-3 py-1 rounded-sm text-xs font-semibold tracking-wider">
                      <Award size={14} />
                      {doctor.badge}
                    </div>
                  )}
                </div>
              </div>

              <div className="mb-6 flex flex-wrap gap-2 justify-center">
                {doctor.specialtyTags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-signova-ivory border border-signova-gold/20 text-signova-dark/80 text-[10px] uppercase tracking-widest rounded-sm">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mb-8 flex-grow">
                <h5 className="text-xs uppercase tracking-widest text-signova-dark font-bold mb-3 border-b border-signova-gold/20 pb-2">Treatments</h5>
                <p className="text-sm text-signova-dark/70 leading-relaxed font-light">
                  {doctor.treatments}
                </p>
              </div>

              <a href="#appointment" className="w-full block bg-signova-gold text-white text-center py-4 rounded-sm text-xs uppercase tracking-[0.2em] font-semibold hover:bg-signova-deep-gold transition-colors">
                Book Consultation
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a 
            href="#doctors" 
            className="inline-flex px-8 py-4 border border-signova-gold rounded-sm text-signova-gold hover:bg-signova-gold hover:text-signova-white transition-colors text-xs uppercase tracking-[0.2em] font-semibold"
          >
            View All Doctors
          </a>
        </motion.div>
      </div>
    </section>
  );
}
