import '../css/App.css';
import { useState } from 'react';
import Navbar from './Nabvar';
import HeroSection from './HeroSection';
import ProjectSection from './ProjectSection';
import CanvasSection from './CanvasSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

function App() {

  const [darkMode, setDarkMode] = useState(false);
  
  
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  }
  return (
    <div className='app' style={{
      backgroundColor: `${darkMode ? '#0D0D0D' : '#FFDCA8'}`,
      color: `${darkMode ? '#FFFFFF' : '#0D0D0D'}`,
    }}>
      <Navbar darkMode={darkMode} handleDarkMode={handleDarkMode} />
      <HeroSection darkMode={darkMode}/>
      <ProjectSection darkMode={darkMode}/>
      <CanvasSection darkMode={darkMode}/>
      <ContactSection darkMode={darkMode}/>
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
