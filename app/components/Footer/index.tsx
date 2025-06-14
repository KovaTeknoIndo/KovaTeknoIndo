import Image from "next/image";
import Link from "next/link";

// MIDDLE LINKS DATA
interface ProductType {
  id: number;
  section: string;
  link: { label: string; href: string; external?: boolean }[];
}

const products: ProductType[] = [
  {
    id: 1,
    section: " ",
    link: [
      { label: " ", href: "#" },
      { label: " ", href: "#" },
    ],
  },
  {
    id: 2,
    section: "Landing Page",
    link: [
      { label: "Beranda", href: "#home" },
      { label: "Tentang", href: "#aboutus-section" },
      { label: "FAQ", href: "#faq-section" },
      { label: "Testimoni", href: "#testimonial-section" },
    ],
  },

  {
    id: 3,
    section: "Layanan",
    link: [
      { label: "Website", href: "#" },
      { label: "Dasboard", href: "#" },
    ],
  },
  {
    id: 4,
    section: "Kontak",
    link: [
      {
        label: "kovatekno@gmail.com",
        href: "mailto:kovatekno@gmail.com",
        external: true,
      },
      {
        label: "+62 856-0664-2116",
        href: "https://wa.me/6285606642116",
        external: true,
      },
      {
        label: "@kovatekno",
        href: "https://www.instagram.com/kovatekno/profilecard/?igsh=MWR4Nm12M2Rmc3U2Zw==",
        external: true,
      },
      {
        label: "Kediri, Jawa Timur, Indonesia",
        href: "",
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className="bg-blueprimary" id="first-section">
      <div className="mx-auto max-w-2xl pt-1 lg:pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          {/* COLUMN-1 */}
          <div className="col-span-4">
            <h3 className="text-white text-4xl font-semibold leading-9 mb-4 lg:mb-20">
              Kova Teknoindo
            </h3>
          </div>

          {/* COLUMN-2/3 */}
          {products.map((product) => (
            <div key={product.id} className="group relative col-span-2">
              <p className="text-white text-xl font-extrabold mb-9">
                {product.section}
              </p>
              <ul>
                {product.link.map((item, index) => (
                  <li key={index} className="mb-5">
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="text-white text-lg font-normal mb-6 space-links"
                        target={item.external ? "_blank" : "_self"}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span className="text-white text-lg font-normal mb-6 space-links">
                        {item.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* All Rights Reserved */}
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <div className="pt-5 pb-5 px-4 sm:px-6 lg:px-4 border-solid border-t border-footer">
          <div className="mt-4 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 xl:gap-x-8">
            <div>
              <h3 className="text-center md:text-start text-offwhite text-lg">
                @2025 - All Rights Reserved by{" "}
                <Link href="#" target="_blank">
                  Kova Teknoindo
                </Link>
              </h3>
            </div>
            <div className="flex justify-center md:justify-end">
              <Link href="/">
                <h3 className="text-offwhite pr-6">Privacy policy</h3>
              </Link>
              <Link href="/">
                <h3 className="text-offwhite pl-6 border-solid border-l border-footer">
                  Terms & conditions
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
