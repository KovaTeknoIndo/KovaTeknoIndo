"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Banner from "./components/Banner";
import Aboutus from "./components/Aboutus";
import Dedicated from "./components/Dedicated";
import Digital from "./components/Digital";
import Ourteam from "./components/Ourteam";
import Manage from "./components/Manage";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";

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
      <Manage />
      <FAQ />
      <Testimonials />
    </main>
  );
}
