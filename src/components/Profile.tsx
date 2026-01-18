import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import './Profile.css'

const Profile = () => {
  const socialLinks = [
    { name: 'GitHub', icon: FaGithub, url: 'https://github.com/Barakael' },
    { name: 'LinkedIn', icon: FaLinkedin, url: 'https://www.linkedin.com/in/baraka-lucas-1400793a3/' },
    { name: 'WhatsApp', icon: FaWhatsapp, url: 'https://wa.me/255629288966' },
    { name: 'Email', icon: FaEnvelope, url: 'mailto:barakaellucas2019@gmail.com' },
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
            <h1 className="profile-name">Barakael Lucas</h1>
            <p className="profile-username">barakael</p>
          </div>
        </div>
        
        <div className="profile-bio">
          <p>
            Full-stack developer passionate about building beautiful and functional web, applications and hardware Systems. 
            Experienced in React TypeScript, Laravel PHP, Flutter and IoT technologies.
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
    </div>
  )
}

export default Profile
