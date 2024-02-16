import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Order from "./Order";
import Home from "./Home";
import Cart from "./Cart";
import AboutUs from "./AboutUs";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
