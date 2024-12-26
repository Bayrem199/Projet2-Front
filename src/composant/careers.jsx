import React from "react";
import "./careers.css";

const Careers = () => {
  return (
    <div className="careers-page">
      <div className="careers-bg"></div>
      <div className="careers-overlay"></div>
      <div className="careers-content">
        <header className="careers-header">
          <h1>
            <span>Rejoignez</span> Notre <span>Équipe</span>
          </h1>
          <p>
            Plongez dans un environnement innovant où chaque idée compte.
            Découvrez des opportunités uniques pour façonner votre avenir avec
            nous.
          </p>
        </header>
        <section className="careers-grid">
          <div className="career-card">
            <div className="card-front">
              <h2>Développeur Frontend</h2>
              <p>Maîtrisez React, Vue ou Angular pour créer des expériences utilisateur captivantes.</p>
            </div>
            <div className="card-back">
              <p>
                <strong>Compétences Requises:</strong> HTML, CSS, JavaScript,
                Frameworks modernes.
              </p>
              <button className="apply-btn">Postuler Maintenant</button>
            </div>
          </div>
          <div className="career-card">
            <div className="card-front">
              <h2>Développeur Backend</h2>
              <p>Concevez des API performantes et des bases de données robustes.</p>
            </div>
            <div className="card-back">
              <p>
                <strong>Compétences Requises:</strong> Node.js, Python, Bases de
                données SQL/NoSQL.
              </p>
              <button className="apply-btn">Postuler Maintenant</button>
            </div>
          </div>
          <div className="career-card">
            <div className="card-front">
              <h2>Designer UI/UX</h2>
              <p>Transformez des idées en expériences utilisateur immersives.</p>
            </div>
            <div className="card-back">
              <p>
                <strong>Compétences Requises:</strong> Figma, Adobe XD,
                Prototypage interactif.
              </p>
              <button className="apply-btn">Postuler Maintenant</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Careers;
