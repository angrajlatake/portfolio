import React from "react";
import "./Loader.scss";
import { motion } from "framer-motion";

const container = {
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    x: "50%",
    scale: 150,
    transition: {
      ease: "easeInOut",
      duration: 1.5,
    },
  },
};

const Loader = ({ setLoading }) => {
  return (
    <motion.div className="loader">
      <motion.h1
        className=" loader__title"
        variants={container}
        initial="hidden"
        animate="show"
        exit="exit"
        onAnimationComplete={() => setLoading(false)}
      >
        {/* had to add inlin-block because motion does not work on inline elements */}
        <motion.span style={{ display: "inline-block" }} variants={item}>
          L
        </motion.span>
        <motion.span style={{ display: "inline-block" }} variants={item}>
          O
        </motion.span>
        <motion.span style={{ display: "inline-block" }} variants={item}>
          A
        </motion.span>
        <motion.span style={{ display: "inline-block" }} variants={item}>
          D
        </motion.span>
        <motion.span style={{ display: "inline-block" }} variants={item}>
          I
        </motion.span>
        <motion.span style={{ display: "inline-block" }} variants={item}>
          N
        </motion.span>
        <motion.span style={{ display: "inline-block" }} variants={item}>
          G
        </motion.span>
      </motion.h1>
    </motion.div>
  );
};

export default Loader;
