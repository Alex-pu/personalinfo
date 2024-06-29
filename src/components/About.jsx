import React from 'react';
import './about.css';

const About = () => {
  return (
    <section className="more-about" id="about">
      <h2>More About Me</h2>
      <div className="about-content">
        <p>
          I'm Alex Kamau, a computer science graduate with a strong foundation in web design, proficiency in the React framework and Node.js, and hands-on skills in networking and multimedia. I'm passionate about learning and sharing my knowledge with others.
        </p>
        <ul className="about-list">
          <li><strong>Education:</strong> B.Sc in Computer Science, Pwani University (2020 - 2024), Second Class Upper</li>
          <li><strong>Experience:</strong> Internship Trainee at Dunia Moja Community Network, where I trained community members on digital literacy, maintained network infrastructure, and conducted tests on the viability of TV white space technology in rural areas.</li>
          <li><strong>Skills:</strong> Networking, Database Management, Web Development, GIS, Computer Maintenance and Repair, REST API, Emotional Intelligence, React.js, Computer Graphics (AutoCAD)</li>
          <li><strong>Certifications:</strong> Completed a four-week encryption training with the Internet Society, learning the importance, types, and implementation of various encryption technologies.</li>
          <li><strong>Hobbies:</strong> Swimming</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
