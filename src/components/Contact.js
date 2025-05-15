import React, { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p className="contact-lead">Reach out with questions or collaboration ideas.</p>

        {!submitted ? (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="name-fields">
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
            </div>
            <input type="email" placeholder="Your Email" required />
            <textarea rows="6" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        ) : (
          <div className="form-success">
            <h3>Thank you! 🎉</h3>
            <p>We’ve received your message and will get back to you shortly.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
