import React from 'react';
import './service.css';

const services = [
  {
    id: 1,
    title: 'Design Innovant',
    description: 'Créez des interfaces modernes et engageantes.',
    icon: 'fas fa-palette',
    details: 'Nos designs sont conçus pour impressionner et captiver votre audience.',
  },
  {
    id: 2,
    title: 'Performance Optimale',
    description: 'Boostez la vitesse et l’efficacité de vos projets.',
    icon: 'fas fa-tachometer-alt',
    details: 'Notre expertise garantit des solutions rapides et fiables.',
  },
  {
    id: 3,
    title: 'Support 24/7',
    description: 'Toujours à votre disposition pour un service exceptionnel.',
    icon: 'fas fa-headset',
    details: 'Nous sommes disponibles à toute heure pour répondre à vos besoins.',
  },
  {
    id: 4,
    title: 'Technologie de Pointe',
    description: 'Explorez les dernières tendances technologiques.',
    icon: 'fas fa-rocket',
    details: 'Nous utilisons les innovations les plus récentes pour vos projets.',
  },
];

const Service = () => {
  return (
    <div className="service-container">
      <header className="service-header">
        <h1 className="service-title">Nos Services</h1>
        <p className="service-intro">Une expertise exceptionnelle pour répondre à tous vos besoins.</p>
      </header>
      <div className="service-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-card-front">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h2 className="service-card-title">{service.title}</h2>
              <p className="service-card-description">{service.description}</p>
            </div>
            <div className="service-card-back">
              <p>{service.details}</p>
              <a href="#learn-more">En savoir plus</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
