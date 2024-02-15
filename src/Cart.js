import React, { useState } from "react";
import "./Order.css";

function Cart({ orderList }) {
  const [cart, setCart] = useState([]);

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCart([...cart, { ...item, quantity: 1 }]);
    alert(`You have added ${item.title} to your cart!`);
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  // Function to handle the buy process
  const handleBuy = () => {
    // Implement your buy logic here
    alert("Buy process initiated. Thank you for your purchase!");
    setCart([]); // Clear the cart after buying
  };

  return (
    <div className="cart-section">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((cartItem) => (
            <li key={cartItem.id}>
              <span>{cartItem.title}</span>
              <span>{cartItem.price}$</span>
              <span>{cartItem.quantity}</span>
              <button onClick={() => removeFromCart(cartItem.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && (
        <button onClick={handleBuy} className="buy-button">Buy</button>
      )}
    </div>
  );
}

export default Cart;
