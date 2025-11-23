import React from 'react';

const About: React.FC = () => {
  return (
    <div className="flex flex-col">
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Tentang Kami</h1>
              <p className="mt-4 text-gray-700 text-lg">Kami membangun solusi digital yang scalable, mudah dipakai, dan bernilai bisnis.</p>
              <p className="mt-3 text-gray-700">Dengan praktik modern, kami mempercepat perjalanan produk dari ide hingga peluncuran.</p>
            </div>
            <div>
              <img src="/images/about-mission.jpg" alt="Our mission" className="rounded-xl shadow-lg w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Nilai Kami</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-xl bg-white p-6 shadow">
              <h3 className="text-xl font-semibold text-gray-900">Kualitas</h3>
              <p className="mt-2 text-gray-600">Standar tinggi dalam setiap baris kode dan pengalaman pengguna.</p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow">
              <h3 className="text-xl font-semibold text-gray-900">Kecepatan</h3>
              <p className="mt-2 text-gray-600">Proses efisien untuk siklus pengembangan yang cepat.</p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow">
              <h3 className="text-xl font-semibold text-gray-900">Keamanan</h3>
              <p className="mt-2 text-gray-600">Perlindungan data dan privasi sebagai prioritas utama.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Tim Inti</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: 'Raka', role: 'Backend Engineer', img: '/images/performance.jpg' },
              { name: 'Dina', role: 'Frontend Engineer', img: '/images/design.jpg' },
              { name: 'Bayu', role: 'Product Designer', img: '/images/hero.jpg' },
            ].map((m) => (
              <div key={m.name} className="rounded-xl bg-white p-6 shadow text-center">
                <img src={m.img} alt={m.name} className="mx-auto h-24 w-24 rounded-full object-cover shadow" />
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{m.name}</h3>
                <p className="text-gray-600">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
