import React, { useEffect } from 'react';
import Home from './components/Home';

function App() {
  useEffect(() => {
    window.addEventListener('resize', () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  }, []);

  return (
    <div className='App'>
      <Home />
    </div>
  );
}

export default App;
