import "./Projects.scss";
import { projectList } from "./ProjectList";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import connection from "../../assets/animations/connection.json";
import connected from "../../assets/animations/connected.json";
import { useEffect, useState } from "react";
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
              apiLink={project?.apiLink}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;

export const Card = ({ img, title, desc, link, id, repo, apiLink }) => {
  const [loading, setLoading] = useState(true);
  const [complete, setComplete] = useState(false);
  useEffect(() => {
    if (apiLink) {
      fetch(apiLink)
        .then((res) => {
          if (res.ok) {
            setLoading(false);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [apiLink]);

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
              {apiLink && !complete && (
                <div className="card__buttons">
                  <Lottie
                    animationData={connection}
                    onLoopComplete={() => {
                      if (!loading) {
                        setComplete(true);
                      }
                    }}
                    style={{ height: "50px", width: "50px" }}
                  />
                  <p className="card__button-text">
                    Spinning up idle server. Give us a minute
                  </p>
                </div>
              )}
              {complete && (
                <div className="card__buttons">
                  <Lottie
                    animationData={connected}
                    style={{ height: "70px", width: "70px" }}
                  />
                  <p className="card__button-text">
                    Server is Ready. Click View to see the app
                  </p>
                </div>
              )}
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
              {apiLink && !complete && (
                <div className="card__buttons">
                  <Lottie
                    animationData={connection}
                    onLoopComplete={() => {
                      if (!loading) {
                        setComplete(true);
                      }
                    }}
                    style={{ height: "50px", width: "50px" }}
                  />
                  <p className="card__button-text">
                    Spinning up idle server. Give us a minute
                  </p>
                </div>
              )}
              {complete && (
                <div className="card__buttons">
                  <Lottie
                    animationData={connected}
                    style={{ height: "70px", width: "70px" }}
                  />
                  <p className="card__button-text">
                    Server is Ready. Click View to see the app
                  </p>
                </div>
              )}
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
