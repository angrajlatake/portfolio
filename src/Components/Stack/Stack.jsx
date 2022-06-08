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

import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useState } from "react";
const spring = {
  type: "spring",
  stiffness: 500,
  damping: 30,
};

const Stack = () => {
    const [selected, setSelected] = useState('white');
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
      <AnimateSharedLayout>.
    <div className="stack">
      <div className="stack__wrapper">
        <h1 className="">Stack</h1>

        <div className="stack__icons-container">
          {stackList.map((icon, index) => {
            return <Icon key={index} icon={icon[0]} color={icon[1]} 
            onMouseEnter={() => setSelected(icon[1])}
            isSelected = {selected === icon[1]}
            />;
          })}
        </div>

      </div>
    </div>
    </AnimateSharedLayout>
  );
};

export default Stack;

export const Icon = ({ icon, color, onMouseEnter, isSelected }) => {
  return (
    <motion.div className="stack__icon" style={{ backgroundColor: color }} onMouseOver={onMouseEnter}>
      <img className="icon-img" src={icon} alt="" />
      {isSelected &&(<motion.div
        layoutId="outline"
        className="outline"
        initial={false}
        animate={{ borderColor: color }}
        transition={spring}
      ></motion.div>)}
    </motion.div>
  );
};
