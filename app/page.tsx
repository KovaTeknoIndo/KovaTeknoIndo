"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Banner from "./components/Home/Banner";
import Aboutus from "./components/Home/Aboutus";
import Dedicated from "./components/Home/Dedicated";
import Digital from "./components/Home/Digital";
import Ourteam from "./components/Home/Ourteam";
import Manage from "./components/Home/Manage";
import FAQ from "./components/Home/FAQ";
import Testimonials from "./components/Home/Testimonials";
import Pricing from "./components/Layanan/Pricing/pricing";

export default function Home() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main>
      <Banner />
      <Aboutus />
      <Dedicated />
      <Digital />
      <Ourteam />
      {/* <Manage /> */}
      <Pricing showTitle titleText="Kelola Semua Proyek Website Anda Dalam Satu Tempat." />
      <FAQ />
      <Testimonials />
    </main>
  );
}
