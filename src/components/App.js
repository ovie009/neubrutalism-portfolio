import '../css/App.css';
import { useState } from 'react';
import Navbar from './Nabvar';
import HeroSection from './HeroSection';
import ProjectSection from './ProjectSection';
import CanvasSection from './CanvasSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import SetCookie from '../utils/SetCookie';
import CheckCookie from '../utils/CheckCookie';

function App() {

  const [darkMode, setDarkMode] = useState(() => {
    return CheckCookie();
  });
  
  
  const handleDarkMode = () => {
    setDarkMode(prevMode => {
      SetCookie('theme', !prevMode ? 'dark' : 'light', 30);
      return !prevMode;
    });

  }
  
  return (
    <div className='app' style={{
      backgroundColor: `${darkMode ? '#0D0D0D' : '#FFDCA8'}`,
      color: `${darkMode ? '#FFFFFF' : '#0D0D0D'}`,
    }}>
      <div className="component-container">
        <Navbar darkMode={darkMode} handleDarkMode={handleDarkMode} />
        <HeroSection darkMode={darkMode}/>
        <ProjectSection darkMode={darkMode}/>
        <CanvasSection darkMode={darkMode}/>
        <ContactSection darkMode={darkMode}/>
      </div>
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
