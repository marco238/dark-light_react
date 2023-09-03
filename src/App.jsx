import './App.css'
import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Section from './components/Section/Section';

function App() {
  const [ isActive, setIsActive ] = useState(true);
  const [ scrolling, setScrolling ] = useState(false);

  const toggleIsActive = () => {
    setIsActive(!isActive)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`App ${isActive ? 'light' : 'dark' }`}>

      <Navbar cb={toggleIsActive} isActive={isActive} className={scrolling ? 'navbar scrolled' : 'navbar'}/>
      <Header isActive={isActive}/>
      <Section isActive={isActive}/>
    
    </div>
  )
}

export default App
