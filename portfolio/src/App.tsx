import { useEffect, useRef, useState } from "react";
import Home from "./components/home/home";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import Skills from "./components/skills/skills";
import Contacts from "./components/contacts/contacts";
import Footer from "./components/footer/footer";
import "./App.css";

function App() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactsRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);

  const [showGoTop, setShowGoTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger as soon as user leaves the Home section (> 160px)
      setShowGoTop(window.scrollY > 160);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
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
      <div className="screen">
        <Skills skillsRef={skillsRef} />
      </div>
      <div className="screen">
        <Contacts contactsRef={contactsRef} />
      </div>
      <Footer />

      {/* Floating Go To Top Action - Fixed to Viewport Across Entire Page */}
      <button
        className={`go-top ${showGoTop ? "show" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll back to top"
        title="Return to top"
      >
        <span className="go-top-ring">
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="go-top-arrow"
          >
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </span>
        <span className="go-top-text">TOP</span>
      </button>
    </div>
  );
}

export default App;
