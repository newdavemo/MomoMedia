import React from 'react';
import './Pricing.css';

function Pricing() {
  const tiers = [
    {
      name: 'Starter',
      price: '$750/mo',
      features: ['5 videos/month'],
      color: '#ff5f9e',
    },
    {
      name: 'Growth',
      price: '$1,500/mo',
      features: ['10 videos', '2 carousels'],
      color: '#a85fff',
    },
    {
      name: 'Creator Pro',
      price: '$2,500/mo',
      features: ['15 videos', 'Thumbnails', 'Podcast clips'],
      color: '#00f0ff',
    },
  ];

  return (
    <section id="pricing" className="pricing">
      <h2 className="section-title">Pricing</h2>
      <div className="pricing-grid">
        {tiers.map((tier, i) => (
          <div key={i} className="pricing-card" style={{ borderColor: tier.color }}>
            <h3>{tier.name}</h3>
            <p className="price">{tier.price}</p>
            <ul>
              {tier.features.map((f, j) => <li key={j}>{f}</li>)}
            </ul>
            <a href="#contact" className="pricing-cta">Book Your Slot</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
