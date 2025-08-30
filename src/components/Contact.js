import React, { useState, useEffect } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Load saved data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem('contactForm');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  // Save data to localStorage on change
  useEffect(() => {
    localStorage.setItem('contactForm', JSON.stringify(formData));
  }, [formData]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_bj2vtfe',
        'template_0q1qupp',
        e.target,
        'cYHvBJ9tIO8cclgdD'
      )
      .then(
        result => {
          console.log('Email sent successfully:', result.text);
          alert('Message sent successfully!');
          localStorage.removeItem('contactForm'); // Clear saved data
          setFormData({ name: '', email: '', message: '' }); // Reset state
        },
        error => {
          console.error('Error sending email:', error.text);
          alert('Failed to send the message. Please try again.');
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="contact">Contact</h2>

        <form onSubmit={sendEmail}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
