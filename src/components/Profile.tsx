import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import './Profile.css'

const Profile = () => {
  const socialLinks = [
    { name: 'GitHub', icon: FaGithub, url: 'https://github.com/yourusername' },
    { name: 'LinkedIn', icon: FaLinkedin, url: 'https://linkedin.com/in/yourusername' },
    { name: 'Twitter', icon: FaTwitter, url: 'https://twitter.com/yourusername' },
    { name: 'WhatsApp', icon: FaWhatsapp, url: 'https://wa.me/1234567890' },
    { name: 'Email', icon: FaEnvelope, url: 'mailto:your.email@example.com' },
  ]

  return (
    <div className="profile">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">
            <img 
              src="https://github.com/github.png" 
              alt="Profile" 
              className="avatar-image"
            />
          </div>
          <div className="profile-info">
            <h1 className="profile-name">Your Name</h1>
            <p className="profile-username">@yourusername</p>
          </div>
        </div>
        
        <div className="profile-bio">
          <p>
            Full-stack developer passionate about building beautiful and functional web applications. 
            Experienced in React, TypeScript, Node.js, and modern web technologies.
          </p>
        </div>

        <div className="profile-stats">
          <div className="stat">
            <span className="stat-value">50+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat">
            <span className="stat-value">1.2K</span>
            <span className="stat-label">Contributions</span>
          </div>
          <div className="stat">
            <span className="stat-value">200+</span>
            <span className="stat-label">Stars</span>
          </div>
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
    </div>
  )
}

export default Profile
