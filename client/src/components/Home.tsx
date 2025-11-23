import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">

      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center text-white overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/80 to-purple-900/90 z-0"></div>
        <img
          src="/images/hero.svg"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40"
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Solusi Digital
              <span className="block bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent mt-2">
                Modern
              </span>
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Kami membangun aplikasi <span className="font-semibold text-white">cepat, aman, dan elegan</span> — 
              dengan standar kelas dunia untuk bisnis masa kini
            </p>

            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/about"
                className="px-8 py-4 rounded-xl bg-white text-blue-700 font-semibold shadow-lg hover:bg-blue-50 hover:scale-105 transform transition duration-300"
              >
                Tentang Kami
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 backdrop-blur-sm transition duration-300"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Kenapa Memilih Kami?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kami menggabungkan performa tinggi, keamanan terdepan, dan desain modern 
              dalam setiap solusi digital
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "/images/gamb1.jpg",
                title: "Performa Tinggi",
                desc: "Arsitektur cepat untuk aplikasi scalable dan responsif dengan loading time teroptimasi"
              },
              {
                icon: "/images/gamb2.jpg",
                title: "Keamanan Terjamin",
                desc: "Menggunakan praktik keamanan modern dan enkripsi kuat untuk melindungi data bisnis Anda"
              },
              {
                icon: "/images/gamb3.jpg",
                title: "Desain Premium",
                desc: "UI elegan dan pengalaman pengguna yang halus dengan pendekatan design thinking"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              >
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1 group-hover:scale-110 transition duration-300">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-3xl bg-gradient-to-r from-blue-700 to-purple-700 text-white p-12 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-white rounded-full"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white rounded-full"></div>
            </div>
            
            <div className="relative z-10 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Siap Membangun Produk Digital Terbaik?
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl">
                Tim expert kami siap membantu mewujudkan ide bisnis Anda menjadi 
                aplikasi modern yang powerful dan user-friendly
              </p>
            </div>

            <div className="relative z-10">
              <Link
                to="/contact"
                className="px-10 py-5 rounded-xl bg-white text-blue-700 font-bold text-lg shadow-2xl hover:bg-blue-50 hover:scale-105 transform transition duration-300 inline-flex items-center gap-2"
              >
                Mulai Proyek Anda
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;