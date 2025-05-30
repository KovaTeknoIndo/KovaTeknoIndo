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
}

export const plans: Plan[] = [
  {
    heading: "Basic",
    originalPrice: 500000,
    discountPercentage: 0,
    button: "Pesan Sekarang",
    href: "https://wa.link/al15gd",
    benefit1: "1–3 Halaman, Responsif",
    benefit2: "Domain + Hosting 1 Tahun",
    benefit3: "1x Revisi",
    benefit4: "",
    benefit5: "",
    benefit6: "",
  },
  {
    heading: "Standard",
    originalPrice: 1500000,
    discountPercentage: 10,
    button: "Pesan Sekarang",
    href: "https://wa.link/oi1gft",
    benefit1: "5 Halaman, Desain Kustom",
    benefit2: "Integrasi Kontak WhatsApp",
    benefit3: "3x Revisi",
    benefit4: "",
    benefit5: "",
    benefit6: "",
  },
  {
    heading: "Premium",
    originalPrice: 3000000,
    discountPercentage: 15,
    button: "Pesan Sekarang",
    href: "https://wa.link/sz2c7l",
    benefit1: "Halaman Tak Terbatas",
    benefit2: "Integrasi Pembayaran",
    benefit3: "SEO Dasar",
    benefit4: "Panel Admin Sederhana",
    benefit5: "Pemeliharaan 1 Bulan",
    benefit6: "",
  },
];
