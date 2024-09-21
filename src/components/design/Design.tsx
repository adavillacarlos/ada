import React from "react";

export default function Design() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 md:px-20 mt-16 md:mt-24 md:py-10 max-w-screen-lg mx-auto">
      <div className="flex justify-start md:justify-end md:col-span-1">
        <span className="font-bold text-left md:text-right pb-4 md:mr-20 text-blue-600">
          FEATURED DESIGNS
        </span>
      </div>
      <div className="col-span-2 dark:text-white">
        <div className="space-y-8">
          <div className="grid grid-cols-1 gap-4">
            <div className="flex flex-col">
              <div className="font-semibold">Lumena</div>
              <div className="text-gray-300">
                A mobile application that evaluates a yoga practitioner’s pose
                accuracy and consistency in real-time and provides a performance
                history of previous executions.
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex flex-col">
              <div className="font-semibold">Topline</div>
              <div className="text-gray-300">
                A mobile application that evaluates a yoga practitioner’s pose
                accuracy and consistency in real-time and provides a performance
                history of previous executions.
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex flex-col">
              <div className="font-semibold">Busify</div>
              <div className="text-gray-300">
                A mobile application that evaluates a yoga practitioner’s pose
                accuracy and consistency in real-time and provides a performance
                history of previous executions.
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex flex-col">
              <div className="font-semibold">GreenApp</div>
              <div className="text-gray-300">
                A furniture shop that allows you to browse, order, and shop
                furnitures online.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
