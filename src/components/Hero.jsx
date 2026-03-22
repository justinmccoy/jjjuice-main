const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <nav className="nav">
          <div className="nav-check">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <span className="nav-brand"><span>JJJUICE</span> SALSA CO.</span>
        </nav>
        
        <div className="headline">
          <h1>
            <span>SPÜR</span>
            <span>DAS</span>
            <span>FEUER</span>
          </h1>
          <p className="subheadline">Authentische mexikanische Salsa – mit Tradition, Liebe und der perfekten Schärfe.</p>
          <a href="#notify" className="cta-button">Benachrichtigen</a>
        </div>
      </div>
      
      <div className="hero-right">
        <div className="logo-container">
          <div className="logo-glow"></div>
          <img src="/logo.png" alt="JJJUICE Logo" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

// Made with Bob
