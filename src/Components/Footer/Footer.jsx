import "./Footer.scss";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const aboutMotion = {
  show: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const aboutItemMotion = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
};

const formMotion = {
  show: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const formItemMotion = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
};

const footerBox = {
  hidden: {
    width: "0%",
  },
  show: {
    width: "100%",
    transition: {
      duration: 0.5,
    },
  },
};

const Footer = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_wfkube7",
        "template_ijuzz82",
        form.current,
        "98PfKAdeyEcPsGOM_"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.user_name.value = "";
          form.current.user_email.value = "";
          form.current.message.value = "";
          setLoading(false);
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 3000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="footer" id="contact">
      <div className="footer__wrapper">
        <motion.div
          className="footer__container"
          variants={footerBox}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div
            className="footer__about"
            variants={aboutMotion}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.h2
              className="footer__about-title"
              variants={aboutItemMotion}
            >
              About
            </motion.h2>
            <motion.p className="footer__about-text" variants={aboutItemMotion}>
              I'm a front-end developer based out of <span>Toronto</span>.
              <br />
              From a cockpit of a plane to code on a web page, I love combining
              the worlds of logic and creativity to make eye-catching,
              user-friendly interfaces. I graduated from
              <span>BrainStation</span> with Web Development diploma in Aril
              2022. It has been a great journey so far, but I'm looking forward
              to learning more about the world of web development.
              <br /> If you are interested in Aviation or Web Development and
              would like to discuss how these are similar to each other, feel
              free to contact me.
            </motion.p>
          </motion.div>
          <div
            className="footer__form-container"
            variants={formMotion}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.h2 variants={formItemMotion}>Say Hi!</motion.h2>
            <motion.form
              className="footer__form"
              ref={form}
              onSubmit={handleSubmit}
              variants={formMotion}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.div className="user-box" variants={formItemMotion}>
                <input
                  className="footer__form-input"
                  placeholder="Name"
                  type="text"
                  name="user_name"
                  required
                />
              </motion.div>
              <motion.div className="user-box" variants={formItemMotion}>
                <input
                  className="footer__form-input"
                  placeholder="Email"
                  type="email"
                  name="user_email"
                  required
                />
              </motion.div>
              <motion.div className="user-box" variants={formItemMotion}>
                <textarea
                  className="footer__form-input"
                  placeholder="Message"
                  type="text"
                  name="message"
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                className="footer__form-btn"
                name="submit"
                variants={formItemMotion}
              >
                {loading ? (
                  <motion.div
                    className="handle"
                    initial={{ x: -50 }}
                    animate={{ x: 50 }}
                    transition={{
                      type: "spring",
                      repeat: Infinity,
                      repeatType: "mirror",
                      repeatDelay: 0.1,
                    }}
                  />
                ) : success ? (
                  "Sent!"
                ) : (
                  "Submit"
                )}
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
      <div className="footer__banner">
        <h3>&copy; Copyright 2022. All rights reserved</h3>
      </div>
    </div>
  );
};

export default Footer;
