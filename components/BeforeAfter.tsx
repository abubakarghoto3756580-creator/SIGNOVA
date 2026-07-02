'use client';

import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowLeftRight } from 'lucide-react';

const cases = [
  {
    id: 1,
    category: 'Scaling & Polishing',
    before: '/images/before-after/teeth-before.jpg',
    after: '/images/before-after/teeth-after.jpg',
    description: 'Professional plaque removal and polishing for a brighter smile.',
  },
  {
    id: 2,
    category: 'Hydra Facial',
    before: '/images/before-after/skin-before.jpg',
    after: '/images/before-after/skin-after.jpg',
    description: 'Deep cleansing and hydration for glowing, youthful skin.',
  },
];

export default function BeforeAfter() {
  const [activeCase, setActiveCase] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDrag = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const position = ((clientX - left) / width) * 100;
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  return (
    <section id="results" className="py-24 md:py-32 bg-signova-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-cursive text-3xl md:text-4xl text-signova-gold mb-2"
          >
            Real Results
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif leading-[1.1] text-signova-dark mb-4"
          >
            See The Difference
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-signova-dark/70 text-lg font-light italic"
          >
            &quot;A small step today for a healthier, brighter tomorrow.&quot;
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center max-w-6xl mx-auto">
          {/* Controls */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            {cases.map((c, idx) => (
              <button
                key={c.id}
                onClick={() => setActiveCase(idx)}
                className={`text-left p-6 rounded-sm border transition-all duration-300 ${
                  activeCase === idx 
                    ? 'border-signova-gold bg-signova-ivory shadow-[0_5px_15px_rgba(200,163,106,0.1)]' 
                    : 'border-signova-gold/20 bg-signova-white hover:border-signova-gold/50'
                }`}
              >
                <h3 className={`font-serif text-2xl mb-2 ${activeCase === idx ? 'text-signova-dark' : 'text-signova-dark/80'}`}>{c.category}</h3>
                <p className="text-sm opacity-70 text-signova-dark font-light">{c.description}</p>
              </button>
            ))}
          </div>

          {/* Slider */}
          <div className="w-full lg:w-2/3 relative">
            <div 
              ref={containerRef}
              className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-sm overflow-hidden select-none cursor-ew-resize border border-signova-gold/20 shadow-2xl"
              onMouseMove={(e) => e.buttons === 1 && handleDrag(e)}
              onTouchMove={handleDrag}
              onMouseDown={handleDrag}
            >
              {/* After Image (Background) */}
              <Image
                src={cases[activeCase].after}
                alt="After"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 bg-signova-gold text-white px-4 py-1 rounded-sm text-[10px] font-bold tracking-[0.2em] uppercase shadow-sm">
                After
              </div>

              {/* Before Image (Foreground with clip-path) */}
              <div 
                className="absolute inset-0 z-10"
                style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
              >
                <Image
                  src={cases[activeCase].before}
                  alt="Before"
                  fill
                  className="object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-signova-dark/80 text-white px-4 py-1 rounded-sm text-[10px] font-bold tracking-[0.2em] uppercase shadow-sm backdrop-blur-md">
                  Before
                </div>
              </div>

              {/* Slider Handle */}
              <div 
                className="absolute top-0 bottom-0 z-20 w-[2px] bg-signova-gold cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-signova-gold rounded-full flex items-center justify-center shadow-lg border-2 border-white text-white">
                  <ArrowLeftRight size={18} />
                </div>
              </div>
            </div>
            <p className="text-center text-[10px] opacity-50 mt-4 uppercase tracking-[0.2em] font-semibold text-signova-dark">Drag to compare</p>
          </div>
        </div>
      </div>
    </section>
  );
}
