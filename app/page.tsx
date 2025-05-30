"use client";

import { useEffect, useState } from "react";
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
import ContactModal from "./components/Contact/ModalChat"; // pastikan path-nya benar

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    // Munculkan modal saat halaman pertama kali dibuka
    setShowModal(true);
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

      {showModal && (
        <ContactModal showModal={showModal} setShowModal={setShowModal} />
      )}
    </main>
  );
}
