import "./globals.css";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import Head from "next/head";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";

export const metadata = {
  title: "Kova Teknoindo | Software Agency in Kediri",
  description: "Kova Teknoindo adalah software agency di Kediri yang menyediakan layanan pembuatan website, aplikasi mobile, dan sistem informasi terbaik untuk bisnis Anda.",
  keywords: ['jasa website', 'buat website murah', 'web developer UMKM'],
  openGraph: {
    title: "Kova Teknoindo | Software Agency in Kediri",
    description: 'Solusi pembuatan website profesional untuk bisnis Anda.',
    url: 'https://www.kovatekno.my.id',
    siteName: 'NamaUsaha',
    images: [
      {
        url: 'https://www.kovatekno.my.id/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Jasa Website',
      },
    ],
    type: 'website',
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-505RVXTE04"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-505RVXTE04');
            `,
          }}
        />
      </Head>
      <body>
        <Navbar />
        <DefaultSeo {...SEO} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
