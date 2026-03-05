import React, { useEffect, useRef, useState } from 'react';
import "../style/animation.css";
import "../style/common.css"; // shared styles for overlays and cards
import { useNavigate } from 'react-router-dom';

export default function Portfolio() {

  const navigate = useNavigate();
  // We need separate states for each row to animate them independently
  const [isIntersecting1, setIntersecting1] = useState(false);
  const [isIntersecting2, setIntersecting2] = useState(false);

  const sectionRef1 = useRef(null);
  const sectionRef2 = useRef(null);

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

    if (sectionRef1.current) observer1.observe(sectionRef1.current);
    if (sectionRef2.current) observer2.observe(sectionRef2.current);

    return () => {
      observer1.disconnect();
      observer2.disconnect();
    };
  }, []);

  const btnDetails = (data)=> {
        switch(data){
          case "p1":
            navigate(`/projects/${data}`);
            break;
          case "p2":
            navigate(`/projects/${data}`);
            break;    
          case "p3":
            navigate(`/projects/${data}`);
            break;
          case "p4":
            navigate(`/projects/${data}`);
            break;  

          case "p5":
            navigate(`/projects/${data}`);
            break;  
          case "p6":
            navigate(`/projects/${data}`);
            break;
          default:
            console.log("No project details available");
        }
        
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
          <div className={`col-md-4 p-3 bg-light ${isIntersecting1 ? 'animate-left' : 'reset-anim'}`}>
             <div className="portfolio-card h-100 d-flex flex-column">
                <div className="portfolio-img">
                   <img src="/projects/1_bootstrap/img/pngweb.png" alt="Bootstrap project webpage screenshot displaying responsive design layout" width={"100%"} height={"350px"} />
                   <div className="portfolio-overlay">
                       <button className="btn btn-outline-light details-btn" onClick={()=> btnDetails("p1")}>
                          View
                       </button>      
                    </div>
                </div>
                  <div className="portfolio-text p-4 bg-white">
                  <h3>PNG Jewellery</h3>
                  <p>this is a responsive website for a jewellery store built using Bootstrap 5.</p>
                </div>
              </div>

          </div>

          <div className={`col-md-4 p-3 bg-light ${isIntersecting1 ? 'animate-left' : 'reset-anim'}`}>

            <div className="portfolio-card h-100 d-flex flex-column">
                <div className="portfolio-img">
                   <img src="/projects/1_bootstrap/img/omnifoodweb.png" alt="Professional portrait photo in neutral setting conveying approachable and professional demeanor" width={"100%"} height={"350px"} />
                      <div className="portfolio-overlay">
                        <button className="btn btn-outline-light details-btn" onClick={() => btnDetails("p2")}>
                          View
                        </button>
                      </div>
                </div>
                 <div className="portfolio-text  p-4 bg-white">
                  <h3>Omnifood</h3>
                  <p>this is a responsive website for a food delivery service built using Bootstrap 5.</p>
                </div>
              </div>

          </div>

          <div className={`col-md-4 p-3 bg-light ${isIntersecting1 ? 'animate-left' : 'reset-anim'}`}>

            <div className="portfolio-card h-100 d-flex flex-column">
                <div className="portfolio-img">
                   <img src="/projects/1_bootstrap/img/blogweb.png" alt="imsbjhbhdc" width={"100%"} height={"350px"} />
                      <div className="portfolio-overlay">
                        <button className="btn btn-outline-light details-btn" onClick={() => btnDetails("p5") }>
                          View
                        </button>
                      </div>

                </div>
                <div className="portfolio-text  p-4 bg-white">
                  <h3>Blog Web page</h3>
                  <p>this is a static blog web page built using html 5 and css</p>
                </div>

              </div>

          </div>
        </div>

        <div className="row m-3" ref={sectionRef2}>
          <div className={`col-md-4 p-3 bg-light ${isIntersecting2 ? 'animate-left' : 'reset-anim'}`}>
             <div className="portfolio-card h-100 d-flex flex-column">
                <div className="portfolio-img">
                   <img src="/projects/1_bootstrap/img/related-1.jpg" alt="Professional portrait photo in neutral setting conveying approachable and professional demeanor" width={"100%"} height={"350px"} />
                      <div className="portfolio-overlay">
                        <button className="btn btn-outline-light details-btn" onClick={() => btnDetails("p4")}>
                          View
                        </button>
                      </div>
                </div>
                  <div className="portfolio-text p-4 bg-white">
                  <h3>static web</h3>
                  <p>this is a static web page built using only Html4 </p>
                </div>
              </div>

          </div>

          <div className={`col-md-4 p-3 bg-light ${isIntersecting2 ? 'animate-left' : 'reset-anim'}`}>

            <div className="portfolio-card h-100 d-flex flex-column">
                <div className="portfolio-img">
                   <img src="/projects/1_bootstrap/img/project3web.png" alt="Professional portrait photo in neutral setting conveying approachable and professional demeanor" width={"100%"} height={"350px"} />
                      <div className="portfolio-overlay">
                        <button className="btn btn-outline-light details-btn" onClick={() => btnDetails("p3") }>
                          View
                        </button>
                      </div>
                </div>
                 <div className="portfolio-text  p-4 bg-white">
                  <h3>Static Web page</h3>
                  <p>this is a static web page built using only Html4 </p>
                </div>
              </div>

          </div>

          <div className={`col-md-4 p-3 bg-light ${isIntersecting2 ? 'animate-left' : 'reset-anim'}`}>

            <div className="portfolio-card h-100 d-flex flex-column">
                <div className="portfolio-img">
                   <img src="/projects/1_bootstrap/img/img3.jpeg" alt="imsbjhbhdc" width={"100%"} height={"350px"} />
                      <div className="portfolio-overlay">
                        <button className="btn btn-outline-light details-btn" onClick={() => btnDetails("p6")}>
                          View
                        </button>
                      </div>

                </div>
                <div className="portfolio-text  p-4 bg-white">
                  <h3>static Portfolio</h3>
                  <p>this is a static portfolio web page built using only Html4</p>
                </div>

              </div>

          </div>
        </div>

       </div>

      </section>
    </div>
  )
}
