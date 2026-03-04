import React, { useEffect, useRef, useState } from 'react';
import "../style/about.css";

export default function About() {
  const [isIntersecting, setIntersecting] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // This will update to true when entering, and false when leaving
        setIntersecting(entry.isIntersecting);
      },
      { threshold: 0.2 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="container">
        <div className="row align-items-center">
          
          {/* Text Side */}
          <div className={`col-md-6 ${isIntersecting ? 'animate-text' : 'reset-anim'}`}>
            <div className="about-content">
              <h2>ABOUT ME</h2>
              <p>Hello, I’m a UI/UX Designer & Front End Developer from Victoria, Australia...</p>
              <a href="#works" className="btn-view-works">View Works</a>
            </div>
          </div>

          {/* Image Side - Centered in Col-6 */}
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className={`about-img-box ${isIntersecting ? 'animate-img' : 'reset-anim'}`}>
              <img src="/images/about-img.jpg" alt="About" className="img-fluid custom-size" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}