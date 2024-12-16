import React from "react";
import "./Navbar.css"
import { Link,NavLink } from "react-router-dom";
function Navbar() {
  return (
    <>
      <header className="navbar">
        <nav
          class="navbar navbar-expand-lg border-bottom"
          style={{ backgroundColor: "#00BFFF" }}
        >
          <div class="container">
            <Link to="/" className="navbar-brand-logo">
              <img src="/media/logos.png" alt="logo" />
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse navbar-items" id="navbarSupportedContent">
              <form   role="search">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <NavLink to='./event' className="nav-link">
                      Event detail
                    </NavLink>
                  </li>
                  <li class="nav-item">
                    <Link to="/team" class="nav-link ">
                      Teams
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to='./problem' class="nav-link">
                      Problem 
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/about"  class="nav-link">
                      About us
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to='./contact' class="nav-link">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
