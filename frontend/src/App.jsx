import React from 'react'
import Canvas from './canvas';
import Customizer from './pages/Customizer';
import Home from './pages/Home';

const App = () => {
  return (
    <main className='app transition-all ease-in'>
      <Home />
      <Canvas />
      <Customizer />
    </main>
  )
}

export default App
