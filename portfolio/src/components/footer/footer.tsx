import { useState } from "react";
import "./footer1.css";

export default function Footer({ showGoTop }: { showGoTop: boolean }) {
  const [isFaceVisible, setIsFaceVisible] = useState(false);
  const handleLabelClick = () => {
    const SHOW_DURATION = 3000;
    setIsFaceVisible((prev) => !prev);
    setTimeout(() => {
      setIsFaceVisible(false);
    }, SHOW_DURATION);
  };

  return (
    <>
      <div className="footer-root">
        <div className="footer">
          <div className="label" onClick={handleLabelClick}>
            Made by <strong>Adnan Khan🐾</strong>
            <div className={`face-hover ${isFaceVisible ? "clicked" : ""}`}>
              <img src="/icons/pfp-footer.png" alt="Adnan Khan's face" />
            </div>
          </div>
          <div className="social-links">
            <a href="https://github.com/adnankhan003" target="_blank">
              <img src="/icons/github.svg" alt="GitHub" />
            </a>
            <a
              href="https://www.linkedin.com/in/adnan-khan-31ab14198/"
              target="_blank"
            >
              <img src="/icons/linkedin.svg" alt="LinkedIn" />
            </a>
            <a href="https://www.instagram.com/adnan._.khan3/" target="_blank">
              <img src="/icons/instagram.svg" alt="Instagram" />
            </a>
          </div>
        </div>
        <button
          className={`go-top ${showGoTop ? "show" : ""}`}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img src="/icons/up-arrow.svg" alt="up-arrow" />
        </button>
      </div>
    </>
  );
}
