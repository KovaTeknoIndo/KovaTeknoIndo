import Image from "next/image";

const Digital = () => {
  return (
    <div className="bg-blueprimary bg-digital lg:bg-cover lg:bg-center">
      <div className=" relative mx-auto max-w-7xl px-4 my-20 pb-[120px] lg:pb-30 lg:px-8 ">
        <div className="pt-24 lg:pl-24 ">
          <h3 className="text-xl font-normal text-white mb-5 tracking-widest text-center md:text-start">
            WHO WE ARE
          </h3>
          <h4 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-snug text-center md:text-start">
            We build modern, fast websites to grow your business.
          </h4>
          <div className=" text-center flex justify-start items-center md:text-start gap-5 flex-col md:flex-row lg:pb-20">
            <a
              href="#services-section"
              className="text-xl font-semibold text-white bg-orangecustom py-4 px-6 md:px-12 w-full md:w-[auto] hover:bg-orangehover transition duration-300 rounded-full"
            >
              Get started
            </a>
            <a
              href="#services-section"
              className="text-xl font-semibold text-white border border-orangecustom w-full md:w-[auto] py-4 px-6 md:px-12 rounded-full  transition duration-300 hover:text-[#a2a2a2]"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Digital;
