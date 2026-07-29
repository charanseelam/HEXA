import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../index.css";

const platformData = {
  desktop: {
    label: "Desktop",
    title: "Trade Like a Pro on Desktop",
    tagline: "Full-power charting and execution built for serious traders.",
    features: [
      { title: "Advanced Charting", text: "50+ technical indicators, drawing tools, and multi-timeframe analysis on a single screen." },
      { title: "One-Click Execution", text: "Place, modify, and close trades directly from the chart with sub-40ms order routing." },
      { title: "Custom Workspaces", text: "Save layouts, watchlists, and hotkeys so your setup is ready the moment you log in." },
      { title: "Windows & macOS", text: "Native installers for both platforms, auto-updating with zero configuration." },
    ],
  },
  web: {
    label: "Web",
    title: "No Download, No Limits",
    tagline: "Access every market straight from your browser — no installs required.",
    features: [
      { title: "Instant Access", text: "Log in from any device with a browser and pick up exactly where you left off." },
      { title: "Real-Time Data", text: "Live streaming quotes and order books synced across every open session." },
      { title: "Secure by Design", text: "Bank-grade TLS encryption and session isolation on every connection." },
      { title: "Cross-Device Sync", text: "Watchlists and alerts stay in sync between web, desktop, and mobile." },
    ],
  },
  mobile: {
    label: "Mobile",
    title: "Your Portfolio, In Your Pocket",
    tagline: "Full trading power on iOS and Android, wherever you are.",
    features: [
      { title: "Biometric Login", text: "Face ID and fingerprint login get you into your account in under a second." },
      { title: "Push Alerts", text: "Price alerts, order fills, and market news delivered instantly to your lock screen." },
      { title: "Mobile Charting", text: "Full indicator suite, pinch-to-zoom, and drawing tools optimized for touch." },
      { title: "iOS & Android", text: "Free on the App Store and Google Play, rated 4.7+ by over 200,000 traders." },
    ],
  },
};

function hashToTab(hash) {
  const clean = hash.replace("#", "");
  return platformData[clean] ? clean : "desktop";
}

export default function Platforms() {
  const location = useLocation();
  const [active, setActive] = useState(() => hashToTab(location.hash));
  const [prevHash, setPrevHash] = useState(location.hash);

  if (location.hash !== prevHash) {
    setPrevHash(location.hash);
    setActive(hashToTab(location.hash));
  }

  const current = platformData[active];

  return (
    <div className="platforms-page">
      <div className="platforms-header">
        <div className="hero-badge">Multi-platform access</div>
        <h1>Trading Platforms</h1>
        <h2>
          Built for <span>every kind of trader</span>
        </h2>
        <p>Whether you're at a desk, in a browser, or on the move — trade the same markets with the same speed.</p>
      </div>

      <div className="platforms-tabs">
        {Object.keys(platformData).map((key) => (
          <button
            key={key}
            className={`tab-btn ${active === key ? "active" : ""}`}
            onClick={() => setActive(key)}
          >
            {platformData[key].label}
          </button>
        ))}
      </div>

      <div className="platforms-content">
        <div className="platforms-info">
          <h3>{current.title}</h3>
          <p className="tagline">{current.tagline}</p>
          <div className="platforms-cta">
            <Link to="/register" className="open">Open An Account</Link>
            <a href="#download" className="download">Download Now</a>
          </div>
        </div>

        <div className="platforms-visual">
          <div className="mock-screen">
            <div className="mock-topbar">
              <span></span><span></span><span></span>
            </div>
            <div className="mock-chart">
              <svg viewBox="0 0 300 120" preserveAspectRatio="none">
                <polyline
                  points="0,90 30,70 60,80 90,40 120,55 150,20 180,45 210,25 240,50 270,15 300,35"
                  fill="none"
                  stroke="#00d2ff"
                  strokeWidth="3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="platforms-grid">
        {current.features.map((f, i) => (
          <div className="platform-card" key={i}>
            <h4>{f.title}</h4>
            <p>{f.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
