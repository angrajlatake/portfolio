import "./Hero.scss";
import LinkedIn from "../../assets/Icons/linkedin.png";
import Twitter from "../../assets/Icons/twitter.png";
import Github from "../../assets/Icons/github.png";
import Gmail from "../../assets/Icons/gmail.png";
import { motion } from "framer-motion";
//animation variables
const ring = {
  show: {
    scale: 1.2,
    transition: {
      delay: 3.2,
      duration: 4,
      repeat: Infinity,
      repeatType: "mirror",
      repeatDelay: 0.5,
    },
  },
  hover: {
    scale: 0.5,
    transition: {
      duration: 0.5,
    },
  },
};

const iconMotion = {
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const linksHover = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  hover: {
    scale: 1.2,
    transition: {
      duration: 0.25,
    },
  },
};
const heroMotion = {
  show: {
    transition: {
      delayChildren: 3,
      staggerChildren: 0.2,
    },
  },
};

const heroItemMotion = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
};

const Hero = () => {
  return (
    <motion.div className="hero" layoutId="hero">
      <motion.div
        className="hero__wrapper"
        variants={heroMotion}
        initial="hidden"
        animate="show"
      >
        <div className="hero__text">
          <motion.h3 className="hero__name" variants={heroItemMotion}>
            Angraj Latake
          </motion.h3>
          <motion.h1 className="hero__title" variants={heroItemMotion}>
            <span
              style={{ display: "inline-block" }}
              className="hero__title--main"
            >
              Full Stack
            </span>
            <span
              style={{ display: "inline-block" }}
              className="hero__title--sec"
            >
              Developer
            </span>
          </motion.h1>
        </div>
        <motion.div
          className="icons"
          variants={iconMotion}
          initial="hidden"
          whileInView="show"
        >
          <motion.a
            href="https://www.linkedin.com/in/angrajlatake/"
            target="_blank"
            rel="noreferrer"
            className="icons__link icons__link--linkedIn"
            variants={linksHover}
            whileHover="hover"
            initial="hidden"
            animate="show"
          >
            <motion.div
              className="icons__link--outline"
              variants={ring}
              initial="hidden"
            ></motion.div>
            <span className="icons__wrapper">
              <img src={LinkedIn} alt="LinkedIn" className="icons__img" />
            </span>
          </motion.a>
          <motion.a
            href="mailto:webmaster@example.com"
            target="_blank"
            rel="noreferrer"
            className="icons__link icons__link--gmail"
            variants={linksHover}
            whileHover="hover"
            initial="hidden"
            animate="show"
          >
            <motion.div
              className="icons__link--outline"
              variants={ring}
              animate="show"
            ></motion.div>
            <span className="icons__wrapper icons__wrapper--gmail">
              <img src={Gmail} alt="Gmail" className="icons__img" />
            </span>
          </motion.a>
          <motion.a
            href="https://github.com/angrajlatake"
            target="_blank"
            rel="noreferrer"
            className="icons__link icons__link--github"
            variants={linksHover}
            whileHover="hover"
            initial="hidden"
            animate="show"
          >
            <motion.div
              className="icons__link--outline"
              variants={ring}
              animate="show"
            ></motion.div>
            <span className="icons__wrapper icons__wrapper--github ">
              <img src={Github} alt="github" className="icons__img" />
            </span>
          </motion.a>
          <motion.a
            href="https://twitter.com/angrajlatake"
            target="_blank"
            rel="noreferrer"
            className="icons__link icons__link--twitter"
            variants={linksHover}
            whileHover="hover"
            initial="hidden"
            animate="show"
          >
            <motion.div
              className="icons__link--outline"
              variants={ring}
              animate="show"
            ></motion.div>
            <span className="icons__wrapper icons__wrapper--twitter">
              <img src={Twitter} alt="twitter" className="icons__img" />
            </span>
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
