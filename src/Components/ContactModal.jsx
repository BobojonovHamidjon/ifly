import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";
import axios from "axios";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";




const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { t , i18n} = useTranslation();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = "7674202757:AAHdg5rN7rYzwGtvWzMH-yzOZvvJEDyUoyg";
    const chat_id = 5327836577;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const message = `
📩 Yangi bog'lanish so'rovi:
👤 Ismi: ${formData.name}
📧 Email: ${formData.email}
📝 Mavzu: ${formData.subject}
💬 Xabar: ${formData.message}
    `;

    try {
      await axios.post(url, {
        chat_id,
        text: message,
      });
      toast.success("So'rovingiz muvaffaqiyatli yuborildi!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      onClose();
    } catch (error) {
      toast.error("Xatolik yuz berdi, iltimos keyinroq urinib ko‘ring.");
      console.error("Telegramga yuborishda xatolik:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div
        className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md relative text-black"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white p-2 rounded-[6px] text-xl font-bold bg-amber-600"
        >
          <FaTimes />
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">{t("contact.title")}</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">{t("contact.name")}</label>
            <input
              type="text"
              name="name"
              placeholder={t("contact.placeholder1")}
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">{t("contact.email")}</label>
            <input
              type="email"
              name="email"
              placeholder={t("contact.placeholder2")}
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">{t("contact.subject")}</label>
            <input
              type="text"
              name="subject"
              placeholder={t("contact.placeholder3")}
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">{t("contact.message")}</label>
            <textarea
              name="message"
              placeholder={t("contact.placeholder4")}
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            {t("contact.send")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
