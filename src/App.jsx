import React, { useEffect } from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Lenis from 'lenis'
import LocomotiveScroll from 'locomotive-scroll';
import { ProgressiveBlur } from './components/ui/skiper-ui/skiper41';



const App = () => {

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, [])

  const lenis = new Lenis({
    autoRaf: true,
  });

  lenis.on('scroll', (e) => {
    // console.log(e);
  });
  return (
    <main className='w-full relative h-[110vh] bg-secondary'>
            
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </main>
  )
}

export default App