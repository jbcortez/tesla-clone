import React, { useEffect } from 'react';
import Home from './components/Home';

function App() {
  useEffect(() => {
    const appHeight = () => {
      const doc = document.documentElement;
      doc.style.setProperty('--app-height', `${window.innerHeight}px`);
    };
    window.addEventListener('resize', appHeight);
    appHeight();
  }, []);

  return (
    <div className='App'>
      <Home />
    </div>
  );
}

export default App;
