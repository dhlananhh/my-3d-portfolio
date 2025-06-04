import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ResumeSection from "@/components/sections/ResumeSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <TestimonialsSection />
      <ResumeSection />
      <ContactSection />
    </>
  );
}
