import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <div className="contact-page">
      <div className="contact-bg">
        <div className="contact-bg-overlay"></div>
      </div>
      <div className="contact-content">
        <div className="contact-header">
          <h1>
            <span className="shock-text">✨ Contactez-</span>
            <span className="highlight">Nous 🚀</span>
          </h1>
          <p>
            Partagez vos idées, vos questions ou vos projets avec nous. Nous
            sommes impatients de vous répondre !
          </p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Nom complet"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Adresse Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Votre Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            Envoyer 🚀
          </button>
        </form>
        {submitted && (
          <div className="success-message">
            Merci ! Votre message a été envoyé. Nous reviendrons vers vous
            sous peu. 🌟
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
