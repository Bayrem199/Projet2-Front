import React from "react";
import "./footer.css";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Overlay animé */}
      <div className="footer-overlay"></div>

      {/* Contenu principal */}
      <div className="footer-content" data-aos="fade-up" data-aos-duration="1500">
        {/* Section logo et tagline */}
        <div className="footer-logo">
          <h2 className="brand-name">MusculShop AI</h2>
          <p className="tagline">Innover pour un avenir meilleur.</p>
        </div>

        {/* Section liens utiles */}
        <div className="footer-links">
          <h3>Liens utiles</h3>
          <ul>
            <li><a href="/about" className="footer-link">À propos</a></li>
            <li><a href="/services" className="footer-link">Services</a></li>
            <li><a href="/contact" className="footer-link">Contact</a></li>
            <li><a href="/careers" className="footer-link">Carrières</a></li>
          </ul>
        </div>

        {/* Section réseaux sociaux */}
        <div className="footer-social">
          <h3>Suivez-nous</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin />
            </a>
            <a href="mailto:contact@yourbrand.com" className="social-icon">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Section newsletter */}
        <div className="footer-newsletter">
          <h3>Newsletter</h3>
          <p>Recevez nos dernières actualités et offres exclusives.</p>
          <form className="newsletter-form">
            <input
              type="email"
              className="newsletter-input"
              placeholder="Votre email"
              required
            />
            <button type="submit" className="newsletter-btn">
              S'abonner
            </button>
          </form>
        </div>
      </div>

      {/* Section bas de page */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} BayremBhibah. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
