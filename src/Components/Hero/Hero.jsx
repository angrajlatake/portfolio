import "./Hero.scss";
import LinkedIn from "../../assets/Icons/linkedin.png";
import Twitter from "../../assets/Icons/twitter.png";
import Github from "../../assets/Icons/github.png";
import Gmail from "../../assets/Icons/gmail.png";
import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
//animation variables
const ring = {
  show: {
    scale: 1.2,
    transition: {
      duration: 4,
      yoyo: Infinity,
    },
  },
  hover: {
    scale: 0.5,
    transition: {
      duration: 0.5,
    },
  },
};
const linksHover = {
  show: {
    scale: 1.2,
    transition: {
      duration: 0.5,
    },
  },
};

const Hero = () => {
  const [linkedInhover, setLinkedInhover] = useState(false);
  const [twitterhover, setTwitterhover] = useState(false);
  const [githubhover, setGithubhover] = useState(false);
  const [gmailhover, setGmailhover] = useState(false);
  return (
    <div className="hero">
      <div className="hero__wrapper">
        <div className="hero__text">
          <h3 className="hero__name">Angraj Latake</h3>
          <h1 className="hero__title">
            <span className="hero__title--main">Front-End</span>
            <span className="hero__title--sec">Developer</span>
          </h1>
        </div>
        <div className="icons">
          <motion.a
            href="https://www.linkedin.com/in/angrajlatake/"
            className="icons__link icons__link--linkedIn"
            variants={linksHover}
            whileHover="show"
            onMouseEnter={() => setLinkedInhover(true)}
            onMouseLeave={() => setLinkedInhover(false)}
          >
            <motion.div
              className="icons__link--outline"
              variants={ring}
              animate="show"
            ></motion.div>
            <span className="icons__wrapper">
              <img src={LinkedIn} alt="LinkedIn" className="icons__img" />
            </span>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/angrajlatake/"
            className="icons__link icons__link--gmail"
            variants={linksHover}
            whileHover="show"
            onMouseEnter={() => setGmailhover(true)}
            onMouseLeave={() => setGmailhover(false)}
          >
            <motion.div
              className="icons__link--outline"
              variants={ring}
              animate="show"
            ></motion.div>
            <span className="icons__wrapper icons__wrapper--gmail">
              <img src={Gmail} alt="LinkedIn" className="icons__img" />
            </span>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/angrajlatake/"
            className="icons__link icons__link--github"
            variants={linksHover}
            whileHover="show"
            onMouseEnter={() => setGithubhover(true)}
            onMouseLeave={() => setGithubhover(false)}
          >
            <motion.div
              className="icons__link--outline"
              variants={ring}
              animate="show"
            ></motion.div>
            <span className="icons__wrapper icons__wrapper--github ">
              <img src={Github} alt="LinkedIn" className="icons__img" />
            </span>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/angrajlatake/"
            className="icons__link icons__link--twitter"
            variants={linksHover}
            whileHover="show"
            onMouseEnter={() => setTwitterhover(true)}
            onMouseLeave={() => setTwitterhover(false)}
          >
            <motion.div
              className="icons__link--outline"
              variants={ring}
              animate="show"
            ></motion.div>
            <span className="icons__wrapper icons__wrapper--twitter">
              <img src={Twitter} alt="LinkedIn" className="icons__img" />
            </span>
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
