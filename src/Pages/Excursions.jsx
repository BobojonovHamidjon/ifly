import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import ContactModal from "./ContactModal";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Excursions = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const tourData = [
    {
      title: "Xitoyni kashf eting",
      description: "Sevgi  Shahrini kashf eting va  Xitoyning go'zalligidan bahramand bo'ling.",
      image: "https://www.ifly.com.uz/assets/p-1-B1MTRPEQ.jpg",
    },
    {
      title: "Tokyo Sarguzashtlari",
      description: "Tokyo  shahrining go'zalligidan bahramand bo'ling va  uning madaniyatini kashf eting.",
      image: "https://www.ifly.com.uz/assets/a-1-DbaUTjp8.jpg",
    },
    {
      title: "Yaponiya",
      description: "Yaponiyaning go'zalligidan bahramand bo'ling va  uning madaniyatini kashf eting.",
      image: "https://www.ifly.com.uz/assets/t-2-B47GAI8L.jpg",
    },
    {
      title: "Dubai  muhlislari",
      description: "Dubayning futuristik silueti va hashamatini ko'ring.",
      image: "https://www.ifly.com.uz/assets/d-1-PHDy7vV9.jpg",
    },
  ];

  return (
    <div className="bg-orange-500 dark:bg-gray-900 dark:text-white w-full h-auto py-20" id="tours">
      <div className="container mx-auto px-5">
        <h2 className="text-5xl font-bold text-center dark:text-orange-500 text-white mb-14">
        Bizning Premium Turlarimizni Kashf Etish
        </h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20} // Adjust space for smaller screens
          slidesPerView={1} // Default for small screens (mobile)
          loop={true}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1, // Mobile
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2, // Tablet
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3, // Desktop
              spaceBetween: 30,
            },
          }}
        >
          {tourData.map((tour, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative bg-center bg-cover rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300  hover:rounded-[8px] "
                style={{
                  backgroundImage: `url(${tour.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '300px',  // Fixed height for all slides
                  width: '100%',     // Full width of the container
                  aspectRatio: '1',   // Enforces equal width and height
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/80"></div>
                <div className="relative p-6 flex flex-col justify-end h-full">
                  <h3 className="text-3xl font-semibold text-white mb-2">{tour.title}</h3>
                  <p className="text-gray-300 mb-6">{tour.description}</p>
                  <button
                    onClick={openModal}
                    className="bg-orange-600 text-center inline-block text-white px-4 py-2 rounded-full duration-500 hover:bg-orange-700/60 transition-all"
                  >
                 Biz  bilan  bog'laning
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={modalOpen} onClose={closeModal} />
    </div>
  );
};

export default Excursions;
