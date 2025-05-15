import React from 'react';

const Services = () => {
  return (
    <section id="services">
      <div className="section-container">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🌐</div>
            <h3>Visa Support</h3>
            <p>Personalized help navigating Germany’s student visa process — we guide you every step of the way.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🏛</div>
            <h3>University Placement</h3>
            <p>We match you with the right German universities based on your academic goals and background.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🏠</div>
            <h3>Housing Assistance</h3>
            <p>Secure affordable, student-friendly housing before you arrive — no stress, no scams.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🤝</div>
            <h3>Mentorship & Guidance</h3>
            <p>Get matched with student mentors who’ve been in your shoes — you don’t have to figure this out alone.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
