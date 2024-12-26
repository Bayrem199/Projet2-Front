import React, { useState, useEffect } from "react";

import "./home.css"; // Assurez-vous que ce fichier CSS est mis à jour
import bannerImage2 from "../images/4.jpg";
import bannerImage3 from "../images/2.jpg";
import bannerImage4 from "../images/3.jpg";
import sponsor1 from "../images/sponsor1.png";
import sponsor2 from "../images/sponsor2.png";
import sponsor3 from "../images/sponsor3.png";
import sponsor4 from "../images/sponsor4.png";
import sponsor5 from "../images/sponsor5.png";
import sponsor6 from "../images/sponsor6.png";
import sponsor7 from "../images/sponsor7.png";
import sponsor8 from "../images/sponsor8.png";
import sponsor9 from "../images/sponsor9.png";
import sponsor10 from "../images/sponsor10.png";
import aboutImage1 from "../images/6.jpg";
import aboutImage2 from "../images/7.jpg";
import aboutImage3 from "../images/8.jpg";
import aboutImage4 from "../images/9.jpg";
import aboutImage5 from "../images/10.jpg";
import aboutImage6 from "../images/11.jpg";
import nutritionImage1 from "../images/111.jpg";
import nutritionImage2 from "../images/22.jpg";
import nutritionImage3 from "../images/33.jpg";
import nutritionImage4 from "../images/44.jpg";
import nutritionImage5 from "../images/55.jpg";
import nutritionImage6 from "../images/66.jpg";
import clientImage1 from "../images/p2.jpg";
import clientImage2 from "../images/p3.jpg";
import clientImage3 from "../images/p4.jpg";

import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./navbar";
import Footer from "./footer"; // Import du Footer

// Ajoutez les images des produits dans le fichier d'importation
import productImage1 from "../images/0.png";
import productImage2 from "../images/00.png";
import productImage3 from "../images/000.png";
import productImage4 from "../images/0000.png";
import productImage5 from "../images/00000.png";

const banners = [
  { type: "image", src: bannerImage2 },
  { type: "image", src: bannerImage3 },
  { type: "image", src: bannerImage4 },
];

const sponsors = [
  sponsor1, sponsor2, sponsor3, sponsor4, sponsor5,
  sponsor6, sponsor7, sponsor8, sponsor9, sponsor10,
];

const aboutImages = [
  aboutImage1, aboutImage2, aboutImage3, aboutImage4, aboutImage5, aboutImage6,
];

const nutritionImages = [
  nutritionImage1, nutritionImage2, nutritionImage3, nutritionImage4, nutritionImage5, nutritionImage6,
];

const products = [
  { id: 1, src: productImage1, alt: "Produit 1", description: "Produit 1 description" },
  { id: 2, src: productImage2, alt: "Produit 2", description: "Produit 2 description" },
  { id: 3, src: productImage3, alt: "Produit 3", description: "Produit 3 description" },
  { id: 4, src: productImage4, alt: "Produit 4", description: "Produit 4 description" },
  { id: 5, src: productImage5, alt: "Produit 5", description: "Produit 5 description" },
];

