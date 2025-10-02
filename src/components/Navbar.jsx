import React from 'react';
import './Navbar.css';
import { FaGithub } from "react-icons/fa";
import { IoDocumentAttachOutline } from "react-icons/io5";

const email = "basantmahato@zohomail.in";
const resume = "https://www.canva.com/design/DAGmB39xLoQ/NDMutESCHfFDuWOmeLsrGA/view?utm_content=DAGmB39xLoQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h7138daa618";


// let nameDecoration = "<"
// let nameDecoration2 = "/>"

 const handleScrollHome = (e) => {
    e.preventDefault(); 
    const targetElement = document.getElementById('profile-card-container');
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start' 
      });
    }
  };

   const handleScrollAbout = (e) => {
    e.preventDefault(); 
    const targetElement = document.getElementById('about-me-section');
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start' 
      });
    }
  };

   const handleScrollProjects = (e) => {
    e.preventDefault(); 
    const targetElement = document.getElementById('projects-section');
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start' 
      });
    }
  };


const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        {/* <span>{nameDecoration} BASANT {nameDecoration2}</span> */} @basantmahato
      </div>

      <ul className="navbar-links">
       <li id='home' onClick={handleScrollHome}><a href="#" >Home</a></li>

        <li id='about' onClick={handleScrollAbout}><a href="#">About</a></li>

        <li id='projects' onClick={handleScrollProjects}><a href="#">Projects</a></li>
      </ul>

      <div className="navbar-icon">
        <a href="https://www.github.com/basantmahato"  title='GitHub Profile'><FaGithub /></a> 
      </div>

      <div className="navbar-icon">
        <a href={resume} title='Resume'><IoDocumentAttachOutline /></a> 
      </div>

      <a href={`mailto:${email}`} className="navbar-contact-button">
       <p style={{fontSize:13 }}> {email}</p>
      </a>
    </nav>
  );
};

export default Navbar;
