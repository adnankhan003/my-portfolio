import "./about1.css";
import { useEffect } from "react";

const engineeringPillars = [
  {
    icon: "⚡",
    title: "High-Throughput Go APIs",
    desc: "Architecting concurrent REST services optimized for low latency, clean interfaces, and minimal memory overhead.",
  },
  {
    icon: "🛡️",
    title: "Zero-Trust Security",
    desc: "Granular RBAC, JWT validation, and end-to-end AES-256-GCM payload encryption for mission-critical enterprise docs.",
  },
  {
    icon: "📊",
    title: "Real-Time Data Pipelines",
    desc: "Elasticsearch and SQL pipelines feeding live analytics dashboards and user-configurable CRON report automation.",
  },
  {
    icon: "☁️",
    title: "Distributed Caching & Cloud",
    desc: "Multi-tiered Redis caching to eliminate database hotspots, coupled with Docker containerization and cloud signed URLs.",
  },
];

const impactMetrics = [
  { value: "2.5+ Yrs", label: "Backend Engineering", sub: "Production experience" },
  { value: "200+", label: "Enterprise Clients", sub: "Live dashboard users" },
  { value: "< 50ms", label: "Targeted p95 Latency", sub: "Optimized response times" },
  { value: "AES-256", label: "Data Encryption", sub: "End-to-end cryptography" },
];

const systemSpecs = [
  { label: "Role", value: "Software Development Engineer" },
  { label: "Company", value: "Jio Platforms Limited" },
  { label: "Core Stack", value: "Go, SQL, Redis, Elasticsearch" },
  { label: "Cloud & Infra", value: "Azure, GCP, Docker, Linux" },
];

const focusTags = [
  "Distributed Systems",
  "High Concurrency",
  "API Security",
  "Database Tuning",
  "Cloud Native",
  "Event Automation",
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
            <span className="eyebrow-prefix">// 01.</span> ABOUT ME
          </div>

          <h2 className="about-headline">
            Architecting high-concurrency backend services that stay fast,
            resilient, and clean under scale.
          </h2>

          <div className="about-story">
            <p className="about-lead">
              I am <strong>Adnan Khan</strong>, a Backend Software Engineer with{" "}
              <strong>2.5+ years of production experience</strong> specializing
              in building high-throughput microservices, secure cloud
              architectures, and distributed data systems.
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
              , I design and operate mission-critical backend services powering
              enterprise customer management, secure document streaming, and
              real-time KPI analytics.
            </p>

            <p className="about-body">
              My engineering approach prioritizes measurable performance:
              reducing relational database contention through strategic{" "}
              <strong>Redis caching tiers</strong>, enforcing zero-trust{" "}
              <strong>RBAC & AES-256-GCM encryption</strong>, and writing
              idiomatic, observable <strong>Go</strong> code built to handle
              enterprise volume reliably.
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
                <span className="live-ping"></span>sw3
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
