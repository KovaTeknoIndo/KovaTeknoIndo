export interface Plan {
  heading: string;
  originalPrice: number;
  discountPercentage: number;
  button: string;
  href: string; //
  benefit1: string;
  benefit2: string;
  benefit3: string;
  benefit4?: string;
  benefit5?: string;
  benefit6?: string;
  benefit7?: string;
  benefit8?: string;
  benefit9?: string;
  benefit10?: string;
}

export const plans: Plan[] = [
  {
    heading: "Basic",
    originalPrice: 500000,
    discountPercentage: 5,
    button: "Pesan Sekarang",
    href: "https://wa.link/al15gd",
    benefit1: "1–3 Halaman, Responsif",
    benefit2: "Domain .my.id + Hosting 1 Tahun",
    benefit3: "1x Revisi",
    benefit4: "",
    benefit5: "",
    benefit6: "",
    benefit7: "",
    benefit8: "",
    benefit9: "",
    benefit10: "",
  },
  {
    heading: "Standard",
    originalPrice: 1500000,
    discountPercentage: 10,
    button: "Pesan Sekarang",
    href: "https://wa.link/oi1gft",
    benefit1: "3-5 Halaman, Kustom Halaman",
    benefit2: "Multi Bahasa (ID, EN)",
    benefit3: "Integrasi Google Analis",
    benefit4: "Integrasi WhatsApp",
    benefit5: "Integrasi Gmaps",
    benefit6: "Domain .com + Hosting 1 Tahun",
    benefit7: "3x Revisi",
    benefit8: "",
    benefit9: "",
    benefit10: "",
  },
  {
    heading: "Premium",
    originalPrice: 3000000,
    discountPercentage: 15,
    button: "Pesan Sekarang",
    href: "https://wa.link/sz2c7l",
    benefit1: "5-10 Halaman",
    benefit2: "Multi Bahasa (ID, Custom)",
    benefit3: "SEO Dasar",
    benefit4: "Semua Integrasi paket Standart",
    benefit5: "Admin Panel CMS Sederhana",
    benefit6: "Email domain",
    benefit7: "Training Admin Panel",
    benefit8: "Domain .com + Hosting 1 Tahun",
    benefit9: "",
    benefit10: "",
  },
];
