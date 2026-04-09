import React from 'react';
import './AboutMe.css';
import { IoArrowDown } from 'react-icons/io5';
import { 
  FaReact, 
  FaJs, 
  FaGitAlt,
  FaNode
} from 'react-icons/fa';
import { 
  SiNestjs, 
  SiNextdotjs, 
  SiMongodb, 
  SiPostgresql 
} from 'react-icons/si'; 

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
              <FaJs className="tech-icon" title="JavaScript" />
            </li>
            <li className="tech-icon-item">
              <FaReact className="tech-icon" title="React" />
            </li>
            <li className="tech-icon-item">
              <SiNextdotjs className="tech-icon" title="Next.js" />
            </li>
            <li className="tech-icon-item">
              <FaNode className="tech-icon" title="Node.js" />
            </li>
          </ul>
          <ul className="tech-stack-list">
            <li className="tech-icon-item">
              <SiNestjs className="tech-icon" title="NestJS" />
            </li>
            <li className="tech-icon-item">
              <SiMongodb className="tech-icon" title="MongoDB" />
            </li>
            <li className="tech-icon-item">
              <SiPostgresql className="tech-icon" title="PostgreSQL" />
            </li>
            <li className="tech-icon-item">
              <FaGitAlt className="tech-icon" title="Git" />
            </li>
          </ul>
        </div>

        
        <div className="about-me-text-content">
          <p className="about-me-subtitle">
            A dedicated Full Stack Developer focused on building scalable web applications, RESTful APIs, and cross-platform mobile solutions.
          </p>
          
          <p className="about-me-body">
            With 1+ years of experience, I specialize in the MERN stack (MongoDB, Express, React, Node.js) along with Next.js, NestJS, PostgreSQL, and React Native. I build end-to-end solutions from database design to deployment, using Docker and cloud platforms. My goal is to transform complex challenges into efficient, scalable applications that deliver maximum value.
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