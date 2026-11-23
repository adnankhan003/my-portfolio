import "./skills.css";
import { useEffect } from "react";

interface SkillItem {
  name: string;
  icon?: string;
  detail?: string;
}

interface SkillCategory {
  num: string;
  title: string;
  subtitle: string;
  icon: string;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    num: "01",
    title: "Programming Languages",
    subtitle: "Core runtime & development",
    icon: "⚡",
    skills: [
      { name: "Go (Golang)", icon: "/icons/go.svg", detail: "Primary / APIs" },
      { name: "Python", icon: "/icons/python.svg", detail: "Automation & Data" },
      { name: "Node.js", icon: "/icons/node.svg", detail: "Async Services" },
      { name: "Java", icon: "/icons/java.svg", detail: "OOP & Algorithms" },
      { name: "JavaScript (ES6+)", icon: "/icons/javascript.svg", detail: "Modern ES6+" },
      { name: "React.js", icon: "/icons/react.svg", detail: "UI & Frontend" },
    ],
  },
  {
    num: "02",
    title: "Databases & Messaging",
    subtitle: "Data modeling, caching & indexing",
    icon: "🗄️",
    skills: [
      { name: "PostgreSQL", icon: "/icons/postgres-removebg-preview.png", detail: "Relational & JSONB" },
      { name: "Redis", icon: "/icons/redis.svg", detail: "Multi-Tier In-Memory Cache" },
      { name: "Apache Kafka", icon: "/icons/kafka.png", detail: "Event-Driven Processing" },
      { name: "MariaDB / MySQL", icon: "/icons/mysql.svg", detail: "ACID Transactions" },
      { name: "Elasticsearch (ELK)", icon: "/icons/elasticsearch-removebg.png", detail: "Distributed Indexing" },
      { name: "MongoDB", icon: "/icons/mongodb.svg", detail: "NoSQL & Document Storage" },
    ],
  },
  {
    num: "03",
    title: "Cloud, DevOps & Security",
    subtitle: "Cloud-native infrastructure & cryptography",
    icon: "☁️",
    skills: [
      { name: "Google Cloud (GCS)", icon: "/icons/google-cloud.svg", detail: "Signed URLs & Storage" },
      { name: "Microsoft Azure", icon: "/icons/azure.svg", detail: "Enterprise Cloud" },
      { name: "Docker", icon: "/icons/docker.svg", detail: "Containerization" },
      { name: "Kubernetes", icon: "/icons/kubernetes.svg", detail: "Pod Orchestration" },
      { name: "Git", icon: "/icons/git.svg", detail: "CI/CD & Version Control" },
      { name: "GitHub", icon: "/icons/github.svg", detail: "Host and Collaborate" },
    ],
  },
  {
    num: "04",
    title: "Frameworks & Backend Systems",
    subtitle: "Concurrency, APIs & real-time streaming",
    icon: "⚙️",
    skills: [
      { name: "Fiber & GORM", detail: "High-Performance Go" },
      { name: "REST API Design", detail: "Microservice Architectures" },
      { name: "WebSockets & WebRTC", detail: "Real-Time Video / Chat" },
      { name: "Concurrent Processing", detail: "Goroutines & Channels" },
      { name: "AES-256-GCM Encryption", detail: "Payload & RTSP Security" },
      { name: "Zero-Trust RBAC & JWT", detail: "Multi-Tenant Security" },
    ],
  },
];

const marqueeTechs = [
  { name: "Go (Golang)", icon: "/icons/go.svg" },
  { name: "PostgreSQL", icon: "/icons/postgres-removebg-preview.png" },
  { name: "Redis", icon: "/icons/redis.svg" },
  { name: "Apache Kafka" },
  { name: "Docker", icon: "/icons/docker.svg" },
  { name: "Kubernetes", icon: "/icons/kubernetes.svg" },
  { name: "SQL", icon: "/icons/sql.svg" },
  { name: "Azure", icon: "/icons/azure.svg" },
  { name: "Google Cloud", icon: "/icons/google-cloud.svg" },
  { name: "TypeScript", icon: "/icons/javascript.svg" },
  { name: "Elasticsearch", icon: "/icons/elasticsearch-removebg.png" },
  { name: "MySQL", icon: "/icons/mysql.svg" },
  { name: "React", icon: "/icons/react.svg" },
  { name: "Python", icon: "/icons/python.svg" },
  { name: "Node.js", icon: "/icons/node.svg" },
  { name: "Git", icon: "/icons/git.svg" },
];

function Skills({ skillsRef }: { skillsRef: React.RefObject<HTMLDivElement | null> }) {
  useEffect(() => {
    const elements = document.querySelectorAll(".skills-reveal");
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
    <section className="root-skills" ref={skillsRef} id="skills">
      {/* Ambient Radial Glow */}
      <div className="skills-ambient-glow" aria-hidden="true"></div>

      {/* Section Header */}
      <div className="skills-header skills-reveal">
        <div className="skills-eyebrow">
          <span className="eyebrow-prefix"> 💠 </span> TECHNICAL CAPABILITIES
        </div>
        <h2 className="skills-headline">
          Languages, distributed architectures, and cloud infrastructure.
        </h2>
        <p className="skills-intro">
          A structured survey of the technologies, data systems, and zero-trust
          security protocols I deploy to build resilient, high-speed backend platforms.
        </p>
      </div>

      {/* 4 Categorized Domain Cards */}
      <div className="skills-categories-grid">
        {skillCategories.map((category) => (
          <div className="skills-category-card skills-reveal" key={category.num}>
            <div className="category-card-header">
              <div className="category-title-group">
                <span className="category-num">{category.num}</span>
                <div className="category-text-block">
                  <h3 className="category-title">{category.title}</h3>
                  <span className="category-subtitle">{category.subtitle}</span>
                </div>
              </div>
              <div className="category-icon-box">{category.icon}</div>
            </div>

            <div className="skills-items-grid">
              {category.skills.map((skill) => (
                <div key={skill.name} className="skill-item-chip">
                  {skill.icon ? (
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="skill-item-icon"
                      aria-hidden="true"
                    />
                  ) : (
                    <span className="skill-item-bullet">▹</span>
                  )}
                  <div className="skill-item-info">
                    <span className="skill-item-name">{skill.name}</span>
                    {skill.detail && (
                      <span className="skill-item-detail">{skill.detail}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Seamless Infinite Marquee Ticker */}
      <div className="skills-marquee-container skills-reveal">
        <div className="skills-marquee-track">
          {/* First set of marquee items */}
          {marqueeTechs.map((tech, i) => (
            <div key={`m1-${tech.name}-${i}`} className="marquee-badge">
              {tech.icon ? (
                <img src={tech.icon} alt="" className="marquee-icon" aria-hidden="true" />
              ) : (
                <span className="marquee-bullet">⚡</span>
              )}
              <span className="marquee-text">{tech.name}</span>
            </div>
          ))}
          {/* Duplicate set for perfectly seamless looping */}
          {marqueeTechs.map((tech, i) => (
            <div key={`m2-${tech.name}-${i}`} className="marquee-badge" aria-hidden="true">
              {tech.icon ? (
                <img src={tech.icon} alt="" className="marquee-icon" aria-hidden="true" />
              ) : (
                <span className="marquee-bullet">⚡</span>
              )}
              <span className="marquee-text">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
