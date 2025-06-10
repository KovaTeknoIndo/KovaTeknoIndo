"use client";

import Image from "next/image";
import "glightbox/dist/css/glightbox.min.css";
import { useEffect, useState } from "react";
import { Search, Link as LinkIcon } from "lucide-react";
import clsx from "clsx";
import Link from "next/link";
import { PortfolioCategory, portfolioItems } from "@/lib/Galery";

const categories = [
  { label: "All", value: "*" },
  { label: "App", value: "app" },
  { label: "Product", value: "product" },
  { label: "Branding", value: "branding" },
  { label: "Books", value: "books" },
];
const slugify = (text: string) => 
  text
    .toString()
    .normalize("NFKD") // untuk karakter non-ASCII
    .replace(/[\u0300-\u036f]/g, "") // hapus diakritik
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");

const PortfolioSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("*");

  useEffect(() => {
    import("glightbox").then(({ default: GLightbox }) => {
      const lightbox = GLightbox({
        selector: ".glightbox",
      });

      return () => {
        lightbox.destroy();
      };
    });
  }, []);

  const filteredItems =
    activeFilter === "*"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);


  return (
    <section
      id="services-section"
      className="relative mx-auto max-w-7xl px-4 lg:px-10 mt-28 lg:mt-40 pb-[120px]"
    >
      <div className="">
        <div
          className="flex gap-3 px-1 mb-10 overflow-x-auto scrollbar-hide"
          data-aos="fade-up"
        >
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveFilter(cat.value)}
              className={clsx(
                "px-4 md:px-5 py-2 md:py-3 rounded-full border text-sm md:text-[18px] font-medium transition",
                activeFilter === cat.value
                  ? "bg-orangecustom text-white border-orangecustom"
                  : "bg-white text-gray-800 border-gray-300 hover:bg-orange-100"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="relative w-full overflow-hidden transition duration-300 bg-white rounded-lg shadow-lg group"
            >
              <Image
                src={item.images[0]}
                alt={item.title}
                width={500}
                height={300}
                className="object-cover w-full h-64 transition-transform duration-500 transform group-hover:scale-110"
              />

              <span className="absolute px-3 py-1 text-xs font-medium text-white uppercase rounded-full shadow-md bg-orangecustom top-3 left-3">
                {item.category}
              </span>

              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white transition-all duration-500 translate-y-4 bg-black opacity-0 bg-opacity-60 group-hover:opacity-100 group-hover:translate-y-0">
                <h4 className="mb-2 text-xl font-semibold">{item.title}</h4>
                <p className="mb-4 text-sm">
                  Lorem ipsum, dolor sit amet consectetur
                </p>
                <div className="flex space-x-4">
                  <a
                    href={item.images[0]}
                    className="glightbox"
                    data-gallery={`portfolio-${index}`}
                  >
                    <Search className="w-5 h-5" />
                  </a>
                  <Link
                    href={`/galery/${item.slug}`}
                    className="transition hover:text-blue-400"
                  >
                    <LinkIcon className="w-6 h-6" />
                  </Link>
                </div>

                {/* Hidden additional images for lightbox gallery */}
                {item.images.slice(1).map((img, i) => (
                  <a
                    key={i}
                    href={img}
                    className="hidden glightbox"
                    data-gallery={`portfolio-${index}`}
                  ></a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
