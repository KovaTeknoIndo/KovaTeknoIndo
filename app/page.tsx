import Banner from "./components/Banner/index";
import Aboutus from "./components/Aboutus/index";
import Dedicated from "./components/Dedicated/index";
import Digital from "./components/Digital/index";
import Ourteam from "./components/Ourteam/index";
import Manage from "./components/Manage/index";
import FAQ from "./components/FAQ/index";
import Testimonials from "./components/Testimonials/index";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Banner />
      <Aboutus />
      <Dedicated />
      <Digital />
      <Ourteam />
      <Manage />
      <FAQ />
      <Testimonials />
    </main>
  );
}
