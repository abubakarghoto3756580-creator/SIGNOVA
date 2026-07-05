const fs = require('fs');

let content = fs.readFileSync('./components/Pricing.tsx', 'utf8');

// Fix horizontal overflow by ensuring w-full and modifying badge positioning
content = content.replace(
  '<div className="grid lg:grid-cols-3 gap-8 items-center max-w-7xl mx-auto">',
  '<div className="grid lg:grid-cols-3 gap-8 items-center max-w-full w-full mx-auto">'
);

content = content.replace(
  '<div className="absolute -top-4 left-1/2 -translate-x-1/2">',
  '<div className="absolute -top-4 right-4 z-20">'
);

fs.writeFileSync('./components/Pricing.tsx', content);

let floatingContent = fs.readFileSync('./components/FloatingButtons.tsx', 'utf8');

// Fix floating buttons positioning and spacing
floatingContent = floatingContent.replace(
  'className="fixed bottom-6 right-6 z-50 flex flex-col gap-4"',
  'className="fixed bottom-[90px] md:bottom-6 right-4 md:right-6 z-[60] flex flex-col gap-4"'
);

// Hide back to top on mobile to save vertical space
floatingContent = floatingContent.replace(
  'className="w-14 h-14 bg-signova-gold text-white rounded-full flex items-center justify-center shadow-lg hover:bg-signova-deep-gold transition-colors duration-300 mx-auto"',
  'className="hidden md:flex w-14 h-14 bg-signova-gold text-white rounded-full items-center justify-center shadow-lg hover:bg-signova-deep-gold transition-colors duration-300 mx-auto"'
);

fs.writeFileSync('./components/FloatingButtons.tsx', floatingContent);
