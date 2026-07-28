

import React from "react";
import "../index.css"; // Imports the CSS file we'll create in Step 2

export default function About() {
  const cardsData = [
    {
      titlePrefix: "Pro",
      titleSuffix: "fessional team",
      description:
        "We believe that our people are our greatest asset, people with the right attitude and competence. That's why we carefully choose our associates and empower them to accomplish productive work toward our clients' satisfaction.",
    },
    {
      titlePrefix: "Pro",
      titleSuffix: "gressive trading platform",
      description:
        "Our next-gen platform has everything a modern investor might need, user-friendly and intuitive interface, an impressive charting package with ability to trade from the chart, powerful analytical tools, unique stock screeners and much more.",
    },
    {
      titlePrefix: "Pro",
      titleSuffix: "mpt order execution",
      description:
        "With average order execution time of 31 milliseconds, you can rest assured your order will be delivered to the market in a flash. We use the latest network connectivity technology to provide our clients with lightning-fast order execution.",
    },
    {
      titlePrefix: "Pro",
      titleSuffix: "vide support",
      description:
        "Get support when you need it. Our skilled Customer Care team is available 24 hours a day, from Monday 07:00 GMT to Friday 20:00 GMT. Contact us the way convenient for you, by email, live chat, or phone.",
    },
    {
      titlePrefix: "Pro",
      titleSuffix: "pelling you forward",
      description:
        "Take your investing to the next level with all the right tools, and our knowledgeable team will make sure you are moving forward in your investment journey by providing assistance with any of your inquiries.",
    },
    {
      titlePrefix: "Pro",
      titleSuffix: "ven track record",
      description:
        "A decade-long track record of great service. Since the establishment of the company in 2010, we helped thousands of investors to make their first steps in the world of stock markets or improve their trading experience.",
    },
    {
      titlePrefix: "Pro",
      titleSuffix: "ject confidence",
      description:
        "Be confident your funds are in the right hands. We use segregated bank accounts for our customer's funds. Meaning your money is separated from FOREX's assets. In addition, all deposits are covered by the Investor Compensation Fund up to EUR 200,000.",
    },
    {
      titlePrefix: "Pro",
      titleSuffix: "minent position",
      description:
        "We provide for all the aspects of stock market investments, from simple chart trading to advanced analytical tools, making us an excellent choice for beginner investors and industry professionals alike.",
    },
    {
      titlePrefix: "Pro",
      titleSuffix: "sper together",
      description:
        "We believe in a simple idea, if our clients thrive, we will thrive with them. That's why we provide our clients with cutting-edge trading platform, comfortable pricing, great customer care and much more.",
    },
  ];

  return (
    <div className="about-page">
      {/* Page Header */}
      <div className="about-header">
        <h1>About FOREX</h1>
        <h2>
          Who are we? <span>Project confidence</span>
        </h2>
      </div>

      {/* Grid Layout */}
      <div className="about-grid">
        {cardsData.map((card, index) => (
          <div className="about-card" key={index}>
            {/* Blue Icon */}
            <div className="card-icon">
              <svg viewBox="0 0 24 24" width="36" height="36" fill="#00a3e0">
                <path d="M19 8c-1.66 0-3 1.34-3 3 0 .35.07.69.18 1H11V7h2c1.1 0 2-.9 2-2s-.9-2-2-2h-4C7.79 3 7 3.79 7 5v2H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h2v4c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2v-4h2.18c.11.31.18.65.18 1 0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3z" />
              </svg>
            </div>

            <h3 className="card-title">
              <span className="highlight">{card.titlePrefix}</span>
              {card.titleSuffix}
            </h3>

            <p className="card-text">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}