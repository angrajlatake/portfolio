import "./Stack.scss";
import html from "../../assets/Icons/html5.png";
import css from "../../assets/Icons/css.png";
import js from "../../assets/Icons/js.png";
import react from "../../assets/Icons/reactjs.png";
import nodejs from "../../assets/Icons/nodejs.png";
import sass from "../../assets/Icons/sass.png";
import python from "../../assets/Icons/python.png";
import MongoDB from "../../assets/Icons/mongodb.png";
import mysql from "../../assets/Icons/mysql.png";

import { motion, AnimateSharedLayout } from "framer-motion";
import { useState } from "react";
const spring = {
  type: "spring",
  stiffness: 500,
  damping: 30,
};

const stackMotion = {
  show: {
    transition: {
      delayChildren: 0.25,
      staggerChildren: 0.2,
    },
  },
};
const stackItemMotion = {
  hidden: {
    opacity: 0,
    y: -50,
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

const Stack = () => {
  const [selected, setSelected] = useState("white");
  const [inView, setInView] = useState(false);
  const stackList = [
    [html, "#f1652944"],
    [css, "#264ce43f"],
    [js, "#f7de1c3c"],
    [react, "#61dafb3d"],
    [nodejs, "#8dc74a3a"],
    [sass, "#cd679838"],
    [python, "#3670a03c"],
    [MongoDB, "#6dab4741"],
    [mysql, "#01546b44"],
  ];
  return (
    <AnimateSharedLayout>
      .
      <motion.div
        className="stack"
        variants={stackMotion}
        initial="hidden"
        onViewportEnter={() => setInView(true)}
        animate={inView ? "show" : "hidden"}
        viewport={{ once: true }}
      >
        <div className="stack__wrapper">
          <motion.h1 variants={stackItemMotion} className="">
            Stack
          </motion.h1>

          <div className="stack__icons-container">
            {stackList.map((icon, index) => {
              return (
                <Icon
                  variants={stackItemMotion}
                  key={index}
                  icon={icon[0]}
                  color={icon[1]}
                  onMouseEnter={() => setSelected(icon[1])}
                  isSelected={selected === icon[1]}
                />
              );
            })}
          </div>
        </div>
      </motion.div>
    </AnimateSharedLayout>
  );
};

export default Stack;

export const Icon = ({ variants, icon, color, onMouseEnter, isSelected }) => {
  return (
    <motion.div
      className="stack__icon"
      style={{ backgroundColor: color }}
      onMouseOver={onMouseEnter}
      variants={variants}
    >
      <img className="icon-img" src={icon} alt="" />
      {isSelected && (
        <motion.div
          layoutId="outline"
          className="outline"
          initial={false}
          animate={{ borderColor: color }}
          transition={spring}
        ></motion.div>
      )}
    </motion.div>
  );
};
