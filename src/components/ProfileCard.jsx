import React, { useState, useEffect } from 'react';
import './ProfileCard.css';
import { FiSend } from 'react-icons/fi'; 
import { IoArrowDown , IoMail  } from 'react-icons/io5'; 

const jobs = ["Front-End Developer", "Coder", "Editor", "Designer"]; 
  const email = "basantmahato@zohomail.in";

const ProfileCard = () => {

  const [jobIndex, setJobIndex] = useState(0);


  useEffect(() => {

    const interval = setInterval(() => {
      setJobIndex((prevIndex) => (prevIndex + 1) % jobs.length);
    }, 750); 

    return () => clearInterval(interval); 
  }, []);


  //   const handleScroll = (e) => {
  //   e.preventDefault(); 
  //   const targetElement = document.getElementById('about-me-section');
    
  //   if (targetElement) {
  //     targetElement.scrollIntoView({
  //       behavior: 'smooth',
  //       block: 'start' 
  //     });
  //   }
  // };

  return (
    <section id='profile-card-container' className="profile-card-container">
      <div className="profile-content">
        <p className="greeting-text">Hello, I'm Basant</p>
        
       
        <h1 className="job-title-dynamic">
          {jobs[jobIndex]}
        </h1>

        <p className="description-text">
          High level experience in web design and development knowledge, producing quality work.
        </p>

        <a href={`mailto:${email}`} className="contact-button">
          Contact Me <IoMail  className="send-icon" />
        </a>
      </div>

      <div className="profile-image-wrapper">

        <div className="profile-image">
   
          <div className="image-placeholder"> 
            <img src="/pf2.png" alt="" />
          </div>
        </div>
      </div>

      {/* <a href="#next-content-section" className="scroll-down-prompt" onClick={handleScroll}>
        <IoArrowDown className="scroll-icon" /> Scroll Down
      </a> */}
    </section>
  );
};

export default ProfileCard;