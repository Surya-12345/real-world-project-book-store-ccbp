import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/surya-teja/image/upload/v1702014219/Book%20Store/crossword_logo_small_bc561912-757f-49bc-b641-bab1dfb66c4e_small_ysubkj.svg"
            alt="logo.png"
            className="logo"
          />
        </Link>
        <div className="n-links-container">
          <ul className="n-links">
            <li className="link">
                <Link to='/' className="link">Home</Link>
            </li>
            <li className="link">
                <Link to='/books' className="link">Books</Link>
            </li>
            <li className="link">Cart</li>
          </ul>
          <button className="logout-btn">Logout</button>
        </div>
      </div>
    </>
  );
};

export default Header;
