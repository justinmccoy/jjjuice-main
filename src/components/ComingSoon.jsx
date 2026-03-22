import { useState, useEffect } from 'react';

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
    alert('¡Gracias! Wir informieren dich als Erstes.');
  };

  return (
    <section className="coming-soon" id="notify">
      <span className="section-title">Bald Erhältlich</span>
      
      <div className="countdown">
        <div className="countdown-item">
          <div className="countdown-number">{countdown.days}</div>
          <div className="countdown-label">Tage</div>
        </div>
        <div className="countdown-item">
          <div className="countdown-number">{countdown.hours}</div>
          <div className="countdown-label">Stunden</div>
        </div>
        <div className="countdown-item">
          <div className="countdown-number">{countdown.minutes}</div>
          <div className="countdown-label">Minuten</div>
        </div>
        <div className="countdown-item">
          <div className="countdown-number">{countdown.seconds}</div>
          <div className="countdown-label">Sekunden</div>
        </div>
      </div>

      <div className="signup">
        <form className="signup-form" onSubmit={handleSubmit}>
          <input type="email" className="signup-input" placeholder="Deine E-Mail-Adresse" required />
          <button type="submit" className="signup-button">Dabei</button>
        </form>
        <p className="signup-note">Sei der Erste, der probiert. Kein Spam, nur Salsa.</p>
      </div>

      <div className="features">
        <div className="feature">
          <div className="feature-icon">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
          </div>
          <h3 className="feature-title">Kleine Chargen</h3>
          <p className="feature-text">Handgefertigt in kleinen Mengen für kompromisslose Qualität und Geschmack.</p>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 6v6l4 2"/>
            </svg>
          </div>
          <h3 className="feature-title">Täglich Frisch</h3>
          <p className="feature-text">Frisch zubereitet mit Zutaten von lokalen mexikanischen Bauernhöfen.</p>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </div>
          <h3 className="feature-title">Mit Liebe Gemacht</h3>
          <p className="feature-text">Familienrezepte, die seit Generationen von Salseros weitergegeben werden.</p>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;

// Made with Bob
