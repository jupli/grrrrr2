import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-10">
      <section className="relative overflow-hidden rounded-2xl shadow-xl">
        <img
          src="/images/hero.svg"
          alt="Team collaboration"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative bg-gradient-to-r from-blue-900/70 via-blue-700/60 to-blue-500/50">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-24 text-white">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Bangun Produk Hebat Bersama Kami
            </h1>
            <p className="mt-4 max-w-2xl text-base md:text-lg text-blue-100">
              Solusi modern yang cepat, aman, dan elegan. Jelajahi profil kami dan temukan cara kami membantu bisnis Anda tumbuh.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/about" className="px-6 py-3 rounded-lg bg-white text-blue-700 font-semibold shadow hover:bg-blue-50 transition">
                Tentang Kami
              </Link>
              <Link to="/contact" className="px-6 py-3 rounded-lg bg-transparent ring-2 ring-white text-white font-semibold hover:bg-white/10 transition">
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group rounded-xl bg-white p-6 shadow hover:shadow-lg transition">
            <img
              src="/images/cards-performance.svg"
              alt="Performance"
              className="h-40 w-full rounded-lg object-cover"
            />
            <h3 className="mt-4 text-xl font-bold text-gray-900">Kinerja Cepat</h3>
            <p className="mt-2 text-gray-600">Arsitektur optimal untuk kecepatan dan skalabilitas aplikasi Anda.</p>
          </div>
          <div className="group rounded-xl bg-white p-6 shadow hover:shadow-lg transition">
            <img
              src="/images/cards-security.svg"
              alt="Security"
              className="h-40 w-full rounded-lg object-cover"
            />
            <h3 className="mt-4 text-xl font-bold text-gray-900">Keamanan Terdepan</h3>
            <p className="mt-2 text-gray-600">Praktik terbaik untuk melindungi data dan privasi pengguna.</p>
          </div>
          <div className="group rounded-xl bg-white p-6 shadow hover:shadow-lg transition">
            <img
              src="/images/cards-design.svg"
              alt="Design"
              className="h-40 w-full rounded-lg object-cover"
            />
            <h3 className="mt-4 text-xl font-bold text-gray-900">Desain Elegan</h3>
            <p className="mt-2 text-gray-600">UI ramah pengguna dengan estetika modern yang konsisten.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
