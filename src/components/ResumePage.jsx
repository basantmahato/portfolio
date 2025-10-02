import React from 'react';
import './ResumePage.css';

const ResumePage = () => {
  return (
    <div className="resume-viewer-container">
      <h2 className="resume-page-title">My Professional Resume</h2>
      
     
      <iframe 
        src="/basantmahato.pdf" 
        width="100%" 
        height="1100px" 
        title="Basant's Resume"
        style={{ border: 'none' }}
        className="resume-iframe"
      />
      
      {/* <a href="/Basant_Resume.pdf" download className="download-button-resume">
        Download PDF
      </a> */}
    </div>
  );
};

export default ResumePage;