import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <Link
        to={`/projects/${project.id}`}
        className="project-card__link"
      >
        <div className="project-card__image-wrap">
          <img
            src={project.image}
            alt={project.title}
            className="project-card__image"
          />
        </div>

        <div className="project-card__content">
          <div>
            <p className="project-card__category">
              {project.category}
            </p>

            <h3 className="project-card__title">
              {project.title}
            </h3>
          </div>

          <span className="project-card__arrow">
            View case ↗
          </span>
        </div>
      </Link>
    </article>
  );
}

export default ProjectCard;