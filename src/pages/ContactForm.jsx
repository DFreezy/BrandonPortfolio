import React, { useState, useContext } from "react";
import { ThemeContext } from '../context/ThemeContext';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const { darkMode } = useContext(ThemeContext); // Get darkMode from context

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! We’ll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className={`max-w-lg mx-auto p-8 rounded-xl shadow-lg transition-all duration-500 mt-20 mb-20
      ${darkMode ? 'bg-black text-white' : 'bg-gray-200 text-black'}`}>
      
      <h2 className="text-3xl font-extrabold text-center mb-6">Contact Me</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full p-4 rounded-lg border focus:outline-none focus:ring-2 transition-all duration-300
            ${darkMode ? 'border-gray-600 bg-gray-800 text-white focus:ring-red-500' : 'border-gray-400 bg-white text-black focus:ring-red-500'}`}
          required
        />
        
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full p-4 rounded-lg border focus:outline-none focus:ring-2 transition-all duration-300
            ${darkMode ? 'border-gray-600 bg-gray-800 text-white focus:ring-red-500' : 'border-gray-400 bg-white text-black focus:ring-red-500'}`}
          required
        />
        
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className={`w-full p-4 rounded-lg border focus:outline-none focus:ring-2 transition-all duration-300 h-36 resize-none
            ${darkMode ? 'border-gray-600 bg-gray-800 text-white focus:ring-red-500' : 'border-gray-400 bg-white text-black focus:ring-red-500'}`}
          required
        />
        
        <button 
          type="submit" 
          className="w-full p-4 bg-red-500 text-white text-lg font-semibold rounded-lg transition-all duration-300 
            hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
