import React from 'react';
import './skills.css';

import sqlIcon from '../assets/images/sql.png';
import pythonIcon from '../assets/images/python.png';
import gitIcon from '../assets/images/git.png';
import reactIcon from '../assets/images/react.png';
import nodejsIcon from '../assets/images/node.png';
import qgisIcon from '../assets/images/q.png';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2>My Top Skills</h2>
      <div className="skills-wrapper">
        <div className="skill-card animate__animated animate__pulse">
          <img src={nodejsIcon} alt="Node.js" className="icon icon-card" />
          <p className="skill-name">Node.js</p>
        </div>
        <div className="skill-card animate__animated animate__pulse">
          <img src={sqlIcon} alt="SQL" className="icon icon-card" />
          <p className="skill-name">SQL</p>
        </div>
        <div className="skill-card animate__animated animate__pulse">
          <img src={pythonIcon} alt="Python" className="icon icon-card" />
          <p className="skill-name">Python</p>
        </div>
        <div className="skill-card animate__animated animate__pulse">
          <img src={gitIcon} alt="Git" className="icon icon-card" />
          <p className="skill-name">Git</p>
        </div>
        <div className="skill-card animate__animated animate__pulse">
          <img src={reactIcon} alt="React" className="icon icon-card" />
          <p className="skill-name">React</p>
        </div>
        <div className="skill-card animate__animated animate__pulse">
          <img src={qgisIcon} alt="QGIS" className="icon icon-card" />
          <p className="skill-name">QGIS</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
