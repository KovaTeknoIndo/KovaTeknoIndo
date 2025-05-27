import Image from "next/image";

const Digital = () => {
  return (
    <section className="bg-blueprimary bg-digital bg-cover bg-center">
      <div className="relative mx-auto max-w-7xl px-4 my-20 pb-[120px] lg:px-8">
        <div className="pt-24 lg:pl-24">
          <h3
            data-aos="fade-down"
            className="text-xl font-normal text-white mb-5 tracking-widest text-center md:text-left"
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
          <div className="flex flex-col md:flex-row items-center md:items-start gap-5">
            <a
              data-aos="fade-right"
              href="#services-section"
              className="w-full md:w-auto text-white text-lg md:text-xl font-semibold bg-orangecustom hover:bg-orangehover transition duration-300 py-3 md:py-4 px-6 md:px-12 rounded-full text-center"
            >
              Mulai Sekarang
            </a>
            <a
              data-aos="fade-right"
              href="https://wa.link/r7eklb"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto text-white text-lg md:text-xl font-semibold border border-orangecustom hover:text-[#a2a2a2] transition duration-300 py-3 md:py-4 px-6 md:px-12 rounded-full text-center"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Digital;
