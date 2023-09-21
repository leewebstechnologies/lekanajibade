import { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <nav className="navbar container">
        <div className="navbarLeft">
          <i class="navbarIcon fa-solid fa-envelope"></i>
          <i class="navbarIcon fa-brands fa-github"></i>
          <i class="navbarIcon fa-brands fa-linkedin"></i>
          <i class="navbarIcon fa-brands fa-whatsapp"></i>
          <i class="navbarIcon fa-brands fa-stack-overflow"></i>
        </div>
        <div className="navbarRight">
          <div className={`nav__menu ${showMenu ? "show-menu" : ""}`}>
            <ul className="navbarRightList">
              <li className="navbarRightListItem">
                <Link className="nav__link active" to="/">
                  Home
                </Link>
              </li>
              <li className="navbarRightListItem">
                <Link className="nav__link" to="/projects">
                  Projects
                </Link>
              </li>
              <li className="navbarRightListItem">
                <Link className="nav__link" to="/contact">
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav__toggle" onClick={() => setShowMenu(!showMenu)}>
            <i className="bx bx-menu"></i>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
