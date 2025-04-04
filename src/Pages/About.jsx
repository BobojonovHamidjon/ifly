import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoAirplaneSharp } from "react-icons/io5";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaHotel, FaRoute } from "react-icons/fa";

import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";


const features = [
  {
    title: "Xalqaro Sayohat",
    description: "Dunyodagi eng go'zal joylarga sayohatlarni tashkil etamiz.",
    icon: <IoAirplaneSharp />,
    color: "text-blue-500",
  },
  {
    title: "Qulay Mehmonxonalar",
    description: "Eng yaxshi va eng qulay mehmonxonalar bilan qolaq.",
    icon: <FaHotel />,
    color: "text-green-500",
  },
  {
    title: "Maxsus Yo'nalishlar",
    description: "Har bir mijoz uchun individual yo'nalishlarni yaratamiz.",
    icon: <FaRoute />,
    color: "text-yellow-500",
  },
  {
    title: "Malakali Yo'riqchilar",
    description: "Har bir mijoz uchun individual yo'nalishlarni yaratamiz.",
    icon: <BsFillPeopleFill />,
    color: "text-purple-500",
  },
];

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-orange-500 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8" id="about">
      <div className="max-w-7xl mx-auto text-center" data-aos="fade-up">
        <h2 className="text-3xl font-extrabold dark:text-orange-500 text-white sm:text-4xl">Kompaniyamiz Haqida</h2>
        <p className="mt-4 text-xl text-white dark:text-orange-500">
          20 yildan ortiq vaqt davomida noyob sayohat tajribalarini taqdim etamiz.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mt-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md"
            data-aos="fade-up"
            data-aos-delay={100 * (index + 1)}
          >
            <div className={`w-12 h-12 mb-4 mx-auto text-3xl ${feature.color}`}>
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-white rounded-lg shadow-lg overflow-hidden" data-aos="fade-up">
        <div className="md:flex">
          <div className="md:w-1/3">
            <img
              className="w-[190px] h-[190px] object-cover"
              src="https://www.ifly.com.uz/assets/logo-BPA5zOgc.png" // Rasm yo‘li to‘g‘ri ekanligini tekshiring
              alt="Company image"
            />
          </div>
          <div className="p-8 md:w-2/3">
            <h3 className="text-sm text-indigo-500 font-semibold uppercase">Bizning Tariximiz</h3>
            <p className="mt-2 text-gray-600">
              IFLY kompaniyasi tashkil etilganidan beri mijozlarga unutilmas sayohat tajribalarini taqdim etmoqda.
              Biz har doim eng yaxshi xizmatlarni ko'rsatishga intilamiz va mijozlarimizning istak va ehtiyojlarini e'tiborga olamiz.
            </p>
            <div className="mt-4">
              <a href="#" className="text-indigo-500 hover:text-indigo-600 font-medium">Batafsil o'qing →</a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-4xl text-center mb-16 text-orange-500 font-bold">Mijozlarimiz nima deyishadi</h2>
        <Swiper
          modules={[ Pagination, Autoplay]}
          spaceBetween={20}  // Adjust space for smaller screens
          slidesPerView={1}  // Default for small screens (mobile)
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,  // Slide will auto change every 3 seconds
            disableOnInteraction: false,  // Auto-play won't be disabled after interaction
          }}
          className="mySwiperEmpty"
          breakpoints={{
            640: {
              slidesPerView: 1,  // 1 slide per view on small screens
            },
            768: {
              slidesPerView: 2,  // 2 slides per view on medium screens
            },
            1024: {
              slidesPerView: 3,  // 3 slides per view on large screens
            },
          }}
        >
          <SwiperSlide>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <p className="text-gray-600 italic">"IFLY kompaniyasining xizmatlaridan juda mamnunman! Sayohat juda qulay va yoqimli o'tdi. Tavsiya qilaman!"</p>
              <p className="mt-4 text-gray-800 font-semibold">Mirzaev Alisher</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <p className="text-gray-600 italic">"IFLY kompaniyasining xizmatlaridan juda mamnunman! Sayohat juda qulay va yoqimli o'tdi. Tavsiya qilaman!"</p>
              <p className="mt-4 text-gray-800 font-semibold">Mirzaev Alisher</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <p className="text-gray-600 italic">"IFLY kompaniyasining xizmatlaridan juda mamnunman! Sayohat juda qulay va yoqimli o'tdi. Tavsiya qilaman!"</p>
              <p className="mt-4 text-gray-800 font-semibold">Mirzaev Alisher</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <p className="text-gray-600 italic">"IFLY kompaniyasining xizmatlaridan juda mamnunman! Sayohat juda qulay va yoqimli o'tdi. Tavsiya qilaman!"</p>
              <p className="mt-4 text-gray-800 font-semibold">Mirzaev Alisher</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default About;
