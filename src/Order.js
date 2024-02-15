import React, { useEffect, useState } from "react";
import "./Order.css";
import Cart from "./Cart";

function Order() {
  const [orderList, setOrderList] = useState([]);
  const [cart, setCart] = useState([]); // Add cart state

  // 1. Fetch the order list data from an "API"
  useEffect(() => {
    fetch("https://json-server-vercel-one-coral.vercel.app/menu")
      .then((res) => res.json())
      .then((data) => setOrderList(data));
  }, []);

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCart([...cart, { ...item, quantity: 1 }]);
    alert(`You have added ${item.title} to your cart!`);
  };

  return (
    <div className="container">
      <h1 className="header">OUR <span className="span">MENU</span></h1>
      <div className="inner-container">
        <p className="paragraph">Explore our extensive <span className="highlight">menu</span> together with us, featuring a wide range of snacks to satisfy every craving. With just a few taps, you can select your desired items, customize your order, and proceed to checkout, all without leaving the comfort of your home.</p>
      </div>
      <ul className="list">
        {orderList.map((item) => (
          <li key={item.id}>
            <h2 className="inner-header"><span className="name">Name:</span> {item.title}</h2>
            <h3 className="price">Price: {item.price}$</h3>
            <img className="image" src={item.image} alt={item.title} />
            <h4 className="quantity">Quantity:<input type="number" value={item.qnty} onChange={(e) => { console.log(e.target.value) }} /></h4>
            <button onClick={() => addToCart(item)} className="button">Add To Cart</button>
          </li>
        ))}
      </ul>

      {/* Pass orderList as a prop to Cart component */}
      <Cart orderList={orderList} />
    </div>
  );
}

export default Order;

