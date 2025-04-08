import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import ContactModal from "../Components/ContactModal";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';
const Excursions = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const { t , i18n} = useTranslation();

  const tourData = [
    {
      title: t("excursions.title"),
      description: t("excursions.description"),
      image: "https://www.ifly.com.uz/assets/p-1-B1MTRPEQ.jpg",
    },
    {
      title: t("excursions.title2"),
      description: t("excursions.description2"),
      image: "https://www.ifly.com.uz/assets/a-1-DbaUTjp8.jpg",
    },
    {
      title: t("excursions.title3"),
      description: t("excursions.description3"),
      image: "https://www.ifly.com.uz/assets/t-2-B47GAI8L.jpg",
    },
    {
      title: t("excursions.title4"),
      description: t("excursions.description4"),
      image: "https://www.ifly.com.uz/assets/d-1-PHDy7vV9.jpg",
    },
  ];

  return (
    <div className="bg-gray-900 dark:text-white w-full h-auto py-20" id="tours">
      <div className="container mx-auto px-5">
        <h2 className="text-5xl font-bold text-center text-white mb-14">
       {t("excursions.text")}
        </h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20} 
          slidesPerView={1} 
          loop={true}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3, 
              spaceBetween: 30,
            },
          }}
        >
          {tourData.map((tour, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative  bg-center bg-cover rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300  hover:rounded-[8px] "
                style={{
                  backgroundImage: `url(${tour.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '300px',  
                  width: '100%',    
                  aspectRatio: '1', 
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/80"></div>
                <div className="relative p-6 flex flex-col justify-end h-full">
                  <h3 className="text-3xl font-semibold text-white mb-2">{tour.title}</h3>
                  <p className="text-gray-300 mb-6">{tour.description}</p>
                  <button
                    onClick={openModal}
                    className="bg-orange-600 cursor-pointer text-center inline-block text-white px-4 py-2 rounded-full duration-500 hover:bg-orange-700/60 transition-all"
                  >
                    {t("excursions.button")}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

     
      <ContactModal isOpen={modalOpen} onClose={closeModal} />
    </div>
  );
};

export default Excursions;