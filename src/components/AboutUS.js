import React from 'react';
import Navbar from './Navbar'; // Importing the Navbar component
import './AboutUs.css'; // Importing the CSS for styling

function AboutUs() {
  return (
    <div className="AboutUs">
      <Navbar />
      <div id="about">
        <h2>About Us:</h2>
        <p>Introducing Grab and Go – your ultimate snacking companion! Ever found yourself craving your favorite snacks but reluctant to leave the comfort of your home? Say hello to Grab and Go, where we're all about bringing the best snacks right to your doorstep! Our mission? To provide convenience and satisfaction to snack lovers like you. With Grab and Go, it's not just about delivering snacks – it's about delivering joy. So, what sets us apart? We're not just an app; we're your snack-time heroes. Discover our story, our values, and our dedication to quality, efficiency, and exceptional customer service. Trust us, your snacking experience will never be the same. Ready to embark on a snacking adventure? Download the Grab and Go app today and start snacking in a snap with us!</p>
      </div>
    </div>
  );
}

export default AboutUs;
