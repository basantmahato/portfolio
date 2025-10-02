import React from 'react';
import './Projects.css';
import { IoArrowForward, IoCodeSlashOutline } from 'react-icons/io5';
import { FaGithub } from 'react-icons/fa';


const projectData = [
  {
    id: 1,
    title: 'Dental Clinic Site',
    description: 'A responsive single-page application built with React and custom CSS, focusing on performance and modern design principles.',
    tech: ['React', 'CSS3',],
    liveLink: 'https://dentalspa-five.vercel.app/',
    repoLink: 'https://github.com/basantmahato/',
  },
  {
    id: 2,
    title: 'E-commerce Frontend',
    description: 'A responsive frontend application built with React, showcasing product listings and user authentication.',
    tech: ['React', 'CSS3'],
    liveLink: 'https://rynox-brand-page.netlify.app/',
    repoLink: 'https://github.com/basantmahato/',
  },
  {
    id: 3,
    title: 'AIDS Data Visualization Dashboard',
    description: 'An interactive dashboard displaying data using chart.js and filtering options.',
    tech: ['HTML', 'CSS3', 'JavaScript', 'chart.js'],
    liveLink: 'https://basantmahato.github.io/AidsAwareness/',
    repoLink: 'https://github.com/basantmahato/',
  },
];

const Projects = () => {
  return (
  
    <section id="projects-section" className="projects-container">
      
      <h2 className="projects-title">
        My Work
      </h2>
      <p className="projects-subtitle">
        A selection of recent projects showcasing my skills in Frontend development.
      </p>

      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div 
            key={project.id} 
            className={`project-card project-card-${index % 2 === 0 ? 'even' : 'odd'}`}
          >
            <div className="project-icon-top">
              <IoCodeSlashOutline className="project-icon" />
            </div>
            
            <h3 className="project-title">{project.title}</h3>
            
            <p className="project-description">{project.description}</p>
            
            <div className="project-tech-list">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            
            <div className="project-links">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="live-link-button">
                View Live <IoArrowForward className="arrow-icon" />
              </a>
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="repo-link-button">
                <FaGithub className="github-icon" />
              </a>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Projects;