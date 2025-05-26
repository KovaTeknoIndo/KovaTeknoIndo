import "./globals.css";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";

export const metadata = {
  title: "Kova Teknoindo | Software Agency in Kediri",
  description:
    "Kova Teknoindo adalah software agency di Kediri yang menyediakan layanan pembuatan website, aplikasi mobile, dan sistem informasi terbaik untuk bisnis Anda.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
