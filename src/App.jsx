import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import ScrollProgress from "./components/ScrollProgress";
import FloatingParticles from "./components/FloatingParticles";

function Loader() {
  return (
    <motion.div className="loader-screen" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.45 }}>
      <div className="loader-logo">SH<span>.</span></div>
      <div className="loader-track"><i /></div>
      <span className="loader-caption">PREPARING PORTFOLIO</span>
    </motion.div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 650);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onPointerMove = (event) => {
      document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      <ScrollProgress />
      <FloatingParticles />
      <div className="cursor-glow" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
