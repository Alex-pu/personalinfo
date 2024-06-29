import React from 'react';
import './contact.css'

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>Get In Touch With Me</h2>
      <div className="contact-form-container">
        <form action="https://formspree.io/f/mwkjvaee" method="POST">
          <div className="form-control">
            <label for="name">Name</label>
            <input type="text" id="name" name="sender-name" required />
          </div>
          <div className="form-control">
            <label for="email">Email</label>
            <input type="email" id="email" name="sender-email" required />
          </div>
          <div className="form-control">
            <label for="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
      <div className="contact-info-blink">
        <p>Email: kamaua175@gmail.com | Phone: (254) 704-813-341</p>
      </div>
    </section>
  );
};

export default Contact;
