import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

const Aboutus = () => {
  return (
    <section id="aboutus-section" className="bg-lightgrey">
      <div className="mx-auto max-w-7xl px-4 py-20 lg:pt-[120px] lg:px-10 relative">
        <Image
          src="/images/aboutus/dots.svg"
          width={100}
          height={100}
          alt="dots-image"
          className="absolute bottom-1 -left-20"
        />
        <h3 className="text-center text-orangecustom text-xl tracking-widest">
          ABOUT US
        </h3>
        <h4 className="text-center text-4xl lg:text-65xl font-bold text-blueprimary">
          Know more about us.
        </h4>
        <div className="py-[30px] md:py-[60px]">
          <p className="text-center text-[18px] md:text-[26px] font-medium text-[#454444]">
            We are a software agency focused on building modern landing pages,
            websites, and dashboards to help businesses present themselves more
            professionally in the digital space. Founded by developers with
            real-world experience through personal and freelance projects, we’ve
            built everything from information systems and simple mobile apps to
            clean and responsive portfolio websites. We believe that every
            business — big or small — deserves digital solutions that not only
            look great, but are also lightweight, fast, and easy to use. With a
            clean design approach, optimal performance, and open communication,
            we’re here to be your trusted digital partner.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
