export default function Design() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 md:px-20 mt-16 md:mt-20 md:py-10 max-w-screen-lg mx-auto">
      <div className="flex justify-start md:justify-end md:col-span-1">
        <span className="font-bold text-left md:text-right pb-4 md:mr-20 text-blue-600">
          FEATURED DESIGNS
        </span>
      </div>
      <div className="col-span-2 dark:text-white">
        <div className="space-y-8">
          <div className="grid grid-cols-1 gap-4">
            <div className="flex flex-col">
              <div className="font-semibold"><a className="title-link" href="https://www.behance.net/gallery/210957753/Auction-House-Web-Design">Lumena</a></div>
              <div className="text-gray-300 text-sm">
              A modern, user-friendly website was designed for Lumena Auctions, 
              an auction house that allows users to explore ongoing and past auctions, shop, and sell items. 
              The design emphasizes simplicity and ease of navigation, creating an intuitive experience for all users.
              </div>
            </div>
          </div>
          {/* <div className="grid grid-cols-1 gap-4">
            <div className="flex flex-col">
              <div className="font-semibold"><a className="title-link" href="https://www.behance.net/gallery/213980689/Company-Website-UI">Topline</a></div>
              <div className="text-gray-300 text-sm">
              A clean and informative website was created to showcase the company’s history, 
              services, and timeline. It also features a hiring section, providing an engaging and seamless experience 
              for potential employees and visitors interested in learning more about the company
              </div>
            </div>
          </div> */}
          <div className="grid grid-cols-1 gap-4">
            <div className="flex flex-col">
              <div className="font-semibold"><a className="title-link" href="https://www.behance.net/gallery/135424313/Busify-App">Busify</a></div>
              <div className="text-gray-300 text-sm">
              Busify is a mobile application designed to help users track live buses in real-time. 
              With a streamlined interface, the app enables users to plan their journeys and stay updated with the latest bus schedules, 
              making public transportation more accessible and efficient.
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex flex-col">
              <div className="font-semibold"><a className="title-link" href="https://www.behance.net/gallery/135423621/GreenApp">GreenApp</a></div>
              <div className="text-gray-300 text-sm">
              GreenApp is a mobile application that gamifies recycling, allowing users to earn points for recycling items.
              Powered by AI, the app identifies items and provides proper recycling instructions. 
              It also connects users to local environmental events and projects, fostering a community-driven approach to sustainability.
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
