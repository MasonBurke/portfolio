import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lt navbar-dark bg-dark">
      <Link activeClassName="`is-active" to="`/`" className="navbar-brand" to="/">
        Wikipedia Searcher
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/home"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link activeClassName="`is-active"
              to="/projects"
              className={window.location.pathname === "/signup" ? "nav-link active" : "nav-link"}
            >
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
