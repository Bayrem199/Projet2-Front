import React, { useState, useEffect } from 'react';
import './coache.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaInstagram, FaYoutube, FaTiktok, FaMedal, FaTrophy, FaStar } from 'react-icons/fa';
import { BiDumbbell, BiRun, BiBody } from 'react-icons/bi';
import backgroundImage from '../images/set.jpg';
import coach1 from '../images/p1.jpg';
import coach2 from '../images/p5.jpg';
import coach3 from '../images/p6.jpg';

const coachesData = [
  {
    id: 1,
    name: 'Mohamed Amine Fakhfakh',
    specialty: 'Expert Bodybuilding',
    experience: '10+ ans d\'expérience',
    description: 'Spécialiste en musculation et transformation physique',
    achievements: ['Champion National 2022', 'Certifié IFBB Pro', '500+ clients'],
    image: coach1,
    specialties: ['Musculation', 'Nutrition', 'Posture'],
    rating: 4.9,
    reviews: 342,
    programs: ['Programme Débutant', 'Force & Puissance', 'Compétition']
  },
  {
    id: 2,
    name: 'Sarah Power',
    specialty: 'Coach CrossFit',
    experience: '8 ans d\'expérience',
    description: 'Experte en performance et CrossFit',
    achievements: ['CrossFit Level 3', 'Ex-athlète olympique', '300+ clients'],
    image: coach2,
    specialties: ['CrossFit', 'HIIT', 'Mobilité'],
    rating: 4.8,
    reviews: 289,
    programs: ['CrossFit Elite', 'Cardio Intense', 'Mobilité']
  },
  {
    id: 3,
    name: 'Mike Steel',
    specialty: 'Nutrition Sportive',
    experience: '12 ans d\'expérience',
    description: 'Expert en nutrition et transformation',
    achievements: ['Nutritionniste Certifié', 'Coach Elite', '600+ clients'],
    image: coach3,
    specialties: ['Nutrition', 'Perte de poids', 'Mass Gainer'],
    rating: 4.9,
    reviews: 415,
    programs: ['Plan Nutrition', 'Mass Building', 'Cut Definition']
  }
];

const Coach = () => {
  const [selectedCoach, setSelectedCoach] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % coachesData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    }),
    hover: {
      scale: 1.05,
      rotateY: 5,
      boxShadow: "0 25px 50px -12px rgba(229, 9, 20, 0.4)"
    }
  };

  return (
    <div className="coaches-modern-container">
      <div className="hero-section-modern">
        <motion.div 
          className="hero-content-modern"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className="modern-title"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <motion.span 
              className="title-accent"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Elite
            </motion.span>
            <motion.span 
              className="title-main"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Coaching
            </motion.span>
            <motion.div 
              className="title-description"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <span className="highlight">Transformez</span> votre corps
              <br />
              <span className="highlight">Dépassez</span> vos limites
            </motion.div>
          </motion.h1>

          <motion.div 
            className="hero-stats"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Années d'expérience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1000+</span>
              <span className="stat-label">Clients satisfaits</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Engagement</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <section className="coaches-grid-modern">
        <motion.div className="grid-container">
          {coachesData.map((coach, i) => (
            <motion.div
              key={coach.id}
              className="coach-card-modern"
              variants={cardVariants}
              custom={i}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              onHoverStart={() => setHoveredCard(coach.id)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <div className="card-content">
                <div className="image-container">
                  <img src={coach.image} alt={coach.name} />
                  <div className="overlay">
                    <div className="rating">
                      <FaStar className="star" />
                      <span>{coach.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="info-container">
                  <h3>{coach.name}</h3>
                  <p className="specialty">{coach.specialty}</p>
                  
                  <div className="programs">
                    {coach.programs.map((program, index) => (
                      <motion.span 
                        key={index}
                        className="program-tag"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {program}
                      </motion.span>
                    ))}
                  </div>

                  <motion.button
                    className="contact-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCoach(coach)}
                  >
                    Réserver
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <AnimatePresence>
        {selectedCoach && (
          <motion.div 
            className="modal-modern"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            {/* Contenu du modal */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Coach; 
