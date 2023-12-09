import { dataProjects } from "./dataProjects";
import { ProjectsContainer } from "./StyledProjects";

const Projects = () => {
  const projects = dataProjects(); // Call the dataProjects function to get the array of projects

  return (
    <ProjectsContainer id="projects">
      <h1>Projects</h1>
      <p>
        Here are some of my projects. Click on the card to see the live version.
      </p>
      {projects.map((item) => (
        <div key={item.id} className="project">
          <div className="front">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className="projectDescription">
              <a href={item.live} target="_blank" rel="noopener noreferrer">
                Live View
              </a>
              <a href={item.github} target="_blank" rel="noopener noreferrer">
                Github
              </a>
            </div>
          </div>
          <div className="back">
            <img src={item.image} alt="background" />
          </div>
        </div>
      ))}
    </ProjectsContainer>
  );
};

export default Projects;
