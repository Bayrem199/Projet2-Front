import React, { useState, useEffect } from 'react';
import './shop.css';
import bannerVideo from '../images/wiw.mp4'; // Import de la vidéo de la bannière
import produit1 from '../produit/1.jpg';
import produit2 from '../produit/2.jpg';
import produit3 from '../produit/3.jpg';
import produit4 from '../produit/4.jpg';
import produit5 from '../produit/5.jpg';
import produit6 from '../produit/6.jpg';
import produit7 from '../produit/7.jpg';
import produit8 from '../produit/8.jpg';
import { useCart } from '../context/CartContext'; // Import du contexte du panier

const Shop = () => {
  const { addToCart } = useCart(); // Fonction pour ajouter au panier

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filterByPrice, setFilterByPrice] = useState('all');
  const [filterByBrand, setFilterByBrand] = useState('all');

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const allProducts = [
    { id: 1, name: 'Produit 1', price: 25.0, brand: 'Brand A', image: produit1 },
    { id: 2, name: 'Produit 2', price: 35.0, brand: 'Brand B', image: produit2 },
    { id: 3, name: 'Produit 3', price: 45.0, brand: 'Brand A', image: produit3 },
    { id: 4, name: 'Produit 4', price: 55.0, brand: 'Brand C', image: produit4 },
    { id: 5, name: 'Produit 5', price: 65.0, brand: 'Brand B', image: produit5 },
    { id: 6, name: 'Produit 6', price: 75.0, brand: 'Brand A', image: produit6 },
    { id: 7, name: 'Produit 7', price: 85.0, brand: 'Brand C', image: produit7 },
    { id: 8, name: 'Produit 8', price: 95.0, brand: 'Brand B', image: produit8 },
  ];

  useEffect(() => {
    setFilteredProducts(allProducts); // Par défaut, afficher tous les produits
  }, []);

  useEffect(() => {
    let filtered = allProducts;

    // Filtrer par prix
    if (filterByPrice !== 'all') {
      filtered = filtered.filter((product) => {
        if (filterByPrice === 'low') return product.price <= 50;
        if (filterByPrice === 'mid') return product.price > 50 && product.price <= 80;
        if (filterByPrice === 'high') return product.price > 80;
        return true;
      });
    }

    // Filtrer par marque
    if (filterByBrand !== 'all') {
      filtered = filtered.filter((product) => product.brand === filterByBrand);
    }

    setFilteredProducts(filtered);
  }, [filterByPrice, filterByBrand]);

  const handleAddToCart = (product) => {
    setSelectedProduct(product);
    setModalOpen(true); // Ouvrir la modale
  };

  const handleCloseModal = () => {
    setModalOpen(false); // Fermer la modale
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleConfirmAddToCart = () => {
    addToCart({ ...selectedProduct, quantity: parseInt(quantity, 10) });
    alert(`${selectedProduct.name} a été ajouté au panier avec ${quantity} unité(s).`);
    handleCloseModal(); // Fermer la modale
  };

  const totalPrice = selectedProduct ? (selectedProduct.price * quantity).toFixed(2) : 0;

  return (
    <div className="shop-container">
      {/* Bannière */}
      <div className="shop-banner">
        <video autoPlay loop muted className="banner-video">
          <source src={bannerVideo} type="video/mp4" />
          Votre navigateur ne prend pas en charge la vidéo.
        </video>
        <div className="banner-overlay"></div>
      </div>

      <div className="shop-content">
        {/* Filtres */}
        <div className="filters">
          <h3>Filtres</h3>
          <div className="filter-group">
            <h4>Prix</h4>
            <button onClick={() => setFilterByPrice('all')}>Tous</button>
            <button onClick={() => setFilterByPrice('low')}>≤ 50 DT</button>
            <button onClick={() => setFilterByPrice('mid')}>50-80 DT</button>
            <button onClick={() => setFilterByPrice('high')}>≥ 80 DT</button>
          </div>

          <div className="filter-group">
            <h4>Marque</h4>
            <button onClick={() => setFilterByBrand('all')}>Toutes</button>
            <button onClick={() => setFilterByBrand('Brand A')}>Brand A</button>
            <button onClick={() => setFilterByBrand('Brand B')}>Brand B</button>
            <button onClick={() => setFilterByBrand('Brand C')}>Brand C</button>
          </div>
        </div>

        {/* Produits */}
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="price">{product.price.toFixed(2)} DT</p>
              <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>
                Ajouter au panier
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modale */}
      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={handleCloseModal}>
              X
            </button>
            <div className="modal-product">
              <img src={selectedProduct.image} alt={selectedProduct.name} />
              <div className="modal-product-info">
                <h3>{selectedProduct.name}</h3>
                <p>{selectedProduct.price.toFixed(2)} DT</p>
                <input
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                  min="1"
                />
                <p>Total: {totalPrice} DT</p>
                <button className="buy-now-btn" onClick={handleConfirmAddToCart}>
                  Confirmer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
