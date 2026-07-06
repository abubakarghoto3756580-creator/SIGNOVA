'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { ArrowLeftRight } from 'lucide-react';
import { fadeUp, viewportOnce, EASE } from '@/lib/animations';

const cases = [
  {
    id: 1,
    category: 'Scaling & Polishing',
    before: 'https://i.postimg.cc/13pw0BhT/Close-up-photo-of-human-teeth-202607010026.jpg',
    after: 'https://i.postimg.cc/wB2NZBB8/Human-teeth-after-dental-scaling-202607010026.jpg',
    description: 'Professional plaque removal and polishing for a brighter smile.',
  },
  {
    id: 2,
    category: 'Hydra Facial',
    before: 'https://i.postimg.cc/Y9NsJYWy/Woman-s-face-before-facial-202607010055-2.jpg',
    after: 'https://i.postimg.cc/NFpP0tbK/Woman-with-improved-skin-202607010055.jpg',
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
            viewport={viewportOnce}
            transition={{ duration: 0.6, ease: EASE }}
            className="font-cursive text-3xl md:text-4xl text-signova-gold mb-2"
          >
            Real Results
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="text-4xl md:text-6xl font-serif leading-[1.1] text-signova-dark mb-4"
          >
            See The Difference
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            className="text-signova-dark/70 text-lg font-light italic"
          >
            &quot;A small step today for a healthier, brighter tomorrow.&quot;
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: EASE }}
          className="flex flex-col lg:flex-row gap-12 items-center max-w-6xl mx-auto"
        >
          {/* Controls */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            {cases.map((c, idx) => (
              <motion.button
                key={c.id}
                onClick={() => setActiveCase(idx)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.25, ease: EASE }}
                className={`text-left p-6 rounded-sm border transition-colors duration-300 ${
                  activeCase === idx 
                    ? 'border-signova-gold bg-signova-ivory shadow-[0_5px_15px_rgba(200,163,106,0.1)]' 
                    : 'border-signova-gold/20 bg-signova-white hover:border-signova-gold/50'
                }`}
              >
                <h3 className={`font-serif text-2xl mb-2 ${activeCase === idx ? 'text-signova-dark' : 'text-signova-dark/80'}`}>{c.category}</h3>
                <p className="text-sm opacity-70 text-signova-dark font-light">{c.description}</p>
              </motion.button>
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
              <AnimatePresence mode="wait">
                <motion.div
                  key={cases[activeCase].id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="absolute inset-0"
                >
                  <Image
                    src={cases[activeCase].after}
                    alt="After"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </AnimatePresence>
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
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-signova-gold rounded-full flex items-center justify-center shadow-lg border-2 border-white text-white transition-transform duration-300 hover:scale-110">
                  <ArrowLeftRight size={18} />
                </div>
              </div>
            </div>
            <p className="text-center text-[10px] opacity-50 mt-4 uppercase tracking-[0.2em] font-semibold text-signova-dark">Drag to compare</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
