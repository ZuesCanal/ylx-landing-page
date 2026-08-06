import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { PillarsSection } from "@/components/PillarsSection";
import { TimelineSection } from "@/components/TimelineSection";
import { WaitlistSection } from "@/components/WaitlistSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <PillarsSection />
        <TimelineSection />
        <WaitlistSection />
      </main>
      <Footer />
    </>
  );
}
