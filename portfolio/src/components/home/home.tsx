import ALogo from "/icons/a-icon-white.svg";
import "./home1.css";
import { useEffect, useRef, useState } from "react";
import AnimatedCursorText from "./backend-text";

const CLICK_REACTIONS = [
  { text: "nice!", icon: "🚀" },
  { text: "again?", icon: "⚡" },
  { text: "combo x2!", icon: "🔥" },
  { text: "combo x3!", icon: "💥" },
  { text: "supernova!", icon: "✨" },
];

export default function Home({
  scrollToAbout,
  scrollToProjects,
  scrollToskills,
  scrollToContacts,
}: any) {
  const logoRef = useRef<HTMLImageElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLogoAnimating, setIsLogoAnimating] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [badgeText, setBadgeText] = useState("click me");
  const [badgeIcon, setBadgeIcon] = useState("✨");
  const resetTimerRef = useRef<number | null>(null);

  // Close mobile menu when clicking outside or pressing Escape
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  useRevealOnScroll();

  function animateC2() {
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
      setIsLogoAnimating(true);

      const nextCount = clickCount + 1;
      setClickCount(nextCount);
      const reaction = CLICK_REACTIONS[(nextCount - 1) % CLICK_REACTIONS.length];
      setBadgeText(reaction.text);
      setBadgeIcon(reaction.icon);

      logo.classList.remove("animate");
      // Force DOM reflow to allow immediate re-triggering
      void logo.offsetWidth;
      logo.classList.add("animate");

      // After a moment of idle, settle to an inviting "again? ↺" state
      if (resetTimerRef.current) {
        window.clearTimeout(resetTimerRef.current);
      }
      resetTimerRef.current = window.setTimeout(() => {
        setBadgeText("again? ↺");
        setBadgeIcon("⚡");
      }, 2200);

      logo.addEventListener(
        "animationend",
        () => {
          logo.classList.remove("animate");
          setIsLogoAnimating(false);
        },
        { once: true }
      );
    }
  }

  useEffect(() => {
    return () => {
      if (resetTimerRef.current) {
        window.clearTimeout(resetTimerRef.current);
      }
    };
  }, []);

  function useRevealOnScroll() {
    useEffect(() => {
      const elements = document.querySelectorAll(".reveal");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("active");
            } else {
              entry.target.classList.remove("active");
            }
          });
        },
        { threshold: 0.15 }
      );

      elements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }, []);
  }

  const wrapperRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const reveal = revealRef.current;

    if (!wrapper || !reveal) return;

    let mouseX = 0;
    let mouseY = 0;
    let x = 0;
    let y = 0;
    let visible = false;

    const animate = () => {
      x += (mouseX - x) * 0.1;
      y += (mouseY - y) * 0.1;

      reveal.style.setProperty("--x", `${x}px`);
      reveal.style.setProperty("--y", `${y}px`);

      requestAnimationFrame(animate);
    };

    animate();

    const move = (e: MouseEvent) => {
      const rect = wrapper.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;

      if (!visible) {
        visible = true;
        reveal.classList.add("active");
      }
    };

    const leave = () => {
      visible = false;
      reveal.classList.remove("active");
    };

    wrapper.addEventListener("mousemove", move);
    wrapper.addEventListener("mouseleave", leave);

    return () => {
      wrapper.removeEventListener("mousemove", move);
      wrapper.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <>
      <div className="root-home">
        {/* Top Header */}
        <header className="header">
          {/* Interactive Logo with Text Denoter & Shockwave Animation */}
          <div className="upper-logo reveal">
            <div
              className={`logo-interactive-group ${isLogoAnimating ? "is-animating" : ""}`}
              onClick={animateLogo}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  animateLogo();
                }
              }}
              aria-label="Click logo to trigger animation"
              title="Click to trigger animation"
            >
              <div className="logo-bracket">
                <span className="bracket bracket-left">{"{"}</span>
                <div className="logo-img-wrapper">
                  {isLogoAnimating && <span className="logo-shockwave"></span>}
                  <img
                    src={ALogo}
                    ref={logoRef}
                    className="logo"
                    alt="Adnan Khan initial logo"
                  />
                </div>
                <span className="bracket bracket-right">{"}"}</span>
              </div>

              {/* Text Denoter Indicator with Interactive Micro-Reactions */}
              <div className="logo-denoter">
                <span className="denoter-pulse"></span>
                <span className="denoter-text">{badgeText}</span>
                <span className="denoter-sparkle">{badgeIcon}</span>
              </div>
            </div>
          </div>

          {/* Navigation Bar */}
          <nav className="tab-bar">
            {/* Desktop Navigation Links */}
            <div className="tabs desktop-tabs">
              <a className="tab active" href="/" rel="noopener noreferrer">
                <span>Home</span>
              </a>

              <a
                className="tab"
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToAbout();
                }}
              >
                <span>About</span>
              </a>

              <a
                className="tab"
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToProjects();
                }}
              >
                <span>Projects</span>
              </a>

              <a
                className="tab"
                href="#skills"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToskills();
                }}
              >
                <span>Skills</span>
              </a>

              <a
                className="tab"
                href="#contacts"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToContacts();
                }}
              >
                <span>Contacts</span>
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div
              className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}
              ref={mobileMenuRef}
            >
              <button
                className="dots"
                type="button"
                aria-label="Toggle navigation menu"
                aria-expanded={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              >
                <img src="/icons/menu-new.svg" alt="Menu" />
              </button>

              <div className="dropdown">
                <a
                  href="/"
                  className="dropdown-item"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="dropdown-item"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToAbout();
                    setIsMobileMenuOpen(false);
                  }}
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="dropdown-item"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToProjects();
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Projects
                </a>
                <a
                  href="#skills"
                  className="dropdown-item"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToskills();
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Skills
                </a>
                <a
                  href="#contacts"
                  className="dropdown-item"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToContacts();
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Contacts
                </a>
              </div>
            </div>
          </nav>
        </header>

        {/* Ambient Subtle Divider */}
        <div className="header-divider"></div>

        {/* Hero Main Content */}
        <main className="content reveal">
          <div className="content-text hero-layout">
            {/* Left Content Column */}
            <div className="hero-left">
              {/* Developer Eyebrow Greeting */}
              <div className="c1">
                <span className="c1-tag">
                  <span className="c1-prompt">&gt;</span> hey there, I'm
                </span>
              </div>

              {/* Name */}
              <div
                className="c2-wrap"
                onClick={(e) => {
                  e.preventDefault();
                  animateC2();
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    animateC2();
                  }
                }}
                title="Hover or click letters"
              >
                <h1 className="c2">
                  {"Adnan Khan.".split("").map((letter, idx) => (
                    <span key={idx} className="letter">
                      {letter === " " ? "\u00A0" : letter}
                    </span>
                  ))}
                </h1>
              </div>

              {/* Bio with Typewriter Scanner Text */}
              <p className="c3">
                <AnimatedCursorText /> focused on building reliable, scalable, and
                high-performance distributed systems.
              </p>

              {/* Specialization & Experience Highlights */}
              <div className="hero-highlights">
                <div className="hero-highlight c4">
                  <span className="highlight-badge">
                    <span className="highlight-icon">🚀</span>
                    <span>
                      Specializing in Backend Engineering{" "}
                      <span className="tech-stack-preview">
                        (Go &bull; SQL &bull; Node.js &bull; Python &bull; Redis)
                      </span>
                    </span>
                  </span>
                </div>

                <div className="hero-highlight c5">
                  <span className="highlight-badge">
                    <span className="highlight-icon">⚡</span>
                    <span>
                      Software Development Engineer at{" "}
                      <a
                        className="c6"
                        href="https://www.jiocx.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <strong>Reliance - Jio</strong>
                        <span className="external-arrow">↗</span>
                      </a>
                    </span>
                  </span>
                </div>
              </div>
            </div>

            {/* Right Media Column: Profile Photo */}
            <div className="hero-right">
              {/* Profile Photo with 5 Multi-Directional Orbital Rings and Batman Hover Reveal */}
              <div className="pfp-wrapper">
                {/* 5 Concentric Orbital Rings (Alternating Clockwise & Counter-Clockwise) */}
                <div className="orbital-system" aria-hidden="true">
                  <span className="orbital-ring ring-1"></span>
                  <span className="orbital-ring ring-2"></span>
                  <span className="orbital-ring ring-3"></span>
                  <span className="orbital-ring ring-4"></span>
                  <span className="orbital-ring ring-5"></span>
                </div>

                {/* Portrait Frame & Batman Easter Egg */}
                <div className="pfp-frame" ref={wrapperRef}>
                  <img
                    src="/icons/new-pfp.png"
                    alt="Adnan Khan"
                    className="pfp"
                  />
                  <div
                    className="pfp-reveal"
                    ref={revealRef}
                    aria-hidden="true"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links & Action Pills */}
          <div className="lower-bar">
            <div className="lower-tabs">
              <a
                className="lower-tab"
                href="https://github.com/adnankhan003"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Profile"
              >
                <img src="/icons/github.svg" alt="" aria-hidden="true" />
                <span>GitHub</span>
              </a>

              <a
                className="lower-tab"
                href="https://www.linkedin.com/in/adnan-khan-31ab14198/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
              >
                <img src="/icons/linkedin.svg" alt="" aria-hidden="true" />
                <span>LinkedIn</span>
              </a>

              <a
                className="lower-tab"
                href="mailto:adnankhannew777@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Send an Email"
              >
                <img src="/icons/email.svg" alt="" aria-hidden="true" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Location & Status Pill */}
          <div className="loc-container">
            <span className="status-dot"></span>
            <img src="/icons/location.svg" alt="Location" />
            <span>Navi Mumbai, Maharashtra</span>
          </div>
        </main>
      </div>
    </>
  );
}