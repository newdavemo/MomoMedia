import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Let’s Create Something That Resonates</h2>
      <form
        action="https://formspree.io/f/your-form-id" // Replace with your Formspree ID
        method="POST"
        className="contact-form"
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required />
        <button type="submit" className="contact-button">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
