"use client";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import Image from "next/image";

const names = [
  {
    heading: "Basic",
    price: 500000,
    user: "1–3 Halaman, Responsif",
    button: "Pesan Sekarang",
    profiles: "Domain + Hosting 1 Tahun",
    posts: "1x Revisi",
    templates: "",
    view: "",
    support: "",
    category: "monthly",
  },
  {
    heading: "Standard",
    price: 1500000,
    user: "5 Halaman, Desain Kustom",
    button: "Pesan Sekarang",
    profiles: "Integrasi Kontak WhatsApp",
    posts: "3x Revisi",
    templates: "",
    view: "",
    support: "",
    category: "monthly",
  },
  {
    heading: "Premium",
    price: 3000000,
    user: "Halaman Tak Terbatas",
    button: "Pesan Sekarang",
    profiles: "Integrasi Pembayaran",
    posts: "SEO Dasar",
    templates: "Panel Admin Sederhana",
    view: "Pemeliharaan 1 Bulan",
    support: "",
    category: "monthly",
  },
];

const Manage = () => {
  const [enabled, setEnabled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("monthly");

  const toggleEnabled = () => {
    setEnabled(!enabled);
    setSelectedCategory(enabled ? "monthly" : "yearly");
  };

  const filteredData = names.filter(
    (items) => items.category === selectedCategory
  );

  return (
    <section id="services-section">
      <div className="mx-auto max-w-7xl sm:py-20 lg:px-8 my-16 pt-20 md:pt-40">
        <h3
          data-aos="fade-down"
          className="text-center text-4xl lg:text-65xl lg:leading-[90px] font-bold text-blueprimary"
        >
          Kelola Semua Proyek Website Anda <br />
          Dalam Satu Tempat.
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 mx-5 gap-8">
          {filteredData.map((items, i) => (
            <div
              data-aos="fade-up"
              key={i}
              className={`manageTabs text-center p-10 border rounded-xl shadow-sm transition-transform duration-500 ease-in-out ${
                items.heading === "Premium"
                  ? "bg-blueprimary text-white"
                  : items.heading === "Standard"
                  ? "bg-white text-black border-gray-300"
                  : "text-black border-gray-300"
              } hover:scale-105`}
            >
              <h2
                className={`text-xl font-bold mb-5 ${
                  items.heading === "Premium"
                    ? "text-orangecustom"
                    : "text-darkgrey"
                }`}
              >
                {items.heading}
              </h2>

              <div className="mb-1 text-sm font-medium opacity-70">
                Mulai dari
              </div>
              <div className="mb-3">
                <span className="text-[40px] sm:text-5xl font-bold">
                  Rp{items.price.toLocaleString("id-ID")}
                </span>
              </div>

              <button
                className={`text-sm font-bold rounded-full py-4 px-12 mb-6 sm:mt-6 transition-all duration-300 ${
                  items.heading === "Premium"
                    ? "bg-orangecustom hover:bg-orangehover text-white"
                    : "text-blueprimary bg-transparent hover:bg-bluehover hover:text-white border-2 border-blueprimary"
                }`}
              >
                {items.button}
              </button>

              <hr
                className={`text-md font-medium mb-3 ${
                  items.heading === "Premium" ? "text-white" : "text-darkgrey"
                }`}
              />
              <h3
                className={`text-md font-medium mb-3 mt-6 ${
                  items.heading === "Premium" ? "text-white" : "text-darkgrey"
                }`}
              >
                {items.user}
              </h3>
              <h3
                className={`text-md font-medium mb-3 ${
                  items.heading === "Premium" ? "text-white" : "text-darkgrey"
                }`}
              >
                {items.profiles}
              </h3>
              <h3
                className={`text-md font-medium mb-3 ${
                  items.heading === "Premium" ? "text-white" : "text-darkgrey"
                }`}
              >
                {items.posts}
              </h3>
              {items.templates && (
                <h3
                  className={`text-md font-medium mb-3 ${
                    items.heading === "Premium" ? "text-white" : "text-darkgrey"
                  }`}
                >
                  {items.templates}
                </h3>
              )}
              {items.view && (
                <h3
                  className={`text-md font-medium ${
                    items.heading === "Premium" ? "text-white" : "text-darkgrey"
                  }`}
                >
                  {items.view}
                </h3>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Manage;
