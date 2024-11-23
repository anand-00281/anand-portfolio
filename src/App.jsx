import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SkillsMarquee from './components/SkillsMarquee'


const App = () => {
  return (
     <>
        <div>
            <Navbar/>
            <Hero/>
             <SkillsMarquee/>
            <About/>
            <Portfolio/>
            <Contact/>
            <Footer/>
        </div>
     </>
  )
}

export default App