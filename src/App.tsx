import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Location from "./components/Location";
import Footer from "./components/Footer";
import Team from "./components/Team";

export default function App() {
  useEffect(() => {
    // Smooth scroll for all anchor links
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="bg-stone-950 text-stone-100 overflow-x-hidden" style={{ fontFamily: "Inter, sans-serif" }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Pricing />
        <Features />
        <Team />
        <Gallery />
        <Testimonials />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
