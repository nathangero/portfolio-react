import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const NAV_LINKS = {
    ABOUT_ME: "/",
    PORTFOLIO: "/projects",
    CONTACT: "/contact",
    RESUME: "/resume",
  };

  const styles = {
    navbar: {
      height: "75px",
      backgroundColor: "#2baeff",
    },
  };

  // Set the current navbar tab to "active" only on page startup depending where the user is.
  const location = useLocation().pathname;


  useEffect(() => {
    onClickLink(location);
  }, [location]);

  /**
   * Sets the active tab
   * @param {String} link
   */
  const onClickLink = (link) => {
    switch (link) {
      case NAV_LINKS.ABOUT_ME:
        document.getElementById("nav-aboutme").className = "nav-link active";
        document.getElementById("nav-portfolio").className = "nav-link";
        document.getElementById("nav-resume").className = "nav-link";
        // document.getElementById("nav-contact").className = "nav-link";
        break;

      case NAV_LINKS.PORTFOLIO:
        document.getElementById("nav-aboutme").className = "nav-link";
        document.getElementById("nav-portfolio").className = "nav-link active";
        document.getElementById("nav-resume").className = "nav-link";
        // document.getElementById("nav-contact").className = "nav-link";
        break;

      case NAV_LINKS.CONTACT:
        document.getElementById("nav-aboutme").className = "nav-link";
        document.getElementById("nav-portfolio").className = "nav-link";
        document.getElementById("nav-resume").className = "nav-link";
        // document.getElementById("nav-contact").className = "nav-link active";
        break;

      case NAV_LINKS.RESUME:
        document.getElementById("nav-aboutme").className = "nav-link";
        document.getElementById("nav-portfolio").className = "nav-link";
        document.getElementById("nav-resume").className = "nav-link active";
        // document.getElementById("nav-contact").className = "nav-link";
        break;
    }

  };

  return (
    <nav
      className="navbar navbar-expand-md navbar-dark mb-3"
      style={styles.navbar}
    >
      <div className="container-fluid">
        <Link
          className="navbar-brand fs-1 text-white"
          to={"/"}
          onClick={() => onClickLink(NAV_LINKS.ABOUT_ME)}
        >
          Nathan Geronimo
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#navbar"
          aria-controls="offcanvas"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          id="navbar"
          className="offcanvas offcanvas-end navbar-offcanvas justify-content-end"
          tabIndex={-1}
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header justify-content-end">
            <button
              id="button-close-offcanvas"
              type="button"
              className="btn-close fs-3"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <div id="sidemenu" className="offcanvas-body">
            <ul className="navbar-nav nav-underline fs-5 justify-content-end flex-grow-1 pe-3" data-bs-dismiss="offcanvas">
              <li>
                <Link
                  id="nav-aboutme"
                  to={"/"}
                  onClick={() => onClickLink(NAV_LINKS.ABOUT_ME)}
                >
                  About Me
                </Link>
              </li>

              <li>
                <Link
                  id="nav-portfolio"
                  to={NAV_LINKS.PORTFOLIO}
                  onClick={() => onClickLink(NAV_LINKS.PORTFOLIO)}
                >
                  Projects
                </Link>
              </li>

              <li>
                <Link
                  id="nav-resume"
                  to={"/resume"}
                  onClick={() => onClickLink(NAV_LINKS.RESUME)}
                >
                  Resume
                </Link>
              </li>

              {/* <li>
                <Link
                  id="nav-contact"
                  to={"/contact"}
                  onClick={() => onClickLink(NAV_LINKS.CONTACT)}
                >
                  Contact Me
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
