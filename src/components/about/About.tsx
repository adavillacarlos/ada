import React from "react";

export default function About() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 md:px-20 mt-12 md:mt-20 md:py-10  max-w-screen-lg mx-auto">
      <div className="flex justify-start md:justify-end md:col-span-1">
        <span className="font-bold text-left md:text-right pb-4 md:mr-20 text-blue-600 ">ABOUT</span>
      </div>
      <div className="md:col-span-2 dark:text-white">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac
          cursus ante, ut imperdiet mauris. Cras a rutrum lacus, non ullamcorper
          lorem. Integer eu metus placerat, posuere lorem interdum, porttitor
          urna. Nunc non magna ut lacus tempor faucibus non at dui.
        </p>
      </div>
    </div>
  );
}
