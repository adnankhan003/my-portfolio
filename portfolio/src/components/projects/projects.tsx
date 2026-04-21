import "./project1.css";

const projects = [
  {
    category: "Enterprise CRM Workflow",
    title: "CoreOps",
    summary:
      "Built secure, scalable backend services for lead onboarding, job allocation, billing, and purchase order management inside JioCX CoreOps.",
    impact: [
      "Designed reliable REST APIs in Go backed by MySQL/MariaDB for high-scale business workflows.",
      "Implemented JWT authentication with RBAC for fine-grained, audited access control.",
      "Secured document upload and streaming with AES-256-GCM, Google Cloud Storage, signed URLs, and performance optimizations using SQL tuning plus Redis caching.",
    ],
    stack: [
      "Go",
      "MySQL",
      "MariaDB",
      "Redis",
      "Azure",
      "GCS",
      "JWT",
      "AES-GCM",
    ],
    metrics: ["Secure Docs", "Cloud-native", "High Reliability"],
  },
  {
    category: "Analytics & Automation",
    title: "KPI Dashboards",
    summary:
      "Delivered a real-time KPI dashboard serving 200+ clients with live analytics, client-wise access control, and scheduled reporting automation.",
    impact: [
      "Built high-performance Go APIs and optimized large payload delivery with Redis caching.",
      "Used Elasticsearch and SQL pipelines to power live KPI ingestion and dashboard updates.",
      "Protected client data with RBAC and implemented user-configurable CRON automation for scheduled dashboard emails on daily, weekly, monthly, or custom cadences.",
    ],
    stack: ["Go", "SQL", "Elasticsearch", "Redis", "Azure", "JWT"],
    metrics: ["200+ Clients", "Live Insights", "Scheduled Reports"],
  },
];

function Projects({ projectRef }: any) {
  return (
    <div className="root-projects" ref={projectRef}>
      <div className="projects-header reveal">
        <p className="projects-eyebrow">Featured Work</p>
        <div className="project-label">Projects</div>
        <p className="projects-intro">
          A snapshot of the backend systems and analytics platforms I have been
          building in production.
        </p>
      </div>

      <div className="projects-section">
        {projects.map((project) => (
          <article className="project-card reveal" key={project.title}>
            <div className="project-card-top">
              <span className="project-category">{project.category}</span>
              <div className="project-metrics">
                {project.metrics.map((metric) => (
                  <span key={metric} className="metric-pill">
                    {metric}
                  </span>
                ))}
              </div>
            </div>

            <div className="project-content">
              <h2>{project.title}</h2>
              <p className="project-summary">{project.summary}</p>

              <div className="project-block">
                <h3>Highlights</h3>
                <ul className="project-points">
                  {project.impact.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>

              <div className="project-block">
                <h3>Tech Stack</h3>
                <div className="project-stack">
                  {project.stack.map((tech) => (
                    <span key={tech} className="stack-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Projects;
