export interface Plan {
  heading: string;
  originalPrice: number;
  discountPercentage: number;
  button: string;
  href: string; //
  benefit: string[];
}

export const plans: Plan[] = [
  {
    heading: "Basic",
    originalPrice: 500000,
    discountPercentage: 5,
    button: "Pesan Sekarang",
    href: "https://wa.link/al15gd",
    benefit: [
      "1-3 Halaman, Responsif",
      "Domain .my.id + Hosting 1 Tahun",
      "1x Revisi"
    ]
  },
  {
    heading: "Standard",
    originalPrice: 1500000,
    discountPercentage: 10,
    button: "Pesan Sekarang",
    href: "https://wa.link/oi1gft",
    benefit: [
      "3-5 Halaman, Responsif",
      "Multi Bahasa (ID, EN)",
      "Integrasi Google Analis",
      "Integrasi WhatsApp",
      "Integrasi Gmaps",
      "Domain .com + Hosting 1 Tahun",
      "3x Revisi",
    ]
  },
  {
    heading: "Premium",
    originalPrice: 3000000,
    discountPercentage: 15,
    button: "Pesan Sekarang",
    href: "https://wa.link/sz2c7l",
    benefit: [
      "5-10 Halaman",
      "Multi Bahasa (ID, Custom)",
      "SEO Dasar",
      "Semua Integrasi paket Standart",
      "Admin Panel CMS Sederhana",
      "Email domain",
      "Training Admin Panel",
      "Domain .com + Hosting 1 Tahun",
    ]
  },
];
