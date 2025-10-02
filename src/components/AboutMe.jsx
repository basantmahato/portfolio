import React from 'react';
import './AboutMe.css';
import { IoArrowDown } from 'react-icons/io5'; 
import { RiTailwindCssFill } from "react-icons/ri";

import { 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaGithub,
  FaGitAlt,
  FaBootstrap
} from 'react-icons/fa'; 

 const handleScroll = (e) => {
    e.preventDefault(); 
    const targetElement = document.getElementById('projects-section');
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start' 
      });
    }
  };

const AboutMe = () => {
  return (
    <section id="about-me-section" className="about-me-container">
      
 
      <h2 className="about-me-title">
        About Me
      </h2>

      <div className="about-me-content-wrapper">
        

        <div className="about-me-icons-wrapper">
          <ul className="tech-stack-list">
            <li className="tech-icon-item">
              <FaReact className="tech-icon" title="React" />
            </li>
            <li className="tech-icon-item">
              <FaJs className="tech-icon" title="JavaScript" />
            </li>
            <li className="tech-icon-item">
              <FaHtml5 className="tech-icon" title="HTML5" />
            </li>
                <li className="tech-icon-item">
                  <FaCss3Alt className="tech-icon" title="CSS3" />
                </li>
                

          </ul>
          <ul className="tech-stack-list">
         
                 <li className="tech-icon-item">
                  <FaGithub className="tech-icon" title="GitHub" />
                </li>
                <li className="tech-icon-item">
                  <FaGitAlt className="tech-icon" title="Git" />
                </li>
                <li className="tech-icon-item">
                  <RiTailwindCssFill  className="tech-icon" title="Git" />
                </li>
                <li className="tech-icon-item">
                  <FaBootstrap  className="tech-icon" title="Git" />
                </li>

          </ul>
        </div>

        
        <div className="about-me-text-content">
          <p className="about-me-subtitle">
            A dedicated Frontend Developer  focused on building clean, efficient, and user-friendly web experiences.
          </p>
          
          <p className="about-me-body">
            With 1 years of experience, I excel in React, Javascript, and modern CSS practices. My goal is to transform complex challenges into beautiful, scalable solutions. I constantly seek new technologies to stay ahead of the curve and deliver maximum value on every project.
          </p>

          <div className="about-me-stats">
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1 Day</span>
              <span className="stat-label">Avg Bug Fix Time</span>
            </div>
          </div>

        
          <a href="#projects" className="view-projects-button" onClick={handleScroll}>
            View My Work <IoArrowDown className="arrow-icon" />
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default AboutMe;