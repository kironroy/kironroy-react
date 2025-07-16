import React from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  const sendEmail = e => {
    e.preventDefault(); // Prevent the default form submission behavior

    emailjs
      .sendForm(
        'service_bj2vtfe', // Replace with your actual Service ID
        'template_0q1qupp', // Replace with your actual Template ID
        e.target,
        'cYHvBJ9tIO8cclgdD' // Replace with your actual Public Key
      )
      .then(
        result => {
          console.log('Email sent successfully:', result.text);
          alert('Message sent successfully!');
        },
        error => {
          console.error('Error sending email:', error.text);
          alert('Failed to send the message. Please try again.');
        }
      );

    e.target.reset(); // Reset the form after submission
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className='contact'>Contact</h2>
  
        <form onSubmit={sendEmail}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
