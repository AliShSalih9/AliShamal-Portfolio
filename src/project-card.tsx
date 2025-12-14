import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  live?: string;
  github?: string;
}

interface ProjectCardProps {
  projects: Project[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projects }) => {
  return (
    <>
      {projects.map((project) => (
        <div className="project-card" key={project.id}>
          <img src={project.image} alt={project.title} />

          <div className="project-content">
            <h4>{project.title}</h4>
            <p>{project.description}</p>

            <div className="project-languages">
              {project.technologies.map((tech) => (
                <div className="project-language" key={tech}>
                  {tech}
                </div>
              ))}
            </div>

            <div className="footer-card">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  <FontAwesomeIcon icon={faLink} /> Live Preview
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  <FontAwesomeIcon icon={faGithub} /> Source Code
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectCard;
