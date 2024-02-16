import React from "react";
import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom";
import Order from "./Order"
import Home from "./Home";
import Cart from "./Cart";
import AboutUs from './AboutUs';


function App() {
  return (
    <div className="App">
      <Order/>
    </div>
  );
}

export default App;