import React, { useState } from 'react';
import Soon from './Soon';
import './projects.css';
import project1Image from '../assets/images/hero.png';

const Projects = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleLinkClick = (e) => {
    e.preventDefault();
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000); // Close the alert after 5 seconds
  };

  return (
    <section className="projects" id="projects">
      <h2>Some of my Recent Projects</h2>
      <div className="projects-container">
        <div className="project-card">
          <img src={project1Image} alt="Windsor City Election" className="project-pic" />
          <h3>Windsor City Election</h3>
          <p>This project focuses on 2018 elections...</p>
          <a href="https://github.com/Alex-pu/Data-analysis-with-python" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>
            Check it Out!
          </a>
        </div>
        <div className="project-card">
          <img src={project1Image} alt="Windsor City Election" className="project-pic" />
          <h3>Windsor City Election</h3>
          <p>This project focuses on 2018 elections...</p>
          <a href="https://github.com/Alex-pu/Data-analysis-with-python" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>
            Check it Out!
          </a>
        </div>
        {/* Add other project cards here */}
      </div>
      {showAlert && <Soon onClose={() => setShowAlert(false)} />}
    </section>
  );
};

export default Projects;
