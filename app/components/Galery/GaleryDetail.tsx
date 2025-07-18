"use client";

import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import type { PortfolioItem } from '@/lib/Galery';
import 'swiper/css';
import 'swiper/css/pagination';
import { capitalizeWords } from '@/utils/Capitalize';
import Link from 'next/link';

export default function GaleryDetail({
  category,
  type,
  title,
  url,
  page,
  description,
  images,
}: PortfolioItem) {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section
      id="portfolio-details"
      className="relative mx-auto max-w-7xl px-4 lg:px-10 mt-40 pb-[120px]"
    >
      <div className="" data-aos="fade-up" data-aos-delay="100">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {/* Swiper Slider */}
          <div className="lg:col-span-2">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              speed={600}
              loop={true}
              slidesPerView={1}
              className="overflow-hidden rounded"
            >
              {images.map((src, idx) => (
                <SwiperSlide key={`${src}-${idx}`}>
                  <Image
                    src={src}
                    alt={`Slide ${idx + 1}`}
                    width={800} // atau ukuran asli gambarnya
                    height={500}
                    className="object-cover w-full"
                    priority={idx === 0} // optimasi LCP
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Info & Description */}
          <div className="space-y-6">
            <div
              className="p-6 bg-white rounded shadow"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="mb-4 text-xl font-bold uppercase">
                Project Information
              </h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>
                  <strong>Category</strong>: {capitalizeWords(category)}
                </li>
                <li>
                  <strong>Type</strong>: {capitalizeWords(type)}
                </li>
                <li>
                  <strong>Jumlah Halaman</strong>: {page}
                </li>
                <li>
                  <strong>Demo</strong>:{" "}
                  <Link
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 underline break-words"
                  >
                    {url}
                  </Link>
                </li>
              </ul>
            </div>

            <div
              className="p-6 bg-white rounded shadow"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h2 className="mb-2 text-lg font-bold uppercase">{title}</h2>
              <p className="text-sm leading-relaxed text-gray-600">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
