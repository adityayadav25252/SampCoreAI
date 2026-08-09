// components/Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import './Navbar.css';

import SampCoreAiLogo from "../../public/img/SampCoreAiLogo.png"

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const navLinksRef = useRef([]);

  // Scroll effects
  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScroll = window.scrollY;

          const height = document.documentElement.scrollHeight - window.innerHeight;
          const percent = (currentScroll / height) * 100;
          setProgress(percent);

          if (currentScroll > lastScrollY.current && currentScroll > 100) {
            setIsVisible(false);
          } else {
            setIsVisible(true);
          }

          lastScrollY.current = currentScroll;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

// Active section
useEffect(() => {
  // Other pages
  if (location.pathname === "/contact") {
    setActiveSection("contact");
    return;
  }

  if (location.pathname === "/about") {
    setActiveSection("about");
    return;
  }

  if (location.pathname === "/projects") {
    setActiveSection("projects");
    return;
  }

  if (location.pathname === "/services") {
    setActiveSection("services");
    return;
  }

  // Home page
  if (location.pathname !== "/") return;

  // Always Home when page is at top
  if (window.scrollY < 150) {
    setActiveSection("home");
  }

  const validSections = [
    "home",
    "services",
    "projects",
    "about",
    "contact",
  ];

  const sections = Array.from(
    document.querySelectorAll("section[id]")
  ).filter((section) =>
    validSections.includes(section.id)
  );

  const observer = new IntersectionObserver(
    (entries) => {
      // If we are near the top, Home must be active
      if (window.scrollY < 150) {
        setActiveSection("home");
        return;
      }

      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id) {
          setActiveSection(entry.target.id);
        }
      });
    },
    {
      rootMargin: "-35% 0px -55% 0px",
      threshold: 0,
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });

  return () => {
    observer.disconnect();
  };
}, [location.pathname]);

  // Rolling text animation setup
  useEffect(() => {
    if (typeof gsap === 'undefined') return;

    navLinksRef.current.forEach((link, index) => {
      if (!link) return;

      const item = navItems[index];
      const text = item.label;
      link.innerHTML = '';

      const wrapper = document.createElement('span');
      wrapper.className = 'text-wrapper';

      const original = document.createElement('span');
      original.className = 'original-text';

      const rolling = document.createElement('span');
      rolling.className = 'rolling-text';

      text.split('').forEach((letter) => {
        const span1 = document.createElement('span');
        span1.className = 'char';
        span1.textContent = letter;
        original.appendChild(span1);

        const span2 = document.createElement('span');
        span2.className = 'char';
        span2.textContent = letter;
        rolling.appendChild(span2);
      });

      wrapper.appendChild(original);
      wrapper.appendChild(rolling);
      link.appendChild(wrapper);

      const origChars = original.querySelectorAll('.char');
      const rollChars = rolling.querySelectorAll('.char');

      gsap.set(rollChars, { y: '100%', opacity: 0 });
      gsap.set(origChars, { y: '0%', opacity: 1 });

      const tl = gsap.timeline({ paused: true });
      tl.to(origChars, { y: '-100%', opacity: 0, duration: 0.3, stagger: 0.02 }, 0)
        .to(rollChars, { y: '0%', opacity: 1, duration: 0.3, stagger: 0.02 }, 0);

      link.addEventListener('mouseenter', () => tl.play());
      link.addEventListener('mouseleave', () => tl.reverse());

      link.gsapTimeline = tl;
    });
  }, []);

  // Mobile menu handlers
  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? '' : 'hidden';
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  // Handle navigation
const handleNavClick = (item, e) => {
  e.preventDefault();
  closeMobileMenu();

  if (item.id === 'contact') {
    navigate('/contact');
    return;
  }

  if (item.id === 'about') {
    navigate('/about');
    return;
  }

  if (item.id === 'projects') {
    navigate('/projects');
    return;
  }

  if (item.id === 'services') {
    navigate('/services');
    return;
  }

  // Home / other sections
  if (location.pathname === '/') {
    setActiveSection(item.id);
    scrollToSection(item.id);
  } else {
    navigate('/');

    setTimeout(() => {
      setActiveSection(item.id);
      scrollToSection(item.id);
    }, 150);
  }
};

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };



  // Let's Talk button handler
  const handleLetsTalk = () => {
    closeMobileMenu();
    navigate('/contact');
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Progress Bar */}
      <div
        className="progress-bar"
        style={{ width: `${progress}%` }}
      />

      {/* Navbar */}
      <nav className={`navbar ${isVisible ? 'visible' : 'hidden'}`}>
        <div className="nav-container">

          {/* Logo */}
          <div className="logo">
            <img src={SampCoreAiLogo} alt="Logo" />
          <span>
  Samp<span className="core-text">Core</span> Ai
</span>
          </div>

          {/* Nav Links */}
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li className="mobile-menu-label">
              <span>Navigation</span>
            </li>
            {navItems.map((item, index) => (
              <li
                key={item.id}
                style={{
                  transitionDelay: isMenuOpen ? `${0.1 + index * 0.05}s` : '0s'
                }}
              >
                <a
                  href={`#${item.id}`}
                  ref={(el) => (navLinksRef.current[index] = el)}
                  data-section={item.id}
                  className={activeSection === item.id ? 'active' : ''}
                  onClick={(e) => handleNavClick(item, e)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="nav-right">
            <button className="letstalk-btn" onClick={handleLetsTalk}>
              Let's Talk
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>

        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`}
        onClick={closeMobileMenu}
      />
    </>
  );
};

export default Navbar;