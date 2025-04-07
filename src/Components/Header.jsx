import React, { useState } from 'react'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react'
import ContactModal from './ContactModal';
import i18n from "../i18n"
import { useTranslation } from 'react-i18next';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';



const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
 
  
  const [selectedLang, setSelectedLang] = useState("Uzbek");
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const languages = [
    { code: "uz", label: "Uzbek" },
    { code: "eng", label: "English" },
    { code: "ru", label: "Русский" },
    
  ];
  const { t , i18n} = useTranslation();

  const handleLangChange = (lang) => {
    setSelectedLang(lang.label);
    setDropdownOpen(false);
    i18n.changeLanguage(lang.code); 
  };
  
  return (
    <>
    <header className='w-full h-auto'>
      <nav className=' bg-gray-900 shadow fixed w-full left-0 z-50 h-16 transition-all duration-300'>
        <div className='container mx-auto px-2'>
            <div className='flex justify-between items-center h-16'>
            <a href="/" className="w-14 h-14">
            <img src="https://www.ifly.com.uz/assets/logo-BPA5zOgc.png" className="w-full " alt="site logo"/>
            </a>
            <ul className='hidden lg:flex xl:flex 2xl:flex items-center xl:w-[700px] justify-end gap-8'>
                <li>
                <a href="#tours" className="navbar-item hover:text-white/50 text-zinc-100 font-medium text-[22px] duration-500 dark:text-white">{t('header.ekskursiyalar')}</a>
                </li>
                <li>
                <a href="#cite" className="navbar-item hover:text-white/50 text-zinc-100 font-medium text-[22px] duration-500 dark:text-white">{t('header.shahar')}</a>
                </li>
                <li>
                <a href="#about" className="navbar-item hover:text-white/50 text-zinc-100 font-medium text-[22px] duration-500 dark:text-white">{t('header.haqida')}</a>
                </li>
                <li>
                <button onClick={openModal} className="navbar-item hover:text-white/50 text-zinc-100 font-medium text-[22px] duration-500 dark:text-white">{t('header.aloqaga chiqish')}</button>
                </li>
            </ul>
            <div className='flex justify-between items-center gap-5'>
            <ol className='hidden item-center gap-5 justify-between sm:hidden md:flex '>
            <li>
            <a href="https://www.facebook.com" target="_blink" className="hover:text-white/50 dark:hover:text-orange-500 text-white duration-500 transition-all ease-linear "><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" className="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg></a>
            </li>
            <li>
            <a href="https://www.twitter.com" target="_blink" className="hover:text-white/50 dark:hover:text-orange-500 text-white duration-500 transition-all ease-linear "><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg></a>
            </li>
            <li>
            <a href="https://www.instagram.com/ifly.com.uz/" target="_blink" className="hover:text-white/50 dark:hover:text-orange-500 text-white duration-500 transition-all ease-linear "><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg></a>
            </li>
            <li>
            <a href="https://www.linkedin.com" target="_blink" className="hover:text-white/50 dark:hover:text-orange-500 text-white duration-500 transition-all ease-linear "><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg></a>
            </li>
            <li>
            <a href="https://www.youtube.com" target="_blink" className="hover:text-white/50 dark:hover:text-orange-500 text-white duration-500 transition-all ease-linear "><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg></a>
            </li>
        </ol>
        <div className='relative inline-block text-left'>
   
            <button
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              className="flex cursor-pointer items-center  text-white px-4 py-2 text-sm font-medium bg-gray-900 border-gray-300 rounded-md"
            >
              <span className={`fi fi-${selectedLang.toLowerCase()} mr-2`} />
              {selectedLang}
            </button>

            {isDropdownOpen && (
              <ul className="absolute right-0 mt-2 w-32 bg-white border border-gray-300 rounded-md shadow-lg dark:bg-gray-800">
                {languages.map((lang) => (
                  <li
                    key={lang.code}
                    onClick={() => handleLangChange(lang)}
                    className="px-4 py-2 text-gray-700 hover:bg-gray-200 cursor-pointer dark:text-white dark:hover:bg-gray-700"
                  >
                    {lang.label}
                  </li>
                ))}
              </ul>
            )}
       
        </div>
        
        <button className='text-2xl p-2 rounded-md bg-white duration-500 text-white dark:bg-white dark:text-black'><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-orange-500 dark:text-orange-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 9c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 0 0 0-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"></path></svg></button>
        <button
  onClick={toggleMenu}
  className="block md:hidden text-xl p-2 rounded-md bg-white text-black focus:outline-none shadow-md duration-500"
>
  {isMenuOpen ? <FaTimes /> : <GiHamburgerMenu />}
</button>

        
            </div>
            </div>
        </div>
      </nav>
      <div className="relative border w-full h-auto" id="hero">
  <div className="relative h-screen w-full">
    <Swiper
      spaceBetween={30} 
      effect="fade"     
      autoplay={{
        delay: 2500,    
        disableOnInteraction: false, 
      }}
      pagination={{
        clickable: true, 
      }}
      modules={[Autoplay, EffectFade, Pagination]} 
      className="swiper-container h-screen"
    >
    
      

      <SwiperSlide>
        <div
          className="relative h-screen w-full bg-cover bg-center bg-[url('https://www.ifly.com.uz/assets/t-2-B47GAI8L.jpg')]"
        
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute z-10 flex flex-col items-center justify-center h-full w-full text-center text-white px-4 sm:px-6">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-4 sm:mb-6">
            {t('headers.yaponiya')}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8">
            {t('headers.title')}
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="relative h-screen w-full bg-cover bg-center bg-[url('https://www.ifly.com.uz/assets/i-1-BAh0CpFo.jpg')]"
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute z-10 flex flex-col items-center justify-center h-full w-full text-center text-white px-4 sm:px-6">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-4 sm:mb-6">
            {t('headers.oroldagi')}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8">
            {t('headers.orol')}
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="relative h-screen w-full bg-cover bg-center bg-[url('https://www.ifly.com.uz/assets/d-1-PHDy7vV9.jpg')]"
        
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute z-10 flex flex-col items-center justify-center h-full w-full text-center text-white px-4 sm:px-6">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-4 sm:mb-6">
            {t('headers.dubay')}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8">
            {t('headers.text')}
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="relative h-screen w-full bg-cover bg-center bg-[url('https://www.ifly.com.uz/assets/los-1-Y9BbMaY4.jpg')]"
        
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute z-10 flex flex-col items-center justify-center h-full w-full text-center text-white px-4 sm:px-6">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-4 sm:mb-6">
            {t('headers.malakali')}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8">
            {t('headers.text2')}
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="relative h-screen w-full bg-cover bg-center bg-[url('https://www.ifly.com.uz/assets/t-1-B6QgCYK4.jpg')]"
        
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute z-10 flex flex-col items-center justify-center h-full w-full text-center text-white px-4 sm:px-6">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-4 sm:mb-6">
            {t('headers.tropik')}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8">
            {t('headers.chiroyli')}
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="relative h-screen w-full bg-cover bg-center bg-[url('https://www.ifly.com.uz/assets/tur-3-CB-g59cj.jpg')]"
        
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute z-10 flex flex-col items-center justify-center h-full w-full text-center text-white px-4 sm:px-6">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-4 sm:mb-6">
            {t('headers.turkiya')}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8">
            {t('headers.text3')}
            </p>
          </div>
        </div>
      </SwiperSlide>

      
    </Swiper>
  </div>
  <div className='container mx-auto px-5 py-10'>
  <div className='grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
    <div className='bg-white dark:bg-gray-800 dark:text-white p-6 rounded-xl shadow-lg border w-full'>
      <h3 className="text-xl font-semibold mb-4">{t('malumot.plaj')}</h3>
      <p className="text-zinc-400 dark:text-zinc-400">{t('malumot.title')}</p>
    </div>
    <div className='bg-white dark:bg-gray-800 dark:text-white p-6 rounded-xl shadow-lg border w-full backdrop-blur-xl'>
      <h3 className="text-xl font-semibold mb-4">{t("malumot.tog'")}</h3>
      <p className="text-zinc-400 dark:text-zinc-400">{t('malumot.chiqish')} </p>
    </div>
    <div className='bg-white dark:bg-gray-800 dark:text-white p-6 rounded-xl shadow-lg border w-full backdrop-blur-xl'>
      <h3 className="text-xl font-semibold mb-4">{t('malumot.shahar')}</h3>
      <p className="text-zinc-400 dark:text-zinc-400">{t('malumot.chiqish')}</p>
    </div>
  </div>
</div>

</div>

<ContactModal isOpen={modalOpen} onClose={closeModal} />



    </header>
    {isMenuOpen && (
  <div className="fixed inset-0 z-40 ">
    <div className="fixed top-0 left-0 h-full w-3/4 max-w-xs  bg-gray-900 p-6 shadow-lg animate-slide-in-left z-50">
      <ul className="flex flex-col text-white gap-6 text-lg mt-8">
        <li><a href="#tours" onClick={toggleMenu}>{t('header.ekskursiyalar')}</a></li>
        <li><a href="#cite" onClick={toggleMenu}>{t('header.shahar')}</a></li>
        <li><a href="#about" onClick={toggleMenu}>{t('header.haqida')}</a></li>
        <li>
          <button onClick={() => {
                    openModal();
                    toggleMenu();
                  }} className="text-blue-600 font-semibold">
            {t('header.aloqaga chiqish')}
          </button>
        </li>
      </ul>
    </div>
  </div>
)}

    </>
  )
}

export default Header