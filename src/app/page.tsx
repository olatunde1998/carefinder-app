import Footer from "./components/footerComponents/footer";
import Condition from "./components/homePageComponents/condition";
import Hero from "./components/homePageComponents/hero";
import Medicine from "./components/homePageComponents/medicine";
import Partner from "./components/homePageComponents/partner";
import NavBar from "./components/navBar/navBar";

export default function Home() {
  return (
    <main className="text-[#1F4D36]">
      <NavBar />
      <Hero />
      <Condition />
      <div className="md:relative  h-[350px] max-w-[1400px] mx-auto">
        <Medicine />
      </div>
      <div>
        <Partner />
      </div>
      <div className="bg-[#1F4D36] ">
        <Footer />
      </div>
    </main>
  );
}
