import React from "react";
import Home from "../../pages/Client/Home";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
          <li>
            <NavLink to={"/product"}>Product</NavLink>
          </li>
          <li>
            <NavLink to={"/admin"}>Admin</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
