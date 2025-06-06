"use client";
import Slider from "react-slick";
import React, { Component } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

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
    imgSrc: "/images/testimonial/avatar.png",
  },
  {
    name: "Siti Lestari",
    profession: "Pendiri Startup Digital",
    comment:
      "Saya sangat puas dengan hasil kerjanya. Komunikasi lancar dan desain web yang dibuat sangat modern serta mobile-friendly.",
    imgSrc: "/images/testimonial/avatar.png",
  },
  {
    name: "Andi Nugroho",
    profession: "Direktur Pemasaran",
    comment:
      "Kami bekerja sama dalam pembuatan dashboard internal. Mereka sangat memahami kebutuhan bisnis dan memberikan solusi yang efisien.",
    imgSrc: "/images/testimonial/avatar.png",
  },
  {
    name: "Fitri Azzahra",
    profession: "Pemilik Studio Kreatif",
    comment:
      "Sangat senang bekerja dengan tim ini! Mereka fleksibel, cepat, dan penuh ide kreatif. Akan kembali untuk proyek selanjutnya.",
    imgSrc: "/images/testimonial/avatar.png",
  },
  {
    name: "Budi Santoso",
    profession: "COO",
    comment:
      "Salah satu pengalaman kerja remote terbaik yang pernah saya alami. Mereka menjaga kualitas dan selalu terbuka untuk feedback.",
    imgSrc: "/images/testimonial/avatar.png",
  },
  {
    name: "Nadia Ayu",
    profession: "Konsultan UI/UX",
    comment:
      "Desain UI yang diberikan sangat rapi dan sesuai prinsip UX. Mereka sangat detail dan terbuka untuk revisi.",
    imgSrc: "/images/testimonial/avatar.png",
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
        className=" pt-10 md:pt-20 pb-0 lg:py-32"
        id="testimonial-section"
      >
        <div className="mx-auto max-w-7xl sm:py-4 lg:px-8 ">
          <div className="text-center">
            <h3
              data-aos="fade-down"
              className="text-4xl sm:text-6xl font-bold text-black my-3"
            >
              Apa kata klien kami?
            </h3>
            <h3
              data-aos="fade-down"
              className="text-4xl sm:text-6xl font-bold text-black text-opacity-50 lg:mr-48 my-4"
            >
              Apa kata klien kami?
            </h3>
            <h3
              data-aos="fade-down"
              className="text-4xl sm:text-6xl font-bold text-black text-opacity-25 lg:-mr-32 my-4"
            >
              Apa kata klien kami?
            </h3>
          </div>

          <Slider {...settings}>
            {postData.map((items, i) => (
              <div data-aos="fade-up" key={i} className="relative">
                <div className="bg-white test-sha m-3 p-10 my-20 rounded-3xl border">
                  <Image
                    src={items.imgSrc}
                    alt={items.imgSrc}
                    width={71}
                    height={71}
                    className="inline-block m-auto absolute test-pos"
                  />
                  <h4 className="text-base font-medium text-testColor my-4">
                    {items.comment}
                  </h4>
                  <hr style={{ color: "lightgrey" }} />
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-base font-medium pt-4 pb-2">
                        {items.name}
                      </h3>
                      <h3 className="text-xs font-medium  pb-2 opacity-50">
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
          </Slider>
        </div>
      </section>
    );
  }
}
