import React, { useState } from 'react';
import ContactModal from '../Components/ContactModal';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';


const Cite = () => {
  const { t , i18n} = useTranslation();
  const [selectedTour, setSelectedTour] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  
  const toursData = [
    {
      title: t("city.title"),
      description: t("city.description"),
      image: 'https://www.ifly.com.uz/assets/t-2-B47GAI8L.jpg',
      population: t("city.population"),
    regions: t("city.regions"),
    cities: t("city.cities"),
    currency: t("city.currency")
    },
    {
      title: t("city.title2"),
      description: t("city.description2"),
      image: 'https://www.ifly.com.uz/assets/i-1-BAh0CpFo.jpg',
      population: t("city.population2"),
      regions: t("city.regions2"),
      cities: t("city.cities2"),
      currency: t("city.currency2")
      
    },
    {
      title: t("city.title3"),
      description: t("city.description3"),
      image: 'https://www.ifly.com.uz/assets/v-1-BW6h-6i6.jpg',
      population: t("city.population3"),
      regions: t("city.regions3"),
      cities: t("city.cities3"),
      currency: t("city.currency3")
    },
    {
      title: t("city.title4"),
      description: t("city.description4"),
      image: 'https://www.ifly.com.uz/assets/d-1-PHDy7vV9.jpg',
      population: t("city.population4"),
    regions: t("city.regions4"),
    cities: t("city.cities4"),
    currency: t("city.currency4")
    },
    {
      title: t("city.title5"),
      description: t("city.description5"),
      image: 'https://www.ifly.com.uz/assets/m-1-C6jSiaWB.jpg',
      population: t("city.population5"),
      regions: t("city.regions5"),
      cities: t("city.cities5"),
      currency: t("city.currency5")
    },
    {
      title: t("city.title6"),
      description: t("city.description6"),
      image: 'https://www.ifly.com.uz/assets/t-1-B6QgCYK4.jpg',
      population: t("city.population6"),
    regions: t("city.regions6"),
    cities: t("city.cities6"),
    currency: t("city.currency6")
    },
    {
      title: t("city.title7"),
      description: t("city.description7"),
      image: 'https://www.ifly.com.uz/assets/tur-3-CB-g59cj.jpg',
      population: t("city.population7"),
      regions: t("city.regions7"),
      cities: t("city.cities7"),
      currency: t("city.currency7")
    }
  ];
  

  return (
    <div   className="container mx-auto py-20 px-5 font-mono " id='cite'>
      <h1 className="text-center text-4xl font-bold mb-8" data-aos="fade-up">
        {t("city.text")}
      </h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {toursData.map((tour, index) => (
    <div 
      key={index}
      className="bg-gradient-to-r from-amber-500 to-pink-500 text-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
      data-aos="zoom-in"
      onClick={() => setSelectedTour(tour)} 
    >
      <div 
        className="relative h-48 w-full bg-cover bg-center" 
        style={{ backgroundImage: `url(${tour.image})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-semibold">{tour.title}</h2>
        <p className="mt-2 text-gray-200">{tour.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <button 
            className="text-sm bg-white text-black rounded px-4 py-1"
            onClick={(e) => {
              e.stopPropagation(); 
              setSelectedTour(tour);
            }}
          >
            {t("city.button")}
          </button>
        </div>
      </div>
    </div>
  ))}
</div>


      {selectedTour && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
    <div className="bg-[#0d1b2a] text-white p-6 rounded-xl max-w-xl w-full mx-4 shadow-2xl text-center">
      <img
        src={selectedTour.image}
        alt={selectedTour.title}
        className="rounded-md mb-4 w-full max-h-60 object-cover"
      />
      <h2 className="text-2xl font-bold mb-2">{selectedTour.title}</h2>
      <p className="mb-4 text-gray-300">{selectedTour.description}</p>

      <div className="text-left text-sm space-y-1 mb-6">
        <p><strong className="text-white">Aholi:</strong> {selectedTour.population}</p>
        <p><strong className="text-white">Hududlar:</strong> {selectedTour.regions}</p>
        <p><strong className="text-white">Shaharlar:</strong> {selectedTour.cities}</p>
        <p><strong className="text-white">Valyuta:</strong> {selectedTour.currency}</p>
      </div>

      <div className="flex justify-center gap-4">
        <button
          className="px-5 py-2 bg-gray-400 hover:bg-gray-500 text-white rounded"
          onClick={() => setSelectedTour(null)}
        >
          {t("city.yopish")}
        </button>
        <button
          className="px-5 py-2 bg-gray-400 hover:bg-gray-500 text-white rounded"
          onClick={openModal}
        >
          {t("city.aloqa")}
        </button>
      </div>
    </div>
  </div>
)}
      <ContactModal isOpen={modalOpen} onClose={closeModal} />
    </div>
  );
};

export default Cite;