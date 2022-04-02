import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-info">
      <div className="container">
        <Link className="navbar-brand" exact to="/">
          Student-Directory
        </Link>
        <div className="expand navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <Link className="btn btn-outline-light" to="/users/add">
          Add Student
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
