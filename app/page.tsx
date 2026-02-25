import { Navbar } from "./src/components/layout/Navbar";
import { About } from "./src/components/sections/About";
import { Contact } from "./src/components/sections/Contact";
import { Experience } from "./src/components/sections/Experience";
import { Hero } from "./src/components/sections/Hero";
import { Projects } from "./src/components/sections/Projects";
import { Testimonials } from "./src/components/sections/Testimonials";


export default function Home() {
  return (
    <>
    <Navbar />
    <main>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Testimonials />
      <Contact />
    </main>
    </>
  );
}