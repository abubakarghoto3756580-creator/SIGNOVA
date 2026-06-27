'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-16 w-full flex items-center overflow-hidden bg-signova-ivory text-signova-black">
      <div className="container mx-auto px-4 md:px-12 flex flex-col lg:flex-row gap-12 items-center">
        {/* Left Col */}
        <div className="w-full lg:w-1/2 space-y-8 z-10 relative">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-signova-gold font-serif italic text-lg md:text-xl block"
          >
            Premium Dental & Aesthetic Studio
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.1] text-signova-black text-balance"
          >
            Luxury Aesthetic <br/>& <span className="italic font-light">Dental Care.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg opacity-70 leading-relaxed max-w-md"
          >
            Designed Around You. Experience the pinnacle of medical excellence in a space where clinical precision meets unparalleled elegance.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <a href="#appointment" className="bg-signova-gold text-white px-8 py-4 rounded-full text-sm uppercase tracking-[0.2em] font-semibold shadow-lg shadow-signova-gold/30 transition-all hover:scale-105">
              Book Appointment
            </a>
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-signova-ivory bg-slate-300"></div>
                <div className="w-10 h-10 rounded-full border-2 border-signova-ivory bg-slate-400"></div>
                <div className="w-10 h-10 rounded-full border-2 border-signova-ivory bg-signova-beige flex items-center justify-center text-[10px] font-bold">+5k</div>
              </div>
              <span className="text-xs uppercase tracking-widest opacity-60 font-semibold">Happy<br/>Patients</span>
            </div>
          </motion.div>
        </div>

        {/* Right Col Image container */}
        <div className="w-full lg:w-1/2 relative flex items-center justify-center min-h-[540px]">
           <motion.div
             className="absolute w-full max-w-md h-[540px] bg-signova-cream rounded-t-[200px] rounded-b-[40px] overflow-hidden shadow-2xl border border-signova-beige/50"
             initial={{ scale: 0.9, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ duration: 0.8 }}
           >
             <Image
               src="https://picsum.photos/seed/clinic/800/1000"
               alt="Luxury Aesthetic & Dental Clinic"
               fill
               className="object-cover opacity-90 mix-blend-multiply"
               referrerPolicy="no-referrer"
               priority
             />
             <div className="absolute inset-0 bg-gradient-to-tr from-signova-beige/40 to-transparent" />
             
             {/* Floating Badge */}
             <div className="absolute bottom-8 left-8 right-8">
               <div className="backdrop-blur-md bg-white/60 p-6 rounded-3xl border border-white/60 shadow-lg">
                 <div className="flex justify-between items-center">
                   <div>
                     <p className="text-[10px] uppercase tracking-tighter opacity-70 mb-1">Next Available slot</p>
                     <p className="font-semibold text-sm">Today, 04:30 PM</p>
                   </div>
                   <div className="h-8 w-[1px] bg-signova-black/20"></div>
                   <div>
                     <p className="text-[10px] uppercase tracking-tighter opacity-70 mb-1">Clinic Location</p>
                     <p className="font-semibold text-sm">Premium District</p>
                   </div>
                 </div>
               </div>
             </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
