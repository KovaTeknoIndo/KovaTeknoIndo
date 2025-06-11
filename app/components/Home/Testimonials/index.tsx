"use client";
// import Slider from "react-slick";
import React, { Component } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// CAROUSEL DATA

interface DataType {
  profession: string;
  comment: string;
  imgSrc: string;
  name: string;
}

const postData: DataType[] = [
  {
    name: "Rizky Pratama",
    profession: "CEO",
    comment:
      "Tim mereka sangat profesional dan responsif. Proyek kami diselesaikan tepat waktu dengan kualitas yang melebihi ekspektasi. Sangat direkomendasikan!",
    imgSrc: "/images/testimonial/avatar.webp",
  },
  {
    name: "Siti Lestari",
    profession: "Pendiri Startup Digital",
    comment:
      "Saya sangat puas dengan hasil kerjanya. Komunikasi lancar dan desain web yang dibuat sangat modern serta mobile-friendly.",
    imgSrc: "/images/testimonial/avatar.webp",
  },
  {
    name: "Andi Nugroho",
    profession: "Direktur Pemasaran",
    comment:
      "Kami bekerja sama dalam pembuatan dashboard internal. Mereka sangat memahami kebutuhan bisnis dan memberikan solusi yang efisien.",
    imgSrc: "/images/testimonial/avatar.webp",
  },
  {
    name: "Fitri Azzahra",
    profession: "Pemilik Studio Kreatif",
    comment:
      "Sangat senang bekerja dengan tim ini! Mereka fleksibel, cepat, dan penuh ide kreatif. Akan kembali untuk proyek selanjutnya.",
    imgSrc: "/images/testimonial/avatar.webp",
  },
  {
    name: "Budi Santoso",
    profession: "COO",
    comment:
      "Salah satu pengalaman kerja remote terbaik yang pernah saya alami. Mereka menjaga kualitas dan selalu terbuka untuk feedback.",
    imgSrc: "/images/testimonial/avatar.webp",
  },
  {
    name: "Nadia Ayu",
    profession: "Konsultan UI/UX",
    comment:
      "Desain UI yang diberikan sangat rapi dan sesuai prinsip UX. Mereka sangat detail dan terbuka untuk revisi.",
    imgSrc: "/images/testimonial/avatar.webp",
  },
];

// CAROUSEL SETTINGS

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      // centerMode: true,
      slidesToScroll: 1,
      arrows: false,
      autoplay: false,
      speed: 500,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
      ],
    };

    return (
      <section
        className="pt-10 pb-0 md:pt-20 lg:py-32"
        id="testimonial-section"
      >
        <div className="mx-auto max-w-7xl sm:py-4 lg:px-8 ">
          <div className="text-center">
            <h3
              data-aos="fade-down"
              className="my-3 text-4xl font-bold text-black sm:text-6xl"
            >
              Apa kata klien kami?
            </h3>
            <h3
              data-aos="fade-down"
              className="my-4 text-4xl font-bold text-black text-opacity-50 sm:text-6xl lg:mr-48"
            >
              Apa kata klien kami?
            </h3>
            <h3
              data-aos="fade-down"
              className="my-4 text-4xl font-bold text-black text-opacity-25 sm:text-6xl lg:-mr-32"
            >
              Apa kata klien kami?
            </h3>
          </div>

          {/* <Slider {...settings}>
            {postData.map((items, i) => (
              <div data-aos="fade-up" key={i} className="relative">
                <div className="p-10 m-3 my-20 bg-white border test-sha rounded-3xl">
                  <Image
                    src={items.imgSrc}
                    alt={items.imgSrc}
                    width={71}
                    height={71}
                    className="absolute inline-block m-auto test-pos"
                  />
                  <h4 className="my-4 text-base font-medium text-testColor">
                    {items.comment}
                  </h4>
                  <hr style={{ color: "lightgrey" }} />
                  <div className="flex justify-between">
                    <div>
                      <h3 className="pt-4 pb-2 text-base font-medium">
                        {items.name}
                      </h3>
                      <h3 className="pb-2 text-xs font-medium opacity-50">
                        {items.profession}
                      </h3>
                    </div>
                    <div className="flex">
                      <StarIcon width={20} className="star" />
                      <StarIcon width={20} className="star" />
                      <StarIcon width={20} className="star" />
                      <StarIcon width={20} className="star" />
                      <StarIcon width={20} className="star" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider> */}
          <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    speed={600}
                    loop={true}
                    slidesPerView={3}
                    spaceBetween={20}
                    breakpoints={{
                      1200: {
                        slidesPerView: 3,
                      },
                      800: {
                        slidesPerView: 2,
                      },
                      0: {
                        slidesPerView: 1,
                      },
                    }}
                    className="mt-10"
                  >
                    {postData.map((item, i) => (
                      <SwiperSlide key={i} className="relative">
                      <div className="p-10 m-3 my-20 bg-white border test-sha rounded-3xl">
                      <Image
                        src={item.imgSrc}
                        alt={item.imgSrc}
                        width={71}
                        height={71}
                        className="absolute inline-block m-auto test-pos"
                      />
                      <h4 className="my-4 text-base font-medium text-testColor">
                        {item.comment}
                      </h4>
                      <hr style={{ color: "lightgrey" }} />
                      <div className="flex justify-between">
                        <div>
                          <h3 className="pt-4 pb-2 text-base font-medium">
                            {item.name}
                          </h3>
                          <h3 className="pb-2 text-xs font-medium opacity-50">
                            {item.profession}
                          </h3>
                        </div>
                        <div className="flex">
                          <StarIcon width={20} className="star" />
                          <StarIcon width={20} className="star" />
                          <StarIcon width={20} className="star" />
                          <StarIcon width={20} className="star" />
                          <StarIcon width={20} className="star" />
                        </div>
                      </div>
                    </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
        </div>
      </section>
    );
  }
}
