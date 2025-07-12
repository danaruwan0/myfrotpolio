import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

// Icons
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactlessIcon from '@mui/icons-material/Contactless';
import SchoolIcon from '@mui/icons-material/School';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import BuildIcon from '@mui/icons-material/Build';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export default function NavBar({ darkMode, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav>
      <div className='logo-content'>
        <Link to="/">&lt;/&gt; My Portfolio</Link>
      </div>

      <div className={`link-page-content ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <Link to="/home"><HomeIcon /> Home</Link>
        <Link to="/about"><InfoIcon /> About</Link>
        <Link to="/contact"><ContactlessIcon /> Contact</Link>
        <Link to="/education"><SchoolIcon /> Education</Link>
        <Link to="/projects"><TaskAltIcon /> Projects</Link>
        <Link to="/skills"><BuildIcon /> Skills</Link>
        
        <button className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </button>
      </div>

      <button className="mobile-menu-button" onClick={toggleMobileMenu}>
        <MenuIcon />
      </button>
    </nav>
  );
}