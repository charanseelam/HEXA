import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">HEXA</h2>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>

        <li className="dropdown">
          <span className="dropdown-title">Platforms ▾</span>
          <div className="dropdown-menu">
            <Link to="/platforms#desktop">Desktop</Link>
            <Link to="/platforms#mobile">Mobile</Link>
          </div>
        </li>

        <li className="dropdown">
          <span className="dropdown-title">Trading ▾</span>
          <div className="dropdown-menu">
            <Link to="/trading#fees">Fees</Link>
            <Link to="/trading#ipo">IPO</Link>
            <Link to="/trading#market-data">Market Data</Link>
          </div>
        </li>

        <li className="dropdown">
          <span className="dropdown-title">Funding ▾</span>
          <div className="dropdown-menu">
            <Link to="/funding#deposit">Deposit</Link>
            <Link to="/register">Register</Link>
          </div>
        </li>

        <li><Link to="/about">About</Link></li>
      </ul>

      <div className="actions">
        <Link to="/register" className="btn">Open Account</Link>
        <Link to="/login" className="login">Login</Link>
      </div>
    </nav>
  );
}