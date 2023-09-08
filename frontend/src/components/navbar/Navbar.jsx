import "./navbar.scss";
import Logo from "../../../public/logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} />
        <span>Spirit Admin</span>
      </div>{" "}

      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="app.svg" alt="" className="icon" />
        <img src="expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="/userImg.jpg" />
          <span>Jane Jode</span>
        </div>
        <img src="/settings.svg" alt="" className="icon" />
      </div>
    </nav>
  );
};

export default Navbar;
