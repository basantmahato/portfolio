import React from 'react';
import './Certificates.css';
import { IoOpenOutline, IoCalendarOutline } from 'react-icons/io5';
import { FaExternalLinkAlt } from 'react-icons/fa';

const certificatesData = [
  {
    id: 1,
    name: 'React - The Complete Guide',
    issuer: 'Udemy',
    date: '2024',
    credentialId: 'UC-XXXXX',
    verifyLink: 'https://www.udemy.com/certificate/UC-XXXXX',
    color: '#61DAFB'
  },
  {
    id: 2,
    name: 'JavaScript Algorithms and Data Structures',
    issuer: 'freeCodeCamp',
    date: '2024',
    credentialId: 'fCC-XXXXX',
    verifyLink: 'https://www.freecodecamp.org/certification/XXXXX',
    color: '#F7DF1E'
  },
  {
    id: 3,
    name: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: '2023',
    credentialId: 'fCC-XXXXX',
    verifyLink: 'https://www.freecodecamp.org/certification/XXXXX',
    color: '#0066B2'
  }
];

const Certificates = () => {
  return (
    <section id="certificates-section" className="certificates-container">
      <h2 className="certificates-title">Certificates</h2>
      <p className="certificates-subtitle">Professional certifications and achievements</p>

      <div className="certificates-grid">
        {certificatesData.map((cert) => (
          <div key={cert.id} className="certificate-card">
            <div
              className="certificate-accent"
              style={{ backgroundColor: cert.color }}
            />

            <div className="certificate-content">
              <h3 className="certificate-name">{cert.name}</h3>

              <div className="certificate-meta">
                <span className="certificate-issuer">{cert.issuer}</span>
                <span className="certificate-date">
                  <IoCalendarOutline /> {cert.date}
                </span>
              </div>

              <p className="credential-id">ID: {cert.credentialId}</p>

              <a
                href={cert.verifyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="verify-link"
              >
                <FaExternalLinkAlt /> Verify Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
