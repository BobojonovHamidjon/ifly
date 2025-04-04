import React from "react";

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose} 
    >
      <div
        className="bg-white p-6 rounded-2xl w-[450px] shadow-2xl relative"
        onClick={(e) => e.stopPropagation()} 
      >

        <button
          className="absolute top-4 right-4 text-black text-2xl font-bold bg-orange-500 w-10 h-10 flex items-center justify-center rounded-[6px]"
          onClick={onClose}
          aria-label="Close Modal"
        >
          ✖
        </button>

      
        <h2 className="text-3xl font-bold text-center mb-6 text-black">
          Send a Message!
        </h2>

        <h3 className="text-black">Full Name</h3>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <h3 className="text-black">Email Address</h3>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <h3 className="text-black">Subject</h3>
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <h3 className="text-black">Your massages</h3>
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-orange-600 text-white p-3 rounded-lg text-lg font-semibold hover:bg-orange-700 transition duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
