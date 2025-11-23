import React from 'react';

const About: React.FC = () => {
  return (
    <div className="flex flex-col gap-10">
      <section className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-green-700">Tentang Kami</h1>
            <p className="mt-4 text-gray-700 text-lg">Kami membangun solusi digital yang scalable dan mudah dipakai.
            Fokus kami adalah kualitas, performa, dan keamanan.</p>
            <p className="mt-3 text-gray-700">Dengan praktik modern, kami membantu Anda mempercepat perjalanan produk dari ide menuju peluncuran.</p>
          </div>
          <div>
            <img
              src="/images/about-mission.svg"
              alt="Our mission"
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Tim Inti</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { name: 'Raka', role: 'Backend Engineer', img: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=600&auto=format&fit=crop' },
            { name: 'Dina', role: 'Frontend Engineer', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop' },
            { name: 'Bayu', role: 'Product Designer', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=600&auto=format&fit=crop' },
          ].map((m) => (
            <div key={m.name} className="rounded-xl bg-white p-6 shadow hover:shadow-lg transition text-center">
              <img src={m.img} alt={m.name} className="mx-auto h-28 w-28 rounded-full object-cover shadow" />
              <h3 className="mt-4 text-xl font-bold text-gray-900">{m.name}</h3>
              <p className="text-gray-600">{m.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
