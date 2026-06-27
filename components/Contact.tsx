'use client';

import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-signova-cream">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-signova-gold font-serif italic text-lg md:text-xl mb-4"
          >
            Get In Touch
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-serif leading-[1.1] text-signova-black mb-6"
          >
            Visit <span className="italic font-light">Signova.</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex gap-6 items-start"
            >
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-signova-gold shrink-0 border border-signova-beige shadow-sm">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-xl font-serif text-signova-black mb-2">Location</h3>
                <p className="text-signova-brown font-light leading-relaxed">
                  123 Luxury Avenue, Healthcare District<br />
                  Metropolis, NY 10001
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
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-signova-gold shrink-0 border border-signova-beige shadow-sm">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-xl font-serif text-signova-black mb-2">Contact</h3>
                <p className="text-signova-brown font-light leading-relaxed mb-1">
                  +1 (555) 123-4567
                </p>
                <p className="text-signova-brown font-light leading-relaxed">
                  hello@signova.com
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex gap-6 items-start"
            >
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-signova-gold shrink-0 border border-signova-beige shadow-sm">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="text-xl font-serif text-signova-black mb-2">Working Hours</h3>
                <p className="text-signova-brown font-light leading-relaxed mb-1">
                  Mon - Fri: 9:00 AM - 8:00 PM
                </p>
                <p className="text-signova-brown font-light leading-relaxed mb-1">
                  Saturday: 10:00 AM - 6:00 PM
                </p>
                <p className="text-signova-brown font-light leading-relaxed">
                  Sunday: Closed
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[500px] w-full rounded-t-[200px] rounded-b-[40px] overflow-hidden shadow-2xl border border-signova-beige bg-signova-cream relative"
          >
            {/* Simple Map Placeholder (Iframe or Image) */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25280010915!2d-74.14482811466085!3d40.69763123328574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1689201389824!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Signova Location"
              className="grayscale contrast-125 opacity-80"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
