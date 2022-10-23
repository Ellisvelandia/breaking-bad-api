import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Breaking_Bad_logo.svg/1024px-Breaking_Bad_logo.svg.png"
        alt="Logo"
        className="logo"
      />
      <div className="navigation">
        <nav>
          <ul>
            <li>
              <NavLink end to="/" className="links">
                Character
              </NavLink>
            </li>
            <li>
              <NavLink to="/episodes" className="links">
                Episode
              </NavLink>
            </li>
            <li>
              <NavLink to="/quotes" className="links">
                Dates
              </NavLink>
            </li>
            <li>
              <NavLink to="/deaths" className="links">
                Deaths
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
