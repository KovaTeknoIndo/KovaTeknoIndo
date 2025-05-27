import Image from "next/image";

const Dedicated = () => {
  return (
    <section className="relative">
      <div className="px-4 mx-auto my-20 max-w-7xl sm:py-20 lg:px-8">
        <div className="relative">
          <Image
            src="/images/dedicated/spiral.png"
            height={272}
            width={686}
            alt="desain-spiral"
            className="absolute left-[-70px] md:left-[-150px] -z-10 top-[-60px] md:top-[-180px] rotate-12 w-[200px] lg:w-[686px]"
          />
          <h1
            data-aos="fade-down"
            className="text-center text-[26px] md:text-[40px] lg:text-[50px] font-bold text-blueprimary"
          >
            Hambatan Umum <br /> di Dunia Digital
          </h1>

          <div className="relative pt-[40px] md:pt-[80px] flex flex-col gap-12">
            <p
              data-aos="fade-left"
              className="flex items-center gap-2 md:gap-7 justify-end text-end text-[19px] md:text-[30px] font-medium text-orangecustom"
            >
              <Image
                src="/images/dedicated/failed.svg"
                alt="gagal"
                width={33}
                height={33}
                className="w-[20px] h-[20px] md:w-[38px] md:h-[38px]"
              />
              Website terlihat ketinggalan zaman <br />
              atau tidak responsif di perangkat mobile.
            </p>
            <p
              data-aos="fade-right"
              className="flex items-center gap-2 md:gap-7 justify-start text-start text-[20px] md:text-[30px] font-medium text-orangecustom"
            >
              Desain kurang menarik dan <br /> tidak mencerminkan identitas
              brand.
              <Image
                src="/images/dedicated/failed.svg"
                alt="gagal"
                width={33}
                height={33}
                className="w-[20px] h-[20px] md:w-[38px] md:h-[38px]"
              />
            </p>
            <p
              data-aos="fade-left"
              className="flex items-center gap-1 md:gap-7 justify-end text-end text-[20px] md:text-[30px] font-medium text-orangecustom"
            >
              <Image
                src="/images/dedicated/failed.svg"
                alt="gagal"
                width={33}
                height={33}
                className="w-[20px] h-[20px] md:w-[38px] md:h-[38px]"
              />
              Tidak tahu harus mulai dari mana.
            </p>
            <p
              data-aos="fade-right"
              className="flex items-center gap-3 md:gap-7 justify-start text-start text-[20px] md:text-[30px] font-medium text-orangecustom"
            >
              Sulit ditemukan di internet.
              <Image
                src="/images/dedicated/failed.svg"
                alt="gagal"
                width={33}
                height={33}
                className="w-[20px] h-[20px] md:w-[38px] md:h-[38px]"
              />
            </p>
          </div>

          {/* Solusi */}
          <div className="flex items-center justify-center mt-20">
            <h1
              data-aos="fade-down"
              className="text-center text-[26px] md:text-[50px] font-bold text-blueprimary relative inline-block before:content-[''] before:absolute before:w-[60px] before:h-[4px] before:bg-[#002f66] before:-top-5 before:left-1/2 before:-translate-x-1/2"
            >
              Solusi dari Kami
            </h1>
          </div>

          <div className="relative pt-[40px] md:pt-[80px] flex flex-col gap-10">
            <p
              data-aos="fade-left"
              className="flex items-center gap-3 md:gap-7 justify-end text-end text-[20px] md:text-[30px] font-medium text-solutiongreen"
            >
              <Image
                src="/images/dedicated/checklist.svg"
                alt="berhasil"
                width={33}
                height={33}
                className="w-[20px] h-[20px] md:w-[38px] md:h-[38px]"
              />
              Desain modern & responsif
            </p>
            <p
              data-aos="fade-right"
              className="flex items-center gap-3 md:gap-7 justify-start text-start text-[20px] md:text-[30px] font-medium text-solutiongreen"
            >
              Branding sesuai <br /> dengan identitas
              <Image
                src="/images/dedicated/checklist.svg"
                alt="berhasil"
                width={33}
                height={33}
                className="w-[20px] h-[20px] md:w-[38px] md:h-[38px]"
              />
            </p>
            <p
              data-aos="fade-left"
              className="flex items-center gap-3 md:gap-7 justify-end text-end text-[20px] md:text-[30px] font-medium text-solutiongreen"
            >
              <Image
                src="/images/dedicated/checklist.svg"
                alt="berhasil"
                width={33}
                height={33}
                className="w-[20px] h-[20px] md:w-[38px] md:h-[38px]"
              />
              Panduan dari awal hingga selesai
            </p>
            <p
              data-aos="fade-right"
              className="flex items-center gap-3 md:gap-7 justify-start text-start text-[20px] md:text-[30px] font-medium text-solutiongreen"
            >
              Mudah ditemukan di Google
              <Image
                src="/images/dedicated/checklist.svg"
                alt="berhasil"
                width={33}
                height={33}
                className="w-[20px] h-[20px] md:w-[38px] md:h-[38px]"
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dedicated;
