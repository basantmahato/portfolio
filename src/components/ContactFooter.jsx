import React from 'react';
import './ContactFooter.css';
import { IoMailOutline, IoCallOutline } from 'react-icons/io5';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const ContactFooter = () => {
  const currentYear = new Date().getFullYear();
  const email = "basantmahato@zohomail.in";
  // const phone = "+91 87096 "; 

  return (
    <footer id="contact-section" className="contact-footer-container">
      
   
      <div className="contact-cta">
        <h2 className="cta-title">
          Ready to build something amazing?
        </h2>
        <p className="cta-subtitle">
          I'm currently open to new opportunities and freelance projects. Let's connect!
        </p>
        
        <a href={`mailto:${email}`} className="cta-button">
          Get in Touch
          <IoMailOutline className="mail-icon" />
        </a>
      </div>

      <div className="contact-details-wrapper">
        

        <div className="contact-links-group">
          <a href={`mailto:${email}`} className="contact-link-item">
            <IoMailOutline className="link-icon" /> {email}
          </a>
          {/* <a href={`tel:${phone.replace(/\s/g, '')}`} className="contact-link-item">
            <IoCallOutline className="link-icon" /> {phone}
          </a> */}
        </div>

        <div className="social-links-group">
          <a 
            href="https://github.com/basantmahato" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon-link"
            title="GitHub"
          >
            <FaGithub className="social-icon" />
          </a>
          <a 
            href="https://linkedin.com/in/basantmahato" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon-link"
            title="LinkedIn"
          >
            <FaLinkedin className="social-icon" />
          </a>
          <a 
            href="https://instagram.com/basant_mahat0" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon-link"
            title="Instagram"
          >
            <FaInstagram className="social-icon" />
          </a>
        </div>
      </div>
      
      
      <div className="footer-copyright">
        <p>
          &copy; {currentYear} Basant. All rights reserved. | Built with React
        </p>
      </div>
      
    </footer>
  );
};

export default ContactFooter;