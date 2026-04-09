import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import YoutubeHighlight from "@/components/YoutubeHighlight";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

export default function App() {
  return (
    <main className="w-full relative bg-[#0a0a0a]">
      <ScrollyCanvas>
        <Overlay />
      </ScrollyCanvas>
      <Skills />
      <Experience />
      <Projects />
      <YoutubeHighlight />
      <Achievements />
      <Contact />
    </main>
  );
}
