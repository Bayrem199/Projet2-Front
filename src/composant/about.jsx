import React from 'react';
import { motion } from 'framer-motion';
import './about.css';

const About = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="about-container"
    >
      <div className="about-content">
        <motion.h1 
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="about-title"
        >
          À Propos de Nous
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="about-text"
        >
          Bienvenue sur notre plateforme de musculation. Nous sommes dédiés à vous offrir les meilleurs programmes et conseils pour atteindre vos objectifs de fitness.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="about-grid"
        >
          <div className="about-card">
            <h3 className="about-card-title">Entraînements Personnalisés</h3>
            <p className="about-card-text">Des programmes adaptés à tous les niveaux, conçus pour maximiser vos résultats.</p>
          </div>
          <div className="about-card">
            <h3 className="about-card-title">Coaching Virtuel</h3>
            <p className="about-card-text">Des séances interactives avec des experts pour un suivi optimal.</p>
          </div>
          <div className="about-card">
            <h3 className="about-card-title">Suivi des Progrès</h3>
            <p className="about-card-text">Gardez un œil sur vos performances et célébrez chaque victoire.</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
