//stagger container animation
export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.8,
    },
  },
};


//fade in animation
export const fadeIn = {
  hidden: {
    opacity: 0,
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    filter: "blur(0)",
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

//fade in animation
export const fadeInUp = {
  hidden: {
    y: 30,
    opacity: 0,
    filter: "blur(8px)",
  },
  show: {
    y: 0,
    opacity: 1,
    filter: "blur(0)",
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};