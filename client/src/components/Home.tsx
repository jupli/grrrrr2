import React from "react";
import { MemoryRouter as Router, Routes, Route, Link } from "react-router-dom";

// --- ICONS SVG (INLINE) ---
// Ukuran default icon di set kecil (w-10 h-10) agar ringan dan tajam.
const IconRocket = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-white" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
    <path d="M12 15l-3-3a22 22 0 0 1 2-12 22 22 0 0 1 12 2l-3 3"></path>
    <path d="M9.7 17L9 22l3-3 3 3-.7-5"></path>
  </svg>
);

const IconShield = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-white" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const IconLayout = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-white" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="3" y1="9" x2="21" y2="9"></line>
    <line x1="9" y1="21" x2="9" y2="9"></line>
  </svg>
);

// --- HALAMAN UTAMA ---
const Home = () => {
  return (
    <div className="flex flex-col font-sans text-gray-800 bg-white">

      {/* HERO SECTION 
          - min-h-[600px] menjamin tinggi tidak terlalu kecil di layar HP, 
          - h-[75vh] menjamin tidak terlalu tinggi (zoom) di layar laptop.
      */}
      <section className="relative min-h-[600px] h-[75vh] flex items-center justify-center overflow-hidden bg-slate-900">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
            alt="Office Background"
            className="w-full h-full object-cover opacity-30"
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/80 mix-blend-multiply"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center animate-fade-in-up">
          <div className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider text-blue-300 uppercase bg-blue-900/50 rounded-full border border-blue-700/50">
            Digital Agency Terpercaya
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight drop-shadow-2xl">
            Solusi Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Masa Depan
            </span>
          </h1>
          
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Transformasi bisnis Anda dengan teknologi aplikasi yang <span className="text-white font-semibold">cepat, aman, dan elegan</span>.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-500 hover:scale-105 transform transition duration-300 shadow-lg shadow-blue-900/50"
            >
              Mulai Sekarang
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 rounded-full border border-white/20 bg-white/5 text-white font-semibold hover:bg-white/10 backdrop-blur-sm transition duration-300"
            >
              Pelajari Kami
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Kenapa Memilih Kami?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kami menggabungkan keahlian teknis dengan desain premium untuk hasil terbaik.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Kartu Fitur 1 */}
            <div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 text-center">
              {/* Container Icon TERKUNCI UKURANNYA (w-16 h-16) */}
              <div className="w-16 h-16 mx-auto bg-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform duration-300 rotate-3 group-hover:rotate-6">
                <IconRocket />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Performa Tinggi</h3>
              <p className="text-gray-600 leading-relaxed">
                Aplikasi yang dimuat instan, memberikan pengalaman pengguna tanpa hambatan.
              </p>
            </div>

            {/* Kartu Fitur 2 */}
            <div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 text-center">
              <div className="w-16 h-16 mx-auto bg-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-200 group-hover:scale-110 transition-transform duration-300 -rotate-3 group-hover:-rotate-6">
                <IconShield />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Keamanan Data</h3>
              <p className="text-gray-600 leading-relaxed">
                Standar enkripsi kelas enterprise untuk melindungi aset digital paling berharga Anda.
              </p>
            </div>

            {/* Kartu Fitur 3 */}
            <div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 text-center">
              <div className="w-16 h-16 mx-auto bg-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-200 group-hover:scale-110 transition-transform duration-300 rotate-3 group-hover:rotate-6">
                <IconLayout />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">UI/UX Modern</h3>
              <p className="text-gray-600 leading-relaxed">
                Desain antarmuka yang intuitif, estetik, dan nyaman digunakan di berbagai perangkat.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-blue-700 to-indigo-800 rounded-[2.5rem] p-10 md:p-20 text-center text-white shadow-2xl relative overflow-hidden">
          {/* Elemen Dekorasi */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-white opacity-5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 opacity-20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Siap Mewujudkan Ide Anda?</h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
              Jangan biarkan kompetitor mendahului Anda. Diskusikan kebutuhan proyek Anda dengan tim ahli kami sekarang juga.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-700 font-bold text-lg px-10 py-4 rounded-full hover:bg-gray-100 hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold text-white mb-2">DigitalSol.</div>
            <p className="text-sm">Membangun masa depan digital.</p>
          </div>
          <div className="flex gap-8 text-sm font-medium">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <Link to="/about" className="hover:text-white transition">About</Link>
            <Link to="/contact" className="hover:text-white transition">Contact</Link>
          </div>
          <p className="text-xs text-slate-500">© 2024 Digital Solutions Inc.</p>
        </div>
      </footer>

    </div>
  );
};

// --- HALAMAN PENDUKUNG (Agar link tidak error) ---
const PagePlaceholder = ({ title }) => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center p-6">
    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6 text-2xl animate-bounce">
      ✨
    </div>
    <h1 className="text-4xl font-bold text-gray-800 mb-4">{title}</h1>
    <p className="text-gray-500 max-w-md mb-8">
      Halaman ini adalah demo untuk menunjukkan bahwa sistem routing React (SPA) berjalan dengan baik.
    </p>
    <Link to="/" className="text-blue-600 font-semibold hover:text-blue-800 hover:underline">
      &larr; Kembali ke Home
    </Link>
  </div>
);

// --- MAIN APP COMPONENT ---
const App = () => {
  return (
    <Router>
      <div className="antialiased bg-white min-h-screen">
        
        {/* Navbar Sticky */}
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link to="/" className="text-2xl font-extrabold text-blue-700 flex items-center gap-2">
              <span className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg block"></span>
              DigitalSol.
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 text-sm font-semibold text-gray-600">
              <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <Link to="/about" className="hover:text-blue-600 transition-colors">About</Link>
              <Link to="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
            </div>

            {/* Mobile Menu Button (Visual Only) */}
            <button className="md:hidden text-gray-600 p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
            </button>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<PagePlaceholder title="Tentang Kami" />} />
          <Route path="/contact" element={<PagePlaceholder title="Hubungi Kami" />} />
        </Routes>

      </div>
    </Router>
  );
};

export default App;