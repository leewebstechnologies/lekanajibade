import { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="navbarLeft">
          <a href="mailto: aliuajibade317@gmail.com">
            <i class="navbarIcon fa-solid fa-envelope"></i>
          </a>
          <a href="https://github.com/leewebstechnologies">
            <i class="navbarIcon fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/aliu-ajibade-a43210139/">
            <i class="navbarIcon fa-brands fa-linkedin"></i>
          </a>
          <a href="https://wa.me/+2348084838268">
            <i class="navbarIcon fa-brands fa-whatsapp"></i>
          </a>
          <a href="https://stackoverflow.com/users/16582853/aliu-ajibade">
            <i class="navbarIcon fa-brands fa-stack-overflow"></i>
          </a>
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
