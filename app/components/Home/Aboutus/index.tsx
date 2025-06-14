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
          alt="gambar-titik"
          className="absolute bottom-1 -left-20"
        />
        <h3
          data-aos="fade-down"
          className="text-center text-orangecustom text-xl tracking-widest"
        >
          TENTANG KAMI
        </h3>
        <h4
          data-aos="fade-down"
          className="text-center text-4xl lg:text-65xl pt-5 font-bold text-blueprimary"
        >
          Kenali lebih <br className="block sm:hidden" /> tentang kami.
        </h4>
        <div className="py-[30px] lg:py-[60px]">
          <p
            data-aos="fade-down"
            className="text-center text-[18px] lg:text-[26px] font-medium text-[#454444]"
          >
            Kami adalah agensi perangkat lunak yang berfokus pada pembuatan
            landing page modern, website, dan dashboard untuk membantu bisnis
            tampil lebih profesional di dunia digital. Didirikan oleh para
            developer berpengalaman dari proyek pribadi maupun freelance, kami
            telah membangun berbagai sistem informasi, aplikasi mobile
            sederhana, hingga website portofolio yang bersih dan responsif. Kami
            percaya bahwa setiap bisnis — besar maupun kecil — berhak
            mendapatkan solusi digital yang tidak hanya menarik secara visual,
            tetapi juga ringan, cepat, dan mudah digunakan. Dengan pendekatan
            desain yang bersih, performa optimal, dan komunikasi terbuka, kami
            siap menjadi mitra digital terpercaya untuk Anda.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
