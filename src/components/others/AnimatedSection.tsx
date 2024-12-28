import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const AnimatedSection = ({ children, transitionDelay = 0.25 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false }); // Changed to false
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden"); // Reset when out of view
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.5, delay: transitionDelay }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
