'use client';

import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, CheckCircle2 } from 'lucide-react';

export default function Workshop() {
  return (
    <section id="workshop" className="py-24 md:py-32 bg-signova-cream relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-signova-gold/10 via-signova-cream to-signova-cream pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-cursive text-3xl md:text-4xl text-signova-gold mb-2"
            >
              Upcoming Event
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-serif leading-[1.1] text-signova-dark mb-6"
            >
              Cupping Therapy Workshop
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-signova-white rounded-sm border border-signova-gold/20 shadow-[0_10px_40px_rgba(200,163,106,0.1)] overflow-hidden"
          >
            <div className="bg-signova-dark text-signova-white p-6 text-center border-b border-signova-gold/20">
              <span className="inline-block px-4 py-1 border border-signova-gold text-signova-gold text-[10px] uppercase tracking-[0.2em] font-bold rounded-sm mb-2">Hands-On Practice</span>
              <h3 className="font-serif text-2xl">Wet & Dry Cupping</h3>
            </div>

            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Calendar className="text-signova-gold shrink-0 mt-1" size={24} />
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-signova-dark/60 font-semibold mb-1">Date</p>
                      <p className="font-serif text-xl text-signova-dark">28 June 2026 (Sunday)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="text-signova-gold shrink-0 mt-1" size={24} />
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-signova-dark/60 font-semibold mb-1">Time</p>
                      <p className="font-serif text-xl text-signova-dark">10:00 AM – 3:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="text-signova-gold shrink-0 mt-1" size={24} />
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-signova-dark/60 font-semibold mb-1">Location</p>
                      <p className="font-serif text-xl text-signova-dark">Signova Studio, Sialkot</p>
                    </div>
                  </div>
                </div>

                <div className="bg-signova-ivory p-6 rounded-sm border border-signova-gold/10">
                  <p className="text-[10px] uppercase tracking-widest text-signova-dark/60 font-semibold mb-4">Conducted By</p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2 text-signova-dark font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-signova-gold shrink-0" />
                      Dr. Fatima Maqbool
                    </li>
                    <li className="flex items-center gap-2 text-signova-dark font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-signova-gold shrink-0" />
                      Dr. M. Abubaker (DPT, USKT)
                    </li>
                  </ul>
                  
                  <p className="text-[10px] uppercase tracking-widest text-signova-dark/60 font-semibold mb-3">Includes</p>
                  <div className="flex gap-4">
                    <span className="flex items-center gap-1 text-sm text-signova-dark/80"><CheckCircle2 size={14} className="text-signova-gold" /> Certificate</span>
                    <span className="flex items-center gap-1 text-sm text-signova-dark/80"><CheckCircle2 size={14} className="text-signova-gold" /> Refreshments</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between border-t border-signova-gold/20 pt-8 mt-4 gap-6">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-signova-dark/60 font-semibold mb-1 text-center md:text-left">Registration Fee</p>
                  <p className="font-serif text-3xl text-signova-dark text-center md:text-left">Rs. 2500</p>
                </div>
                <div className="flex flex-col items-center md:items-end gap-2">
                  <a 
                    href="https://wa.me/923314640883?text=Hi, I want to register for the Cupping Therapy Workshop on 28th June."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-signova-gold text-white px-8 py-4 rounded-sm text-xs uppercase tracking-[0.2em] font-semibold hover:bg-signova-deep-gold transition-colors shadow-[0_5px_15px_rgba(200,163,106,0.3)] whitespace-nowrap"
                  >
                    Register Now → WhatsApp
                  </a>
                  <p className="text-xs text-signova-dark/60 mt-2">or call: <a href="tel:+923314640883" className="font-semibold text-signova-dark hover:text-signova-gold transition-colors">0331 4640883</a></p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
