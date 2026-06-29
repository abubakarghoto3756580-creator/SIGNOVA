'use client';

import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, CheckCircle2, Coffee } from 'lucide-react';

export default function Workshop() {
  return (
    <section id="workshop" className="py-24 md:py-32 bg-signova-ivory relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-signova-gold/10 via-signova-ivory to-signova-ivory pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-signova-dark rounded-sm border border-signova-gold/20 shadow-[0_10px_40px_rgba(200,163,106,0.2)] overflow-hidden"
          >
            <div className="bg-signova-dark text-signova-white p-8 md:p-12 text-center border-b border-signova-gold/20 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="bg-signova-gold text-signova-white px-6 py-2 rounded-sm text-[12px] font-bold tracking-[0.2em] uppercase shadow-md whitespace-nowrap">
                  UPCOMING EVENT
                </span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-signova-gold mt-6 mb-4">Cupping Therapy Workshop — Hands On Practice</h2>
              <p className="text-xl md:text-2xl text-signova-white font-light tracking-wide">Wet & Dry Cupping</p>
            </div>

            <div className="p-8 md:p-12 bg-signova-dark">
              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Calendar className="text-signova-gold shrink-0 mt-1" size={24} />
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-signova-white/60 font-semibold mb-1">Date</p>
                      <p className="font-serif text-xl text-signova-white">28 June 2026 (Sunday)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="text-signova-gold shrink-0 mt-1" size={24} />
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-signova-white/60 font-semibold mb-1">Time</p>
                      <p className="font-serif text-xl text-signova-white">10:00 AM – 3:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="text-signova-gold shrink-0 mt-1" size={24} />
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-signova-white/60 font-semibold mb-1">Venue</p>
                      <p className="font-serif text-xl text-signova-white">Signova Clinic, Sialkot</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-signova-gold shrink-0 mt-1 font-serif text-2xl leading-none">₨</div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-signova-white/60 font-semibold mb-1">Fee</p>
                      <p className="font-serif text-xl text-signova-white">Rs. 2,500</p>
                    </div>
                  </div>
                </div>

                <div className="bg-signova-white/5 p-6 rounded-sm border border-signova-gold/20 flex flex-col justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-signova-gold font-semibold mb-4">Conducted By</p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center gap-2 text-signova-white font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-signova-gold shrink-0" />
                        Dr. Fatima Maqbool
                      </li>
                      <li className="flex items-center gap-2 text-signova-white font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-signova-gold shrink-0" />
                        Dr. M. Abubaker (DPT, USKT)
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <div className="flex flex-col gap-3">
                      <span className="flex items-center gap-2 text-sm text-signova-white/90 font-medium bg-signova-white/5 p-3 rounded-sm border border-signova-white/10"><CheckCircle2 size={18} className="text-signova-gold" /> Certificate Awarded</span>
                      <span className="flex items-center gap-2 text-sm text-signova-white/90 font-medium bg-signova-white/5 p-3 rounded-sm border border-signova-white/10"><Coffee size={18} className="text-signova-gold" /> Refreshments Provided</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center border-t border-signova-gold/20 pt-10 mt-4 gap-4">
                <p className="text-signova-gold text-lg font-semibold uppercase tracking-widest">Limited Seats — Register Today!</p>
                <a 
                  href="https://wa.me/923314640883"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-signova-gold text-white px-10 py-5 rounded-sm text-sm uppercase tracking-[0.2em] font-semibold hover:bg-signova-deep-gold transition-colors shadow-[0_5px_15px_rgba(200,163,106,0.3)] whitespace-nowrap"
                >
                  Register Now on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
