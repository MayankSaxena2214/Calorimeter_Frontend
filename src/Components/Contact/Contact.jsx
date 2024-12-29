import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const navigate=useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    navigate("/")
  };

  return (
    <div className="container mx-auto p-6 w-1/2">
      <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p className="text-gray-700 mb-4">
          Have questions, feedback, or need assistance? We’d love to hear from you! Please fill out the form below or use our contact details to get in touch.
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-medium mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-medium mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your message"
              rows="5"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>

        {/* Contact Information */}
        <div className="mt-8 w-auto">
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p className="text-gray-700 mb-2">
            <strong>Email:</strong>{' '}
            <a href="mailto:support@calorimeter.com" className="text-blue-500">
              mayanksaxena2214@gmail.com
            </a>
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Phone:</strong> +91 9259525543
          </p>
          <p className="text-gray-700">
            <strong>Address:</strong> Madhav Puram, Meerut, Uttar Pradesh, India
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
