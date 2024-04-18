import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaReact } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import "./style.scss";

const data = [
  {
    label: "HOME",
    to: "/",
  },
  {
    label: "ABOUT ME",
    to: "/about",
  },
  {
    label: "SKILLS",
    to: "/skills",
  },
  
  {
    label: "PORTFOLIO",
    to: "/portfolio",
  },
  {
    label: "CONTACT",
    to: "/contact",
  },
  {
    label: "DOWNLOAD CV",
    to: "https://drive.google.com/file/d/1ER5IqQ98wf5j6UJgqLQCR51cP5O72rIq/view?usp=sharing",
  },
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const location = useLocation();

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to={"/"} className="navbar__container__logo">
            <div className="icon-wrapper">
              <FaReact size={40} className="react-icon" />
            </div>
          </Link>
        </div>
        <ul className={`navbar__container__menu ${toggleIcon ? "active" : "/"} `}>
          {data.map((item, key) => (
            <li key={key} className="navbar__container__menu__item">
              <Link
                className={`navbar__container__menu__item__links ${
                  item.to === location.pathname ? "active-link" : ""
                }`}
                to={item.to}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
