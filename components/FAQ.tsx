'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { fadeUp, staggerContainer, viewportOnce, EASE } from '@/lib/animations';

const faqs = [
  {
    q: "کیا appointment ضروری ہے؟",
    a: "جی ہاں، appointment لینا ضروری ہے تاکہ آپ کو بغیر انتظار کیے فوری توجہ مل سکے۔ WhatsApp پر +92 309 8644429 کریں یا ہماری website سے online book کریں۔"
  },
  {
    q: "What are the clinic timings?",
    a: "Dental Department is open daily from 4:00 PM to 10:00 PM. Physiotherapy is available Monday to Saturday, 5:00 PM to 9:00 PM. Aesthetic treatments are by appointment — contact us to schedule."
  },
  {
    q: "کیا treatments محفوظ اور hygienic ہیں؟",
    a: "بالکل! ہم international hygiene standards follow کرتے ہیں۔ تمام instruments sterilized ہوتے ہیں اور disposable items single-use ہوتے ہیں۔ آپ کی safety ہماری اولین ترجیح ہے۔"
  },
  {
    q: "What payment methods are accepted?",
    a: "We accept cash and bank transfer. Easy installment options are also available for selected treatment packages. Please ask our reception for details."
  },
  {
    q: "کیا Hijama therapy کے لیے کوئی خاص تیاری چاہیے؟",
    a: "Hijama session سے پہلے ہلکا کھانا کھائیں اور hydrated رہیں۔ session سے 2 گھنٹے پہلے بھاری کھانے سے گریز کریں۔ ہمارا team آپ کو پوری guidance دے گا۔"
  },
  {
    q: "How many physiotherapy sessions will I need?",
    a: "یہ آپ کی condition پر depend کرتا ہے۔ Dr. Fatima Maqbool یا Dr. Muhammad Abubakar آپ کو first consultation میں مکمل treatment plan دیں گے۔ عموماً 6–10 sessions میں نمایاں فرق آتا ہے۔"
  },
  {
    q: "کیا dental treatment painful ہوتی ہے؟",
    a: "ہم modern techniques اور local anesthesia استعمال کرتے ہیں جس سے pain بہت کم یا بالکل نہیں ہوتی۔ ہمارا مقصد آپ کا comfortable اور stress-free experience ہے۔"
  },
  {
    q: "Is the Grand Opening 50% offer still available?",
    a: "جی ہاں! Grand Opening offer ابھی بھی جاری ہے۔ جلدی کریں اور appointment book کریں کیونکہ یہ offer limited time کے لیے ہے۔"
  },
  {
    q: "کیا EMS training کسی کے لیے بھی suitable ہے؟",
    a: "EMS training زیادہ تر لوگوں کے لیے safe ہے لیکن pregnant خواتین، pacemaker users اور کچھ medical conditions میں مناسب نہیں۔ پہلے consultation ضروری ہے۔"
  },
  {
    q: "Where exactly is Signova located?",
    a: "We are located at 1st Floor, Tariq Square, Kashmir Road, opposite Superior College, Pakka Garha Ghumman, Sialkot. Ample parking is available nearby."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-signova-ivory border-t border-signova-gold/10">
      {/* === PHASE 3: FAQ SECTION === */}
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, ease: EASE }}
            className="font-cursive text-3xl md:text-4xl text-signova-gold mb-2"
          >
            Got Questions?
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="text-4xl md:text-6xl font-serif leading-[1.1] text-signova-dark mb-6"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
            className="flex justify-center"
          >
            <div className="w-24 h-[1px] bg-signova-gold mb-6" />
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.06)}
          className="max-w-4xl mx-auto space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="border-b border-signova-gold/30"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
              >
                <span className="font-semibold text-lg text-signova-dark group-hover:text-signova-gold transition-colors duration-300 pr-8">
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="shrink-0"
                >
                  <ChevronDown className="text-signova-gold" size={24} />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: EASE }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-signova-dark/70 font-light leading-relaxed pr-8">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
