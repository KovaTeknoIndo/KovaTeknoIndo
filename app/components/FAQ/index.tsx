"use client";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Do you accept projects from international clients?",
    answer:
      "Absolutely. Although we are a new agency, we're built to work remotely and are ready to meet global standards in both quality and communication.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We use modern technologies like React, Laravel, Tailwind, and Next.js. We're also flexible and can adapt to your preferred tech stack based on project needs.",
  },
  {
    question: "Do you have a portfolio?",
    answer:
      "We are currently working on our first few projects. While our team is newly formed, each member brings individual experience from diverse digital backgrounds.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "It depends on the scope. A simple landing page usually takes 1–2 weeks, while a web application may take longer. We'll provide a clear timeline from the start.",
  },
];

const FAQ = () => {
  return (
    <div
      id="faq-section"
      className="mx-auto max-w-7xl py-24 lg:px-8 my-16 faq-bg lg:rounded-2xl"
    >
      <h3 className="text-xl font-normal text-white text-center mb-6">FAQ</h3>
      <h2 className="text-4xl lg:text-6xl font-semibold text-center text-white">
        Frequently asked <br /> questions.
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
    </div>
  );
};

export default FAQ;
