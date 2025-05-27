import Image from "next/image";

const Index = () => {
  return (
    <section className="relative mx-auto max-w-7xl px-4 mt-20 lg:pt-20 lg:pb-0 lg:px-8">
      <h2 className="text-center text-4xl lg:text-65xl lg:leading-[90px] font-bold text-blueprimary">
        Tim kami percaya kamu pantas <br className="hidden lg:block" />{" "}
        mendapatkan yang terbaik.
      </h2>
      <h3 className="text-[16px] md:text-2xl font-medium text-center pt-4 md:pt-10 opacity-50">
        Kami berkomitmen memberikan solusi digital <br />
        yang efisien, modern, dan sesuai kebutuhanmu.
      </h3>
      <div className="grid grid-cols-1 py-9 md:mt-16">
        <Image
          src="/images/team/teamimg.jpg"
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
