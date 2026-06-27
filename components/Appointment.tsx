'use client';

import { motion } from 'motion/react';
import { Calendar, Clock, User, Phone } from 'lucide-react';
import Image from 'next/image';

export default function Appointment() {
  return (
    <section id="appointment" className="py-24 md:py-32 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="bg-signova-black rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
          
          {/* Form Side */}
          <div className="lg:w-1/2 p-10 md:p-16 lg:p-20 flex flex-col justify-center">
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-signova-gold font-serif italic text-lg md:text-xl mb-4"
            >
              Book Your Visit
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif leading-[1.1] text-white mb-10"
            >
              Request a <br/><span className="italic font-light">Consultation.</span>
            </motion.h2>

            <motion.form 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-white/50">
                    <User size={18} />
                  </div>
                  <input type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-white/50 focus:outline-none focus:border-signova-gold transition-colors" />
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-white/50">
                    <Phone size={18} />
                  </div>
                  <input type="tel" placeholder="Phone Number" className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-white/50 focus:outline-none focus:border-signova-gold transition-colors" />
                </div>
              </div>

              <div className="relative">
                <select className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-4 text-white appearance-none focus:outline-none focus:border-signova-gold transition-colors cursor-pointer">
                  <option value="" disabled selected className="text-gray-900">Select Department</option>
                  <option value="aesthetic" className="text-gray-900">Aesthetic & Skin Care</option>
                  <option value="dental" className="text-gray-900">Dental & Smile Design</option>
                  <option value="physiotherapy" className="text-gray-900">Physiotherapy</option>
                  <option value="hijama" className="text-gray-900">Hijama Therapy</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-white/50">
                    <Calendar size={18} />
                  </div>
                  <input type="date" className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white/80 focus:outline-none focus:border-signova-gold transition-colors [color-scheme:dark]" />
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-white/50">
                    <Clock size={18} />
                  </div>
                  <input type="time" className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white/80 focus:outline-none focus:border-signova-gold transition-colors [color-scheme:dark]" />
                </div>
              </div>

              <button type="button" className="w-full bg-signova-gold hover:bg-signova-gold/90 text-white text-xs uppercase tracking-[0.2em] font-semibold py-5 rounded-xl transition-colors shadow-lg mt-4">
                Confirm Appointment via WhatsApp
              </button>
            </motion.form>
          </div>

          {/* Image Side */}
          <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-full hidden md:block">
            <Image
              src="https://picsum.photos/seed/appointment/800/1000"
              alt="Signova Consultation"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-signova-black via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
