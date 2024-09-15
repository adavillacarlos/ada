import React from "react";

export default function Project() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 md:px-20 mt-12 md:mt-20 md:py-10  max-w-screen-lg mx-auto dark:text-white">
      <div className="flex justify-start md:justify-end md:col-span-1">
        <span className="font-bold text-left md:text-right pb-4 md:mr-20">
          My Projects
        </span>
      </div>
      <div className="md:col-span-2">
        <h1>Get My Resume</h1>
      </div>
    </div>
  );
}
