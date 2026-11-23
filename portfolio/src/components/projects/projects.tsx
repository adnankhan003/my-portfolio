import "./project.css";
import { useEffect } from "react";

interface ProjectMetric {
  label: string;
  value: string;
}

interface ProjectData {
  id: string;
  tag: string;
  status: string;
  statusType?: "production" | "development";
  title: string;
  subtitle: string;
  summary: string;
  category: string;
  metrics: ProjectMetric[];
  highlights: string[];
  stack: string[];
}

const projects: ProjectData[] = [
  {
    id: "whatsapp-platform",
    tag: "EVENT-DRIVEN & CONCURRENCY",
    status: "PRODUCTION",
    statusType: "production",
    title: "WhatsApp Enterprise Bot & Appointment Platform",
    subtitle: "Multi-Tenant Booking Engine & Real-Time WhatsApp Sync",
    category: "High-Concurrency Backend",
    summary:
      "A multi-tenant appointment scheduling platform with dynamic slot availability, round-robin agent assignment, and real-time WhatsApp synchronization.",
    metrics: [
      { label: "REST Endpoints", value: "30+ APIs" },
      { label: "Sync Engine", value: "Kafka & WSS" },
      { label: "Concurrency", value: "Pessimistic Lock" },
    ],
    highlights: [
      "Built 30+ REST APIs using Go (Fiber) and GORM with JWT, RBAC, and client tenant isolation.",
      "Engineered concurrency-safe booking using pessimistic locking, Kafka event processing, and WebSockets.",
      "Developed an administrative portal with interactive booking calendars, blackout management, and KPI analytics.",
    ],
    stack: [
      "Go",
      "Fiber",
      "GORM",
      "PostgreSQL",
      "Redis",
      "Apache Kafka",
      "WebSockets",
      "JWT",
      "GCS",
    ],
  },
  {
    id: "coreops-crm",
    tag: "WORKFLOW AUTOMATION & CRM",
    status: "PRODUCTION",
    statusType: "production",
    title: "CoreOps - Enterprise CRM & Analytics Platform",
    subtitle: "Workflow Automation, Document Vault & KPI Analytics",
    category: "Enterprise CRM & Analytics",
    summary:
      "An enterprise CRM and workflow engine built from scratch, supporting lead onboarding, billing, document management, and real-time KPI dashboards for 200+ clients.",
    metrics: [
      { label: "Scale", value: "200+ Clients" },
      { label: "Response", value: "< 45ms p95" },
      { label: "Automation", value: "Dynamic CRON" },
    ],
    highlights: [
      "Built scalable Go backend services for lead onboarding, PO management, billing, and financial reporting.",
      "Designed REST APIs with JWT authentication and Redis-cached RBAC authorization for client-wise isolation.",
      "Implemented cloud-native services with GCS signed URLs, background workers, and dynamic CRON jobs for scheduled reports.",
    ],
    stack: [
      "Go",
      "MariaDB",
      "MySQL",
      "Elasticsearch",
      "Redis",
      "GCS",
      "JWT",
      "RBAC",
      "Docker",
      "Kubernetes",
      "Azure",
    ],
  },
  {
    id: "argus-surveillance",
    tag: "STREAMING & REVERSE TUNNEL",
    status: "IN DEVELOPMENT",
    statusType: "development",
    title: "Argus - Enterprise AI Video Surveillance & NVR",
    subtitle: "Edge-Cloud Video Pipeline & Reverse WebSocket Tunnel",
    category: "Streaming & Edge Architecture",
    summary:
      "An AI video surveillance platform featuring edge-cloud processing, outbound reverse WebSocket tunneling for firewall traversal, and sub-second WebRTC streaming.",
    metrics: [
      { label: "Cloud Bandwidth", value: "~80% Saved" },
      { label: "Firewall Traversal", value: "WSS/443" },
      { label: "Streaming", value: "WebRTC / HLS" },
    ],
    highlights: [
      "Reduced cloud bandwidth by ~80% through dual-streaming: low-res AI substreams and local 4K/1080p recording.",
      "Engineered an outbound-only Reverse WebSocket Tunnel (WSS/443) for double-NAT & firewall traversal without open ports.",
      "Integrated AI Semantic Search, face recognition, bounded goroutines, and AES-256-GCM RTSP credential encryption.",
    ],
    stack: [
      "Golang",
      "Fiber",
      "Frigate NVR",
      "MediaMTX",
      "WebSockets",
      "WebRTC",
      "PostgreSQL",
      "Redis",
      "HLS",
      "Docker",
    ],
  },
];

function Projects({ projectRef }: { projectRef: React.RefObject<HTMLDivElement | null> }) {
  useEffect(() => {
    const elements = document.querySelectorAll(".projects-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="root-projects" ref={projectRef} id="projects">
      {/* Ambient Radial Background Glow */}
      <div className="projects-ambient-glow" aria-hidden="true"></div>

      {/* Section Header */}
      <div className="projects-header projects-reveal">
        <div className="projects-eyebrow">
          <span className="eyebrow-prefix"> 💠 </span> FEATURED PROJECTS
        </div>
        <h2 className="projects-headline">
          Enterprise platforms engineered for concurrency, reliability, and scale.
        </h2>
        <p className="projects-intro">
          Production backend architectures spanning high-concurrency appointment systems,
          edge-cloud AI video surveillance, and enterprise CRM workflow platforms.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <article
            className="project-card projects-reveal"
            key={project.id}
            style={{ animationDelay: `${idx * 0.12}s` }}
          >
            {/* Card Header Bar */}
            <div className="project-card-header">
              <div className="project-category-badge">
                {/* <span className="project-category-icon">⚡</span> */}
                <span className="project-category-text">{project.tag}</span>
              </div>
              <div
                className={`project-status-pill ${
                  project.statusType === "development" ? "status-dev" : "status-prod"
                }`}
              >
                <span className="status-live-ping"></span>
                <span className="status-live-text">{project.status}</span>
              </div>
            </div>

            {/* Card Main Body */}
            <div className="project-card-body">
              <div className="project-title-group">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-subtitle">{project.subtitle}</span>
              </div>

              <p className="project-summary-text">{project.summary}</p>

              {/* Architectural Metrics Matrix */}
              <div className="project-metrics-strip">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="project-metric-cell">
                    <span className="metric-val">{metric.value}</span>
                    <span className="metric-lbl">{metric.label}</span>
                  </div>
                ))}
              </div>

              {/* Engineering Highlights */}
              <div className="project-highlights-group">
                <h4 className="highlights-title">Key Engineering Highlights</h4>
                <ul className="highlights-list">
                  {project.highlights.map((point, index) => (
                    <li key={index} className="highlight-item">
                      <span className="highlight-arrow">▹</span>
                      <span className="highlight-text">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technology Stack Badges */}
              <div className="project-stack-group">
                <h4 className="stack-title">Technologies Used</h4>
                <div className="project-stack-pills">
                  {project.stack.map((tech) => (
                    <span key={tech} className="tech-chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
