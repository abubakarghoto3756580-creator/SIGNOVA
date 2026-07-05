'use client';

import { motion } from 'motion/react';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-signova-ivory border-t border-signova-gold/10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-cursive text-3xl md:text-4xl text-signova-gold mb-2"
          >
            Get In Touch
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif leading-[1.1] text-signova-dark mb-6"
          >
            Visit Signova
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

        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          <div className="space-y-12 bg-signova-white p-8 md:p-12 rounded-sm border border-signova-gold/10 shadow-[0_5px_20px_rgba(200,163,106,0.05)]">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex gap-6 items-start"
            >
              <div className="w-12 h-12 rounded-full bg-signova-ivory flex items-center justify-center text-signova-gold shrink-0 border border-signova-gold/20">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] font-semibold text-signova-gold mb-3">Location</h3>
                <p className="text-signova-dark/80 font-serif text-lg leading-relaxed max-w-xs">
                  1st Floor, Tariq Square, Kashmir Road, opposite Superior College, Pakka Garha Ghumman, Sialkot
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex gap-6 items-start"
            >
              <div className="w-12 h-12 rounded-full bg-signova-ivory flex items-center justify-center text-signova-gold shrink-0 border border-signova-gold/20">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] font-semibold text-signova-gold mb-3">Contact</h3>
                <div className="space-y-2">
                  <p className="text-signova-dark/80 font-serif text-lg">
                    <a href="tel:+92524352215" className="hover:text-signova-gold transition-colors">+92 52 4352215</a> <span className="text-xs font-sans text-signova-dark/50 uppercase tracking-wider">(Landline)</span>
                  </p>
                  <p className="text-signova-dark/80 font-serif text-lg">
                    <a href="tel:+923098644429" className="hover:text-signova-gold transition-colors">+92 309 8644429</a> <span className="text-xs font-sans text-signova-dark/50 uppercase tracking-wider">(WhatsApp/Reception)</span>
                  </p>
                  <p className="text-signova-dark/80 font-serif text-lg">
                    <a href="tel:+923098644449" className="hover:text-signova-gold transition-colors">+92 309 8644449</a> <span className="text-xs font-sans text-signova-dark/50 uppercase tracking-wider">(WhatsApp)</span>
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex gap-6 items-start"
            >
              <div className="w-12 h-12 rounded-full bg-signova-ivory flex items-center justify-center text-signova-gold shrink-0 border border-signova-gold/20">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] font-semibold text-signova-gold mb-3">Working Hours</h3>
                <div className="space-y-3">
                  <div className="grid grid-cols-[100px_1fr] gap-4">
                    <span className="text-xs uppercase tracking-widest text-signova-dark/60 font-semibold mt-1">Dental</span>
                    <span className="font-serif text-lg text-signova-dark/80">Daily 4:00 PM – 10:00 PM</span>
                  </div>
                  <div className="grid grid-cols-[100px_1fr] gap-4">
                    <span className="text-xs uppercase tracking-widest text-signova-dark/60 font-semibold mt-1">Physio</span>
                    <span className="font-serif text-lg text-signova-dark/80">Mon–Sat, 5:00 PM – 9:00 PM</span>
                  </div>
                  <div className="grid grid-cols-[100px_1fr] gap-4">
                    <span className="text-xs uppercase tracking-widest text-signova-dark/60 font-semibold mt-1">Aesthetic</span>
                    <span className="font-serif text-lg text-signova-dark/80">By Appointment</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-full min-h-[500px] w-full rounded-sm overflow-hidden shadow-[0_10px_30px_rgba(200,163,106,0.15)] border border-signova-gold/20 relative"
          >
            {/* Map of Sialkot */}
            <iframe 
              src="https://www.google.com/maps?q=1st+Floor,+Tariq+Square,+Kashmir+Road,+Pakka+Garha+Ghumman,+Sialkot,+Pakistan&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Signova Location Sialkot"
              className="grayscale-[0.5] contrast-[1.1] opacity-90 absolute inset-0"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
