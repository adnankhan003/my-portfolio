import "./about.css";
import { useEffect } from "react";

const engineeringPillars = [
  {
    icon: "⚡",
    title: "High-Throughput Go APIs",
    desc: "Architecting concurrent REST services using Go (Fiber) optimized for low latency and high-volume business workflows.",
  },
  {
    icon: "📡",
    title: "Real-Time & Event Streams",
    desc: "Building asynchronous event-driven pipelines with Apache Kafka, WebSockets for live sync, and WebRTC video streaming.",
  },
  {
    icon: "🛡️",
    title: "Zero-Trust Security",
    desc: "Granular RBAC, JWT validation, client-wise data isolation, and AES-256-GCM encryption for credentials and enterprise documents.",
  },
  {
    icon: "☁️",
    title: "Distributed Data & Cloud",
    desc: "Multi-tiered Redis caching to eliminate hotspots, SQL/Elasticsearch tuning, Docker, and Google Cloud Storage (GCS).",
  },
];

const impactMetrics = [
  { value: "2.5+ Yrs", label: "Backend Engineering", sub: "Production experience" },
  { value: "200+", label: "Enterprise Clients", sub: "Supported in production" },
  { value: "~80%", label: "Bandwidth Reduced", sub: "Edge-cloud video pipeline" },
  { value: "AES-256", label: "Data Encryption", sub: "End-to-end security" },
];

const systemSpecs = [
  { label: "Role", value: "Software Development Engineer I" },
  { label: "Company", value: "Jio Platforms Limited" },
  { label: "Core Stack", value: "Go, Fiber, SQL, Redis, Kafka" },
  { label: "Cloud & Infra", value: "GCP (GCS), Azure, Docker, Linux" },
];

const focusTags = [
  "Go (Golang)",
  "Distributed Systems",
  "Apache Kafka",
  "WebSockets",
  "Redis Caching",
  "Zero-Trust RBAC",
];

function About({ aboutRef }: any) {
  useEffect(() => {
    const elements = document.querySelectorAll(".about-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="root-about" ref={aboutRef} id="about">
      {/* Ambient background glow */}
      <div className="about-ambient-glow" aria-hidden="true"></div>

      {/* Main 2-Column Dashboard */}
      <div className="about-dashboard">
        {/* Left Column: Story & Engineering Pillars */}
        <div className="about-left about-reveal">
          <div className="about-eyebrow">
            <span className="eyebrow-prefix"> 💠 </span> ABOUT ME
          </div>

          <h2 className="about-headline">
            Architecting scalable multi-tenant platforms, real-time communication
            systems, and distributed backend services.
          </h2>

          <div className="about-story">
            <p className="about-lead">
              I am <strong>Adnan Khan</strong>, a Software Engineer with{" "}
              <strong>2.5+ years of experience</strong> building enterprise-grade
              applications and distributed backend systems, with primary
              expertise in <strong>Go (Golang)</strong>.
            </p>

            <p className="about-body">
              At{" "}
              <a
                href="https://www.jiocx.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="about-company-link"
              >
                Jio Platforms Limited
                <span className="link-arrow">↗</span>
              </a>
              , I develop scalable REST APIs, business workflows, and real-time
              systems supporting <strong>200+ enterprise clients</strong>. My
              experience spans enterprise CRM workflows, appointment automation,
              and AI video surveillance infrastructure.
            </p>

            <p className="about-body">
              My engineering approach prioritizes measurable reliability:
              reducing database contention through strategic{" "}
              <strong>Redis caching</strong>, event-driven pipelines with{" "}
              <strong>Kafka & WebSockets</strong>, and zero-trust{" "}
              <strong>RBAC & AES-256-GCM encryption</strong>.
            </p>
          </div>

          {/* 4 Engineering Pillars */}
          <div className="about-pillars-container">
            <h3 className="pillars-header">Engineering Pillars</h3>
            <div className="about-pillars-grid">
              {engineeringPillars.map((pillar) => (
                <div key={pillar.title} className="pillar-card">
                  <div className="pillar-icon-box">{pillar.icon}</div>
                  <div className="pillar-content">
                    <h4 className="pillar-title">{pillar.title}</h4>
                    <p className="pillar-desc">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: System Telemetry & Live Impact Metrics */}
        <div className="about-right about-reveal">
          <div className="system-terminal-card">
            {/* Terminal Window Header */}
            <div className="terminal-header">
              <div className="window-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="terminal-title">
                adnan@jio:~# sys_info
              </div>
              <div className="terminal-status">
                <span className="live-ping"></span>
                <span className="status-text">ONLINE</span>
              </div>
            </div>

            {/* System Specs List */}
            <div className="terminal-body">
              <div className="terminal-section-title">SYSTEM SPECIFICATIONS</div>
              <div className="specs-list">
                {systemSpecs.map((spec) => (
                  <div key={spec.label} className="spec-row">
                    <span className="spec-key">{spec.label}:</span>
                    <span className="spec-val">{spec.value}</span>
                  </div>
                ))}
              </div>

              {/* Impact Metrics Matrix */}
              <div className="terminal-section-title">PRODUCTION IMPACT MATRIX</div>
              <div className="metrics-grid">
                {impactMetrics.map((metric) => (
                  <div key={metric.label} className="metric-tile">
                    <div className="metric-value">{metric.value}</div>
                    <div className="metric-label">{metric.label}</div>
                    <div className="metric-sub">{metric.sub}</div>
                  </div>
                ))}
              </div>

              {/* Focus Tags / Architecture Badges */}
              <div className="terminal-section-title">CORE FOCUS DOMAINS</div>
              <div className="focus-tags-list">
                {focusTags.map((tag) => (
                  <span key={tag} className="focus-tag-chip">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Terminal Footer Indicator */}
            <div className="terminal-footer">
              <span className="prompt-symbol">&gt;</span>
              <span className="prompt-msg">
                Ready to engineer resilient, high-speed architectures.
              </span>
              <span className="terminal-blink-cursor">_</span>
            </div>
          </div>

          {/* F1 Velocity & Precision Card */}
          <div
            className="about-f1-card"
            title="Engineering for Velocity & Low Latency"
          >
            <div className="about-f1-header">
              <div className="about-f1-title-group">
                <span className="f1-indicator-dot"></span>
                <span className="about-f1-title">ENGINEERED FOR VELOCITY</span>
              </div>
              <span className="about-f1-tag">F1 PRECISION 🏎️</span>
            </div>

            <div className="about-f1-media">
              <img
                src="/icons/f1.gif"
                alt="F1 Speed & Concurrency Animation"
                className="about-f1-gif"
              />
              <div className="about-f1-overlay" aria-hidden="true"></div>
            </div>

            <div className="about-f1-footer">
              <span className="f1-stat">
                <span className="f1-stat-dot"></span> High Throughput
              </span>
              <span className="f1-stat-sep">//</span>
              <span className="f1-stat">Low Latency</span>
              <span className="f1-stat-sep">//</span>
              <span className="f1-stat">Zero Bottlenecks</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
