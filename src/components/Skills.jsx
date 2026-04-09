import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';
import {
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaGithub, FaGitAlt, FaNodeJs, FaDatabase
} from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiExpress, SiMongodb, SiBootstrap, SiVite, SiVercel, SiNestjs, SiNextdotjs, SiPostgresql, SiDocker } from 'react-icons/si';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'JavaScript', icon: FaJs, level: 80 },
      { name: 'HTML5', icon: FaHtml5, level: 90 },
      { name: 'CSS3', icon: FaCss3Alt, level: 85 },
      { name: 'Tailwind CSS', icon: RiTailwindCssFill, level: 80 },
      { name: 'Bootstrap', icon: SiBootstrap, level: 75 },
      { name: 'React', icon: FaReact, level: 85 },
      { name: 'Next.js', icon: SiNextdotjs, level: 75 },
      { name: 'React Native', icon: FaReact, level: 70 }
    ]
  },
  {
    title: 'Backend & Database',
    skills: [
      { name: 'Node.js', icon: FaNodeJs, level: 70 },
      { name: 'Express', icon: SiExpress, level: 65 },
      { name: 'MongoDB', icon: SiMongodb, level: 70 },
      { name: 'PostgreSQL', icon: SiPostgresql, level: 65 },
      { name: 'NestJS', icon: SiNestjs, level: 60 }
    ]
  },
  {
    title: 'Tools & Deployment',
    skills: [
      { name: 'Git', icon: FaGitAlt, level: 80 },
      { name: 'GitHub', icon: FaGithub, level: 85 },
      { name: 'Vite', icon: SiVite, level: 75 },
      { name: 'Vercel', icon: SiVercel, level: 80 },
      { name: 'Docker', icon: SiDocker, level: 60 },
      { name: 'Dockploy', icon: FaDatabase, level: 55 }
    ]
  }
];

const getLevelLabel = (level) => {
  if (level >= 90) return 'Expert';
  if (level >= 75) return 'Advanced';
  if (level >= 60) return 'Intermediate';
  return 'Beginner';
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const categoryVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const skillItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
    },
  },
};

const Skills = () => {
  return (
    <section id="skills-section" className="skills-container">
      <motion.h2
        className="skills-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>
      <motion.p
        className="skills-subtitle"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Technologies and tools I work with
      </motion.p>

      <motion.div
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            className="skills-category"
            variants={categoryVariants}
          >
            <h3 className="category-title">{category.title}</h3>
            <motion.div
              className="skills-list"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: { staggerChildren: 0.1, delayChildren: 0.1 },
                },
              }}
            >
              {category.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="skill-item"
                  variants={skillItemVariants}
                >
                  <div className="skill-header">
                    <skill.icon className="skill-icon" />
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level-label">{getLevelLabel(skill.level)}</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-progress"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
