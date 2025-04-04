import React, { useEffect } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Excursions from './Pages/Excursions'

import Aos from 'aos'
import About from './Pages/About'
import ContactSection from './Pages/ContactSection'
import Cite from './Pages/City'

const App = () => {
  useEffect(() => {
    Aos.init({
        duration: 900,
        offset: 50,
        easing: 'ease-in-out', 
    });
}, []);
  return (
    <div>
      <Header/>
      <Excursions/>
      <Cite/>
      <About/>
      <ContactSection/>
      <Footer/>
      
      
      
    </div>
  )
}

export default App