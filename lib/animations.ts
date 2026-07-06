// Shared premium animation presets used across the site.
// Easing curve mimics a smooth "ease-out-expo" feel used by high-end
// agency/portfolio sites — starts fast, settles gently, never bouncy.
export const EASE = [0.22, 1, 0.36, 1] as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.8, ease: EASE },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: EASE },
  },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: EASE },
  },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: EASE },
  },
};

// Wrap around a grid/list container: children with `fadeUp` (or similar)
// will reveal one-by-one instead of all at once.
export const staggerContainer = (staggerDelay = 0.12, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: staggerDelay,
      delayChildren,
    },
  },
});

// Standard viewport config: trigger a little before the element is fully
// in view, and only once, so re-scrolling doesn't replay the animation.
export const viewportOnce = { once: true, margin: '-80px' as const };

// Shared hover/tap micro-interaction for buttons and clickable pills.
export const buttonTap = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.97 },
  transition: { duration: 0.3, ease: EASE },
};

// Shared hover lift for cards (services, doctors, pricing, testimonials).
export const cardHover = {
  whileHover: { y: -8 },
  transition: { duration: 0.4, ease: EASE },
};
