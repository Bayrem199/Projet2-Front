import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../images/1.png'; // Chemin de votre logo

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo aligné à gauche */}
        <div className="navbar-logo">
          <Link to="/" className="logo-link">
            <img src={logo} alt="Logo" className="logo-img" />
          </Link>
        </div>

        {/* Section centrale de la navbar */}
        <div className="navbar-center">
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link to="/" className="navbar-link">
                <i className="fas fa-dumbbell navbar-icon"></i> Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/ai" className="navbar-link">
                <i className="fas fa-robot navbar-icon"></i> AI
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/coaches" className="navbar-link">
                <i className="fas fa-user-friends navbar-icon"></i> Coaches
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/shop" className="navbar-link">
                <i className="fas fa-store navbar-icon"></i> Shop
              </Link>
            </li>
          </ul>
        </div>

        {/* Actions (Login, Cart) à droite */}
        <div className="navbar-actions">
          <Link to="/login" className="navbar-link navbar-login">
            <i className="fas fa-user navbar-icon"></i> Login
          </Link>
          <Link to="/cart" className="navbar-link navbar-cart">
            <i className="fas fa-shopping-cart navbar-icon"></i> Cart
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
