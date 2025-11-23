import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">

      {/* HERO SECTION */}
      <section className="relative h-[75vh] flex items-center justify-center text-white">
        <img 
          src="/images/hero.svg" 
          alt="Hero" 
          className="absolute inset-0 w-full h-full object-cover opacity-[0.65]" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/70 via-blue-900/50 to-blue-800/40"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            Solusi Digital Modern  
            <br />Untuk Bisnis Masa Kini
          </h1>

          <p className="mt-5 text-lg md:text-xl text-blue-100">
            Kami membangun aplikasi cepat, aman, dan elegan — dengan standar kelas dunia.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link 
              to="/about"
              className="px-6 py-3 rounded-xl bg-white text-blue-700 font-semibold shadow hover:bg-blue-50 transition"
            >
              Tentang Kami
            </Link>

            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl border border-white text-white font-semibold hover:bg-white/10 transition"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>


      {/* FEATURES SECTION */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
            Kenapa Memilih Kami?
          </h2>
          <p className="mt-3 text-center text-gray-600">
            Kami menggabungkan performa tinggi, keamanan, dan desain modern.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-14">

            <div className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition">
              <img src="/images/gamb1.jpg" className="h-20 mx-auto" />
              <h3 className="mt-6 text-xl font-semibold text-gray-900 text-center">
                Performa Tinggi
              </h3>
              <p className="mt-2 text-gray-600 text-center">
                Arsitektur cepat untuk aplikasi scalable dan responsif.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition">
              <img src="/images/gamb2.jpg" className="h-20 mx-auto" />
              <h3 className="mt-6 text-xl font-semibold text-gray-900 text-center">
                Keamanan Terjamin
              </h3>
              <p className="mt-2 text-gray-600 text-center">
                Menggunakan praktik keamanan modern dan enkripsi kuat.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition">
              <img src="/images/gamb3.jpg" className="h-20 mx-auto" />
              <h3 className="mt-6 text-xl font-semibold text-gray-900 text-center">
                Desain Premium
              </h3>
              <p className="mt-2 text-gray-600 text-center">
                UI elegan dan pengalaman pengguna yang halus.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* CTA SECTION */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-3xl bg-blue-700 text-white p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Siap membangun produk digital terbaik?
              </h2>
              <p className="mt-3 text-blue-100 text-lg">
                Tim kami siap membantu dari backend hingga UI modern.
              </p>
            </div>

            <Link 
              to="/contact"
              className="px-8 py-4 rounded-xl bg-white text-blue-700 font-semibold text-lg shadow hover:bg-blue-50 transition"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
