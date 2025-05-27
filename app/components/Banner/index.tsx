import Image from "next/image";

const Banner = () => {
  return (
    <section
      className="px-6 mx-auto my-10 max-w-7xl sm:py-10 md:px-8"
      id="home"
    >
      <div className="relative flex flex-col my-16 pt-7 md:pt-0 xl:pt-6 lg:flex-row">
        {/* KOLOM 1 */}

        <div className="mx-auto sm:mx-0 md:pt-[26px]">
          <div className="py-3 text-start">
            <span className="text-blueprimary bg-[#ff850239] py-2 md:py-3 px-5 md:px-6 text-[15px] md:text-[24px] font-bold rounded-full tracking-wider">
              Agensi Software
            </span>
          </div>
          <div className="py-2">
            <h1 className="text-[37px] md:text-80xl font-bold text-darkpurple leading-[50px] ">
              Siap mewujudkan <br className="hidden md:block" /> ide-ide Anda.
            </h1>
          </div>
          <div className="flex gap-2 my-6 text-center md:my-7 md:text-start md:gap-5">
            <a
              data-aos="zoom-in"
              href="#services-section"
              className="py-2 md:py-5 px-[14px] md:px-[60px] bg-blueprimary text-[14px] md:text-[23px] text-white rounded-full flex items-center gap-2 md:gap-4"
            >
              <Image
                src="/images/banner/arrow.svg"
                alt="ikon panah"
                width={33}
                height={33}
                className="w-[20px] h-[20px] md:w-[33px] md:h-[33px]"
              />
              Mulai Sekarang
            </a>

            <a
              data-aos="zoom-in"
              href="https://wa.link/r7eklb"
              target="_blank"
              className="py-2 md:py-5 px-[14px] md:px-[60px] border border-orangecustom font-semibold text-[14px] md:text-[23px] text-orangecustom rounded-full flex items-center gap-2 md:gap-4"
            >
              <Image
                src="/images/banner/whatsappIcon.svg"
                alt="ikon whatsapp"
                width={33}
                height={33}
                className="w-[20px] h-[20px] md:w-[33px] md:h-[33px]"
              />
              Hubungi Kami
            </a>
          </div>
        </div>

        {/* KOLOM 2 */}

        <div className="lg:-m-24 lg:pt-[100px] lg:absolute right-[50px] lg:right-[80px] xl:right-[50px] top-0">
          <Image
            src="/images/banner/banner.png"
            alt="gambar hero"
            width={560}
            height={542}
            className="w-full lg:w-[490px] xl:w-[560px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
