'use client';

import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Aisha K.',
    treatment: 'Hydra Facial',
    text: 'The most luxurious clinical experience I have ever had. The staff is incredibly professional, and my skin has never looked better.',
    image: 'https://picsum.photos/seed/user1/100/100',
  },
  {
    id: 2,
    name: 'Omar M.',
    treatment: 'Dental Implants',
    text: 'I was always afraid of the dentist until I visited Signova. The environment is relaxing, and Dr. Carter made the entire process painless.',
    image: 'https://picsum.photos/seed/user2/100/100',
  },
  {
    id: 3,
    name: 'Zara H.',
    treatment: 'Physiotherapy',
    text: 'After months of back pain, the customized physiotherapy plan at Signova gave me my life back. Five-star facility and care.',
    image: 'https://picsum.photos/seed/user3/100/100',
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
            className="text-signova-gold font-serif italic text-lg md:text-xl mb-4"
          >
            Patient Stories
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-serif leading-[1.1] text-signova-black"
          >
            Words of <span className="italic font-light">Trust.</span>
          </motion.h2>
        </div>

        <div className="flex flex-wrap md:flex-nowrap justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/60 rounded-[3rem] p-8 md:p-10 w-full md:w-1/3 shadow-sm border border-signova-beige relative hover:bg-white transition-colors duration-300"
            >
              <div className="absolute top-8 right-8 text-signova-cream opacity-50">
                <Quote size={40} className="fill-current" />
              </div>
              
              <div className="flex gap-1 mb-6 text-signova-gold">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              
              <p className="text-signova-black opacity-70 font-light leading-relaxed mb-8 italic">
                &quot;{testimonial.text}&quot;
              </p>
              
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full object-cover border border-signova-beige/50"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-serif text-lg text-signova-black">{testimonial.name}</h4>
                  <p className="text-xs uppercase tracking-widest text-signova-gold font-semibold mt-1">{testimonial.treatment}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
