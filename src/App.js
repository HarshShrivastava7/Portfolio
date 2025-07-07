import React, { useState, useEffect } from 'react';
import './App.css';

// SVG Icons as React components
const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m4 4 16 0 0 16-16 0z"/>
    <path d="m4 4 8 8 8-8"/>
  </svg>
);

const CodeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="16,18 22,12 16,6"/>
    <polyline points="8,6 2,12 8,18"/>
  </svg>
);

const DatabaseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <ellipse cx="12" cy="5" rx="9" ry="3"/>
    <path d="M5 12c0 1.657 3.134 3 7 3s7-1.343 7-3"/>
    <path d="M5 5v14c0 1.657 3.134 3 7 3s7-1.343 7-3V5"/>
  </svg>
);

const ServerIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="3" width="20" height="8" rx="1"/>
    <rect x="2" y="13" width="20" height="8" rx="1"/>
    <line x1="6" y1="7" x2="6.01" y2="7"/>
    <line x1="6" y1="17" x2="6.01" y2="17"/>
  </svg>
);

const BrainIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/>
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/>
  </svg>
);

const GraduationCapIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
);

const MapPinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

const AwardIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="8" r="7"/>
    <polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88"/>
  </svg>
);

const MenuIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="6" x2="21" y2="6"/>
    <line x1="3" y1="12" x2="21" y2="12"/>
    <line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);

