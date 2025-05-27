import Image from "next/image";

const index = () => {
  return (
    <div className="relative mx-auto max-w-7xl px-4 my-20 lg:pt-20 lg:pb-30 lg:px-8">
      <h2 className="text-4xl text-blueprimary md:text-65xl font-bold text-center">
        Our team belives you deserve <br className="hidden lg:block" /> only the
        best.
      </h2>
      <h3 className="text-[16px] md:text-2xl font-medium text-center pt-4 md:pt-10 opacity-50">
        We are committed to providing efficient, modern, and tailored <br />{" "}
        digital solutions.
      </h3>
      <div className="grid grid-cols-1 py-9 md:my-16">
        <Image
          src="/images/team/teamimg.jpg"
          alt="office-image"
          className="rounded-2xl"
          height={684}
          width={1296}
        />
      </div>
    </div>
  );
};

export default index;
