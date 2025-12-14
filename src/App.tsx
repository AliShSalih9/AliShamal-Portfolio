  
import '@fortawesome/fontawesome-free/css/all.min.css';
import About from './about';
import './App.css';
import Header from './header';
import Hero from './hero';
import Skills from './skills';
import Services from './services';
import Contact from './contact';
import Projects from './projects';
import Exp from './experiences';
import Footer from './footer';
import Splash from './splash';
import { useEffect, useState } from 'react';
import ScrollToTop from './scrolling';

 

 


function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [activeSection, setActiveSection] = useState('Home');

 useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero","about","skills","services","projects","exp","contact"];
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
  
  setTimeout(() => {
    setShowSplash(false);
  }, 4000);
  if (showSplash) {
    return <Splash />;
  }
  return (
  <>  
  <div className='box'>
    <ScrollToTop/>
    <Header activeSection={activeSection}/>
     <section id="hero"><Hero /></section>
  <section id="about"><About /></section>
  <section id="skills"><Skills /></section>
  <section id="services"><Services /></section>
  <section id="projects"><Projects /></section>
  <section id="exp"><Exp /></section>
  <section id="contact"><Contact /></section>
  <Footer />
</div>
  </>
  
  )
}

export default App
