import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Services from "@/app/components/Services";
import Experience from "@/app/components/Experience";
import Education from "@/app/components/Education";
import Contact from "@/app/components/Contact";

export default function Portfolio() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen font-sans text-slate-900 dark:text-slate-100 overflow-x-hidden selection:bg-teal-200 dark:selection:bg-teal-900 transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
}