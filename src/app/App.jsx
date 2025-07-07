import React, { useState, useEffect } from 'react';
import Button from '../components/Button/Button';
import Text from '../components/Text/Text';
import { FaSun, FaMoon } from 'react-icons/fa';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : '';
  }, [darkMode]);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="app-container">
      <Button
        id="mode-change"
        className="mode-change"
        text={darkMode ? 'Light Mode' : 'Dark Mode'}
        icon={darkMode ? <FaSun /> : <FaMoon />}
        onClick={toggleMode}
      />
      <Text as="h1" className="heading">
        {darkMode ? 'Dark Mode' : 'Light Mode'} is active
      </Text>
    </div>
  );
}

export default App;
