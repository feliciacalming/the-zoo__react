import "./Navbar.scss";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <ul className="nav__ul">
          <li>
            <Link className="nav__link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav__link" to="/animals">
              Animals
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
