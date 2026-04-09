import React, { useState, useEffect } from 'react';
import './ProfileCard.css';
import { IoMail } from 'react-icons/io5';

const email = "basantkumar72580@gmail.com";
const jobs = ['Developer', 'Coder', 'Editor', 'Designer'];

const ProfileCard = () => {
  const [currentJobIndex, setCurrentJobIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentJobIndex((prev) => (prev + 1) % jobs.length);
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
      <div className="profile-card-inner">
        <div className="profile-content">
          <p className="greeting-text">Hello, I'm Basant</p>
        
       
          <h1 className="job-title-dynamic">
            {jobs[currentJobIndex]}
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
              <img src="/pf1.png" alt="" />
            </div>
          </div>
        </div>

        {/* <a href="#next-content-section" className="scroll-down-prompt" onClick={handleScroll}>
          <IoArrowDown className="scroll-icon" /> Scroll Down
        </a> */}
      </div>
    </section>
  );
};

export default ProfileCard;