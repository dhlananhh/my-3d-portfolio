"use client";

import { projectsData, Project } from "@/lib/data";
import ProjectCard from "@/components/custom-ui/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ProjectsSection() {
  const sortedProjects = [ ...projectsData ].sort(
    (a, b) => new Date(b.projectStartDate).getTime() - new Date(a.projectStartDate).getTime()
  );

  return (
    <section id="projects" className="py-24 sm:py-32 relative bg-gray-950 text-white overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-70 sm:opacity-100">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 sm:opacity-25 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 sm:opacity-25 animate-blob"></div>
      </div>

      <div className="container mx-auto px-4">
        <SectionHeading title="Featured Projects" subtitle="My recent work" />

        <motion.div
          variants={ containerVariants }
          initial="hidden"
          whileInView="visible"
          viewport={ { once: true, amount: 0.05 } }
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mt-10"
        >
          { sortedProjects.map((project, index) => (
            <ProjectCard
              key={ project.id }
              project={ project }
              index={ index }
            />
          )) }
        </motion.div>
      </div>
    </section>
  );
}
