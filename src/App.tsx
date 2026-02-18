import "@fortawesome/fontawesome-free/css/all.min.css";
import { useEffect, useState } from "react";
import About from "./about";
import "./App.css";
import Contact from "./contact";
import Exp from "./experiences";
import Footer from "./footer";
import Header from "./header";
import Hero from "./hero";
import Projects from "./projects";
import ScrollToTop from "./scrolling";
import Services from "./services";
import Skills from "./skills";
import Splash from "./splash";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "skills",
        "services",
        "projects",
        "exp",
        "contact",
      ];
      let current = "hero";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (window.scrollY >= top - height / 3) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initialize on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [activeDarkMode, setActiveDarkMode] = useState(()=>{
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  setTimeout(() => {
    setShowSplash(false);
  }, 4000);
  if (showSplash) {
    return <Splash />;
  }

  return (
    <>
      <div className={activeDarkMode ? " box dark" : "box"}>
        <ScrollToTop />
        <Header
          activeSection={activeSection}
          activeDarkMode={activeDarkMode}
          setActiveDarkMode={setActiveDarkMode}
        />
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="exp">
          <Exp />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </div>
    </>
  );
}

export default App;
