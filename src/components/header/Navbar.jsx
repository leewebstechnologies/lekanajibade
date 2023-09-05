import { Link } from "react-router-dom";
import "./header.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbarLeft">
          <i className="navbarIcon fa-brands fa-square-facebook"></i>
          <i className="navbarIcon fa-brands fa-square-x-twitter"></i>
          <i className="navbarIcon fa-brands fa-linkedin-in"></i>
          <i className="navbarIcon fa-brands fa-square-github"></i>
          <i className="navbarIcon fa-brands fa-square-whatsapp"></i>
        </div>
        <div className="navbarRight">
          <ul className="navbarList">
            <li className="navbarListItem">
              <Link className="link">Projects</Link>
            </li>
            <li className="navbarListItem">
              <Link className="link">Contact Me</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
