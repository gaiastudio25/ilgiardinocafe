import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Mission from "./components/Mission";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import Info from "./components/Info";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Mission />
        <Menu />
        <Gallery />
        <Info />
      </main>
      <Footer />
    </>
  );
}
