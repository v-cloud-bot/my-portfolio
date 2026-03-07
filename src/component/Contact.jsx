import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import "../style/animation.css"
import "../style/contact.css"

export default function Contact() {
  const [isIntersecting, setIntersecting] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div>
       <section id="call-to-action" ref={sectionRef} className='mt-5'>
                <div className="container-fluid contact-body">
                    <div className="row">
                        <div className="col-md-12">
                            <div className={`block ${isIntersecting ? 'animate-left' : 'reset-anim'}`}>
                                <h2 className="title">SO WHAT YOU THINK ?</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis,<br />possimus commodi, fugiat magnam temporibus vero magni recusandae? Dolore, maxime praesentium.</p>
                                <Link to="/contact" className="btn btn-default btn-contact">Contact With Me</Link>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
    </div>
  )
}
