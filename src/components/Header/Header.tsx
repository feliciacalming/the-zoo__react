import "./Header.scss";
import { Navbar } from "../Navbar/Navbar";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header>
        <Navbar></Navbar>
        <div className="logo-wrapper">
          <Link to="/">
            {" "}
            <span className="logo">THE ZOO</span>
          </Link>
        </div>
      </header>
    </>
  );
};
