import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section
      className="px-6 mx-auto my-10 max-w-7xl lg:py-10 lg:px-8"
      id="home"
    >
      <div className="relative flex flex-col my-16 pt-7 lg:pt-0 xl:pt-6 lg:flex-row">
        {/* KOLOM 1 */}

        <div className="mx-auto sm:mx-0 lg:pt-[26px]">
          <div className="py-3 text-start">
            <span className="text-blueprimary bg-[#ff850239] py-2 lg:py-2 px-5 lg:px-5 text-[15px] lg:text-[19px] font-bold rounded-full tracking-wider">
              Software Agency
            </span>
          </div>
          <div className="py-2">
            <h1 className="text-[37px] lg:text-80xl font-bold text-darkpurple leading-[50px] ">
              Siap mewujudkan <br className="hidden lg:block" /> ide-ide Anda.
            </h1>
          </div>

          <div
            data-aos="zoom-in"
            className="flex gap-2 my-6 text-center lg:my-7 lg:text-start lg:gap-5"
          >
            <Link
              href="#services-section"
              className="py-2 lg:py-4 px-[14px] lg:px-[40px] bg-blueprimary text-[14px] lg:text-[23px] text-white rounded-full flex items-center gap-2 lg:gap-4 hover:bg-bluehover transition ease-in-out duration-300"
            >
              <Image
                src="/images/banner/arrow.svg"
                alt="ikon panah"
                width={33}
                height={33}
                className="w-[20px] h-[20px] lg:w-[33px] lg:h-[33px]"
              />
              Mulai Sekarang
            </Link>

            <Link
              href="https://wa.link/r7eklb"
              target="_blank"
              className="py-2 lg:py-4 px-[14px] lg:px-[40px] border border-orangecustom font-semibold text-[14px] lg:text-[23px] text-orangecustom hover:bg-[#e5e5e5] transition ease-in-out duration-300 rounded-full flex items-center gap-2 lg:gap-4"
            >
              <Image
                src="/images/banner/whatsappIcon.svg"
                alt="ikon whatsapp"
                width={33}
                height={33}
                className="w-[20px] h-[20px] lg:w-[33px] lg:h-[33px]"
              />
              Hubungi Kami
            </Link>
          </div>
        </div>

        {/* KOLOM 2 */}

        <div className="lg:-m-24 lg:pt-[100px] lg:absolute right-[50px] lg:right-[80px] xl:right-[50px] top-0 flex justify-center items-center">
          <Image
            src="/images/banner/banner.webp"
            alt="gambar hero"
            width={560}
            height={542}
            className="w-full md:w-[500px] lg:w-[490px] xl:w-[560px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
