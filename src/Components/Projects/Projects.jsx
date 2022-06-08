import "./Projects.scss";
import {projectList} from './ProjectList'
const Projects = () => {



  return (
    <div className="projects">
        <div className="projects__wrapper">
        <h1 className="projects__title">Projects</h1>
        {
                        projectList.map((project, index) => {
                            return <Card 
                            key={index}
                            img={project.image}
                            title={project.title}
                            desc={project.description}
                            link={project.link}
                            id={project.id}
                            repo={project.repo}
                            />
                        })
        }
        </div>
    </div>
  );
};

export default Projects;



export const Card = ({img, title, desc, link, id, repo}) => {
  return (<>
    {(id % 2) === 0 ? (
        <div className="border">
            <div className="card">
            <div className="card__text">
            <h2 className="card__heading">{title}</h2>
            <p className="card__desc">{desc}</p>
            <div className="card__buttons">
                <a href={link} className="card__button">
                    <span className="card__button-text">View</span>
                </a>
                <a href={repo} className="card__button">
                    <span className="card__button-text">Repo</span>
                </a>
            </div>
                </div>
            <div className="card__img-container">
            <img className="card__img" src={img} alt="" />
            </div>
            
                </div>
        </div>
    ):(
        <div className="border">
            <div className="card">
            <div className="card__img-container">
            <img className="card__img" src={img} alt="" />
            </div>
            <div className="card__text">
                <h2 className="card__heading">{title}</h2>
                <p className="card__desc">{desc}</p>
                <div className="card__buttons">
                    <a href={link} className="card__button">
                        <span className="card__button-text">View</span>
                    </a>
                    <a href={repo} className="card__button">
                        <span className="card__button-text">Repo</span>
                    </a>
                </div>
            </div>
                </div>
        </div>
    ) }
</>
  )
}
