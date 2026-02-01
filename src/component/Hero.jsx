import React, { useState, useEffect } from 'react';
import '../style/hero.css'; // We will create this file for the animation

const Hero = () => {
  const words = ["DESIGNER", "DEVELOPER"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Changes every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section d-flex align-items-center justify-content-center text-center">
      <div className="container">
        <h1 className="fw-bold mb-3 display-4 text-uppercase">
          HI, MY NAME IS VINAYAK & I AM A <br />
          <div className="sliding-text-container">
            <span key={index} className="sliding-text">
              {words[index]}
            </span>
          </div>
        </h1>

        <p className="text-muted mx-auto mb-4 lead" style={{ maxWidth: '700px' }}>
          I'VE OCCUPIED MANY ROLES INCLUDING DIGITAL DESIGN DIRECTOR, 
          WEB DESIGNER AND DEVELOPER. THIS SITE SHOWCASES SOME OF MY WORK.
        </p>

        <button className="btn btn-dark px-5 py-2 rounded-0 fw-bold">
          VIEW WORKS
        </button>
      </div>
    </section>
  );
};

export default Hero;