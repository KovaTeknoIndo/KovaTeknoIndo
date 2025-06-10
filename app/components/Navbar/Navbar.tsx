"use client";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState, ReactNode } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Contactusform from "./Contactus";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "Beranda", href: "/", current: false },
  { name: "Pricing", href: "/pricing", current: false },
  { name: "Gallery", href: "/galery", current: false },
  // { name: "Layanan", href: "#services-section", current: false },
  { name: "FAQ", href: "#faq-section", current: false },
  { name: "Testimoni", href: "#testimonial-section", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const pathname = usePathname();

  const isHome = pathname === "/";

  const filteredNavigation = isHome
    ? navigation
    : navigation.filter((item) =>
        ["/", "/galery", "/layanan"].includes(item.href)
      );
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [isTop, setIsTop] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsTop(currentScrollY === 0);

      if (currentScrollY > lastScrollY.current && currentScrollY > 10) {
        setShowNav(false); // scroll down
      } else {
        setShowNav(true); // scroll up
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Disclosure
      as="nav"
      className={classNames(
        "fixed top-0 left-0 right-0 z-50 transition-transform duration-300 shadow-md bg-white",
        isTop ? "bg-transparent" : "",
        "translate-y-0",
        showNav ? "lg:translate-y-0" : "lg:-translate-y-full"
      )}
    >
      <>
        <div className="p-3 mx-auto max-w-7xl md:p-4 lg:px-8">
          <div className="relative flex items-center h-12 lg:h-20">
            <div className="flex items-center flex-1 sm:justify-between">
              {/* LOGO */}
              <div className="flex items-center flex-shrink-0">
                <Link href="/">
                  <div className="relative w-[120px] lg:w-40 h-[150px] mr-20">
                    <Image
                      src="/images/navbar/kovaLogo1.png"
                      alt="Kova Logo"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </Link>
              </div>

              <div className="flex items-center">
                {/* LINKS */}
                <div className="items-center hidden lg:flex">
                  <div className="flex justify-end space-x-4">
                    {filteredNavigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-700"
                            : "navlinks hover:text-black transition ease-in-out duration-300",
                          "px-3 py-4 rounded-md text-[20px] font-normal"
                        )}
                        aria-current={item.href ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <Contactusform />
              </div>
            </div>

            {/* DRAWER BUTTON (MOBILE) */}
            <div className="block lg:hidden">
              <Bars3Icon
                className="block h-7 w-7"
                aria-hidden="true"
                onClick={() => setIsOpen(true)}
              />
            </div>

            {/* DRAWER COMPONENT */}
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <DrawerData />
            </Drawer>
          </div>
        </div>
      </>
    </Disclosure>
  );
};

interface DrawerProps {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Drawer = ({ children, isOpen, setIsOpen }: DrawerProps) => {
  return (
    <div
      className={`fixed top-0 left-0 transform ease-in-out transition-all duration-500 z-[60] h-screen ${
        isOpen ? "opacity-100 translate-x-0" : "opacity-100 -translate-x-full"
      }`}
    >
      <div
        className={`w-[80%] max-w-lg top-0 bottom-0 left-0 absolute bg-white h-full shadow-xl duration-500 ease-in-out transition-all transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <article className="relative flex flex-col h-full max-w-lg pb-10 space-y-4">
          <header className="flex items-center justify-between px-3 py-3">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-semibold text-black">
                <Image
                  src="/images/navbar/kovaLogo1.png"
                  alt="Kova Logo"
                  width={120}
                  height={60}
                  priority
                />
              </Link>
            </div>
            <XMarkIcon
              className="block cursor-pointer h-7 w-7"
              onClick={() => setIsOpen(false)}
            />
          </header>
          <div onClick={() => setIsOpen(false)}>{children}</div>
        </article>
      </div>
      <section
        className="w-screen h-full cursor-pointer"
        onClick={() => setIsOpen(false)}
      ></section>
    </div>
  );
};

const DrawerData = () => {
  const pathname = usePathname();

  const isHome = pathname === "/";

  const filteredNavigation = isHome
    ? navigation
    : navigation.filter((item) =>
        ["/", "/galery", "/layanan"].includes(item.href)
      );
  return (
    <div className="absolute w-full max-w-sm mx-auto rounded-md">
      <div className="flex-1 py-1 space-y-4">
        <div className="sm:block">
          <div className="flex flex-col gap-4 px-5">
            {filteredNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-purple"
                    : "text-black text-xl hover:bg-gray-700 hover:text-purple",
                  "block rounded-md text-base font-medium"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://wa.link/r7eklb"
              target="_blank"
              className="w-full px-4 py-2 mt-2 font-medium text-center text-white border rounded-full bg-blueprimary hover:text-white border-purple"
            >
              Kontak Kami
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
