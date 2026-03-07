import React, { useEffect, useRef, useState } from 'react';
import '../style/hero.css'; // We will create this file for the animation
import '../style/animation.css';


const Hero = () => {

   const [isIntersecting1, setIntersecting1] = useState(false);
    const [isIntersecting2, setIntersecting2] = useState(false);
    const sectionRef1 = useRef(null);
    const sectionRef2 = useRef(null);
  const words = ["DESIGNER", "DEVELOPER"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const observerOptions = { threshold: 0.2 };

    // Observer for the first row
    const observer1 = new IntersectionObserver(([entry]) => {
      setIntersecting1(entry.isIntersecting);
    }, observerOptions);

    // Observer for the second row
    const observer2 = new IntersectionObserver(([entry]) => {
      setIntersecting2(entry.isIntersecting);
    }, observerOptions);

    const currentRef1 = sectionRef1.current;
    const currentRef2 = sectionRef2.current;

    if (currentRef1) observer1.observe(currentRef1);
    if (currentRef2) observer2.observe(currentRef2);

    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Changes every 3 seconds
    return () => {
      if (currentRef1) observer1.disconnect();
      if (currentRef2) observer2.disconnect();
      clearInterval(interval);
    };
  }, []);

  return (
    <section className=" hero-section d-flex align-items-center justify-content-center text-center ">
      <div className="container ">
       <div ref={sectionRef1}> 
        <h1 className={`fw-bold mb-3 display-4 text-uppercase ${isIntersecting1 ? 'animate-down' : 'reset-anim'}`}  >
          HI, MY NAME IS VINAYAK & I AM A <br />
          <div className="sliding-text-container">
            <span key={index} className="sliding-text">
              {words[index]}
            </span>
          </div>
        </h1></div>

        <div ref={sectionRef2}>
          <p className={`text-muted mx-auto mb-4 lead ${isIntersecting2 ? 'animate-up' : 'reset-anim'}`} style={{ maxWidth: '700px' }}>
          I'VE OCCUPIED MANY ROLES INCLUDING DIGITAL DESIGN DIRECTOR, 
          WEB DESIGNER AND DEVELOPER. THIS SITE SHOWCASES SOME OF MY WORK.
        </p>

        <button className={`btn btn-dark px-5 py-2 rounded-0 fw-bold ${isIntersecting2 ? 'animate-up' : 'reset-anim'}`}>
          VIEW WORKS
        </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;