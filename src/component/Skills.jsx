import React, { useEffect, useRef, useState } from 'react';
import "../style/animation.css";
import "../style/common.css"; // shared styles used by both portfolio and skills
import "../style/skills.css";

// It's a good practice to use more descriptive content.
const SKILLS = [
  { name: 'HTML', description: 'Proficient in creating structured and semantic web pages using HTML5. Experienced with modern HTML features for building accessible and well-organized content that works across all platforms.' },
  { name: 'CSS', description: 'Skilled in styling web applications with CSS3, including Flexbox, Grid, and animations. Capable of creating responsive designs that work across various devices and screen sizes, ensuring a consistent user experience.' },
  { name: 'Javascript', description: 'Strong understanding of modern JavaScript (ES6+), including concepts like asynchronous programming, closures, and the event loop. Used to build interactive and dynamic user interfaces that enhance user engagement.' },
  { name: 'REACT', description: 'Experienced in building single-page applications with React. Proficient with hooks, context API, and state management libraries like Redux for creating scalable and maintainable components and complex applications.' },
  { name: 'JAVA', description: 'Solid background in Java for backend development, including experience with frameworks like Spring Boot to build robust and scalable server-side applications and RESTful APIs for a variety of business needs.' },
  { name: 'SQL', description: 'Competent in writing complex SQL queries, designing database schemas, and working with relational databases like MySQL and PostgreSQL to manage and retrieve data efficiently and securely.' },
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
    <section id="skills" className="skills-section mt-5" ref={sectionRef}>
      <div className="container">
        <div className="section-heading text-center">
          {/* The `wow` classes have been replaced with a conditional class based on IntersectionObserver state
              for a more modern, dependency-free approach consistent with other components. */}
          <h1 className={`title `} >
            Skills
          </h1>
          <p className="">
            Here is a summary of my technical skills and the technologies I specialize in. I am always eager to learn new tools and improve my craft.
          </p>
        </div>

        <div className="row">
          {SKILLS.map((skill, idx) => {
            // Stagger the animation for each skill card for a smoother effect
            const delay = 400 + 200 * (idx + 1); // ms
            return (
              <div key={skill.name} className="col-4 mb-5">
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
