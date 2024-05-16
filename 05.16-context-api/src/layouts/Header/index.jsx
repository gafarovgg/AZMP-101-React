import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <ul>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/products"}>Products</NavLink>
            </li>
            <li>
              <NavLink to={"/wishlist"}>wishlist</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
