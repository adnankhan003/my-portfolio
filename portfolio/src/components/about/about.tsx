import "./about1.css";

const focusAreas = [
  "Scalable backend architecture",
  "Performance optimization",
  "Secure API design",
  "Cloud-integrated systems",
];

const quickStats = [
  { label: "Role", value: "Software Developer Engineer" },
  { label: "Company", value: "Jio Platforms Limited" },
  { label: "Core Stack", value: "Go, SQL, Redis, Elasticsearch" },
];

function About({ aboutRef }: any) {
  return (
    <div className="root-about" ref={aboutRef}>
      <div className="about-copy reveal">
        <p className="about-eyebrow">About Me</p>
        <h2 className="about-title">
          Backend-focused engineer building systems that stay fast, reliable,
          and clean under scale.
        </h2>
        <p className="about-lead">
          I am <strong>Adnan Khan</strong>, a backend-focused software engineer
          who enjoys turning complex requirements into secure, maintainable, and
          high-performance systems.
        </p>
        <p className="about-body">
          At{" "}
          <a
            href="https://www.jiocx.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jio Platforms Limited
          </a>
          , I contribute to production backend systems using Go, SQL, Redis,
          Elasticsearch, and cloud services. My work centers on API design,
          authentication and authorization, caching, analytics workflows, and
          building services that perform reliably at scale.
        </p>
        <p className="about-body">
          I care about thoughtful engineering: strong fundamentals, practical
          security, measurable performance improvements, and developer-friendly
          solutions that are easy to extend over time.
        </p>

        <div className="about-focus">
          {focusAreas.map((item) => (
            <span key={item} className="focus-pill">
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="about-panel reveal">
        <div className="about-panel-glow"></div>
        <div className="about-card">
          <div className="about-card-header">
            <div className="signal-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span className="about-card-label">Profile Snapshot</span>
          </div>

          <div className="about-card-body">
            {quickStats.map((item) => (
              <div key={item.label} className="about-stat">
                <span className="about-stat-label">{item.label}</span>
                <span className="about-stat-value">{item.value}</span>
              </div>
            ))}
          </div>

          <div className="about-visual">
            <img
              className="about-gif"
              src="https://cdn.dribbble.com/userupload/22817914/file/original-4a0241412a084cc06b9ad72643d85773.gif"
              alt="Animated workspace illustration"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
