
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ProfileCard from './components/ProfileCard';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ContactFooter from './components/ContactFooter';
import ResumePage from './components/ResumePage';


const HomePageContent = () => (
    <>
     <Navbar />
        <ProfileCard />
        <AboutMe />
        <Projects />
        <ContactFooter />
    </>
);

function App() {
  return (
    <Router>
       
       
        
        <Routes>
           
            <Route path="/" element={<HomePageContent />} />
            
          
            <Route path="/resume" element={<ResumePage />} />
        </Routes>
    </Router>
  );
}

export default App;