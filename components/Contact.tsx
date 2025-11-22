import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-extrabold text-purple-700 mb-6">
        Contact Us
      </h1>
      <p className="text-lg md:text-xl text-gray-700 mb-8 text-center max-w-xl">
        We'd love to hear from you! Please feel free to reach out with any questions, feedback, or inquiries.
      </p>

      <div className="w-full space-y-6">
        {/* Contact Information */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Details</h2>
          <ul className="text-gray-700 space-y-2">
            <li><strong>Email:</strong> info@example.com</li>
            <li><strong>Phone:</strong> +1 (123) 456-7890</li>
            <li><strong>Address:</strong> 123 React Lane, Webville, USA</li>
          </ul>
        </div>

        {/* Simple Contact Form (Frontend only) */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Send Us a Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                placeholder="john.doe@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
