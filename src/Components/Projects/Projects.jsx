import "./Projects.scss";
import { projectList } from "./ProjectList";
import { motion } from "framer-motion";

const CardMotion = {
  show: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const CardItemMotion = {
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

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="projects__wrapper">
        <h1 className="projects__title">Projects</h1>
        {projectList.map((project, index) => {
          return (
            <Card
              key={index}
              img={project.image}
              title={project.title}
              desc={project.description}
              link={project.link}
              id={project.id}
              repo={project.repo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;

export const Card = ({ img, title, desc, link, id, repo }) => {
  return (
    <>
      {id % 2 === 0 ? (
        <div className="border">
          <motion.div
            className="card"
            variants={CardMotion}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div variants={CardItemMotion} className="card__text">
              <h2 className="card__heading">{title}</h2>
              <p className="card__desc">{desc}</p>
              <div className="card__buttons">
                <a
                  href={link}
                  className="card__button"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="card__button-text">View</span>
                </a>
                <a
                  href={repo}
                  className="card__button"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="card__button-text">Repo</span>
                </a>
              </div>
            </motion.div>
            <motion.div
              variants={CardItemMotion}
              className="card__img-container"
            >
              <img className="card__img" src={img} alt="" />
            </motion.div>
          </motion.div>
        </div>
      ) : (
        <div className="border">
          <motion.div
            className="card"
            variants={CardMotion}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div
              variants={CardItemMotion}
              className="card__img-container"
            >
              <img className="card__img" src={img} alt="" />
            </motion.div>
            <motion.div variants={CardItemMotion} className="card__text">
              <h2 className="card__heading">{title}</h2>
              <p className="card__desc">{desc}</p>
              <div className="card__buttons">
                <a
                  href={link}
                  className="card__button"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="card__button-text">View</span>
                </a>
                <a
                  href={repo}
                  className="card__button"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="card__button-text">Repo</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      )}
    </>
  );
};
