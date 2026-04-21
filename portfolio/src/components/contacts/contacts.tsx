import { useState } from "react";
import "./contacts1.css";

const contactDetails = [
  {
    label: "Email",
    value: "adnankhannew777@gmail.com",
    href: "mailto:adnankhannew777@gmail.com",
  },
  {
    label: "Location",
    value: "Navi Mumbai, Maharashtra",
    href: "#",
  },
  {
    label: "Focus",
    value: "Backend Engineering, APIs, Scalable Systems",
    href: "#",
  },
];

function Contacts({ contactsRef }: any) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Message from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );

    window.location.href = `mailto:adnankhannew777@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="contacts-root" ref={contactsRef}>
      <div className="contacts-copy reveal">
        <p className="contacts-eyebrow">Contact</p>
        <h2 className="contacts-title">Let&apos;s build something reliable.</h2>
        <p className="contacts-text">
          If you want to discuss backend engineering, product ideas, or
          opportunities, send me a message here and it will open directly in
          your email client.
        </p>

        <div className="contact-info-list">
          {contactDetails.map((item) => (
            <div key={item.label} className="contact-info-card">
              <span className="contact-info-label">{item.label}</span>
              {item.href === "#" ? (
                <span className="contact-info-value">{item.value}</span>
              ) : (
                <a
                  className="contact-info-value"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.value}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={sendEmail} className="contact-form reveal">
        <div className="form-header">
          <span className="form-badge">Send a Message</span>
          <p className="form-note">I usually respond through email.</p>
        </div>

        <div className="field-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="yourmail@example.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell me about your project, role, or idea..."
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit">Launch Email Draft</button>
      </form>
    </div>
  );
}

export default Contacts;
