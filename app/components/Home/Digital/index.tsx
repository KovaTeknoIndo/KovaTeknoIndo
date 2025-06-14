import Image from "next/image";
import Link from "next/link";

const Digital = () => {
  return (
    <section className="bg-center bg-cover bg-blueprimary bg-digital">
      <div className="relative mx-auto max-w-7xl px-4 my-20 pb-[120px] lg:px-8">
        <div className="pt-24 lg:pl-24">
          <h3
            data-aos="fade-down"
            className="mb-5 text-xl font-normal tracking-widest text-center text-white md:text-left"
          >
            SIAPA KAMI
          </h3>
          <h4
            data-aos="fade-zoom-in"
            className="text-center md:text-left text-3xl lg:text-[55px] lg:leading-[64px] mb-10 font-bold text-white"
          >
            Kami membangun website modern dan cepat untuk mengembangkan
            bisnismu.
          </h4>
          <div
            data-aos="fade-right"
            className="flex flex-col items-center gap-5 md:flex-row md:items-start"
          >
            <Link
              href="#services-section"
              className="w-full px-6 py-3 text-lg font-semibold text-center text-white transition duration-300 rounded-full md:w-auto md:text-xl bg-orangecustom hover:bg-orangehover md:py-4 md:px-12"
            >
              Mulai Sekarang
            </Link>
            <Link
              href="https://wa.link/r7eklb"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto text-white text-lg md:text-xl font-semibold border border-orangecustom hover:text-[#a2a2a2] transition duration-300 py-3 md:py-4 px-6 md:px-12 rounded-full text-center"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Digital;
