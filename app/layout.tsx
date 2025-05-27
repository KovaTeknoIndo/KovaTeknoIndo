import "./globals.css";
import Script from "next/script";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";

export const metadata = {
  title: {
    default: "Kova Teknoindo | Software Agency in Kediri",
    template: "%s | Kova Teknoindo",
  },
  description:
    "Kova Teknoindo adalah software agency di Kediri yang menyediakan layanan pembuatan website, aplikasi mobile, dan sistem informasi terbaik untuk bisnis Anda.",
  metadataBase: new URL("https://www.kovatekno.my.id"),
  openGraph: {
    title: "Kova Teknoindo | Software Agency in Kediri",
    description: "Solusi pembuatan website profesional untuk bisnis Anda.",
    type: "website",
    locale: "id_ID",
    url: "https://www.kovatekno.my.id",
    siteName: "Kova Teknoindo",
    images: [
      {
        url: "https://www.kovatekno.my.id/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Kova Teknoindo",
      },
    ],
  },
  // Jika ingin menambahkan Twitter Card:
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Kova Teknoindo | Software Agency in Kediri",
  //   description: "Solusi pembuatan website profesional untuk bisnis Anda.",
  //   creator: "@kova_teknoindo",
  //   images: ["https://www.kovatekno.my.id/og-image.svg"],
  // },
  keywords: [
    "jasa website",
    "buat website murah",
    "web developer UMKM",
    "jasa pembuatan aplikasi",
    "software agency Kediri",
  ],
  authors: [{ name: "Kova Teknoindo" }],
  viewport: "width=device-width, initial-scale=1.0",
  other: {
    "x-ua-compatible": "IE=edge",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-505RVXTE04"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-505RVXTE04');
            `,
          }}
        />
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
