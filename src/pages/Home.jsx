import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="home-hero-content">
          <span className="home-eyebrow">Your next favorite find</span>

          <h1>
            Shopping made <span>simple.</span>
          </h1>

          <p>
            Discover quality products, explore new finds, and enjoy a
            smoother shopping experience from start to finish.
          </p>

          <div className="home-hero-actions">
            <Link to="/shop" className="home-button home-button-primary">
              Explore Products
            </Link>

            <Link to="/cart" className="home-button home-button-secondary">
              View Cart
            </Link>
          </div>
        </div>

        <div className="home-hero-visual" aria-hidden="true">
          <div className="home-visual-card">
            <div className="home-visual-icon">✦</div>
            <small>Made for your lifestyle</small>
            <h3>Find your next favorite.</h3>
            <div className="home-visual-line"></div>
            <div className="home-visual-line"></div>
          </div>
        </div>
      </section>

      <section className="home-benefits">
        <div className="home-section-heading">
          <h2>A better way to shop</h2>
          <p>
            Everything you need for a simple and enjoyable shopping
            experience.
          </p>
        </div>

        <div className="home-benefit-grid">
          <article className="home-benefit-card">
            <div className="home-benefit-icon">⌕</div>
            <h3>Explore Products</h3>
            <p>
              Browse a collection of products and find something that
              suits your needs.
            </p>
          </article>

          <article className="home-benefit-card">
            <div className="home-benefit-icon">🛒</div>
            <h3>Simple Shopping</h3>
            <p>
              Choose your quantities and add your favorite items to
              your cart with ease.
            </p>
          </article>

          <article className="home-benefit-card">
            <div className="home-benefit-icon">✓</div>
            <h3>Manage Your Cart</h3>
            <p>
              Review your selections, update quantities, and remove
              items whenever you need to.
            </p>
          </article>
        </div>
      </section>

      <section className="home-cta">
        <h2>Ready to find something you love?</h2>
        <p>
          Explore the collection and start building your shopping cart.
        </p>
        <Link to="/shop" className="home-button home-button-primary">
          Start Shopping
        </Link>
      </section>
    </div>
  );
}

export default Home;