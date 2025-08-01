import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer/Footer';
import Logo from '../Components/Logo/Logo';
import Text from '../Components/Text/Text';

import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import Education from '../Pages/Education/Education';
import Projects from '../Pages/Projects/Projects';
import Skills from '../Pages/Skills/Skills';

import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      // primary: {
      //   main: '#004aad',
      // },
      // secondary: {
      //   main: '#ffcb05',
      // },
      background: {
        default: darkMode ? '#0D1B2A' : '#f9f9f9',
        paper: darkMode ? '#1B263B' : '#ffffff',
      },
    },
  });

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={`app-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <Router>
          <NavBar darkMode={darkMode} toggleTheme={toggleTheme} />

          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>

          {/* <Footer darkMode={darkMode} /> */}
        </Router>

       
        
      </div>
    </ThemeProvider>
  );
}

export default App;