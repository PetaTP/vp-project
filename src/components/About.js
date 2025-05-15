import React from 'react';

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <h2>Our Mission</h2>
        <p className="about-lead">
          At Study Abroad, we believe education should be a right — not a privilege.
        </p>

        <div className="about-flex">
          <div className="about-text">
            <p>
              We're here to support international students who face visa loss, displacement, or systemic barriers.
              Our mission is to provide clear guidance, secure placement, and a sense of belonging to every student who chooses to rebuild their future in Germany.
            </p>

            <p>
              Whether you've lost your U.S. status, need a fresh start, or simply want a better path forward — we're with you.
              From paperwork to placement to mentorship, we help you move with confidence and purpose.
            </p>

            <div className="about-values">
              <h3>We value:</h3>
              <ul>
                <li>🧭 Integrity and transparency</li>
                <li>🌍 Access to global education</li>
                <li>💬 Honest, student-first guidance</li>
                <li>🤝 Community over competition</li>
              </ul>
            </div>
          </div>

          <div className="about-image">
            <img src="/images/about-photo.jpg" alt="Student community" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
