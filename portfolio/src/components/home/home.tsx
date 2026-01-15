import ALogo from "/icons/a-icon-white.svg";
import "./home1.css";
import { useEffect, useRef } from "react";

export default function Home({
  scrollToAbout,
  scrollToProjects,
  scrollToskills,
  scrollToContacts,
}: any) {
  const logoRef = useRef<HTMLImageElement>(null);

  useRevealOnScroll();

  function animateC2() {
    // console.log("animateC2");

    if (logoRef.current) {
      const logo = logoRef.current;
      logo.classList.add("letter");

      logo.addEventListener(
        "animationend",
        () => {
          logo.classList.remove("letter");
        },
        { once: true }
      );
    }
  }

  function animateLogo() {
    if (logoRef.current) {
      const logo = logoRef.current;
      logo.classList.add("animate");

      logo.addEventListener(
        "animationend",
        () => {
          logo.classList.remove("animate");
        },
        { once: true }
      );
    }
  }

  // function animatePfp() {
  //   if (logoRef.current) {
  //     const logo = logoRef.current;
  //     logo.classList.add("animate");

  //     logo.addEventListener(
  //       "animationend",
  //       () => {
  //         logo.classList.remove("animate");
  //       },
  //       { once: true }
  //     );
  //   }
  // }

  function useRevealOnScroll() {
    useEffect(() => {
      const elements = document.querySelectorAll(".reveal");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("active");
            } else {
              entry.target.classList.remove("active"); // re-animate when scrolling back
            }
          });
        },
        { threshold: 0.2 }
      );

      elements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }, []);
  }

  return (
    <>
      <div className="root-home">
        <div className="header">
          <div className="upper-logo reveal">
            <a
              onClick={(e) => {
                e.preventDefault();
                animateLogo();
              }}
            >
              <div className="logo-bracket" style={{ display: "flex" }}>
                <div className="bracket" style={{ display: "flex" }}>
                  {"{"}
                </div>
                <div>
                  {/* <div className="arrow-down">
                    <img src="/icons/arrow-down.svg" alt="" />
                  </div> */}
                  <img src={ALogo} ref={logoRef} className="logo" alt="A" />
                </div>
                <div className="bracket" style={{ display: "flex" }}>
                  {"}"}
                </div>
              </div>
            </a>
          </div>
          <div className="tab-bar">
            {/* Laptop / Desktop tabs */}
            <div className="tabs desktop-tabs">
              <a className="tab" href="/" rel="noopener noreferrer">
                <span>Home</span>
              </a>

              <a
                className="tab"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToAbout();
                }}
                rel="noopener noreferrer"
              >
                <span>About</span>
              </a>

              <a
                className="tab"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToProjects();
                }}
                rel="noopener noreferrer"
              >
                <span>Projects</span>
              </a>

              <a
                className="tab"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToskills();
                }}
                rel="noopener noreferrer"
              >
                <span>Skills</span>
              </a>

              <a
                className="tab"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToContacts();
                }}
                rel="noopener noreferrer"
              >
                <span>Contacts</span>
              </a>
            </div>

            {/* Mobile three-dots menu */}
            <div className="mobile-menu">
              <div className="dots">
                <img src="/icons/menu-new.svg" alt="" />
              </div>

              <div className="dropdown">
                <a href="/" className="dropdown-item">
                  Home
                </a>
                <a
                  className="dropdown-item"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToAbout();
                  }}
                >
                  About
                </a>
                <a
                  className="dropdown-item"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToProjects();
                  }}
                >
                  Projects
                </a>
                <a
                  className="dropdown-item"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToskills();
                  }}
                >
                  Skills
                </a>
                <a
                  className="dropdown-item"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToContacts();
                  }}
                >
                  Contacts
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="content reveal">
          <div className="content-text">
            <div className="c1">Hey there!, I'm-</div>
            <div className="label-pfp-container">
              <div className="label-pfp">
                <div className="img-label"></div>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    animateC2();
                  }}
                >
                  <div className="c2">
                    {"Adnan Khan.".split("").map((letter, idx) => (
                      <span key={idx} className="letter">
                        {letter === " " ? "\u00A0" : letter}
                      </span>
                    ))}
                  </div>
                </a>
              </div>
              {/* <div className="pfp">
                <img src="/icons/pfp.png" alt="Adnan Khan's face" />
              </div> */}
              <div className="pfp-wrapper">
                <img src="/icons/pfp.png" alt="pfp" className="pfp" />
                {/* rotating disc */}
                <div className="rotating-disc">
                  <span className="arc arc1"></span>
                  <span className="arc arc2"></span>
                  <span className="arc arc3"></span>
                  <span className="arc arc4"></span>
                </div>
              </div>
            </div>
            <div className="c3">
              <span className="c3-1">Software Developer</span> focused on
              creating reliable, scalable, and high-performance solutions.
            </div>
            <div className="c4">
              🚀 Currently specializing in Backend (Go / SQL / Node.js / Python)
            </div>
            <div className="c5">
              ⚡ Software Developer Engineer at{" "}
              <a className="c6" href="https://www.jiocx.com/" target="_blank">
                <strong>Reliance - Jio</strong>
              </a>
            </div>
          </div>
          <div className="lower-bar">
            <div className="lower-tabs">
              <a
                className="lower-tab"
                href="https://github.com/adnankhan003"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/icons/github.svg" alt="" />
                <span style={{ color: "#018790" }}>Github</span>
              </a>

              <a
                className="lower-tab"
                href="https://www.linkedin.com/in/adnan-khan-31ab14198/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/icons/linkedin.svg" alt="" />
                <span style={{ color: "#018790" }}>LinkedIn</span>
              </a>

              <a
                className="lower-tab"
                href="mailto:adnankhannew777@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/icons/email.svg" alt="" />
                <span style={{ color: "#018790" }}>Email</span>
              </a>
            </div>
          </div>
          <div className="loc-container">
            <img src="/icons/location.svg" alt="location" />
            <span>Navi Mumbai, Maharashtra</span>
          </div>
        </div>
      </div>
    </>
  );
}
