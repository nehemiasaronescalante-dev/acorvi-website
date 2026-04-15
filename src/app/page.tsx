import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Demo from "@/components/Demo";
import Process from "@/components/Process";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Demo />
      <Process />
      <About />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
