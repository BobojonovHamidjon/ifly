import React, { useState } from 'react';
import ContactModal from './ContactModal';

const toursData = [
  {
    title: 'Tokio, Yaponiya',
    description: 'Tokio Yaponiya poytaxti bo\'lib, an\'anaviy ibodatxonalarni zamonaviy osmono\'parlar bilan birlashtiradi.',
    image: 'https://www.ifly.com.uz/assets/t-2-B47GAI8L.jpg',
  },
  {
    title: 'Orol qochishi',
    description: 'Shahar shovqinidan uzoqda, tabiatning ajoyib go\'zalligida dam oling.',
    image: 'https://www.ifly.com.uz/assets/i-1-BAh0CpFo.jpg',
  },
  {
    title: 'Vetnam sarguzashti',
    description: 'Vetnamning go\'zal rang-barang guruch teraslari va noyob madaniyati bilan tanishing!',
    image: 'https://www.ifly.com.uz/assets/v-1-BW6h-6i6.jpg',
  },
  {
    title: 'Dubay, BAA',
    description: 'Dubayning kelajakdagi skylinesi va hashamatini guvohi bo\'ling.',
    image: 'https://www.ifly.com.uz/assets/d-1-PHDy7vV9.jpg',
  },
  {
    title: 'Maldivlar',
    description: 'Oq qumli plyajlar va toza suvlar bilan tropik jannatda dam oling.',
    image: 'https://www.ifly.com.uz/assets/m-1-C6jSiaWB.jpg',
  },
  {
    title: 'Tropik Tailand',
    description: 'Tailand chiroyli orollari, ko\'chada oziq-ovqat va boy madaniyat merosi bilan mashhur.',
    image: 'https://www.ifly.com.uz/assets/t-1-B6QgCYK4.jpg',
  },
  {
    title: 'Mo\'jizaviy Turkiya',
    description: 'Turkiyaning boy tarixini va go\'zal manzaralarini kashf eting.',
    image: 'https://www.ifly.com.uz/assets/tur-3-CB-g59cj.jpg',
  }
];

const City = () => {
  const [selectedTour, setSelectedTour] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="container mx-auto py-20 px-5 font-mono">
      <h1 className="text-center text-4xl font-bold mb-8" data-aos="fade-up">
        Davlatlarni o'rganing
      </h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {toursData.map((tour, index) => (
          <div 
            key={index}
            className="bg-gradient-to-r from-amber-500 to-pink-500 text-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
            data-aos="zoom-in"
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
                  onClick={() => setSelectedTour(tour)}
                >
                  Batafsil ma'lumot
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedTour && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 bg-opacity-70 backdrop-blur-sm">
          <div className="bg-white p-5 rounded-lg gap-5 shadow-lg max-w-lg text-center">
            <img src={selectedTour.image} alt={selectedTour.title} className="rounded-lg mb-4" />
            <h2 className="text-2xl font-bold">{selectedTour.title}</h2>
            <p className="mt-2">{selectedTour.description}</p>
            <div className="mt-4 flex justify-center space-x-4">
              <button 
                className="px-4 py-2 bg-gray-500 text-white rounded"
                onClick={() => setSelectedTour(null)}
              >
                Yopish
              </button>
              <button 
                className="px-4 py-2 bg-gray-500 text-white rounded"
                onClick={openModal}
              >
                Aloqa
              </button>
            </div>
        </div>
        </div>
      )}
      <ContactModal isOpen={modalOpen} onClose={closeModal} />
    </div>
  );
};

export default City;