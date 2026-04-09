import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import YoutubeHighlight from "@/components/YoutubeHighlight";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="w-full relative">
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
