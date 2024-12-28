export default function About() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 md:px-20 mt-12 md:mt-12 md:py-10  max-w-screen-lg mx-auto">
      <div className="flex justify-start md:justify-end md:col-span-1">
        <span className="font-bold text-left md:text-right pb-4 md:mr-20 text-blue-600 ">ABOUT</span>
      </div>
      <div className="md:col-span-2 dark:text-white">
        <p className="text-gray-300">
        I'm a passionate developer specializing in crafting stunning interfaces and intuitive user experiences. 
        My expertise lies at the crossroads of design and development, where I create digital solutions that are not 
        only visually striking but also optimized for performance and accessibility.
        <br/><br/>
        Currently, I work as a fullstack developer at <b className="text-white">Full Scale</b>, where I contribute to the creation and enhancement of 
        diverse applications tailored to meet unique client needs. Alongside this role, I also offer freelance UI/UX design services, 
        delivering designs that adhere to web accessibility standards and best practices, ensuring inclusive experiences for all users.
        <br/><br/>
        When I'm not working, you'll often find me reading novels, enjoying Asian dramas and anime, 
        or exploring new cafes in search of inspiration.
        </p>
      </div>
    </div>
  );
}
