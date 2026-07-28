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
          <button className="open"><a href="/register">Open An Account</a></button>
          <button className="login"><a href="/login">Login</a></button>
        </div>

      </div>

    </section>
  );
}