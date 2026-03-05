import React, { useEffect, useRef, useState } from 'react';
import "../style/animation.css";
import "../style/common.css"; // shared styles used by both portfolio and skills
import "../style/skills.css";

// It's a good practice to use more descriptive content.
const SKILLS = [
  { name: 'HTML', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, sint.' },
  { name: 'CSS', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, sint.' },
  { name: 'Javascript', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, sint.' },
  { name: 'REACT', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, sint.' },
  { name: 'JAVA', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, sint.' },
  { name: 'SQL', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, sint.' },
];


export default function Skills() {
  const [isIntersecting, setIntersecting] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state when element enters or leaves the viewport
        setIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    // The outer div is redundant; the component can return the section directly.
    <section id="skills" className="mt-5" ref={sectionRef}>
      <div className="container">
        <div className="section-heading text-center">
          {/* The `wow` classes have been replaced with a conditional class based on IntersectionObserver state
              for a more modern, dependency-free approach consistent with other components. */}
          <h1 className={`title `} >
            Skills
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
            quasi dolores numquam dolor vero ex, tempora commodi repellendus quod laborum.
          </p>
        </div>

        <div className="row">
          {SKILLS.map((skill, idx) => {
            // Stagger the animation for each skill card for a smoother effect
            const delay = 400 + 200 * (idx + 1); // ms
            return (
              <div key={skill.name} className="col-md-4 mb-5">
                {/* Using IntersectionObserver state to trigger animations */}
                <div
                  className={`media d-flex align-items-center ${isIntersecting ? 'animate-left' : 'reset-anim'}`}
                  
                >
                  <div className="icon">
                    {/* Consider using an icon library like React-Icons for a more visual representation */}
                    {skill.name}
                  </div>
                  <div className="media-body">
                    <h4 className="media-heading">{skill.name}</h4>
                    <p>{skill.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
