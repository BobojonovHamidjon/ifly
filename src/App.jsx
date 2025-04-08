import React, { useEffect, useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Excursions from './Pages/Excursions';
import About from './Pages/About';
import ContactSection from './Pages/ContactSection';
import Cite from './Pages/City';
import { ToastContainer } from 'react-toastify';
import Aos from 'aos';
import 'aos/dist/aos.css';
import 'react-toastify/dist/ReactToastify.css';
import { OrbitProgress } from 'react-loading-indicators';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <OrbitProgress
        color="#3142cc"
        size="medium"
        text=""
        textColor=""
      />
    </div>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Aos.init({
      duration: 900,
      offset: 50,
      easing: 'ease-in-out',
    });

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 sekundlik loading

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <Header />
      <Excursions />
      <Cite />
      <About />
      <ContactSection />
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default App;
