import React from "react";
import "./title.scss";
export default function Title() {
  return (
    <div className="h-screen flex items-center px-4 md:px-10 md:ml-20 dark:text-white">
      <div>
        <h2 className="text-4xl md:text-6xl mb-10 ">
          Hello! <span className="wave">👋</span>
        </h2>
        <div className="mt-6">
          <h2 className="text-3xl md:text-5xl mb-2 ">
            I'm <strong className="font-bold">Ada Pauline Villacarlos</strong>
          </h2>
          <span className="text-base md:text-lg ">
            a design-minded fullstack software developer focused on building
            beautiful interfaces & experiences
          </span>
        </div>

        <p className="mt-10 text-lg md:text-xl">
          Get in touch 👉{" "}
          <a
            href="mailto:adapauline.villacarlos@gmail.com"
            className="title-link"
          >
            adapauline.villacarlos@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}
