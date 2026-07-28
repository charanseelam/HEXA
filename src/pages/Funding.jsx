import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Funding.css";

const methods = [
  { name: "Bank Transfer", time: "1-2 business days", fee: "Free", min: "$100" },
  { name: "Debit / Credit Card", time: "Instant", fee: "Free", min: "$50" },
  { name: "UPI / Net Banking", time: "Instant", fee: "Free", min: "$25" },
  { name: "Crypto (USDT/BTC)", time: "10-30 minutes", fee: "Network fee only", min: "$50" },
];

export default function Funding() {
  const location = useLocation();
  const [active, setActive] = useState("deposit");

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash === "deposit" || hash === "register") setActive(hash);
  }, [location]);

  return (
    <div className="funding-page">
      <div className="funding-header">
        <h1>Funding</h1>
        <h2>
          Get your money to work <span>in minutes</span>
        </h2>
        <p>Deposit with the method that suits you — all deposits are free and most complete instantly.</p>
      </div>

      <div className="funding-tabs">
        <button className={`tab-btn ${active === "deposit" ? "active" : ""}`} onClick={() => setActive("deposit")}>Deposit</button>
        <Link to="/register" className="tab-btn">Register</Link>
      </div>

      <div className="funding-methods">
        {methods.map((m, i) => (
          <div className="method-card" key={i}>
            <div className="method-icon">
              <svg viewBox="0 0 24 24" width="30" height="30" fill="#00a3e0">
                <path d="M3 10h18v2H3zm0-4h18v2H3zm0 8h12v2H3zm14 0h4v2h-4z" />
              </svg>
            </div>
            <h4>{m.name}</h4>
            <div className="method-row"><span>Processing time</span><strong>{m.time}</strong></div>
            <div className="method-row"><span>Deposit fee</span><strong>{m.fee}</strong></div>
            <div className="method-row"><span>Minimum</span><strong>{m.min}</strong></div>
          </div>
        ))}
      </div>

      <div className="funding-cta">
        <div className="funding-cta-text">
          <h3>Don't have an account yet?</h3>
          <p>Open an account in under 5 minutes and fund it with any of the methods above.</p>
        </div>
        <Link to="/register" className="open">Open An Account</Link>
      </div>
    </div>
  );
}
