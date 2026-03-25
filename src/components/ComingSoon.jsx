import { useState, useEffect } from 'react';
import { content } from '../content';

const ComingSoon = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const updateCountdown = () => {
      const launchDate = new Date();
      launchDate.setDate(launchDate.getDate() + 42);
      
      const now = new Date();
      const diff = launchDate - now;
      
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      setCountdown({
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0')
      });
    };
    
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    window.location.href = `mailto:hello@jjjuice.de?subject=Newsletter Anmeldung&body=Hallo, ich möchte über den Launch informiert werden.%0D%0A%0D%0AMeine E-Mail: ${email}`;
  };

  const featureIcons = [
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
      <path d="M2 17l10 5 10-5"/>
      <path d="M2 12l10 5 10-5"/>
    </svg>,
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 6v6l4 2"/>
    </svg>,
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  ];

  return (
    <section className="coming-soon" id="notify">
      <span className="section-title">{content.comingSoon.sectionTitle}</span>
      
      <div className="countdown">
        <div className="countdown-item">
          <div className="countdown-number">{countdown.days}</div>
          <div className="countdown-label">{content.comingSoon.countdown.days}</div>
        </div>
        <div className="countdown-item">
          <div className="countdown-number">{countdown.hours}</div>
          <div className="countdown-label">{content.comingSoon.countdown.hours}</div>
        </div>
        <div className="countdown-item">
          <div className="countdown-number">{countdown.minutes}</div>
          <div className="countdown-label">{content.comingSoon.countdown.minutes}</div>
        </div>
        <div className="countdown-item">
          <div className="countdown-number">{countdown.seconds}</div>
          <div className="countdown-label">{content.comingSoon.countdown.seconds}</div>
        </div>
      </div>

      <div className="signup">
        <form className="signup-form" onSubmit={handleSubmit}>
          <input type="email" className="signup-input" placeholder={content.comingSoon.signup.placeholder} required />
          <button type="submit" className="signup-button">{content.comingSoon.signup.button}</button>
        </form>
        <p className="signup-note">{content.comingSoon.signup.note}</p>
      </div>

      <div className="features">
        {content.comingSoon.features.map((feature, index) => (
          <div key={index} className="feature">
            <div className="feature-icon">
              {featureIcons[index]}
            </div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-text">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ComingSoon;

// Made with Bob
