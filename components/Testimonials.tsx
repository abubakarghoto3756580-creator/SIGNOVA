'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Valued Customer',
    treatment: 'Aesthetic Patient',
    text: 'Had a wonderful experience at Signova! The doctor was professional and guided me throughout the treatment. The staff was very welcoming, and the clinic environment was clean and comfortable. I noticed positive results after my treatment. Highly recommended for anyone looking for trusted skincare and aesthetic treatments in Sialkot.',
    image: '/images/general/testimonial-1.jpg',
  },
  {
    id: 2,
    name: 'Physio Patient',
    treatment: 'Physiotherapy',
    text: "Dr. Fatima is absolutely amazing. My back pain was so severe I couldn't walk properly. After just 3 sessions of physiotherapy at Signova, I feel like a new person. The clinic is clean, professional and the staff truly cares.",
  },
  {
    id: 3,
    name: 'Dental Patient',
    treatment: 'Dental Care',
    text: 'Best dental clinic in Sialkot! The scaling and polishing results were incredible. The environment is so calm and luxurious — nothing like a typical dental clinic. Will definitely come back!',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-signova-ivory overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-cursive text-3xl md:text-4xl text-signova-gold mb-2"
          >
            Patient Stories
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif leading-[1.1] text-signova-dark mb-8"
          >
            Words of Trust
          </motion.h2>

          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="inline-flex items-center gap-3 bg-signova-white px-6 py-3 rounded-full border border-signova-gold/20 shadow-sm"
          >
            <div className="flex gap-1 text-[#FBBC05]">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <div className="h-4 w-[1px] bg-signova-gold/20"></div>
            <span className="text-[10px] uppercase tracking-widest font-bold text-signova-dark">4.9 / 5 on Google</span>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-signova-white rounded-sm p-8 md:p-10 w-full lg:w-1/3 shadow-[0_5px_15px_rgba(200,163,106,0.05)] border border-signova-gold/10 relative hover:border-signova-gold/30 hover:shadow-[0_15px_30px_rgba(200,163,106,0.1)] transition-all duration-300 flex flex-col"
            >
              <div className="absolute top-8 right-8 text-signova-gold/20">
                <Quote size={40} className="fill-current" />
              </div>
              
              <div className="flex gap-1 mb-6 text-signova-gold">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              
              <p className="text-signova-dark opacity-80 font-light leading-relaxed mb-8 italic flex-grow">
                &quot;{testimonial.text}&quot;
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="relative w-12 h-12 rounded-full bg-signova-ivory flex items-center justify-center text-signova-gold font-serif text-xl border border-signova-gold/20 shrink-0 overflow-hidden">
                  {testimonial.image ? (
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    testimonial.name.charAt(0)
                  )}
                </div>
                <div>
                  <h4 className="font-serif text-lg text-signova-dark">{testimonial.name}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-signova-gold font-semibold mt-1">{testimonial.treatment}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
