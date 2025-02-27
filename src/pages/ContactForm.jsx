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
    <div className={`max-w-lg mx-auto p-6 rounded-lg shadow-md mt-10 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-500 text-black'}`}>
      <h2 className="text-2xl font-bold text-center mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full p-3 border rounded-lg ${darkMode ? 'border-white bg-gray-700 text-white' : 'border-black bg-white text-black'}`}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full p-3 border rounded-lg ${darkMode ? 'border-white bg-gray-700 text-white' : 'border-black bg-white text-black'}`}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className={`w-full p-3 border rounded-lg h-32 ${darkMode ? 'border-white bg-gray-700 text-white' : 'border-black bg-white text-black'}`}
          required
        />
        <button type="submit" className="w-full p-3 bg-red-500 text-white rounded-lg hover:bg-red-600">
          Send Message
        </button>
      </form>
    </div>
  );
}
