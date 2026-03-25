import { content } from '../content';

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
            {content.hero.headline.map((word, index) => (
              <span key={index}>{word}</span>
            ))}
          </h1>
          <p className="subheadline">{content.hero.subheadline}</p>
          <a href="#notify" className="cta-button">{content.hero.ctaButton}</a>
        </div>
      </div>
      
      <div className="hero-right">
        <div className="logo-container">
          <div className="logo-glow"></div>
          <img src="/logo.png" alt={content.hero.logoAlt} />
        </div>
      </div>
    </section>
  );
};

export default Hero;

// Made with Bob
