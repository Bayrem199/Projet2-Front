import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './composant/navbar.jsx'; 
import Home from './composant/home.jsx'; // Import de la page Home
import Ai from './composant/ai.jsx'; // Import de la page Ai
import Coach from './composant/coache.jsx'; // Correction de l'import
import Shop from './composant/shop.jsx'; // Correction de l'import
import Login from './composant/login.jsx'; // Correction de l'import
import Register from './composant/register.jsx'
import Cart from './composant/cart.jsx'
import { CartProvider } from './context/CartContext'; // Importer le contexte
import About from './composant/about.jsx'
import Service from './composant/service.jsx'
import Contact from './composant/contact.jsx'
import Careers from './composant/careers.jsx'    
function App() {
  return (
    <CartProvider>
      <Router>
        {/* Navbar en haut de la page */}
        <Navbar />
        
        {/* Contenu principal de la page */}
        <div className="content">
          <Routes>
            {/* Définition des routes pour chaque page */}
            <Route path="/" element={<Home />} /> {/* Route vers la page d'accueil */}
            <Route path="/ai" element={<Ai />} /> {/* Route vers la page Ai */}
            <Route path="/coaches" element={<Coach />}/> 
            <Route path="/shop" element={<Shop />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/services" element={<Service />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/careers" element={<Careers />}/>
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
