"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Link from "next/link";

const Contactusform = () => {
  let [isOpen, setIsOpen] = useState(false);

  const [inputValues, setInputValues] = useState({
    input1: "",
    input2: "",
    input3: "",
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setInputValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleClick = () => {
    alert(
      `Name: ${inputValues.input1}, Email-address: ${inputValues.input2}, Message: ${inputValues.input3}`
    );
    setIsOpen(false);
  };

  // FORM SUBMIT
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // handle form submission
  };

  const isDisabled = Object.values(inputValues).some((value) => value === "");

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className=" inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto md:ml-6 sm:pr-0">

        <div className="hidden lg:block">
          <a
            href="https://wa.link/r7eklb"
            target="_blank"
            className="justify-end text-xl font-semibold bg-transparent py-4 px-6 lg:px-12 navbutton rounded-full hover:bg-bluehover hover:text-white transition ease-in-out duration-300"
          >
            Kontak Kami
          </a>
        </div>
      </div>
      
    </>
  );
};

export default Contactusform;
