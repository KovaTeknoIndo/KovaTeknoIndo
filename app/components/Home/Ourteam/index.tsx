import Image from "next/image";

const Index = () => {
  return (
    <section className="relative px-4 mx-auto mt-20 max-w-7xl lg:pt-20 lg:pb-24 lg:px-8">
      {/* <h2
        data-aos="fade-down"
        className="text-4xl font-bold text-center lg:text-65xl text-blueprimary"
      ></h2> */}
      <h4
        data-aos="fade-down"
        className="text-center text-4xl lg:text-65xl lg:leading-[80px] pt-5 font-bold text-blueprimary"
      >
        Tim kami percaya kamu pantas <br className="hidden lg:block" />{" "}
        mendapatkan yang terbaik.
      </h4>
      <h3
        data-aos="fade-down"
        className="text-[16px] md:text-2xl font-medium text-center pt-4 md:pt-10 opacity-50"
      >
        Kami berkomitmen memberikan solusi digital <br />
        yang efisien, modern, dan sesuai kebutuhanmu.
      </h3>
      <div data-aos="zoom-in" className="grid grid-cols-1 py-9 md:mt-16">
        <Image
          src="/images/team/teamimg.webp"
          alt="gambar-kantor"
          className="rounded-2xl"
          height={684}
          width={1296}
        />
      </div>
    </section>
  );
};

export default Index;
