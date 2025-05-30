import { FaTimes, FaWhatsapp, FaInstagram } from "react-icons/fa";

interface ContactModalProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ showModal, setShowModal }) => {
  return (
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
  );
};

export default ContactModal;
