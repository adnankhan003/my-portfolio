import "./project1.css";
function Projects({ projectRef }: any) {
  return (
    <>
      <div className="root-projects" ref={projectRef}>
        <div className="project-label reveal">🚀 Projects</div>
        <div className="projects-section">
          <div className="timeline-line reveal"></div>
          <div className="project left reveal">
            <div className="content">
              <h2>JioCX CoreOps - PO & Workflow Management System</h2>
              <p>
                Built backend services for purchase order handling, lead
                allocation, onboarding, and billing—similar to a CRM workflow
                engine. Added secure document handling, versioning, RBAC, and
                audit trails while optimizing Go, SQL, and Redis components for
                scale.
              </p>
            </div>
          </div>
          <div className="project right reveal">
            <div className="content">
              <h2>JioCX KPI Dashboard - Real-Time Metrics Platform</h2>
              <p>
                Developed a real-time dashboard for 20+ stakeholders with fast
                Go APIs, Elasticsearch + SQL pipelines, and Redis caching.
                Automated KPI ingestion and secured access with a robust RBAC
                system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
