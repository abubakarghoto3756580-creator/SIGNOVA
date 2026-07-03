const fs = require('fs');
let content = fs.readFileSync('/app/applet/components/Services.tsx', 'utf8');

// Use aspect-[4/3] instead of h-44
content = content.replace('className="relative w-full h-44 rounded-t-sm bg-signova-ivory border-b border-signova-gold/10"', 'className="relative w-full aspect-[4/3] rounded-t-sm bg-signova-ivory border-b border-signova-gold/10"');

// Ensure card is full height
content = content.replace('className="group relative bg-signova-white rounded-sm flex flex-col transition-all duration-300 border border-transparent hover:border-signova-gold hover:shadow-[0_15px_30px_rgba(200,163,106,0.15)]"', 'className="group relative bg-signova-white rounded-sm flex flex-col h-full transition-all duration-300 border border-transparent hover:border-signova-gold hover:shadow-[0_15px_30px_rgba(200,163,106,0.15)]"');

// Add line-clamp-2
content = content.replace('className="text-sm opacity-70 leading-relaxed text-signova-dark mb-6 flex-grow"', 'className="text-sm opacity-70 leading-relaxed text-signova-dark mb-6 line-clamp-2"');

fs.writeFileSync('/app/applet/components/Services.tsx', content);
