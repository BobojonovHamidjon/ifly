import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoAirplaneSharp } from "react-icons/io5";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaHotel, FaRoute } from "react-icons/fa";

import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay,  Pagination } from "swiper/modules";
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';



function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const { t , i18n} = useTranslation();
const features = [
  {
    title: t("about.title"),
    description: t("about.description"),
    icon: <IoAirplaneSharp />,
    color: "text-blue-500",
  },
  {
    title: t("about.title2"),
    description: t("about.description2"),
    icon: <FaHotel />,
    color: "text-green-500",
  },
  {
    title: t("about.title3"),
    description: t("about.description3"),
    icon: <FaRoute />,
    color: "text-yellow-500",
  },
  {
    title: t("about.title4"),
    description: t("about.description4"),
    icon: <BsFillPeopleFill />,
    color: "text-purple-500",
  },
];

  return (
    <section className=" bg-gray-900 py-16 px-4 sm:px-6 lg:px-8" id="about">
      <div className="max-w-7xl mx-auto text-center" data-aos="fade-up">
        <h2 className="text-3xl text-orange-500 font-extrabold ">{t("about.about")}</h2>
        <p className="mt-4 text-xl text-orange-500 ">
          {t("about.text")}
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
            <h3 className="text-xl font-semibold text-black mb-2">{feature.title}</h3>
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
            <h3 className="text-sm text-indigo-500 font-semibold uppercase">{t("about.tarix")}</h3>
            <p className="mt-2 text-gray-600">
              {t("about.text2")}
            </p>
            <div className="mt-4">
              <a href="#" className="text-indigo-500 hover:text-indigo-600 font-medium">{t("about.batafsil")}</a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-4xl text-center mb-16 text-orange-500 font-bold">{t("about.swiper")}</h2>
        <Swiper
          modules={[ Pagination, Autoplay]}
          spaceBetween={20} 
          slidesPerView={1}  
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,  
            disableOnInteraction: false,  
          }}
          className="mySwiperEmpty"
          breakpoints={{
            640: {
              slidesPerView: 1,  
            },
            768: {
              slidesPerView: 2,  
            },
            1024: {
              slidesPerView: 3,  
            },
          }}
        >
          <SwiperSlide>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <p className="text-gray-600 italic">{t("about.slider")}</p>
              <p className="mt-4 text-gray-800 font-semibold">{t("about.name")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <p className="text-gray-600 italic">{t("about.slider")}</p>
              <p className="mt-4 text-gray-800 font-semibold">{t("about.name2")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <p className="text-gray-600 italic">{t("about.slider")}</p>
              <p className="mt-4 text-gray-800 font-semibold">{t("about.name3")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <p className="text-gray-600 italic">{t("about.slider")}</p>
              <p className="mt-4 text-gray-800 font-semibold">{t("about.name4")}</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default About;
