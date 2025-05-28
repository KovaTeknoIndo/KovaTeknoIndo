"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaWhatsapp, FaInstagram, FaTimes } from "react-icons/fa";

const Chat = () => {
  const [showModal, setShowModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // untuk animasi modal

  useEffect(() => {
    if (showModal) {
      setIsVisible(true);
      document.body.style.overflow = "hidden";
    } else if (isVisible) {
      // animasi fade out lalu sembunyikan modal setelah 300ms
      const timer = setTimeout(() => {
        setIsVisible(false);
        document.body.style.overflow = "";
      }, 300);

      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = "";
    }
  }, [showModal]);

  return (
    <>
      {/* Chat Button with Bubble */}
      <div
        className="fixed bottom-5 right-5 md:bottom-10 md:right-10 lg:bottom-7 lg:right-7 xl:bottom-10 xl:right-10  z-50 flex items-center space-x-2 sm:space-x-3 group"
        onMouseEnter={() => setShowModal(false)} // Hapus hover efek biar fokus ke animasi button aja
        onMouseLeave={() => {}}
      >
        {/* Bubble */}
        <div
          className={`transition-all duration-300 ease-in-out transform scale-95 group-hover:scale-100 bg-orangecustom text-white font-medium py-1.5 px-3 sm:py-2 sm:px-4 rounded-l-full rounded-br-full shadow-xl max-w-[70vw] sm:max-w-[240px] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto`}
        >
          Jangan ragu untuk konsultasi
        </div>

        {/* Chat Button */}
        <button
          className="w-14 h-14 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white rounded-full flex justify-center items-center
            animate-pulse-glow
            transition-shadow duration-300 ease-in-out
            hover:shadow-[0_0_15px_3px_rgba(38,125,255,0.7)]
            focus:shadow-[0_0_20px_4px_rgba(38,125,255,0.9)]
          "
          aria-label="Chat"
          style={{
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
          }}
          onClick={() => setShowModal(true)}
        >
          <div className="relative w-7 h-7 sm:w-6 sm:h-6 lg:w-7 lg:h-7">
            <Image
              src="/images/contact/send.svg"
              alt="Chat icon"
              fill
              className="object-contain"
              priority
            />
          </div>
        </button>
      </div>

      {/* Modal */}
      {isVisible && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm px-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className={`relative bg-white rounded-2xl shadow-2xl px-5 sm:px-8 pt-5 pb-10 w-full max-w-[90%] sm:max-w-sm max-h-[90vh] text-center overflow-y-auto
              transition duration-300
              ${showModal ? "animate-fade-in-up" : "animate-fade-out-down"}
            `}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Icon */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              <FaTimes size={20} />
            </button>

            <h2 className="text-base sm:text-lg font-semibold mb-4 text-gray-800 border-b border-black pb-4">
              Hubungi Kami
            </h2>

            <div className="mt-7 flex flex-col items-center gap-4">
              <a
                href="https://wa.link/r7eklb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 sm:gap-5 px-4 sm:px-7 py-2 bg-blueprimary text-white text-[18px] sm:text-[21px] rounded-full shadow hover:brightness-110 transition"
              >
                <FaWhatsapp size={24} />
                WhatsApp
              </a>

              <a
                href="https://www.instagram.com/kovatekno/profilecard/?igsh=MWR4Nm12M2Rmc3U2Zw=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 sm:gap-5 px-4 sm:px-7 py-2 bg-orangecustom text-white text-[18px] sm:text-[21px] rounded-full shadow hover:brightness-110 transition"
              >
                <FaInstagram size={24} />
                Instagram
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chat;
