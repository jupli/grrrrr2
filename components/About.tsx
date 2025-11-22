import React from 'react';

const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 mb-6">
        About Us
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl">
        <div className="md:order-2">
          <img
            src="https://picsum.photos/600/400"
            alt="About Us Image"
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
        </div>
        <div className="text-gray-700 text-lg md:text-xl md:order-1 space-y-4">
          <p>
            This application demonstrates how to build a multi-page user interface using React with client-side routing, styled elegantly with Tailwind CSS. Our goal is to provide a clean, responsive, and functional web experience.
          </p>
          <p>
            We leverage modern frontend technologies to create intuitive and dynamic applications that look great on any device, from mobile phones to large desktop screens.
          </p>
          <p>
            Thank you for visiting! Feel free to explore the other sections of our site.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
