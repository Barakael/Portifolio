import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaEnvelope, FaBriefcase, FaCode, FaCalendar } from 'react-icons/fa'
import { Experience, WorkProject } from '../types'
import './Profile.css'

const Profile = () => {
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

      {/* Experience Section */}
      <div className="experience-section">
        <div className="section-header">
          <FaBriefcase className="section-icon" />
          <h2 className="section-title">Professional Experience</h2>
        </div>
        <div className="experience-list">
          {experiences.map((exp) => (
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
              <p className="experience-description">{exp.description}</p>
              <div className="experience-tech">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Work Projects Section */}
      <div className="work-projects-section">
        <div className="section-header">
          <FaCode className="section-icon" />
          <h2 className="section-title">Projects Worked On</h2>
        </div>
        <div className="work-projects-list">
          {workProjects.map((project) => (
            <div key={project.id} className="work-project-item">
              <div className="work-project-header">
                <h3 className="work-project-title">{project.title}</h3>
                <span className="work-project-role">{project.role}</span>
              </div>
              <p className="work-project-description">{project.description}</p>
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
                <p className="highlights-title">Highlights:</p>
                <ul>
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Profile
