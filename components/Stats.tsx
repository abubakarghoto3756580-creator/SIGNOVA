'use client';

import { motion } from 'motion/react';
import { Users, Building2, Award, Star } from 'lucide-react';

const stats = [
  { id: 1, label: 'Happy Patients', value: '1000+', icon: Users },
  { id: 2, label: 'Departments', value: '4', icon: Building2 },
  { id: 3, label: 'Certified Doctors', value: '15+', icon: Award },
  { id: 4, label: 'Reviews', value: '5★', icon: Star },
];

export default function Stats() {
  return (
    <section className="relative z-20 -mt-16 md:-mt-24 px-4 container mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="bg-white/90 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 shadow-lg shadow-signova-gold/10 border border-signova-beige/50"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-signova-beige/50">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div 
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center pl-0 first:pl-0"
              >
                <div className="w-12 h-12 rounded-full bg-signova-cream flex items-center justify-center text-signova-gold mb-4 border border-signova-beige/30">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl md:text-4xl font-serif text-signova-black mb-1">{stat.value}</h3>
                <p className="text-[10px] uppercase tracking-widest text-signova-black opacity-60 font-semibold mt-2">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
