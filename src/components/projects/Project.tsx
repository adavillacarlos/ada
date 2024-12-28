export default function Project() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 md:px-20 mt-16 md:mt-20 md:py-10 max-w-screen-lg mx-auto">
      <div className="flex justify-start md:justify-end md:col-span-1">
        <span className="font-bold text-left md:text-right pb-4 md:mr-20 text-blue-600">
          FEATURED PROJECTS
        </span>
      </div>
      <div className="col-span-2 dark:text-white">
        <div className="space-y-8">
          <div className="grid grid-cols-1 gap-4">
            <div className="flex flex-col">
              <div className="font-semibold">Motion</div>
              <div className="text-gray-300 text-sm">
                A mobile app that analyzes yoga practitioners' pose accuracy and
                consistency in real-time, providing instant feedback and
                tracking performance history across previous sessions.
              </div>
              <div className="flex flex-wrap gap-1 mt-2">
                <span className="border border-blue-500 text-blue-500 px-2 py-0.5 text-xs rounded">
                  Java
                </span>
                <span className="border border-blue-500 text-blue-500 px-2 py-0.5 text-xs rounded">
                  Python
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="flex flex-col">
              <div className="font-semibold">InquireNear</div>
              <div className="text-gray-300 text-sm">
                A mobile app that connects users with real-time information
                seekers (inquirers). It includes a web-based admin dashboard for
                monitoring issues, processing payments, and managing
                interactions between users and inquirers.
              </div>
              <div className="flex flex-wrap gap-1 mt-2">
                <span className="border border-blue-500 text-blue-500 px-2 py-0.5 text-xs rounded">
                  Javascript
                </span>
                <span className="border border-blue-500 text-blue-500 px-2 py-0.5 text-xs rounded">
                  React
                </span>
                <span className="border border-blue-500 text-blue-500 px-2 py-0.5 text-xs rounded">
                  Flutter
                </span>
                <span className="border border-blue-500 text-blue-500 px-2 py-0.5 text-xs rounded">
                  Firebase
                </span>
                <span className="border border-blue-500 text-blue-500 px-2 py-0.5 text-xs rounded">
                  Firestore
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="flex flex-col">
              <div className="font-semibold">Relux</div>
              <div className="text-gray-300 text-sm">
                An e-commerce platform for browsing, ordering, and purchasing
                furniture online. The app also supports secure payment options
                for a seamless shopping experience.
              </div>
              <div className="flex flex-wrap gap-1 mt-2">
                <span className="border border-blue-500 text-blue-500 px-2 py-0.5 text-xs rounded">
                  React
                </span>
                <span className="border border-blue-500 text-blue-500 px-2 py-0.5 text-xs rounded">
                  Typescript
                </span>
                <span className="border border-blue-500 text-blue-500 px-2 py-0.5 text-xs rounded">
                  C#
                </span>
                <span className="border border-blue-500 text-blue-500 px-2 py-0.5 text-xs rounded">
                  .NET
                </span>
                <span className="border border-blue-500 text-blue-500 px-2 py-0.5 text-xs rounded">
                  MySQL
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
