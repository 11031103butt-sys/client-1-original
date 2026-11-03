import Topbar from "./components/Topbar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import SplitSection from "./components/SplitSection";
import Categories from "./components/Categories";
import Pricing from "./components/Pricing";
import Why from "./components/Why";
import Standards from "./components/Standards";
import About from "./components/About";
import Process from "./components/Process";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Topbar />
      <Header />
      <Hero />
      <Stats />
      <Services />
      <SplitSection />
      <Categories />
      <Pricing />
      <Why />
      <Standards />
      <About />
      <Process />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
