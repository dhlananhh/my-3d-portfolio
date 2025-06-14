"use client";

import { ScrollProgress } from "@/components/ScrollProgress";
import HeroSection from "@/components/sections/HeroSection";
import AboutMeSection from "@/components/sections/AboutMeSection";
import CareerGoalsSection from "@/components/sections/CareerGoalsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ResumeSection from "@/components/sections/ResumeSection";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <ScrollProgress />
      <HeroSection />
      <AboutMeSection />
      <CareerGoalsSection />
      <ProjectsSection />
      <SkillsSection />
      <TestimonialsSection />
      <ResumeSection />
      <ContactSection />
    </main>
  );
}
