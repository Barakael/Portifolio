import { useState } from 'react'
import ProjectCard from './ProjectCard'
import { projects as allProjects } from '../data/projects'
import './Projects.css'

const Projects = () => {
  const [filter, setFilter] = useState<string>('all')

  const languages = ['all', ...Array.from(new Set(allProjects.map(p => p.language)))]

  const filteredProjects = filter === 'all' 
    ? allProjects 
    : allProjects.filter(p => p.language === filter)

  return (
    <div className="projects-section">
      <div className="projects-header">
        <h2 className="projects-title">Featured Projects</h2>
        <p className="projects-subtitle">
          A collection of my best work and contributions to open source
        </p>
      </div>

      <div className="projects-filters">
        {languages.map((lang) => (
          <button
            key={lang}
            className={`filter-button ${filter === lang ? 'active' : ''}`}
            onClick={() => setFilter(lang)}
          >
            {lang === 'all' ? 'All' : lang}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div 
            key={project.id} 
            className="project-item"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="no-projects">
          <p>No projects found for this filter.</p>
        </div>
      )}
    </div>
  )
}

export default Projects
