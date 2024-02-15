import React from "react";
import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom";
import Order from "./Order"
import Home from "./Home";
import Cart from "./Cart";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
      <Route path="/cart" element={<Cart/>}/>
        <Route path="/order" element={<Order/>}/>
        <Route exact path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;