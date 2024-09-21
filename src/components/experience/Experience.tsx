import React from "react";

export default function Experience() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 md:px-20 mt-16 md:mt-24 md:py-10 max-w-screen-lg mx-auto ">
      <div className="flex justify-start md:justify-end md:col-span-1">
        <span className="font-bold text-left md:text-right pb-4 md:mr-20 text-blue-600">
          EXPERIENCE
        </span>
      </div>
      <div className="col-span-2 dark:text-white">
        <div className="space-y-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <div className="font-semibold">Full Scale</div>
              <div className="text-gray-300">Software Developer</div>
            </div>
            <div className="text-gray-400 text-right">Jul 2023 - Present</div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <div className="font-semibold">Freelance</div>
              <div className="text-gray-300">UI/UX Designer</div>
            </div>
            <div className="text-gray-400 text-right">Jan - Jul 2024</div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <div className="font-semibold">Full Scale</div>
              <div className="text-gray-300">Software Developer Intern</div>
            </div>
            <div className="text-gray-400 text-right">Jul - Aug 2022</div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <div className="font-semibold">KLB Solutions</div>
              <div className="text-gray-300">Fullstack Developer</div>
            </div>
            <div className="text-gray-400 text-right">Aug - Sept 2021</div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <div className="font-semibold">Freelance</div>
              <div className="text-gray-300">Graphic Designer</div>
            </div>
            <div className="text-gray-400 text-right">Jul 2019 - Mar 2021</div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <div className="font-semibold">Freelance</div>
              <div className="text-gray-300">Frontend Web Developer</div>
            </div>
            <div className="text-gray-400 text-right">Jul 2019 - Mar 2020</div>
          </div>
        
        </div>
        <div className="mt-20 md:mt-20 dark:text-white">
            <h1 className="text-lg font-bold">View My Resume</h1>
          </div>
      </div>
    </div>
  );
}
