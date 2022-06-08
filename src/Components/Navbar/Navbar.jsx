import { BsDownload } from "react-icons/bs";
import { HiMenuAlt2 } from "react-icons/hi";
import { GrClose } from "react-icons/gr";
import { useState } from "react";
import resume from "../../assets/downloads/Angraj_Latake_Resume.pdf";
import "./Navbar.scss";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="navbar">
      <div className="navbar__wrapper">
        {!isOpen && (
          <div className="navbar__small" onClick={toggle}>
            <span className="navbar__hamburger">
              <HiMenuAlt2 />
            </span>
          </div>
        )}
        {isOpen && (
          <div className="mobile">
            <ul className="mobile__menu">
              <li className="navbar__label--mobile">
                <a className="navbar__label navbar__label--download" href={resume} download="Angraj Latake Resume">
                  <span>
                    <BsDownload />
                  </span>
                  <span>Resume</span>
                </a>
              </li>
              <li onClick={toggle} className="navbar__label--mobile">
                {" "}
                <a className="navbar__label" href="#projects">
                  Projects
                </a>
              </li>
              <li onClick={toggle} className="navbar__label--mobile">
                {" "}
                <a className="navbar__label" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <div className="mobile__close" onClick={toggle}>
              <GrClose className="mobile__close-icon" />
            </div>
          </div>
        )}
        <div className="navbar__large">
          <div className="navbar__home">
            <a className="navbar__label" href="/">
              Home
            </a>
          </div>
          <ul className="navbar__menu">
            <li className="navbar__item">
              <a className="navbar__label navbar__label--download" href={resume} download='Angraj Latake Resume'>
                <span>
                  <BsDownload />
                </span>
                <span>Resume</span>
              </a>
            </li>
            <li className="navbar__item">
              <a className="navbar__label" href="#projects">
                Projects
              </a>
            </li>
            <li className="navbar__item">
              <a className="navbar__label" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
