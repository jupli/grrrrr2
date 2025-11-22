import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg text-center min-h-[calc(100vh-200px)] md:min-h-[calc(100vh-250px)]">
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4 animate-bounce">
        Welcome to Our Website!
      </h1>
      <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-2xl">
        This is the homeR page of our simple React application, built with a focus on clean design and responsive user experience using Tailwind CSS.
      </p>
      <Link
        to="/about"
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105"
      >
        Learn More About Us
      </Link>
    </div>
  );
};

export default Home;
