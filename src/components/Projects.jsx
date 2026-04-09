import React, { useState } from 'react';
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
    image: '/projects/dental-clinic.png',
  },
  {
    id: 3,
    title: 'SnapNews',
    description: 'A react news app with publisher and reader view (ROLE BASED AUTHENTICATION).',
    tech: ['MERN STACK'],
    liveLink: 'https://snap-news-app.vercel.app/',
    repoLink: 'https://github.com/basantmahato/',
    image: '/projects/snapnews.png',
  },
  {
    id: 4,
    title: 'TwoLeaf Services Website',
    description: 'A react based services website for a digital marketing agency.',
    tech: ['React', 'CSS3'],
    liveLink: 'https://twoleafinitial.vercel.app/',
    repoLink: 'https://github.com/basantmahato/',
    image: '/projects/twoleaf.png',
  }
];

const filterCategories = ['All', 'React', 'MERN', 'CSS'];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? projectData
    : projectData.filter(project =>
        project.tech.some(t => t.toLowerCase().includes(activeFilter.toLowerCase()))
      );

  return (
  
    <section id="projects-section" className="projects-container">
      
      <h2 className="projects-title">
        My Work
      </h2>
      <p className="projects-subtitle">
        A selection of recent projects showcasing my skills in Web development.
      </p>

      <div className="projects-filter">
        {filterCategories.map((category) => (
          <button
            key={category}
            className={`filter-button ${activeFilter === category ? 'active' : ''}`}
            onClick={() => setActiveFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div 
            key={project.id} 
            className={`project-card project-card-${index % 2 === 0 ? 'even' : 'odd'}`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="project-icon-top" style={{ display: 'none' }}>
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