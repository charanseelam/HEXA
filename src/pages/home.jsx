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

        <h1>
          A World of <br />
          <span>Trading Opportunities</span>
        </h1>

        <p>
          Trade Stocks, Forex, Commodities, Indices and more across multiple
          markets.
        </p>

        <div className="buttons">
          <Link to="/register" className="open">Open An Account</Link>
          <Link to="/login" className="login">Login</Link>
        </div>

      </div>

    </section>
  );
}