import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Skills from "./components/skills/Skills";
import Title from "./components/titles/Title";
import Project from "./components/projects/Project";
import Design from "./components/design/Design";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/others/ScrollToTop";

function App() {
  return (
    <div className="dark">
      <div className=" dark:bg-gray-900">
        <Title />
        <About />
        <Skills />
        <Experience />
        <Project />
        <Design />
        <Footer />
      </div>
      <ScrollToTop/>
    </div>
  );
}

export default App;
