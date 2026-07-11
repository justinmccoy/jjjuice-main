import { content } from '../content';

const SalsaProducts = () => {
  return (
    <section className="salsa-products">
      <span className="section-title">{content.salsas.sectionTitle}</span>

      <div className="salsa-grid">
        {content.salsas.products.map((product, index) => (
          <div key={index} className="salsa-card">
            <div className="salsa-image-wrapper">
              <img src={product.image} alt={product.imageAlt} className="salsa-image" />
            </div>

            <div className="salsa-info">
              <h2 className="salsa-name">{product.name}</h2>
              <p className="salsa-tagline">{product.tagline}</p>
              <p className="salsa-description">{product.description}</p>
              <div className="salsa-ingredients">
                <span className="ingredients-label">Zutaten</span>
                <p className="ingredients-text">{product.ingredients}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SalsaProducts;

// Made with Bob
