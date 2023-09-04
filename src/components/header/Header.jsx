import "./header.css";

const Header = () => {
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
            <li className="navbarListItem">Projects</li>
            <li className="navbarListItem">Contact Me</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
