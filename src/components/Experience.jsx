import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';
import { IoCalendarOutline, IoLocationOutline } from 'react-icons/io5';

const experienceData = [
  {
    id: 1,
    role: 'Full Stack Developer',
    company: 'Anantron International Pvt. Ltd.',
    location: 'On-site',
    duration: 'Feb 2026 - Present',
    description: 'Building and maintaining scalable web and mobile applications, developing APIs, and improving performance while ensuring smooth user experience and monitoring.',
    highlights: [
      'Developed full-stack applications using Next.js and NestJS',
      'Built cross-platform mobile apps with React Native and Expo',
      'Implemented Docker containerization with Dockploy for VPS deployment',
      'Integrated Sentry for error monitoring and performance tracking'
    ]
  },
  {
    id: 2,
    role: 'MERN Stack Developer Intern',
    company: 'Techcoder Software (OPC) PVT. LTD.',
    location: 'On-site',
    duration: 'Sep 2025 - Nov 2025',
    description: 'Developed SnapNews, a full-stack real-time content aggregation and publishing platform using the MERN stack with clear separation of concerns between Publishers and News Readers.',
    highlights: [
      'Built complete MERN stack application with MongoDB, Express, React, Node.js',
      'Implemented RESTful APIs tested with Postman',
      'Designed database schemas using Mongoose ODM',
      'Created role-based access for Publishers and News Readers'
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const highlightVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
    },
  },
};

const Experience = () => {
  return (
    <section id="experience-section" className="experience-container">
      <motion.h2
        className="experience-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h2>
      <motion.p
        className="experience-subtitle"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        My professional journey and career highlights
      </motion.p>

      <div className="experience-timeline-wrapper">
        <motion.div
          className="experience-timeline-line"
          initial={{ scaleY: 0, originY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
        <motion.div
          className="experience-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
        {experienceData.map((job, index) => (
          <motion.div
            key={job.id}
            className={`experience-item ${index % 2 === 0 ? 'left' : 'right'}`}
            variants={itemVariants}
          >
            <div className="experience-content">
              <div className="experience-header">
                <h3 className="experience-role">{job.role}</h3>
                <span className="experience-company">{job.company}</span>
              </div>

              <div className="experience-meta">
                <span className="experience-duration">
                  <IoCalendarOutline /> {job.duration}
                </span>
                <span className="experience-location">
                  <IoLocationOutline /> {job.location}
                </span>
              </div>

              <p className="experience-description">{job.description}</p>

              <motion.ul
                className="experience-highlights"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: {
                    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
                  },
                }}
              >
                {job.highlights.map((highlight, i) => (
                  <motion.li key={i} variants={highlightVariants}>
                    {highlight}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
      </div>
    </section>
  );
};

export default Experience;
