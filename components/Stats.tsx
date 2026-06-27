'use client';

import { motion } from 'motion/react';
import { Users, Building2, Award, Star } from 'lucide-react';
import { useEffect, useState } from 'react';

const stats = [
  { id: 1, label: 'Happy Patients', value: '1000+', icon: Users },
  { id: 2, label: 'Departments', value: '4', icon: Building2 },
  { id: 3, label: 'Certified Doctors', value: '2', icon: Award },
  { id: 4, label: 'Patient Rating', value: '5★', icon: Star },
];

export default function Stats() {
  return (
    <section className="relative z-20 px-4 container mx-auto" style={{ marginTop: '-4rem' }}>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-signova-dark border border-signova-gold/30 rounded-sm p-8 md:p-12 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x md:divide-signova-gold/20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div 
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center px-4"
              >
                <div className="w-12 h-12 rounded-full bg-signova-gold/10 flex items-center justify-center text-signova-gold mb-4 border border-signova-gold/20">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl md:text-5xl font-serif text-signova-ivory mb-2">{stat.value}</h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-signova-gold/80 font-medium">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
