import React from 'react';
import './Portfolio.css';

function Portfolio() {
  const items = [
    { title: 'Before/After Edit', thumb: '/assets/edit1.jpg' },
    { title: 'Carousel Design', thumb: '/assets/carousel1.jpg' },
    { title: 'Podcast Clip', thumb: '/assets/podcast1.jpg' },
    { title: 'Thumbnail Pack', thumb: '/assets/thumb1.jpg' },
  ];

  return (
    <section id="portfolio" className="portfolio">
      <h2 className="section-title">Portfolio</h2>
      <div className="portfolio-grid">
        {items.map((item, i) => (
          <div key={i} className="portfolio-card">
            <img src={item.thumb} alt={item.title} />
            <div className="overlay">
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
