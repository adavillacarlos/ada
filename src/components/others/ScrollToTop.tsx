import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  // Scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <div className="fixed bottom-8 right-8">
      {isVisible && (
        <button
        onClick={scrollToTop}
        className="p-3 transition duration-300 group"
      >
        <span className="text-3xl inline-block transition-transform duration-300 ease-out group-hover:animate-move-up">
          ☝️
        </span>
      </button>
      )}
    </div>
  );
}
