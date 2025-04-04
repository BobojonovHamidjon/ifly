import React, { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    firstPhoneNumber: "",
    secondPhoneNumber: "",
    fromCountry: "",
    toCountry: "",
    departureDate: "",
    returnDate: "",
    email: "",
    telegramUsername: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here (e.g., send data to API or log data)
    console.log(formData);
  };

  return (
    <div className="relative min-h-screen overflow-hidden ">
      <div className="Toastify"></div>
      <div className="relative z-10 flex items-center justify-center p-4 bg-opacity-50 min-h-screen">
        <div className="container mx-auto px-5">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-full">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
              Aviabiletlar bron qilish
            </h2>
            <form
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              onSubmit={handleSubmit}
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  To'liq ismingiz:
                </label>
                <input
                  type="text"
                  name="fullName"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                  placeholder="Ismingizni, otangiz ismini va familiyangizni kiriting"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Birinchi raqamingiz
                </label>
                <input
                  type="text"
                  name="firstPhoneNumber"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                  placeholder="Ikkinchi mobil raqamni kiriting"
                  value={formData.firstPhoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Ikkinchi raqamingiz:
                </label>
                <input
                  type="text"
                  name="secondPhoneNumber"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                  placeholder="Ikkinchi mobil raqamni kiriting"
                  value={formData.secondPhoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Qaysi davlatdan
                </label>
                <select
                  name="fromCountry"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                  value={formData.fromCountry}
                  onChange={handleChange}
                  required
                >
                  <option value="">Tanlang...</option>
                  <option value="Vyetnam">Vyetnam</option>
                  <option value="Taylant">Taylant</option>
                  <option value="Indaneziya">Indaneziya</option>
                  <option value="O'zbekiston">O'zbekiston</option>
                  <option value="Janubiy Koreya">Janubiy Koreya</option>
                  <option value="Filippin">Filippin</option>
                  <option value="Italiya">Italiya</option>
                  <option value="Xitoy">Xitoy</option>
                  <option value="Yaponiya">Yaponiya</option>
                  <option value="Rossiya">Rossiya</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Qaysi davlatga
                </label>
                <select
                  name="toCountry"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                  value={formData.toCountry}
                  onChange={handleChange}
                  required
                >
                  <option value="">Tanlang...</option>
                  <option value="Vyetnam">Vyetnam</option>
                  <option value="Taylant">Taylant</option>
                  <option value="Indaneziya">Indaneziya</option>
                  <option value="O'zbekiston">O'zbekiston</option>
                  <option value="Janubiy Koreya">Janubiy Koreya</option>
                  <option value="Filippin">Filippin</option>
                  <option value="Italiya">Italiya</option>
                  <option value="Xitoy">Xitoy</option>
                  <option value="Yaponiya">Yaponiya</option>
                  <option value="Rossiya">Rossiya</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Jo'nash sanasi
                </label>
                <input
                  type="date"
                  name="departureDate"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                  value={formData.departureDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Qaytish sanasi
                </label>
                <input
                  type="date"
                  name="returnDate"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                  value={formData.returnDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                  placeholder="Email manzilingizni kiriting"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Telegram Foydalanuvchi nomi
                </label>
                <input
                  type="text"
                  name="telegramUsername"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                  placeholder="Telegram foydalanuvchi nomingizni kiriting"
                  value={formData.telegramUsername}
                  onChange={handleChange}
                />
              </div>
              <div className="col-span-1 md:col-span-2 lg:col-span-3">
                <button
                  type="submit"
                  className="w-full p-4 bg-orange-500 dark:bg-gray-900 text-white font-bold rounded-lg hover:bg-orange-600 transition duration-300"
                >
                  Yuborish
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
