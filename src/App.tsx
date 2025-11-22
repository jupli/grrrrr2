import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home'; // Path remains relative as components will also be in src/
import About from './components/About'; // Path remains relative as components will also be in src/
import Contact from './components/Contact'; // Path remains relative as components will also be in src/

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Navigation Bar */}
      <nav className="bg-gray-800 p-4 shadow-md sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-white text-2xl font-bold hover:text-gray-300 transition-colors">
            My Website
          </Link>
          <div className="flex space-x-4">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors text-lg">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors text-lg">
              About
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-lg">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow container mx-auto p-4 md:p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 p-4 text-white text-center mt-auto">
        <div className="container mx-auto">
          &copy; {new Date().getFullYear()} My Website. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;