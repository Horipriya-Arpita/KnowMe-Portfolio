import GridBackground from "@/components/grid-background"
import GradientBlur from "@/components/gradient-blur"

import HeroSection from "./sections/HeroSection"
import AboutSection from "./sections/AboutSection"
import WorkSection from "./sections/WorkSection"
import SkillSection from "./sections/SkillSection"
import CompetitionSection from "./sections/CompetitionSection"
import ProjectSection from "./sections/ProjectSection"
import FloatingChat from "@/components/floating-chat"
import FooterSection from "./sections/FooterSection"
import ContactSection from "./sections/ContactSection"

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-navy-950 to-black text-white">
      <GridBackground />
      <GradientBlur />
      <FloatingChat />

      <HeroSection/>

      <AboutSection/>

      <WorkSection/>

      <SkillSection/>
       
      <ProjectSection/>

      <CompetitionSection/>
      
      <ContactSection/>
      
      <FooterSection/>
      
    </main>
  )
}
