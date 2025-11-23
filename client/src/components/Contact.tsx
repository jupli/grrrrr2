import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col gap-10">
      <section className="relative overflow-hidden rounded-2xl shadow-xl">
        <img
          src="/images/contact-banner.jpg"
          alt="Get in touch"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative bg-gradient-to-r from-purple-900/70 via-purple-700/60 to-purple-500/50">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20 text-white">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Hubungi Kami</h1>
            <p className="mt-3 max-w-2xl text-purple-100">Kami siap membantu kebutuhan Anda. Kirim pesan atau gunakan kontak di bawah.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-xl font-bold text-gray-900">Email</h2>
          <p className="mt-2 text-gray-700">info@example.com</p>
        </div>
        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-xl font-bold text-gray-900">Telepon</h2>
          <p className="mt-2 text-gray-700">+1 (123) 456-7890</p>
        </div>
        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-xl font-bold text-gray-900">Alamat</h2>
          <p className="mt-2 text-gray-700">123 React Lane, Webville, USA</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-2xl font-bold text-gray-900">Kirim Pesan</h2>
          <form className="mt-4 space-y-4">
            <input type="text" placeholder="Nama Anda" className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" />
            <input type="email" placeholder="Email Anda" className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" />
            <textarea rows={5} placeholder="Pesan Anda" className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" />
            <button type="submit" className="w-full bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-purple-700 transition">Kirim</button>
          </form>
        </div>
        <div className="rounded-xl overflow-hidden shadow">
          <img
            src="/images/contact-office.jpg"
            alt="Office"
            className="h-full w-full object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default Contact;
