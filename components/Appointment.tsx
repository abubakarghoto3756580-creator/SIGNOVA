'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, User, Phone, MessageSquare } from 'lucide-react';

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    department: '',
    doctor: '',
    date: '',
    time: '',
    notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSubmit = () => {
    const { name, phone, department, doctor, date, time, notes } = formData;
    const message = `*New Appointment Request*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Department:* ${department}\n*Doctor:* ${doctor}\n*Date:* ${date}\n*Time:* ${time}\n*Notes:* ${notes}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/923098644429?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="appointment" className="py-24 md:py-32 bg-signova-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/pattern/1000/1000')] opacity-5 mix-blend-overlay pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-signova-black/40 backdrop-blur-md rounded-sm border border-signova-gold/20 p-8 md:p-16">
          <div className="text-center mb-12">
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-cursive text-3xl md:text-4xl text-signova-gold mb-2"
            >
              Ready for a change?
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif leading-[1.1] text-signova-white"
            >
              Book Your Consultation
            </motion.h2>
          </div>

          <motion.form 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-signova-gold">
                  <User size={18} />
                </div>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" className="w-full bg-transparent border-b border-signova-gold/30 py-4 pl-12 pr-4 text-signova-white placeholder-signova-white/50 focus:outline-none focus:border-signova-gold transition-colors font-light" />
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-signova-gold">
                  <Phone size={18} />
                </div>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="w-full bg-transparent border-b border-signova-gold/30 py-4 pl-12 pr-4 text-signova-white placeholder-signova-white/50 focus:outline-none focus:border-signova-gold transition-colors font-light" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative">
                <select name="department" value={formData.department} onChange={handleChange} className="w-full bg-transparent border-b border-signova-gold/30 py-4 px-4 text-signova-white appearance-none focus:outline-none focus:border-signova-gold transition-colors cursor-pointer font-light">
                  <option value="" disabled className="text-signova-dark">Select Department</option>
                  <option value="Dental" className="text-signova-dark">Dental & Smile Design</option>
                  <option value="Aesthetic" className="text-signova-dark">Aesthetic & Skin Care</option>
                  <option value="Physiotherapy" className="text-signova-dark">Physiotherapy</option>
                  <option value="Hijama" className="text-signova-dark">Hijama Therapy</option>
                  <option value="EMS" className="text-signova-dark">EMS Training</option>
                  <option value="Massage" className="text-signova-dark">Massage & Wellness</option>
                </select>
              </div>
              <div className="relative">
                <select name="doctor" value={formData.doctor} onChange={handleChange} className="w-full bg-transparent border-b border-signova-gold/30 py-4 px-4 text-signova-white appearance-none focus:outline-none focus:border-signova-gold transition-colors cursor-pointer font-light">
                  <option value="" disabled className="text-signova-dark">Select Doctor (Optional)</option>
                  <option value="Dr. Fatima Maqbool" className="text-signova-dark">Dr. Fatima Maqbool</option>
                  <option value="Dr. Muhammad Abubakar" className="text-signova-dark">Dr. Muhammad Abubakar</option>
                  <option value="Any Available Specialist" className="text-signova-dark">Any Available Specialist</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-signova-gold">
                  <Calendar size={18} />
                </div>
                <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full bg-transparent border-b border-signova-gold/30 py-4 pl-12 pr-4 text-signova-white/80 focus:outline-none focus:border-signova-gold transition-colors [color-scheme:dark] font-light" />
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-signova-gold">
                  <Clock size={18} />
                </div>
                <input type="time" name="time" value={formData.time} onChange={handleChange} className="w-full bg-transparent border-b border-signova-gold/30 py-4 pl-12 pr-4 text-signova-white/80 focus:outline-none focus:border-signova-gold transition-colors [color-scheme:dark] font-light" />
              </div>
            </div>

            <div className="relative">
              <div className="absolute top-4 left-0 pl-4 flex items-start pointer-events-none text-signova-gold">
                <MessageSquare size={18} />
              </div>
              <textarea name="notes" value={formData.notes} onChange={handleChange} placeholder="Any specific notes or concerns?" rows={3} className="w-full bg-transparent border-b border-signova-gold/30 py-4 pl-12 pr-4 text-signova-white placeholder-signova-white/50 focus:outline-none focus:border-signova-gold transition-colors font-light resize-none"></textarea>
            </div>

            <div className="pt-6 text-center">
              <button type="button" onClick={handleWhatsAppSubmit} className="inline-flex bg-signova-gold text-signova-white px-10 py-5 rounded-sm text-xs uppercase tracking-[0.2em] font-semibold hover:bg-signova-deep-gold transition-colors shadow-[0_5px_20px_rgba(200,163,106,0.3)]">
                Confirm via WhatsApp ✦
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
