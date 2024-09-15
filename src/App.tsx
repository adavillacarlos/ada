import { useEffect, useState } from "react";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Navigation from "./components/navigation/Navigation";
import Resume from "./components/resume/Resume";
import Skills from "./components/skills/Skills";
import Title from "./components/titles/Title";

function App() {
  return (
    <div className="dark">
      <Navigation />
      <div className=" dark:bg-gray-900">
        <Title />
        <About />
        <Skills />
        <Experience />
        <Resume />
      </div>
    </div>
  );
}

export default App;
