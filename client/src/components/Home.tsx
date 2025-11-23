import React from "react";
import { MemoryRouter as Router, Routes, Route, Link } from "react-router-dom";

// --- INLINE ICONS (Pengganti Lucide-React agar tidak error) ---
const Zap = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
);
const Shield = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
);
const Layout = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
);
const ArrowRight = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
);
const ChevronRight = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="9 18 15 12 9 6"/></svg>
);

// Halaman Home
const Home = () => {
  return (
    <div className="flex flex-col font-sans">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[70vh] flex items-center justify-center text-white overflow-hidden bg-gray-900">
        
        {/* Background Image dengan Fallback & Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-blue-900/80 to-purple-900/80"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-10">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              Solusi Digital
              <span className="block bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent mt-2 pb-2">
                Masa Depan
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Kami membangun aplikasi <span className="font-semibold text-white">cepat, aman, dan elegan</span> — 
              standar kelas dunia untuk bisnis Anda.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/about"
                className="group px-8 py-3 rounded-full bg-white text-blue-700 font-bold shadow-lg hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Tentang Kami
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 rounded-full border border-white/30 text-white font-semibold hover:bg-white/10 backdrop-blur-sm transition duration-300"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase">Keunggulan Kami</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Kenapa Memilih Kami?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kombinasi performa tinggi, keamanan terdepan, dan desain modern.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8 text-white" />,
                color: "bg-blue-500",
                title: "Performa Tinggi",
                desc: "Arsitektur cepat untuk aplikasi scalable dan responsif dengan loading time teroptimasi."
              },
              {
                icon: <Shield className="w-8 h-8 text-white" />,
                color: "bg-indigo-500",
                title: "Keamanan Terjamin",
                desc: "Enkripsi end-to-end dan standar keamanan modern untuk melindungi data bisnis Anda."
              },
              {
                icon: <Layout className="w-8 h-8 text-white" />,
                color: "bg-purple-500",
                title: "Desain Premium",
                desc: "UI elegan dan pengalaman pengguna (UX) yang halus dengan pendekatan design thinking."
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group p-8 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
            {/* Hiasan Background */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-purple-500 opacity-20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 text-center lg:text-left max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Siap Membangun Produk Digital?
              </h2>
              <p className="text-lg text-blue-100">
                Tim expert kami siap membantu mewujudkan ide bisnis Anda menjadi aplikasi modern.
              </p>
            </div>

            <div className="relative z-10 shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-blue-700 font-bold shadow-lg hover:shadow-white/20 hover:scale-105 transform transition duration-300"
              >
                Mulai Sekarang
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER SIMPLE */}
      <footer className="bg-gray-900 text-gray-400 py-12 text-center text-sm">
        <p>&copy; 2024 Digital Solutions. All rights reserved.</p>
      </footer>

    </div>
  );
};

// Komponen Placeholder untuk halaman lain
const PlaceholderPage = ({ title }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">{title}</h1>
      <Link to="/" className="text-blue-600 hover:underline">Kembali ke Home</Link>
    </div>
  </div>
);

// App Utama
const App = () => {
  return (
    <Router>
      <div className="antialiased text-gray-900 bg-white">
        {/* Navbar Sederhana agar navigasi jalan */}
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link to="/" className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              DigitalSol.
            </Link>
            <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
              <Link to="/" className="hover:text-blue-600 transition">Home</Link>
              <Link to="/about" className="hover:text-blue-600 transition">About</Link>
              <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<PlaceholderPage title="Tentang Kami" />} />
          <Route path="/contact" element={<PlaceholderPage title="Hubungi Kami" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
