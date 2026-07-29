import { Link } from "react-router-dom";
import "../index.css";

export default function Home() {
  return (
    <section className="hero">
      <video autoPlay loop muted playsInline className="bg-video">
        <source src="/videos/vid.mp4" type="video/mp4" />
      </video>

      <div className="overlay"></div>

      <div className="hero-content">
        <div className="hero-badge">Global Markets • Live Pricing • Secure Execution</div>
        <h1>
          A World of <br />
          <span>Trading Opportunities</span>
        </h1>

        <p>
          Trade stocks, forex, commodities, and indices with institutional-grade tools and real-time market insight.
        </p>

        <div className="buttons">
          <Link to="/register" className="open">Open An Account</Link>
          <Link to="/login" className="login">Login</Link>
        </div>

        <div className="hero-stats">
          <div><strong>24/5</strong><span>Market Access</span></div>
          <div><strong>$10K</strong><span>Demo Balance</span></div>
          <div><strong>0.0</strong><span>Commission</span></div>
        </div>
      </div>
    </section>
  );
}