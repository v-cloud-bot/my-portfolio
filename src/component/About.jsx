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
        <div className="row align-items-center row-reverse-sm ">
          
          {/* Text Side */}
          <div className={`col-sm-6 col-sm-12 col-md-6 col-lg-6 mb-4 mb-md-0 text-center text-md-start ${isIntersecting ? 'animate-text' : 'reset-anim'}`}>
            <div className="about-content">
              <h2>ABOUT ME</h2>
              <p>Hello, I’m a UI/UX Designer & Front End Developer from Victoria, Australia...</p>
              <p>Hello, I’m a UI/UX Designer & Front End Developer from Victoria, Australia. I hold a master degree of Web Design from the World University.And scrambled it to make a type specimen book. It has survived not only five centuries</p>
              <a href="#works" className="btn-view-works">View Works</a>
            </div>
          </div>

          {/* Image Side - Centered in Col-6 */}
          <div className="col-sm-6 col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center">
            <div className={`about-img-box ${isIntersecting ? 'animate-img' : 'reset-anim'}`}>
              <img src="/images/about-img.jpg" alt="About" className="img-fluid custom-size" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}