import { motion } from "framer-motion";
import "./title.scss";

export default function Title() {
  return (
    <div className="h-screen flex items-center px-4 md:px-10 md:ml-20 dark:text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-6xl mb-10">
          Hello! <span className="wave">👋</span>
        </h2>
        <div className="mt-6">
          <h2 className="text-3xl md:text-5xl mb-2">
            I'm{" "}
            <span className="font-bold relative inline-block">
              <motion.span
                className="relative z-10"
                style={{
                  position: "relative",
                  color: "#171C28", // Text color when highlighted
                }}
              >
                Ada Pauline Villacarlos
              </motion.span>
              <motion.div
                className="absolute left-0 top-0 bottom-0"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 1.5, // Adjust the speed of highlight animation
                  ease: "easeInOut",
                }}
                style={{
                  zIndex: 1,
                  backgroundColor: "#FFFF00", // Background highlight color
                }}
              ></motion.div>
            </span>
          </h2>
          <span className="text-base md:text-lg">
            a design-minded fullstack software developer focused on building
            beautiful interfaces & experiences
          </span>
        </div>

        <p className="mt-10 text-lg md:text-xl">
          Get in touch 👉{" "}
          <a href="mailto:adapauline.villacarlos@gmail.com" className="title-link">
            adapauline.villacarlos@gmail.com
          </a>
        </p>
      </motion.div>
    </div>
  );
}
