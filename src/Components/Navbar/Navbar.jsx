import { BsDownload } from "react-icons/bs";
import { HiMenuAlt2 } from "react-icons/hi";
import { GrClose } from "react-icons/gr";
import { useState, useRef } from "react";
import resume from "../../assets/downloads/Angraj_Latake_Resume.pdf";
import "./Navbar.scss";
import { motion } from "framer-motion";

const NavbarMotion = {
  hidden: {
    opacity: 0,
    y: -200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 2.75,
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.5,
    },
  },
};

const scrollTo = (section) => {
  const pos = document.getElementById(section).offsetTop;
  window.scrollTo({ top: pos, behavior: "smooth" });
};

const Navbar = () => {
  const navRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="navbar">
      <motion.div
        className="navbar__wrapper"
        variants={NavbarMotion}
        initial="hidden"
        animate="show"
        ref={navRef}
      >
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
                <a
                  className="navbar__label navbar__label--download"
                  href={resume}
                  download="Angraj Latake Resume"
                >
                  <span>
                    <BsDownload />
                  </span>
                  <span>Resume</span>
                </a>
              </li>
              <li onClick={toggle} className="navbar__label--mobile">
                {" "}
                <a
                  className="navbar__label"
                  href="#projects"
                  onClick={() => scrollTo("projects")}
                >
                  Projects
                </a>
              </li>
              <li onClick={toggle} className="navbar__label--mobile">
                {" "}
                <a
                  className="navbar__label"
                  href="#contact"
                  onClick={() => scrollTo("contact")}
                >
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
              <a
                className="navbar__label navbar__label--download"
                href={resume}
                download="Angraj Latake Resume"
              >
                <span>
                  <BsDownload />
                </span>
                <span>Resume</span>
              </a>
            </li>
            <li className="navbar__item">
              <a
                className="navbar__label"
                href="#projects"
                onClick={() => scrollTo("projects")}
              >
                Projects
              </a>
            </li>
            <li className="navbar__item">
              <a
                className="navbar__label"
                href="#contact"
                onClick={() => scrollTo("contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
