import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="w-full mx-auto max-w-screen-xl flex flex-col items-center md:flex-row md:items-center mt-16 md:mt-24 md:py-10 py-5 px-6 md:px-20 md:justify-between">
        <span className="text-sm dark:text-white text-center sm:text-left">
          Developed by Ada Villacarlos 💖
        </span>
        <ul className="flex flex-row items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 md:flex-row sm:mt-0">
          <li>
            <a
              href="mailto:adapauline.villacarlos@gmail.com"
              className="hover:underline me-4 md:me-6 mb-2 md:mb-0 text-base"
            >
              Mail
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/adavillacarlos"
              className="hover:underline me-4 md:me-6 mb-2 md:mb-0 text-base"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/adavillacarlos"
              className="hover:underline me-4 md:me-6 mb-2 md:mb-0 text-base"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.behance.net/adavillacarlos"
              className="hover:underline text-base"
            >
              Behance
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
