import axios from "axios";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import i18n from "../i18n";

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
  const { t , i18n} = useTranslation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = "7674202757:AAHdg5rN7rYzwGtvWzMH-yzOZvvJEDyUoyg";
    const chat_id = "5327836577";
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const message = `
🧾 *Yangi bron so'rovi!*
👤 Ism: ${formData.fullName}
📞 1-Tel: ${formData.firstPhoneNumber}
📞 2-Tel: ${formData.secondPhoneNumber}
📍 Qayerdan: ${formData.fromCountry}
📍 Qayerga: ${formData.toCountry}
🛫 Jo'nash: ${formData.departureDate}
🛬 Qaytish: ${formData.returnDate}
📧 Email: ${formData.email}
✈️ Telegram: ${formData.telegramUsername || "Kiritilmagan"}
    `;

    try {
      await axios.post(url, {
        chat_id,
        text: message,
        parse_mode: "Markdown",
      });

      toast.success("Ma'lumotlaringiz muvaffaqiyatli yuborildi!");

 
      setFormData({
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
    } catch (error) {
      toast.error("Xatolik yuz berdi! Iltimos, qaytadan urinib ko‘ring.");
      console.error("Telegramga yuborishda xatolik:", error);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-100">
 
      <div className="relative z-10 flex items-center justify-center p-4 min-h-screen">
        <div className="container mx-auto px-5">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-full">
            <h2 className="text-4xl font-bold text-center text-orange-500 mb-8">
              {t("contactSection.title")}
            </h2>

            <form
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              onSubmit={handleSubmit}
            >
             
              {[
                {
                  label: t("contactSection.subtitle"),
                  name: "fullName",
                  type: "text",
                  placeholder: t("contactSection.placeholder"),
                },
                {
                  label: t("contactSection.subtitle2"),
                  name: "firstPhoneNumber",
                  type: "text",
                  placeholder: t("contactSection.placeholder2"),
                },
                {
                  label: t("contactSection.subtitle3"),
                  name: "secondPhoneNumber",
                  type: "text",
                  placeholder: t("contactSection.placeholder3"),
                },
                {
                  label: t("contactSection.subtitle4"),
                  name: "departureDate",
                  type: "date",
                },
                {
                  label: t("contactSection.subtitle5"),
                  name: "returnDate",
                  type: "date",
                },
                {
                  label: t("contactSection.suptitle6"),
                  name: "email",
                  type: "email",
                  placeholder: t("contactSection.placeholder6"),
                },
                {
                  label: t("contactSection.suptitle7"),
                  name: "telegramUsername",
                  type: "text",
                  placeholder: t("contactSection.placeholder7"),
                },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required={field.name !== "telegramUsername"}
                  />
                </div>
              ))}

            
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("contactSection.title2")}
                </label>
                <select
                  name="fromCountry"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                  value={formData.fromCountry}
                  onChange={handleChange}
                  required
                >
                  <option value="">{t("contactSection.title4")}</option>
                  {[
                    t("contactSection.city"),
                    t("contactSection.city2"),
                    t("contactSection.city3"),
                    t("contactSection.city4"),
                    t("contactSection.city5"),
                    t("contactSection.city6"),
                    t("contactSection.city7"),
                    t("contactSection.city8"),
                    t("contactSection.city9"),
                    t("contactSection.city10"),
                  ].map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>

         
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("contactSection.title3")}
                </label>
                <select
                  name="toCountry"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                  value={formData.toCountry}
                  onChange={handleChange}
                  required
                >
                  <option value="">{t("contactSection.title4")}</option>
                  {[
                    t("contactSection.city"),
                    t("contactSection.city2"),
                    t("contactSection.city3"),
                    t("contactSection.city4"),
                    t("contactSection.city5"),
                    t("contactSection.city6"),
                    t("contactSection.city7"),
                    t("contactSection.city8"),
                    t("contactSection.city9"),
                    t("contactSection.city10"),
                  ].map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>

            
              <div className="col-span-1 md:col-span-2 lg:col-span-3">
                <button
                  type="submit"
                  className="w-full p-4 bg-orange-500 cursor-pointer text-white font-bold rounded-lg hover:bg-orange-600 transition duration-300"
                >
                  {t("contactSection.button")}
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
