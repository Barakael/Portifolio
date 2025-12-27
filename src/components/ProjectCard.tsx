import { FaStar, FaCodeBranch, FaExternalLinkAlt } from 'react-icons/fa'
import { Project } from '../types'
import './ProjectCard.css'

interface ProjectCardProps {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="project-card">
      <div className="project-header">
        <div className="project-title-section">
          <h3 className="project-name">{project.name}</h3>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              aria-label="View project"
            >
              <FaExternalLinkAlt />
            </a>
          )}
        </div>
        {project.badges && project.badges.length > 0 && (
          <div className="project-badges">
            {project.badges.map((badge) => (
              <span key={badge} className="badge">
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>

      <p className="project-description">{project.description}</p>

      <div className="project-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>

      <div className="project-footer">
        <div className="project-language">
          <span 
            className="language-dot" 
            style={{ backgroundColor: project.languageColor }}
          />
          <span>{project.language}</span>
        </div>
        <div className="project-stats">
          <div className="stat-item">
            <FaStar />
            <span>{project.stars}</span>
          </div>
          <div className="stat-item">
            <FaCodeBranch />
            <span>{project.forks}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
