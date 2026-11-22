import { useState } from "react";
import "./footer1.css";

export default function Footer({ showGoTop }: { showGoTop: boolean }) {
  const [isFaceVisible, setIsFaceVisible] = useState(false);

  const handleLabelClick = () => {
    const SHOW_DURATION = 3200;
    setIsFaceVisible((prev) => !prev);
    setTimeout(() => {
      setIsFaceVisible(false);
    }, SHOW_DURATION);
  };

  return (
    <footer className="footer-root">
      <div className="footer-content">
        {/* Interactive Author Badge */}
        <div className="footer-author-box" onClick={handleLabelClick} title="Click for easter egg ✨">
          <span className="author-prefix">// Designed & Built by</span>
          <span className="author-name">
            Adnan Khan <span className="author-sparkle">🐾</span>
          </span>

          {/* Easter egg face popup */}
          <div className={`face-hover ${isFaceVisible ? "clicked" : ""}`}>
            <div className="face-hover-ring">
              <img src="/icons/new-pfp.png" alt="Adnan Khan" />
            </div>
          </div>
        </div>

        {/* Social Quick-Links */}
        <div className="footer-social-links">
          <a
            href="https://github.com/adnankhan003"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-btn"
            title="GitHub Profile"
          >
            <img src="/icons/github.svg" alt="" aria-hidden="true" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/adnan-khan-31ab14198/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-btn"
            title="LinkedIn Profile"
          >
            <img src="/icons/linkedin.svg" alt="" aria-hidden="true" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://www.instagram.com/adnan._.khan3/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-btn"
            title="Instagram Profile"
          >
            <img src="/icons/instagram.svg" alt="" aria-hidden="true" />
            <span>Instagram</span>
          </a>
        </div>

        {/* Engineering Philosophy / Copyright Note */}
        <div className="footer-copyright">
          <span>Over and out... 🤺</span>
        </div>
      </div>

      {/* Floating Go To Top Action */}
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
    </footer>
  );
}