const Home = () => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [scrollingDown, setScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  useEffect(() => {
    AOS.init();

    const interval = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollingDown(currentScrollY > lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handlePrevious = () => {
    setCurrentBannerIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const handlePreviousProduct = () => {
    setCurrentProductIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const handleNextProduct = () => {
    setCurrentProductIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  return (
    <div className="home-container">
      <Navbar isScrolled={scrollingDown} />

      {/* Section Bannière */}
      <section className="banner">
        <div className="overlay"></div>
        {banners.map((banner, index) => (
          <img
            key={index}
            src={banner.src}
            alt={`Banner ${index + 1}`}
            className={`banner-img ${
              index === currentBannerIndex ? "active" : "inactive"
            }`}
          />
        ))}
        <button
          className="arrow left-arrow"
          onClick={handlePrevious}
          aria-label="Bannière précédente"
        >
          &#9664;
        </button>
        <button
          className="arrow right-arrow"
          onClick={handleNext}
          aria-label="Bannière suivante"
        >
          &#9654;
        </button>
      </section>

      {/* Section Sponsors */}
      <section className="sponsors" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="section-title">Nos Sponsors</h2>
        <div className="sponsor-carousel">
          <div className="sponsor-images">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="sponsor-logo-container"
                data-aos="zoom-in"
                data-aos-delay={`${index * 100}`}
              >
                <img
                  src={sponsor}
                  alt={`Logo sponsor ${index + 1}`}
                  className="sponsor-logo"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section About Us */}
      <section className="about-us" data-aos="fade-up" data-aos-duration="1200">
        <h2 className="section-title">À Propos</h2>
        <div className="about-grid">
          {aboutImages.map((image, index) => (
            <div
              className="about-card"
              key={index}
              data-aos="flip-left"
              data-aos-duration="1000"
              data-aos-delay={`${index * 100}`}
            >
              <img src={image} alt={`About ${index + 1}`} className="about-card-img" />
              <div className="about-card-overlay">
                <p className="about-card-text">Découvrez notre vision</p>
              </div>
            </div>
          ))}
        </div>
        <p className="about-description" data-aos="fade-up" data-aos-duration="1500">
          Notre mission : innover et inspirer pour façonner l’avenir avec des solutions
          durables et impactantes.
        </p>
      </section>

      {/* Section Nutrition */}
      <section className="nutrition" data-aos="fade-up" data-aos-duration="1500">
        <h2 className="section-title">Tout Sur La Nutrition</h2>
        <div className="nutrition-grid">
          {nutritionImages.map((image, index) => (
            <div
              className="nutrition-card"
              key={index}
              data-aos="flip-left"
              data-aos-duration="1000"
              data-aos-delay={`${index * 100}`}
            >
              <img src={image} alt={`Nutrition ${index + 1}`} className="nutrition-card-img" />
              <div className="nutrition-card-overlay">
                <p className="nutrition-card-text">Découvrez nos conseils nutritionnels</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section Produits les plus vendus */}
      <section className="best-sellers" data-aos="fade-up" data-aos-duration="1500">
        <h2 className="section-title">Les 5 Produits les Plus Vendus</h2>
        <div className="product-carousel">
          <div className="product-main">
            <img
              src={products[currentProductIndex].src}
              alt={products[currentProductIndex].alt}
              className="product-main-image"
            />
            <p className="product-description">{products[currentProductIndex].description}</p>
          </div>
          
          <button
            className="arrow left-arrow"
            onClick={handlePreviousProduct}
            aria-label="Produit précédent"
          >
            &#9664;
          </button>

          <button
            className="arrow right-arrow"
            onClick={handleNextProduct}
            aria-label="Produit suivant"
          >
            &#9654;
          </button>
        </div>

        <div className="product-thumbnails">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`product-thumbnail ${index === currentProductIndex ? "active" : ""}`}
              onClick={() => setCurrentProductIndex(index)}
            >
              <img src={product.src} alt={product.alt} className="product-thumbnail-image" />
            </div>
          ))}
        </div>
      </section>

     {/* Section Avis Clients */}
<section className="client-reviews" data-aos="fade-up" data-aos-duration="1500">
  <h2 className="section-title">Avis Clients</h2>
  <div className="client-images">
    {/* Client 1 */}
    <div className="client-image-container" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200">
      <img src={clientImage1} alt="Client 1" className="client-image" />
      <p className="client-review">"Un service exceptionnel  !"</p>
    </div>

    {/* Client 2 */}
    <div className="client-image-container" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400">
      <img src={clientImage2} alt="Client 2" className="client-image" />
      <p className="client-review">"Une expérience client au top."</p>
    </div>

    {/* Client 3 */}
    <div className="client-image-container" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="600">
      <img src={clientImage3} alt="Client 3" className="client-image" />
      <p className="client-review">"Des conseils personnalisés  !"</p>
    </div>
  </div>
</section>

      <Footer /> {/* Ajout du Footer ici */}

    </div>
  );
  
};

export default Home;
