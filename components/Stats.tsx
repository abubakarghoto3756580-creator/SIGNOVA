'use client';

import { motion } from 'motion/react';
import { Users, Building2, Award, Star } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

function CountUp({ target, suffix = '' }: { target: number, suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          observer.disconnect();
          
          let startTimestamp: number | null = null;
          const duration = 2000;
          
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            
            // ease out expo
            const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            
            setCount(Math.floor(easeOut * target));
            
            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCount(target);
            }
          };
          
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, [target]);

  // format number with commas
  const formattedCount = count.toLocaleString('en-US');

  return (
    <h3 ref={ref} className="text-3xl md:text-5xl font-serif text-signova-ivory mb-2">
      {formattedCount}{suffix}
    </h3>
  );
}

const stats = [
  { id: 1, label: 'Happy Patients', value: 10000, suffix: '+', icon: Users },
  { id: 2, label: 'Departments', value: 4, suffix: '', icon: Building2 },
  { id: 3, label: 'Certified Doctors', value: 2, suffix: '', icon: Award },
  { id: 4, label: 'Patient Rating', value: 5, suffix: '★', icon: Star },
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
                <CountUp target={stat.value} suffix={stat.suffix} />
                <p className="text-[10px] uppercase tracking-[0.2em] text-signova-gold/80 font-medium">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
