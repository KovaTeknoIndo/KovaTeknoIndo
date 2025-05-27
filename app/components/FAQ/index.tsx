"use client";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Apakah kalian menerima proyek dari klien internasional?",
    answer:
      "Tentu saja. Meskipun kami adalah agensi baru, kami dibangun untuk bekerja secara remote dan siap memenuhi standar global baik dari segi kualitas maupun komunikasi.",
  },
  {
    question: "Teknologi apa yang kalian gunakan?",
    answer:
      "Kami menggunakan teknologi modern seperti React, Laravel, Tailwind, Scss, dan Next.js. Kami juga fleksibel dan dapat menyesuaikan dengan stack teknologi pilihan Anda sesuai kebutuhan proyek.",
  },
  {
    question: "Apakah kalian memiliki portofolio?",
    answer:
      "Kami saat ini sedang mengerjakan beberapa proyek pertama kami. Meskipun tim kami baru terbentuk, setiap anggota memiliki pengalaman individu dari berbagai latar belakang digital.",
  },
  {
    question: "Berapa lama waktu pengerjaan sebuah proyek?",
    answer:
      "Tergantung pada cakupan proyek. Landing page sederhana biasanya memakan waktu 1–2 minggu, sedangkan aplikasi web bisa lebih lama. Kami akan memberikan timeline yang jelas sejak awal.",
  },
];

const FAQ = () => {
  return (
    <section
      id="faq-section"
      className="mx-auto max-w-7xl py-24 lg:px-8 my-16 faq-bg lg:rounded-2xl"
    >
      <h3 className="text-xl font-normal text-white text-center mb-6">FAQ</h3>
      <h2 className="text-center text-4xl lg:text-65xl lg:leading-[80px] font-bold text-white">
        Pertanyaan yang Sering <br /> Diajukan.
      </h2>
      <div className="w-full px-4 pt-16">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-4 px-6 mb-4"
          >
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between items-center rounded-lg px-2 py-2 text-left text-[18px] md:text-2xl font-medium focus:outline-none">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-orange-500 transition-transform duration-300`}
                    />
                  </Disclosure.Button>
                  <AnimatePresence>
                    {open && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Disclosure.Panel
                          static
                          className="px-2 pt-2 pb-2 text-base text-black text-[19px] md:text-[22px] md:leading-[34px] font-normal opacity-70"
                        >
                          {item.answer}
                        </Disclosure.Panel>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
