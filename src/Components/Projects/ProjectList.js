import sudokuImg from "../../assets/mockups/sudoku.png";
import inStock from "../../assets/mockups/InStock.png";
import BrainFlix from "../../assets/mockups/BrainFlix.png";
import BandSite from "../../assets/mockups/BandSite.png";
import Tasky from "../../assets/mockups/tasky.png";
export const projectList = [
  {
    id: 0,
    title: "Tasky",
    description:
      "Tasky is cloud-based platform that allows users to to track issues and manage project for desktop build using React and MUI. This application work with API build with Express and MongoDB database with complete authentication and authorization",
    image: Tasky,
    link: "https://angrajlatake-tasky.netlify.app//",
    repo: "https://github.com/angrajlatake/Tasky",
  },
  {
    id: 1,
    title: "Sudoku Solver",
    description:
      "This is a sudoku game built with React and styled with SCSS. If you are a developer, you try Depth First Search and Best First Search to solve this puzzle. If you are a user, you try to solve this puzzle.",
    image: sudokuImg,
    link: "https://angrajlatake-sudoku-solver.netlify.app/",
    repo: "https://github.com/angrajlatake/sudoku-solve-visualizer",
  },
  {
    id: 2,
    title: "InStock",
    description:
      "A full stack web application for inventory management system with modern react front-end communicating with a robust express back-end. ",
    image: inStock,
    link: "https://angrajlatake-instock.netlify.app/",
    repo: "https://github.com/angrajlatake/InStock",
  },
  {
    id: 3,
    title: "BrainFlix",
    description:
      "Online streaming websites like Youtube. The frontend was built using ReactJS, Sass and Axios, and React router dom. The backend was built using NodJS and express.",
    image: BrainFlix,
    link: "https://angrajlatake-brainflix.netlify.app/",
    repo: "https://github.com/angrajlatake/brainflix",
  },
  {
    id: 4,
    title: "BandSite",
    description:
      "Website for a popular band. It was built with HTML, CSS, and JavaScript. You can book a tour, view the band's music, and view the band's biography.",
    image: BandSite,
    link: "https://angrajlatake.github.io/bandsite/",
    repo: "https://github.com/angrajlatake/bandsite",
  },
];
