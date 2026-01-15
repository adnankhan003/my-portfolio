import { useEffect, useRef, useState } from "react";
import Home from "./components/home/home";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import Skills from "./components/skills/skills";
import Contacts from "./components/contacts/contacts";
import Footer from "./components/footer/footer";
import "./App1.css";

function App() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactsRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);

  const [showGoTop, setShowGoTop] = useState(false);

  useEffect(() => {
    if (homeRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // When Home is NOT intersecting (scrolled past), show the button
            setShowGoTop(!entry.isIntersecting);
          });
        },
        // We use a rootMargin to make the observation start just after the Home component
        {
          threshold: 0, // Trigger immediately when 0% of Home is visible
          rootMargin: "0px 0px -100% 0px", // This ensures the observer triggers once the Home component is fully out of view
        }
      );

      observer.observe(homeRef.current);

      return () => observer.disconnect();
    }
  }, []);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    projectRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToskills = () => {
    skillsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContacts = () => {
    contactsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="root-app">
      <div className="screen" ref={homeRef}>
        <Home
          scrollToAbout={scrollToAbout}
          scrollToProjects={scrollToProjects}
          scrollToskills={scrollToskills}
          scrollToContacts={scrollToContacts}
        />
      </div>
      <div className="screen">
        <About aboutRef={aboutRef} />
      </div>
      <div className="screen">
        <Projects projectRef={projectRef} />
      </div>
      {/* <div className="screen"> */}
      <Skills skillsRef={skillsRef} />
      {/* </div> */}
      {/* <div className="screen"> */}
      <Contacts contactsRef={contactsRef} />
      {/* </div> */}
      <Footer showGoTop={showGoTop} />
    </div>
  );
}

export default App;
