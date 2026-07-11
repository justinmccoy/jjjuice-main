import { content } from '../content';

const ComingSoon = () => {
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
      {content.comingSoon.sectionTitle && <span className="section-title">{content.comingSoon.sectionTitle}</span>}
      
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
