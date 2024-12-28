import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Skills from "./components/skills/Skills";
import Title from "./components/titles/Title";
import Project from "./components/projects/Project";
import Design from "./components/design/Design";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/others/ScrollToTop";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

// Reusable AnimatedSection component
const AnimatedSection = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
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
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  return (
    <div className="dark">
      <div className="dark:bg-gray-900">
        <AnimatedSection>
          <Title />
        </AnimatedSection>
        <AnimatedSection>
          <About />
        </AnimatedSection>
        <AnimatedSection>
          <Skills />
        </AnimatedSection>
        <AnimatedSection>
          <Experience />
        </AnimatedSection>
        <AnimatedSection>
          <Project />
        </AnimatedSection>
        <AnimatedSection>
          <Design />
        </AnimatedSection>
          <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
}

export default App;
