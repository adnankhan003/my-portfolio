import "./project1.css";
import { useEffect } from "react";

interface ProjectMetric {
  label: string;
  value: string;
}

interface ProjectData {
  id: string;
  tag: string;
  status: string;
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
    id: "coreops",
    tag: "MISSION-CRITICAL WORKFLOW",
    status: "PRODUCTION LIVE",
    title: "JioCX CoreOps",
    subtitle: "Enterprise Purchase Order & Distributed Workflow Engine",
    category: "Enterprise Backend Architecture",
    summary:
      "Engineered scalable, fault-tolerant backend services powering end-to-end customer onboarding, dynamic lead allocation, purchase order lifecycle, and billing workflows across JioCX.",
    metrics: [
      { label: "p95 Latency", value: "< 45ms" },
      { label: "Data Security", value: "AES-256-GCM" },
      { label: "Access Architecture", value: "Zero-Trust RBAC" },
    ],
    highlights: [
      "Architected high-throughput Go microservices backed by MariaDB/MySQL handling concurrent business-critical transitions without lock contention.",
      "Integrated Google Cloud Storage (GCS) with time-bound signed URLs and AES-256-GCM payload encryption for audited enterprise document streaming.",
      "Optimized high-traffic query bottlenecks using strategic multi-tiered Redis caching and composite database indexing.",
      "Enforced granular Role-Based Access Control (RBAC) and JWT validation for multi-tenant enterprise data security.",
    ],
    stack: [
      "Go",
      "MySQL",
      "MariaDB",
      "Redis",
      "GCS",
      "Azure",
      "Docker",
      "JWT",
      "AES-256-GCM",
    ],
  },
  {
    id: "kpi-analytics",
    tag: "REAL-TIME TELEMETRY",
    status: "PRODUCTION LIVE",
    title: "JioCX KPI Analytics Engine",
    subtitle: "Live Telemetry Dashboards & Automated Reporting Engine",
    category: "Big Data & Ingestion Pipelines",
    summary:
      "Delivered a high-performance analytics ingestion platform serving 200+ enterprise clients with live operational metrics, client-isolated access, and automated scheduled reporting.",
    metrics: [
      { label: "Enterprise Scale", value: "200+ Clients" },
      { label: "Data Stream", value: "Real-Time" },
      { label: "Automation", value: "Distributed CRON" },
    ],
    highlights: [
      "Constructed dual-tier ingestion pipelines utilizing Elasticsearch index sharding and optimized SQL aggregation for live KPI metric calculation.",
      "Built low-latency Go APIs delivering sub-50ms data responses with intelligent Redis cache invalidation strategies.",
      "Designed an autonomous distributed CRON automation service for dispatching scheduled analytics reports (daily, weekly, monthly cadences).",
      "Implemented strict tenant data isolation through cryptographically signed claims and dynamic database views.",
    ],
    stack: [
      "Go",
      "Elasticsearch",
      "SQL",
      "Redis",
      "Azure",
      "Docker",
      "CRON Engine",
      "REST APIs",
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
          <span className="eyebrow-prefix">// 02.</span> FEATURED SYSTEMS
        </div>
        <h2 className="projects-headline">
          Production systems engineered for high concurrency and scale.
        </h2>
        <p className="projects-intro">
          Architectural deep-dives into mission-critical backend microservices,
          cryptographic storage pipelines, and distributed analytics engines
          built at enterprise scale.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <article
            className="project-card projects-reveal"
            key={project.id}
            style={{ animationDelay: `${idx * 0.15}s` }}
          >
            {/* Card Header Bar */}
            <div className="project-card-header">
              <div className="project-category-badge">
                <span className="project-category-icon">⚡</span>
                <span className="project-category-text">{project.tag}</span>
              </div>
              <div className="project-status-pill">
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
                <h4 className="highlights-title">Architectural Highlights</h4>
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
                <h4 className="stack-title">Technologies & Infrastructure</h4>
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
