import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../index.css";

const fees = [
  { instrument: "Forex Majors (EUR/USD)", spread: "0.1 pips", commission: "$3.50 / lot" },
  { instrument: "Forex Minors (GBP/AUD)", spread: "0.6 pips", commission: "$3.50 / lot" },
  { instrument: "Gold (XAU/USD)", spread: "1.8 pips", commission: "$0" },
  { instrument: "Indices (US500)", spread: "0.4 pts", commission: "$0" },
  { instrument: "Crypto (BTC/USD)", spread: "0.05%", commission: "$0" },
];

const ipos = [
  { name: "Nova Robotics Ltd.", date: "28 Jul 2026", price: "$18 - $21", status: "Open" },
  { name: "Aether Cloud Systems", date: "04 Aug 2026", price: "$9 - $11", status: "Upcoming" },
  { name: "BlueWave Logistics", date: "12 Aug 2026", price: "$24 - $27", status: "Upcoming" },
];

const marketData = [
  { name: "S&P 500", value: "5,842.30", change: "+0.62%", up: true },
  { name: "NASDAQ 100", value: "20,415.10", change: "+0.88%", up: true },
  { name: "EUR/USD", value: "1.0932", change: "-0.11%", up: false },
  { name: "Gold (XAU/USD)", value: "2,398.50", change: "+0.34%", up: true },
  { name: "Bitcoin", value: "64,210", change: "-1.20%", up: false },
];

const tabs = ["fees", "ipo", "market-data"];

function hashToTab(hash) {
  const clean = hash.replace("#", "");
  return tabs.includes(clean) ? clean : "fees";
}

export default function Trading() {
  const location = useLocation();
  const [active, setActive] = useState(() => hashToTab(location.hash));
  const [prevHash, setPrevHash] = useState(location.hash);

  if (location.hash !== prevHash) {
    setPrevHash(location.hash);
    setActive(hashToTab(location.hash));
  }

  return (
    <div className="trading-page">
      <div className="trading-header">
        <div className="hero-badge">Transparent pricing</div>
        <h1>Trading</h1>
        <h2>
          Transparent <span>pricing & market access</span>
        </h2>
        <p>Tight spreads, real-time market data, and early access to new listings — all in one account.</p>
      </div>

      <div className="trading-tabs">
        <Link to="/trading#fees" className={`tab-btn ${active === "fees" ? "active" : ""}`} onClick={() => setActive("fees")}>Fees</Link>
        <Link to="/trading#ipo" className={`tab-btn ${active === "ipo" ? "active" : ""}`} onClick={() => setActive("ipo")}>IPO</Link>
        <Link to="/trading#market-data" className={`tab-btn ${active === "market-data" ? "active" : ""}`} onClick={() => setActive("market-data")}>Market Data</Link>
      </div>

      {active === "fees" && (
        <div className="trading-panel">
          <h3>Spreads & Commissions</h3>
          <p className="panel-sub">Live indicative pricing for our most traded instruments. No hidden fees, no deposit charges.</p>
          <div className="table-wrap">
            <table className="fees-table">
              <thead>
                <tr>
                  <th>Instrument</th>
                  <th>Spread From</th>
                  <th>Commission</th>
                </tr>
              </thead>
              <tbody>
                {fees.map((f, i) => (
                  <tr key={i}>
                    <td>{f.instrument}</td>
                    <td className="highlight">{f.spread}</td>
                    <td>{f.commission}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {active === "ipo" && (
        <div className="trading-panel">
          <h3>Upcoming IPOs</h3>
          <p className="panel-sub">Apply for shares in upcoming listings before they hit the open market.</p>
          <div className="ipo-grid">
            {ipos.map((ipo, i) => (
              <div className="ipo-card" key={i}>
                <div className={`ipo-status ${ipo.status === "Open" ? "open" : "soon"}`}>{ipo.status}</div>
                <h4>{ipo.name}</h4>
                <div className="ipo-row"><span>Listing Date</span><strong>{ipo.date}</strong></div>
                <div className="ipo-row"><span>Price Range</span><strong>{ipo.price}</strong></div>
                <button className="ipo-btn" disabled={ipo.status !== "Open"}>
                  {ipo.status === "Open" ? "Apply Now" : "Notify Me"}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {active === "market-data" && (
        <div className="trading-panel">
          <h3>Live Market Snapshot</h3>
          <p className="panel-sub">Illustrative data — real-time streaming prices are available once you're logged in.</p>
          <div className="market-grid">
            {marketData.map((m, i) => (
              <div className="market-card" key={i}>
                <span className="market-name">{m.name}</span>
                <span className="market-value">{m.value}</span>
                <span className={`market-change ${m.up ? "up" : "down"}`}>{m.change}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
