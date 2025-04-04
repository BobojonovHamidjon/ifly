// MenuModal.js
import React from 'react';

const MenuModal = ({ isOpen, closeModal }) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={closeModal}
    >
      <div
        className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()} // Modalga bosilganda faqat modal o'zida ishlasin
      >
        <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg w-4/5 md:w-1/3">
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 text-xl text-gray-500 hover:text-gray-800"
          >
            &times;
          </button>
          <ul className="flex flex-col gap-6 text-center">
            <li>
              <a
                href="#tours"
                className="text-xl text-gray-900 dark:text-white hover:text-orange-500"
              >
                Ekskursiyalar
              </a>
            </li>
            <li>
              <a
                href="#cite"
                className="text-xl text-gray-900 dark:text-white hover:text-orange-500"
              >
                Shahar
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-xl text-gray-900 dark:text-white hover:text-orange-500"
              >
                Haqida
              </a>
            </li>
            <li>
              <button
                onClick={closeModal}
                className="text-xl text-gray-900 dark:text-white hover:text-orange-500"
              >
                Aloqaga chiqish
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuModal;
