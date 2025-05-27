import Image from "next/image";

const Dedicated = () => {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 my-20 sm:py-20 lg:px-8">
        <div className="relative">
          <Image
            src="/images/dedicated/spiral.png"
            height={272}
            width={686}
            alt="spiral-design"
            className="absolute left-[-70px] md:left-[-150px]  -z-10 top-[-60px] md:top-[-180px] rotate-12 w-[200px] lg:w-[686px]"
          />
          <h1 className="text-center text-[26px] md:text-[50px] font-bold text-blueprimary">
            Common Barriers in <br /> the Digital World{" "}
          </h1>
          <div className="relative pt-[40px] md:pt-[80px] flex flex-col gap-10">
            <p className="flex items-center gap-3 md:gap-10 justify-end text-end text-[18px] md:text-[35px] font-medium text-orangecustom">
              <Image
                src="/images/Dedicated/failed.svg"
                alt="fail"
                width={33}
                height={33}
                className="w-[20px] h-[20px] md:w-[38px] md:h-[38px]"
              />
              The website looks outdated or <br />
              isn’t mobile responsive.
            </p>
            <p className=" flex items-center gap-3 md:gap-10 justify-start text-start text-[18px] md:text-[35px] font-medium text-orangecustom">
              The design is unattractive and <br /> doesn’t reflect the brand
              identity.
              <Image
                src="/images/Dedicated/failed.svg"
                alt="fail"
                width={33}
                height={33}
                className="w-[20px] h-[20px] md:w-[38px] md:h-[38px]"
              />
            </p>
            <p className="flex items-center gap-3 md:gap-10 justify-end text-end text-[18px] md:text-[35px] font-medium text-orangecustom">
              <Image
                src="/images/Dedicated/failed.svg"
                alt="fail"
                width={33}
                height={33}
                className="w-[20px] h-[20px] md:w-[38px] md:h-[38px]"
              />
              Don’t know where to start.
            </p>
            <p className=" flex items-center gap-3 md:gap-10 justify-start text-start text-[18px] md:text-[35px] font-medium text-orangecustom">
              Hard to be found online.
              <Image
                src="/images/Dedicated/failed.svg"
                alt="fail"
                width={33}
                height={33}
                className="w-[20px] h-[20px] md:w-[38px] md:h-[38px]"
              />
            </p>
          </div>

          {/* solusi */}
          <div className="mt-20 flex items-center justify-center">
            <h1 className="text-center text-[26px] md:text-[50px] font-bold text-blueprimary relative inline-block before:content-[''] before:absolute before:w-[60px] before:h-[4px] before:bg-[#002f66] before:-top-5 before:left-1/2 before:-translate-x-1/2">
              How We Help
            </h1>
          </div>

          <div className="relative pt-[40px] md:pt-[80px] flex flex-col gap-10">
            <p className="flex items-center gap-3 md:gap-10 justify-end text-end text-[18px] md:text-[35px] font-medium text-solutiongreen">
              <Image
                src="/images/Dedicated/checklist.svg"
                alt="fail"
                width={33}
                height={33}
                className="w-[20px] h-[20px] md:w-[38px] md:h-[38px]"
              />
              Modern & responsif design
            </p>
            <p className=" flex items-center gap-3 md:gap-10 justify-start text-start text-[18px] md:text-[35px] font-medium text-solutiongreen">
              Branding in accordance <br /> with identity
              <Image
                src="/images/Dedicated/checklist.svg"
                alt="fail"
                width={33}
                height={33}
                className="w-[20px] h-[20px] md:w-[38px] md:h-[38px]"
              />
            </p>
            <p className="flex items-center gap-3 md:gap-10 justify-end text-end text-[18px] md:text-[35px] font-medium text-solutiongreen">
              <Image
                src="/images/Dedicated/checklist.svg"
                alt="fail"
                width={33}
                height={33}
                className="w-[20px] h-[20px] md:w-[38px] md:h-[38px]"
              />
              Guide from scratch
            </p>
            <p className=" flex items-center gap-3 md:gap-10 justify-start text-start text-[18px] md:text-[35px] font-medium text-solutiongreen">
              Easy to find on Google
              <Image
                src="/images/Dedicated/checklist.svg"
                alt="fail"
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
