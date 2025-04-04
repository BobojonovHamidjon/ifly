import React, { useEffect } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Excursions from './Pages/Excursions'
import City from './Pages/City'
import Aos from 'aos'
import About from './Pages/About'
import ContactSection from './Pages/ContactSection'

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
      <City/>
      <About/>
      <ContactSection/>
      <Footer/>
      
      
    </div>
  )
}

export default App