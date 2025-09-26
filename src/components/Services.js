import React from 'react';
import './Services.css';

function Services() {
  const services = [
    { icon: '🎬', title: 'Video Editing', desc: 'Short-form content that converts.' },
    { icon: '🎙️', title: 'Podcast Repurposing', desc: 'Turn long-form into viral clips.' },
    { icon: '📊', title: 'Carousel Design', desc: 'Scroll-stopping visuals for socials.' },
    { icon: '🧠', title: 'Scripting & Strategy', desc: 'Creative direction that resonates.' },
  ];

  return (
    <section id="services" className="services">
      <h2 className="section-title">What We Do</h2>
      <div className="service-grid">
        {services.map((s, i) => (
          <div key={i} className="service-card">
            <div className="service-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
