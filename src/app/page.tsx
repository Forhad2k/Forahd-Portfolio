import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Services from "@/components/services/Services";
import Projects from "@/components/projects/Projects";
import Experience from "@/components/experience/Experience";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
