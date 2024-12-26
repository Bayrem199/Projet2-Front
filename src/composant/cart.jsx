import React from 'react';
import { useCart } from '../context/CartContext';
import './cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="cart-container">
      <header className="cart-header animated-header">
        <h1>🛒 Votre Panier</h1>
        <p>Découvrez vos articles préférés et finalisez vos achats !</p>
      </header>

      {cartItems.length === 0 ? (
        <section className="empty-cart">
          <h2>Votre panier est vide</h2>
          <p>Ajoutez des produits pour commencer vos achats.</p>
          <button className="shop-now-btn" onClick={() => window.location.href = '/shop'}>
            Commencez à magasiner
          </button>
        </section>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>Prix : <span>{item.price.toFixed(2)} DT</span></p>
                  <p>Quantité : <span>{item.quantity}</span></p>
                  <p>Sous-total : <span>{(item.price * item.quantity).toFixed(2)} DT</span></p>
                </div>
                <button
                  className="remove-item-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  ✖ Supprimer
                </button>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Total : <span>{totalPrice} DT</span></h3>
            <div className="summary-actions">
              <button className="clear-cart-btn" onClick={clearCart}>
                🗑 Vider le panier
              </button>
              <button className="checkout-btn">✅ Passer à la caisse</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
