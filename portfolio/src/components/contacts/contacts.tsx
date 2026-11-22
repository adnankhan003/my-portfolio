import { useState, useEffect } from "react";
import "./contacts1.css";

const contactDetails = [
  {
    label: "Direct Email",
    value: "adnankhannew777@gmail.com",
    href: "mailto:adnankhannew777@gmail.com",
    copyable: true,
  },
  {
    label: "Current Base",
    value: "Navi Mumbai, Maharashtra, India",
    href: "https://maps.google.com/?q=Navi+Mumbai",
    copyable: false,
  }
];

function Contacts({ contactsRef }: { contactsRef: React.RefObject<HTMLDivElement | null> }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll(".contacts-reveal");
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("adnankhannew777@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Inquiry from ${form.name} via Portfolio`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );

    window.location.href = `mailto:adnankhannew777@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="root-contacts" ref={contactsRef} id="contacts">
      {/* Ambient Radial Background Glow */}
      <div className="contacts-ambient-glow" aria-hidden="true"></div>

      <div className="contacts-container">
        {/* Left Column: Context, Availability & Contact Details */}
        <div className="contacts-info-card contacts-reveal">
          <div className="contacts-eyebrow">
            <span className="eyebrow-prefix"> 💠 </span> INITIATE CONTACT
          </div>

          <h2 className="contacts-headline">
            Let&apos;s engineer resilient architectures together.
          </h2>

          {/* Availability Status Badge */}
          <div className="availability-card">
            <div className="availability-header">
              <span className="availability-ping"></span>
              <span className="availability-status">AVAILABLE FOR COLLABORATION</span>
            </div>
            <p className="availability-note">
              Targeting high-impact SDE backend engineering opportunities and distributed systems design.
            </p>
          </div>

          {/* Contact Details List */}
          <div className="contact-info-list">
            {contactDetails.map((item) => (
              <div key={item.label} className="contact-detail-row">
                <span className="detail-label">{item.label}</span>
                <div className="detail-value-wrapper">
                  {item.href !== "#" ? (
                    <a
                      className="detail-link"
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="detail-text">{item.value}</span>
                  )}

                  {item.copyable && (
                    <button
                      type="button"
                      onClick={copyEmail}
                      className="copy-btn"
                      title="Copy email to clipboard"
                    >
                      {copied ? (
                        <span className="copied-tag">Copied! ✓</span>
                      ) : (
                        <span className="copy-tag">Copy 📋</span>
                      )}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Social Quick-Access Links */}
          <div className="contacts-socials">
            <span className="socials-label">Direct Connect:</span>
            <div className="social-pills">
              <a
                href="https://github.com/adnankhan003"
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
              >
                <img src="/icons/github.svg" alt="" aria-hidden="true" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/adnan-khan-31ab14198/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
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
          </div>
        </div>

        {/* Right Column: Dispatch Transmission Console */}
        <div className="contacts-form-card contacts-reveal">
          <div className="form-window-header">
            <div className="window-dots">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <div className="window-title">dispatch_transmission.sh</div>
            <span className="window-status">READY</span>
          </div>

          <form onSubmit={sendEmail} className="contact-form">
            <div className="form-welcome">
              <h3 className="form-title">Send a Transmission</h3>
            </div>

            <div className="form-field">
              <label htmlFor="name" className="field-label">
                IDENTIFIER / NAME <span className="req">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="e.g. John Wick"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
              />
            </div>

            <div className="form-field">
              <label htmlFor="email" className="field-label">
                RETURN ADDRESS / EMAIL <span className="req">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="e.g. john@boogeyman.com"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
              />
            </div>

            <div className="form-field">
              <label htmlFor="message" className="field-label">
                PAYLOAD / MESSAGE <span className="req">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Describe your architecture requirements, project vision, or team opportunity..."
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-textarea"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              <span>DISPATCH MESSAGE</span>
              <span className="btn-arrow">↗</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
