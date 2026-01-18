import { useState } from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaEnvelope, FaBriefcase, FaCode, FaCalendar, FaGraduationCap } from 'react-icons/fa'
import { Education, Experience, WorkProject } from '../types'
import './Profile.css'

const Profile = () => {
  const [showAllExperience, setShowAllExperience] = useState(false)
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [showAllEducation, setShowAllEducation] = useState(false)

  const socialLinks = [
    { name: 'GitHub', icon: FaGithub, url: 'https://github.com/Barakael' },
    { name: 'LinkedIn', icon: FaLinkedin, url: 'https://www.linkedin.com/in/baraka-lucas-1400793a3/' },
    { name: 'WhatsApp', icon: FaWhatsapp, url: 'https://wa.me/255629288966' },
    { name: 'Email', icon: FaEnvelope, url: 'mailto:barakaellucas2019@gmail.com' },
  ]

  const experiences: Experience[] = [
    {
      id: 1,
      position: 'Full-Stack Developer',
      company: 'Tera Technologies and Engineering Ltd',
      location: 'Dar es Salaam, Tanzania',
      startDate: 'May 2025',
      endDate: 'Present',
      current: true,
      description: 'Developing and maintaining full-stack web applications using React TypeScript, Flutter, and Laravel PHP. Collaborating with cross-functional teams to deliver high-quality solutions.',
      technologies: ['React', 'TypeScript', 'Laravel', 'Flutter', 'Next.js'],
    },
    {
      id: 2,
      position: 'Full-Stack Developer',
      company: 'Bhumwi',
      location: 'Dar es Salaam, Tanzania',
      startDate: 'Jan 2022',
      endDate: 'Dec 2022',
      current: false,
      description: 'Built responsive user interfaces and interactive web applications. Implemented modern design patterns and best practices in React development.',
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'REST API'],
    },
    
  ]

  const workProjects: WorkProject[] = [
    {
      id: 1,
      title: 'Ministry of Finances Tanzania',
      description: 'Smart Shelves System and Desktop Application for inventory management and real-time tracking and Cabinets Control.',
      role: 'Full System Developer',
      technologies: ['Next', 'Tauri', 'Laravel', 'Tailwind CSS'],
      startDate: 'November 2025',
      endDate: 'January 2026',
      highlights: [
        'Full Stack web and desktop application development',
        'Hardware integration for smart shelves',
        'Implemented real-time inventory tracking system',
        'Testing and installation of the complete system',
      ],
    },
    {
      id: 2,
      title: 'Chato District Council Smart Parking System',
      description: 'Developed a real-time web and desktop application for smart parking management for Chato District Council.',
      role: 'Full-Stack Developer',
      technologies: ['Next.js', 'Tauri', 'Laravel PHP', 'MongoDB'],
      startDate: 'Sept 2025',
      endDate: 'Dec 2025',
      highlights: [
        'Designed and implemented real-time parking management features',
        'DHardware integration for parking system including camera interface',
        'Deploying on cloud infrastructure',
      ],
    },
    {
      id: 3,
      title: 'Tera Events System',
      description: 'Developed a comprehensive event management system for Tera Technologies to streamline event planning, Cards Distribution, and Attendance Tracking.',
      role: 'Full-Stack Developer',
      technologies: ['React TypeScript', 'Laravel PHP', 'Flutter', 'MySQL'],
      startDate: 'July 2025',
      endDate: 'Jan 2026',
      highlights: [
        'Developed user-friendly interfaces for event creation and management',
        'Backend development and methods design using Laravel PHP',
        'Payment gateway integration for Client payments',
        'WhatsApp integration for event notifications',
        'Implemented attendance tracking features using QR codes and Developed a mobile app for event attendees using Flutter',
      ],
    },
  ]

  const education: Education[] = [
    {
      id: 1,
      institution: 'Ardhi University',
      program: 'BSc in Computer Systems and Networking',
      level: 'Bachelor’s Degree',
      results: 'GPA 4.1, Second Upper Class',
      startDate: '2022',
      endDate: '2025',
      location: 'Tanzania',
      highlights: [
        'Focused on software Development and IoT Systems',
        'Completed capstone project in web and IoT systems',
      ],
    },
    {
      id: 2,
      institution: 'Ardhi University ',
      program: 'Certificate in Multimedia Technologies',
      level: 'Certificates',
      results: 'Distinction',
      startDate: 'june 2025',
      endDate: 'June 2025',
      highlights: [
        'Multimedia content creation and editing',
        'Video production and graphic design skills',
      ],
    },
  ]

  const visibleExperiences = showAllExperience ? experiences : experiences.slice(0, 1)
  const visibleProjects = showAllProjects ? workProjects : workProjects.slice(0, 1)
  const visibleEducation = showAllEducation ? education : education.slice(0, 1)

  return (
    <div className="profile">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">
            <img 
              src="src/assets/images/Me.jpg" 
              alt="Profile" 
              className="avatar-image"
            />
          </div>
          <div className="profile-info">
            <h1 className="profile-name">Barakael Lucas</h1>
            <p className="profile-username">@barakael</p>
            <p className="profile-title">Full-Stack Developer | React | TypeScript | IoT</p>
          </div>
        </div>
        
        <div className="profile-bio">
          <p>
            Full-stack developer passionate about building beautiful and functional web applications and hardware systems. 
            Experienced in React, TypeScript, Laravel PHP, Flutter, and IoT technologies with a focus on delivering scalable solutions.
          </p>
        </div>

        <div className="profile-links">
          {socialLinks.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title={link.name}
              >
                <Icon />
              </a>
            )
          })}
        </div>
      </div>

      <div className="profile-sections">
        {/* Experience Section */}
        <section className="experience-section">
          <div className="section-header">
            <FaBriefcase className="section-icon" />
            <h2 className="section-title">Professional Experience</h2>
          </div>
          <div className="experience-list">
            {visibleExperiences.map((exp) => (
              <div key={exp.id} className="experience-item">
                <div className="experience-header">
                  <div className="experience-info">
                    <h3 className="experience-position">{exp.position}</h3>
                    <p className="experience-company">{exp.company}</p>
                    {exp.location && <p className="experience-location">{exp.location}</p>}
                  </div>
                  <div className="experience-date">
                    <FaCalendar className="date-icon" />
                    <span>{exp.startDate} - {exp.endDate}</span>
                    {exp.current && <span className="current-badge">Current</span>}
                  </div>
                </div>
                <p className="experience-description clamp-text">{exp.description}</p>
                <div className="experience-tech">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {experiences.length > 1 && (
            <button
              type="button"
              className="view-more-button"
              onClick={() => setShowAllExperience((prev) => !prev)}
            >
              {showAllExperience ? 'View Less' : 'View More'}
            </button>
          )}
        </section>

        {/* Projects Section */}
        <section className="work-projects-section">
          <div className="section-header">
            <FaCode className="section-icon" />
            <h2 className="section-title">Projects Worked On</h2>
          </div>
          <div className="work-projects-list">
            {visibleProjects.map((project) => (
              <div key={project.id} className="work-project-item">
                <div className="work-project-header">
                  <h3 className="work-project-title">{project.title}</h3>
                  <span className="work-project-role">{project.role}</span>
                </div>
                <p className="work-project-description clamp-text">{project.description}</p>
                <div className="work-project-date">
                  <FaCalendar className="date-icon" />
                  <span>{project.startDate} - {project.endDate}</span>
                </div>
                <div className="work-project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="work-project-highlights">
                  <p className="highlights-title">Highlights</p>
                  <ul>
                    {project.highlights.slice(0, 2).map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                    {project.highlights.length > 2 && (
                      <li className="highlight-more">+{project.highlights.length - 2} more</li>
                    )}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          {workProjects.length > 1 && (
            <button
              type="button"
              className="view-more-button"
              onClick={() => setShowAllProjects((prev) => !prev)}
            >
              {showAllProjects ? 'View Less' : 'View More'}
            </button>
          )}
        </section>

        {/* Education Section */}
        <section className="education-section">
          <div className="section-header">
            <FaGraduationCap className="section-icon" />
            <h2 className="section-title">Education & Platforms</h2>
          </div>
          <div className="education-list">
            {visibleEducation.map((edu) => (
              <div key={edu.id} className="education-item">
                <div className="education-header">
                  <div>
                    <h3 className="education-program">{edu.program}</h3>
                    <p className="education-institution">{edu.institution}</p>
                    {edu.location && <p className="education-location">{edu.location}</p>}
                  </div>
                  
                  <div className="education-date">
                    <FaCalendar className="date-icon" />
                    <span>{edu.startDate} - {edu.endDate}</span>
                  </div>
                </div>
                <p className="education-level">{edu.level}</p>
                {edu.results && <p className="education-results">{edu.results}</p>}
                <ul className="education-highlights">
                  {edu.highlights.slice(0, 2).map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {education.length > 1 && (
            <button
              type="button"
              className="view-more-button"
              onClick={() => setShowAllEducation((prev) => !prev)}
            >
              {showAllEducation ? 'View Less' : 'View More'}
            </button>
          )}
        </section>
      </div>
    </div>
  )
}

export default Profile
