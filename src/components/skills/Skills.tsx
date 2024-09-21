import React from "react";

export default function Skills() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 md:px-20 mt-16 md:mt-24 md:py-10 max-w-screen-lg mx-auto ">
      <div className="flex justify-start md:justify-end md:col-span-1">
        <span className="font-bold text-left md:text-right pb-4 md:mr-20 text-blue-600">SKILLS</span>
      </div>
      <div className="md:col-span-2 dark:text-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          <div className="md:col-span-1">
            <b className="text-blue-600">LANGUAGES</b>
            <ul className="mt-2 text-sm">
              <li>JavaScript</li>
              <li>Python</li>
              <li>Java</li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <b className="text-blue-600">FRAMEWORKS</b>
            <ul className="mt-2 text-sm">
              <li>React</li>
              <li>Vue.js</li>
              <li>Angular</li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <b className="text-blue-600">TOOLS</b>
            <ul className="mt-2 text-sm">
              <li>Git</li>
              <li>Docker</li>
              <li>Jenkins</li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <b className="text-blue-600">DESIGN</b>
            <ul className="mt-2 text-sm">
              <li>Figma</li>
              <li>Adobe XD</li>
              <li>Sketch</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
