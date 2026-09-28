import { Cursor } from "@/components/Cursor";
import { Header } from "@/components/Header";
import { HorizontalTrack } from "@/components/HorizontalTrack";
import { Preloader } from "@/components/Preloader";
import { SmoothScroll } from "@/components/SmoothScroll";
import { About } from "@/components/sections/About";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Tape } from "@/components/sections/Tape";

export default function Home() {
  return (
    <>
      <a
        href="#about"
        className="fixed top-3 left-3 z-[300] -translate-y-24 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-paper focus:translate-y-0"
      >
        Skip to content
      </a>
      <Preloader />
      <SmoothScroll />
      <Cursor />
      <Header />
      <main>
        <HorizontalTrack>
          <Hero />
          <Tape />
          <About />
          <Tape tone="ink" reverse />
          <Projects />
          <Experience />
          <Tape reverse />
          <Skills />
          <Achievements />
          <Contact />
        </HorizontalTrack>
      </main>
    </>
  );
}