const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15,3 21,3 21,9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const skills = [
    { name: 'Web Development', icon: CodeIcon, color: 'skill-blue' },
    { name: 'Database Systems', icon: DatabaseIcon, color: 'skill-green' },
    { name: 'Operating Systems', icon: ServerIcon, color: 'skill-purple' },
    { name: 'Computer Networks', icon: ServerIcon, color: 'skill-red' },
    { name: 'Data Structures & Algorithms', icon: BrainIcon, color: 'skill-yellow' },
    { name: 'Computer Programming', icon: CodeIcon, color: 'skill-indigo' }
  ];

  const projects = [
    {
      title: 'SDETrack – Real-Time Company Metrics Dashboard',
      description: 'SDETrack is a full-stack, real-time company insights dashboard developed during Inter IIT Tech Meet 2024–25. It is built for scalability and data accuracy using a robust MERN stack, with real-time computations and secure 2FA login. The system supports historical data storage and visual comparison between companies.',
      tech: ['React', 'Node.js', 'MongoDB', 'Docker'],
      github: 'https://github.com/HarshShrivastava7/SDETrack',
      demo: 'https://sde-track.vercel.app/login'
    },
    {
      title: 'LibAssist – Library Automation & Book Recommendation System',
      description: 'LibAssist is a full-stack library management system with integrated book recommendation features, designed to modernize library operations for students and administrators. It includes features such as book search, checkout/return, user management, and personalized book suggestions based on user history.',
      tech: ['React++', 'MongoDB', 'Database Design'],
      github: 'https://github.com/HarshShrivastava7/LibAssist',
      demo: '#'
    },
    {
      title: 'To_Do – Task Management Web App',
      description: 'To_Do is a full-stack task management web application designed for organizing daily to-dos efficiently. The project is built with the MERN stack and fully containerized using Docker, making it easy to deploy and scale across different environments.',
      tech: ['React', 'Node.js', 'Docker'],
      github: 'https://github.com/HarshShrivastava7/To_Do/commits/main/',
      demo: 'https://to-do-eta-fawn.vercel.app/'
    }
  ];

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="text-center">
          <div className="spinner"></div>
          <p>Loading portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-content">
            <div className="nav-brand">
              <GraduationCapIcon />
              <span>Portfolio</span>
            </div>
            
            <div className="nav-links desktop-only">
              {['about', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`nav-link ${activeSection === section ? 'active' : ''}`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
            
            <div className="nav-actions">
              <a href="https://github.com/HarshShrivastava7" target="_blank" rel="noopener noreferrer" className="icon-btn">
                <GitHubIcon />
              </a>
              <a href="https://www.linkedin.com/in/harsh-shrivastava-7b5122228/" target="_blank" rel="noopener noreferrer" className="icon-btn">
                <LinkedInIcon />
              </a>
              
              <button
                className="icon-btn mobile-only"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="mobile-menu">
              <div className="mobile-menu-content">
                {['about', 'skills', 'projects', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => {
                      setActiveSection(section);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`mobile-nav-link ${activeSection === section ? 'active' : ''}`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          {/* Hero Section */}
          <section className="hero-section">
            <div className="hero-content fade-in">
              <h1 className="hero-title">
                Web Developer & Engineer
              </h1>
              <p className="hero-subtitle">
                B.Tech Electrical Engineering graduate from IIT BHU Varanasi with expertise in 
                web development, systems programming, and computer science fundamentals.
              </p>
            </div>
            
            <div className="hero-info fade-in-delay">
              <div className="info-item">
                <MapPinIcon />
                <span>Varanasi, India</span>
              </div>
              <div className="info-item">
                <AwardIcon />
                <span>IIT BHU</span>
              </div>
              <div className="info-item">
                <CalendarIcon />
                <span>2024 Graduate</span>
              </div>
            </div>
            
            <div className="hero-actions fade-in-delay-2">
              <button className="btn btn-primary" onClick={() => {window.location.href = 'mailto:shrivastavaharsh969@gmail.com';}}>
                <MailIcon />
                Contact Me
              </button>
              <button className="btn btn-outline" onClick={() => {window.location.href = 'https://github.com/HarshShrivastava7';}}>
                <GitHubIcon />
                View GitHub
              </button>
            </div>
          </section>

          {/* About Section */}
          {activeSection === 'about' && (
            <section className="section">
              <div className="section-grid">
                <div>
                  <h2 className="section-title">About Me</h2>
                  <p className="text-content">
                    I'm a recent B.Tech graduate in Electrical Engineering from IIT BHU Varanasi 
                    with a strong passion for web development and computer science. My academic 
                    journey has given me a solid foundation in both hardware and software domains.
                  </p>
                  <p className="text-content">
                    I specialize in full-stack web development while maintaining deep knowledge 
                    in systems programming, database management, computer networks, and algorithms. 
                    My projects demonstrate practical application of these concepts in real-world scenarios.
                  </p>
                  <div className="badges">
                    <span className="badge badge-blue">IIT BHU Graduate</span>
                    <span className="badge badge-green">Web Developer</span>
                    <span className="badge badge-purple">Systems Programmer</span>
                  </div>
                </div>
                
                <div className="card">
                  <h3 className="card-title">Education</h3>
                  <div className="education-item">
                    <GraduationCapIcon />
                    <div>
                      <h4>B.Tech Electrical Engineering</h4>
                      <p>Indian Institute of Technology (BHU), Varanasi</p>
                      <p className="text-small">2020 - 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Skills Section */}
          {activeSection === 'skills' && (
            <section className="section">
              <div className="section-header">
                <h2 className="section-title">Skills & Expertise</h2>
                <p className="section-subtitle">
                  A comprehensive skill set combining web development with strong computer science fundamentals.
                </p>
              </div>
              
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div key={index} className={`skill-card ${skill.color} fade-in`} style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="skill-header">
                      <div className="skill-icon">
                        <skill.icon />
                      </div>
                      <h3>{skill.name}</h3>
                    </div>
                    <p className="skill-description">
                      {skill.name === 'Web Development' && 'Full-stack development with modern frameworks and technologies'}
                      {skill.name === 'Database Systems' && 'Design, implementation, and optimization of database systems'}
                      {skill.name === 'Operating Systems' && 'System programming, process management, and memory handling'}
                      {skill.name === 'Computer Networks' && 'Network protocols, distributed systems, and communication'}
                      {skill.name === 'Data Structures & Algorithms' && 'Efficient problem-solving and algorithm optimization'}
                      {skill.name === 'Computer Programming' && 'Multi-language programming with focus on performance'}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Projects Section */}
          {activeSection === 'projects' && (
            <section className="section">
              <div className="section-header">
                <h2 className="section-title">Featured Projects</h2>
                <p className="section-subtitle">
                  A selection of projects showcasing my skills in web development and computer science.
                </p>
              </div>
              
              <div className="projects-grid">
                {projects.map((project, index) => (
                  <div key={index} className="project-card fade-in" style={{animationDelay: `${index * 0.15}s`}}>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    
                    <div className="project-tech">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="project-actions">
                      <a href={project.github} className="btn btn-outline btn-small">
                        <GitHubIcon />
                        Code
                      </a>
                      <a href={project.demo} className="btn btn-outline btn-small">
                        <ExternalLinkIcon />
                        Demo
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Contact Section */}
          {activeSection === 'contact' && (
            <section className="section">
              <div className="section-header">
                <h2 className="section-title">Get In Touch</h2>
                <p className="section-subtitle">
                  I'm always open to discussing new opportunities, interesting projects, or potential collaborations.
                </p>
              </div>
              
              <div className="contact-container">
                <div className="contact-card">
                  <div className="contact-content">
                    <h3>Let's Connect</h3>
                    <p>Feel free to reach out through any of these channels:</p>
                    
                    <div className="contact-actions">
                      <button className="btn btn-primary" onClick={() => {window.location.href = 'mailto:shrivastavaharsh969@gmail.com';}}>
                        <MailIcon />
                        Email Me
                      </button>
                      <button className="btn btn-outline" onClick={() => {window.location.href = 'https://www.linkedin.com/in/harsh-shrivastava-7b5122228/';}}>
                        <LinkedInIcon />
                        LinkedIn
                      </button>
                      <button className="btn btn-outline" onClick={() => {window.location.href = 'https://github.com/HarshShrivastava7';}}>
                        <GitHubIcon />
                        GitHub
                      </button>
                    </div>
                    
                    <div className="contact-location">
                      <MapPinIcon />
                      Based in Chennai, India
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;