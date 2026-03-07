import React, { useEffect, useRef, useState } from 'react';
import "../style/animation.css";
import "../style/common.css"; // shared styles for overlays and cards
import { useNavigate } from 'react-router-dom';

export default function Portfolio() {

  const navigate = useNavigate();
  // We need separate states for each row to animate them independently
  const [isIntersecting1, setIntersecting1] = useState(false);

  const sectionRef1 = useRef(null);

  useEffect(() => {
    const observerOptions = { threshold: 0.2 };

    // Observer for the first row
    const observer1 = new IntersectionObserver(([entry]) => {
      setIntersecting1(entry.isIntersecting);
    }, observerOptions);

    if (sectionRef1.current) observer1.observe(sectionRef1.current);

    return () => {
      observer1.disconnect();
    };
  }, []);

  const projects = [
    {
      id: "p1",
      title: "PNG Jewellery",
      description: "this is a responsive website for a jewellery store built using Bootstrap 5.",
      img: "/projects/1_bootstrap/img/pngweb.png",
      alt: "Bootstrap project webpage screenshot displaying responsive design layout"
    },
    {
      id: "p2",
      title: "Omnifood",
      description: "this is a responsive website for a food delivery service built using Bootstrap 5.",
      img: "/projects/1_bootstrap/img/omnifoodweb.png",
      alt: "Omnifood project screenshot"
    },
    {
      id: "p5",
      title: "Blog Web page",
      description: "this is a static blog web page built using html 5 and css",
      img: "/projects/1_bootstrap/img/blogweb.png",
      alt: "Blog project screenshot"
    },
    {
      id: "p4",
      title: "static web",
      description: "this is a static web page built using only Html4 ",
      img: "/projects/1_bootstrap/img/related-1.jpg",
      alt: "Static web project screenshot"
    },
    {
      id: "p3",
      title: "Static Web page",
      description: "this is a static web page built using only Html4 ",
      img: "/projects/1_bootstrap/img/project3web.png",
      alt: "Static web page screenshot"
    },
    {
      id: "p6",
      title: "static Portfolio",
      description: "this is a static portfolio web page built using only Html4",
      img: "/projects/1_bootstrap/img/img3.jpeg",
      alt: "Static portfolio screenshot"
    }
  ];

  const btnDetails = (data)=> {
    navigate(`/projects/${data}`);
  }
  return (
    <div >
      <section id="work" > 
        
       <div className="container">

        <div className="text-center">
          <h3>Projects</h3>
          <p>Explore my latest projects and creative work that showcase my skills and passion for web development.</p>
          <p>From responsive designs to interactive applications, each project demonstrates my commitment to quality and innovation.</p>
        </div>

        <div className="row m-3" ref={sectionRef1}>
          {projects.map((project) => (
            <div key={project.id} className={`col-md-4 p-3 bg-light ${isIntersecting1 ? 'animate-left' : 'reset-anim'}`}>
              <div className="portfolio-card h-100 d-flex flex-column">
                <div className="portfolio-img">
                  <img src={project.img} alt={project.alt} width={"100%"} height={"350px"} />
                  <div className="portfolio-overlay">
                    <button className="btn btn-outline-light details-btn" onClick={() => btnDetails(project.id)}>
                      View
                    </button>
                  </div>
                </div>
                <div className="portfolio-text p-4 bg-white">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

       </div>

      </section>
    </div>
  )
}
