import { useState } from "react";
import "./contacts1.css";

function Contacts({ contactsRef }: any) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: any) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Message from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );

    window.location.href = `mailto:adnankhannew777@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <div className="contacts-root" ref={contactsRef}>
        <p className="header reveal">
          <img src="./icons/contact.svg" alt="contact" />
          Contact Me
        </p>
        <form onSubmit={sendEmail} className="contact-form reveal">
          <input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
}

export default Contacts;
