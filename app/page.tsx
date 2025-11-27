"use client";

import React, { useState, useEffect, useRef, ReactElement } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, User, Calendar, Loader2, AlertCircle } from "lucide-react"
import { FaDatabase, FaShieldAlt, FaCertificate, FaCode, FaTools } from 'react-icons/fa';
import { SiTensorflow, SiCisco, SiJavascript, SiOracle, SiOpenai } from 'react-icons/si';

interface Bubble {
  id: number;
  left: string;
  animationDelay: string;
  animationDuration: string;
}



// Main Portfolio Component
const Portfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [activeTab, setActiveTab] = useState<string>('projects');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  type Comment = {
    id: string;
    name: string;
    message: string;
    created_at: string;
    is_pinned: boolean;
  };
  
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  


  
  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInHours < 48) return '1 day ago';
    if (diffInHours < 168) return `${Math.floor(diffInHours / 24)} days ago`;
    if (diffInHours < 720) return `${Math.floor(diffInHours / 168)} weeks ago`;
    return date.toLocaleDateString();
  };
  
  // Portfolio Tabs
  
  const portfolioTabs = [
    { name: 'Projects', icon: <FaCode />, key: 'projects' },
    { name: 'Certificates', icon: <FaCertificate />, key: 'certificates' },
    { name: 'Tech Stack', icon: <FaTools />, key: 'skills' },
  ];
  
  // Types
  interface Project {
    id: string;
    title: string;
    description: string;
    fullDescription: string;
    tech: string[];
    link: string;
    github: string;
    icon: string;
    image: string;
    features: string[];
    stats: { label: string; value: string }[];
  }
  
  interface Certificate {
    id: string;
    title: string;
    issuer: string;
    date: string;
    description: string;
    icon?: ReactElement;
    image: string;
    credentialId?: string;
    verifyLink?: string;
  }
  
  interface TechItem {
    name: string;
    icon: string;
    level: number;
    color: string;
  }
  
  interface SkillCategory {
    title: string;
    icon: string;
    techs: TechItem[];
  }
  
  // Custom hook for intersection observer with animation types
  const useInView = (threshold: number = 0.1, animationType: string = 'fadeInUp') => {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        },
        { threshold }
      );
  
      if (ref.current) {
        observer.observe(ref.current);
      }
  
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, [threshold]);
  
    return [ref, isInView, animationType] as const;
  };
  
  // Typing animation hook
  const useTypingAnimation = (texts: string[], speed: number = 100) => {
    const [displayText, setDisplayText] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
  
    useEffect(() => {
      const timeout = setTimeout(() => {
        const currentText = texts[textIndex];
        
        if (!isDeleting && charIndex < currentText.length) {
          setDisplayText(currentText.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else if (isDeleting && charIndex > 0) {
          setDisplayText(currentText.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else if (!isDeleting && charIndex === currentText.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        } else if (isDeleting && charIndex === 0) {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % texts.length);
        }
      }, isDeleting ? speed / 2 : speed);
  
      return () => clearTimeout(timeout);
    }, [texts, textIndex, charIndex, isDeleting, speed]);
  
    return displayText;
  };

  // Typing animation texts
  const typingTexts = [
    "Full-Stack Developer",
    "Blockchain", 
    "Machine Learning",
    "Problem Solver"
  ];
  const typedText = useTypingAnimation(typingTexts, 150);

  // Data
   

  const techStack = [
    // 🧠 Languages
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
    { name: 'C++', icon: 'https://cdn.simpleicons.org/cplusplus/00599C' },
    { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Dart', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' },
  
    // 🧰 Tools & IDEs
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Visual Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg' },
    { name: 'PyCharm', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  
    // 🧱 Frameworks & Libraries
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
    { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
    { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
    { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
    { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
  
    // 🛢️ Databases
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'SQLite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg' },
    { name: 'SQL Server', icon: 'https://api.iconify.design/tabler:database.svg?color=%23CC2927    ' },
  
    // 🔧 Platforms & Misc
    { name: '.NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg' },
    { name: 'Android', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-plain.svg' },
    { name: 'Arduino', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg' },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' }
  ];
  
  
  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      // Navbar scroll effect
      const navbar = document.getElementById('navbar');
      if (navbar) {
        if (window.scrollY > 100) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animation hooks for different sections
  const [homeRef, homeInView] = useInView(0.3, 'fadeInUp');
  const [aboutRef, aboutInView] = useInView(0.3, 'slideInLeft');
  const [portfolioRef, portfolioInView] = useInView(0.3, 'scaleIn');
  const [contactRef, contactInView] = useInView(0.3, 'slideInUp');

  // Generate floating bubbles
  useEffect(() => {
    const generateBubbles = (count: number): Bubble[] => {
      return Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 20}s`,
        animationDuration: `${15 + Math.random() * 10}s`
      }));
    };

    setBubbles(generateBubbles(20));
  }, []);

  return (
    <div className="portfolio">
      {/* Floating bubbles background */}
      <div className="bubbles-container">
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className="bubble"
            style={{
              left: bubble.left,
              animationDelay: bubble.animationDelay,
              animationDuration: bubble.animationDuration
            }}
          ></div>
        ))}
      </div>

      {/* Navigation */}
      <nav id="navbar" className="navbar">
        <ul className="nav-links">
          <li>
            <a
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={() => scrollToSection('home')}
            >
              Home
            </a>
          </li>
          <li>
            <a
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={() => scrollToSection('about')}
            >
              About
            </a>
          </li>
          <li>
            <a
              className={`nav-link ${activeSection === 'portfolio' ? 'active' : ''}`}
              onClick={() => scrollToSection('portfolio')}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero" ref={homeRef}>
        <div className="hero-bg"></div>
        <div className="geometric-shapes">
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        <div className={`hero-content ${homeInView ? 'animate-fadeInUp' : ''}`}>
          <p className="hero-subtitle">Welcome to my portfolio</p>
          <h1 className="hero-title">
            Hi, I'm <span className="hero-name-highlight">Zion P. Pardeño</span>
          </h1>
          <div className="typing-container">
            <span className="typing-text">{typedText}</span>
            <span className="typing-cursor">|</span>
          </div>
          <p className="hero-description">
            Passionate about creating innovative web solutions and bringing ideas to life through clean code and beautiful design.
          </p>
          <div className="cta-buttons">
            <button className="cta-primary" onClick={() => scrollToSection('portfolio')}>
              View My Work
            </button>
            <button className="cta-secondary" onClick={() => scrollToSection('contact')}>
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section section-secondary" ref={aboutRef}>
        <div className="section-title">
          About <span className="section-title-accent">Me</span>
        </div>
        <div className={`about-grid ${aboutInView ? 'animate-slideInLeft' : ''}`}>
          <div className="profile-section">
            <div className="profile-card">
              {/* Replace emoji with image */}
              <div className="profile-avatar">
                <img 
                  src="/profile.jpg" 
                  alt="Profile" 
                  className="profile-image"
                />
              </div>
              <h2 className="profile-name">Zion P. Pardeño</h2>
              <p className="profile-role">Full-Stack Developer</p>
              <p className="profile-university">Central Philippine University</p>
            </div>
          </div>
          <div className="about-content">
            <div className="about-card">
              <div className="card-header">
                <div className="card-icon">🚀</div>
                <h3 className="card-title">My Journey</h3>
              </div>
              <div className="about-text">
                <p>
                  I'm a passionate <span className="highlight">Computer Science student</span> at Central Philippine University,
                  dedicated to creating innovative web solutions that make a difference. My journey in technology
                  began with curiosity and has evolved into a deep commitment to excellence in software development.
                </p>
                <p>
                  With experience in <span className="highlight">full-stack development</span>, I enjoy tackling
                  complex problems and turning ideas into reality through clean, efficient code.
                </p>
              </div>
            </div>
            <div className="about-card">
              <div className="card-header">
                <div className="card-icon">🎓</div>
                <h3 className="card-title">Education</h3>
              </div>
              <div className="education-item">
                <h4 className="education-degree">Bachelor of Science in Computer Science</h4>
                <p className="education-school">Central Philippine University</p>
                <p className="education-period">2025 - Present</p>
                <p className="education-details">
                  Currently studying Computer Science with a focus on software development and web technologies. I stay active in coding events and consistently maintain strong academic performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section" ref={portfolioRef}>
        <div className="portfolio-container"> 
          <div className="section-title">
            My <span className="section-title-accent">Portfolio</span>
          </div>
          <div className={`portfolio-tabs ${portfolioInView ? 'animate-scaleIn' : ''}`}>
            {portfolioTabs.map((tab) => (
              <button
                key={tab.key}
                className={`tab-btn ${activeTab === tab.key ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.key)}
              >
                <span className="mr-1">{tab.icon}</span> {tab.name}
              </button>
            ))}
            </div>
          </div>

          
          {/* Tech Stack Tab - Simplified */}
          <div className={`tab-content ${activeTab === 'skills' ? 'active' : ''}`}>
            <div className="tech-stack-simple">
              {techStack.map((tech, index) => (
                <div 
                  key={index} 
                  className={`tech-item-simple ${portfolioInView ? 'animate-slideInUp' : ''}`}
                  style={{animationDelay: `${index * 0.05}s`}}
                >
                  <img src={tech.icon} alt={tech.name} className="tech-logo-simple" />
                  <h4 className="tech-name-simple">{tech.name}</h4>
                </div>
              ))}
            </div>
          </div>
      </section>

      <section id="contact" className="section section-secondary" ref={contactRef}>
        <div className="section-title">
          Get In <span className="section-title-accent">Touch</span>
        </div>
        <div className={`contact-grid ${contactInView ? 'animate-slideInUp' : ''}`}>
          {/* Left side - Contact Info */}
          <div className="contact-info">
            <div className="contact-card">
              <a href="mailto: zion.pardeno-17@cpu.edu.ph" className="contact-item-link">
                <div className="contact-item">
                  <div className="contact-icon"><Mail className="w-5 h-5 text-white" /></div>
                  <div className="contact-details">
                    <h4>Email</h4>
                    <span className="text-blue-500">zion.pardeno-17@cpu.edu.ph</span>
                  </div>
                </div>
              </a>
              
              <div className="contact-item">
                <div className="contact-icon"><Phone className="w-5 h-5 text-white" /></div>
                <div className="contact-details">
                  <h4>Phone</h4>
                  <p className="text-white">+63 9617797208</p>
                </div>
              </div>
              
              <a 
                href="https://www.google.com/maps/place/Iloilo+City,+Philippines" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-item-link"
              >
                <div className="contact-item">
                  <div className="contact-icon"><MapPin className="w-5 h-5 text-white" /></div>
                  <div className="contact-details">
                    <h4>Location</h4>
                    <span className="text-white">Iloilo City, Philippines</span>
                  </div>
                </div>
              </a>
              
              <div className="social-links">
                <a href="https://www.linkedin.com/in/zion-parde%C3%B1o-088b90397/" className="social-link" target="_blank" rel="noopener noreferrer">
                  <img src="https://api.iconify.design/mdi:linkedin.svg?color=%230A66C2" alt="LinkedIn" width="24" height="24" /> LinkedIn
                </a>
                <a href="https://github.com/Zionskei4" className="social-link" target="_blank" rel="noopener noreferrer">
                  <img src="https://cdn.simpleicons.org/github/181717" alt="GitHub" width="24" height="24" /> GitHub
                </a>
                <a href="https://www.facebook.com/zionskei/" className="social-link" target="_blank" rel="noopener noreferrer">
                  <img src="https://cdn.simpleicons.org/facebook/1877F2" alt="Facebook" width="24" height="24" /> Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-content">
          <p>© {new Date().getFullYear()} Zion P. Pardeño™. All rights reserved.</p>
        </div>
      </footer>
    </div>
    
  );
};

export default Portfolio;