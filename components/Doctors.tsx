'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const doctors = [
  {
    id: 1,
    name: 'Dr. Sarah Mitchell',
    specialty: 'Aesthetic Dermatologist',
    qualification: 'MD, FAAD',
    experience: '12 Years Experience',
    image: 'https://picsum.photos/seed/doc1/600/800',
  },
  {
    id: 2,
    name: 'Dr. James Carter',
    specialty: 'Cosmetic Dentist',
    qualification: 'DDS, MSc',
    experience: '15 Years Experience',
    image: 'https://picsum.photos/seed/doc2/600/800',
  },
  {
    id: 3,
    name: 'Dr. Emily Chen',
    specialty: 'Lead Physiotherapist',
    qualification: 'DPT, OCS',
    experience: '8 Years Experience',
    image: 'https://picsum.photos/seed/doc3/600/800',
  }
];

export default function Doctors() {
  return (
    <section id="doctors" className="py-24 md:py-32 bg-signova-cream">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-signova-gold font-serif italic text-lg md:text-xl mb-4"
            >
              Our Specialists
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-serif leading-[1.1] text-signova-black"
            >
              World-Class <span className="italic font-light">Medical Minds.</span>
            </motion.h2>
          </div>
          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="#all-doctors" 
            className="hidden md:inline-flex px-6 py-3 border border-signova-gold rounded-full text-signova-gold hover:bg-signova-gold hover:text-white transition-colors text-xs uppercase tracking-widest font-semibold"
          >
            View All Doctors
          </motion.a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative h-[450px] rounded-t-[100px] rounded-b-[30px] overflow-hidden mb-6 border border-signova-beige/50 shadow-md group-hover:shadow-xl transition-shadow duration-300">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-signova-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                  <a href="#appointment" className="w-full bg-signova-gold text-white text-center py-4 rounded-full text-xs uppercase tracking-[0.2em] font-semibold hover:bg-white hover:text-signova-gold transition-colors">
                    Book Consultation
                  </a>
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-serif text-2xl text-signova-black mb-1">{doctor.name}</h3>
                <p className="text-signova-gold font-medium mb-2">{doctor.specialty}</p>
                <div className="flex items-center justify-center gap-4 text-xs text-signova-black opacity-60 font-medium tracking-wide">
                  <span>{doctor.qualification}</span>
                  <span className="w-1 h-1 rounded-full bg-signova-gold" />
                  <span>{doctor.experience}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
