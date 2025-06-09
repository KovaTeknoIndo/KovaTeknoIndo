import "./globals.css";
import Script from "next/script";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Chat from "./components/Contact/Chat";
import ModalProvider from "./components/Contact/ModalProvider"; // 👈 Client component

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
    icons: {
      icon: '/favicon.ico',
    },
    images: [
      {
        url: "https://www.kovatekno.my.id/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Kova Teknoindo",
      },
    ],
  },
  keywords: [
    "jasa website kediri",
    "jasa website",
    "buat website murah",
    "web developer UMKM",
    "jasa pembuatan aplikasi",
    "software agency Kediri",
  ],
  authors: [{ name: "Kova Teknoindo" }],
  other: {
    "x-ua-compatible": "IE=edge",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative overflow-x-hidden">
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
        <Footer />
        <Chat />
        <ModalProvider />
      </body>
    </html>
  );
}
