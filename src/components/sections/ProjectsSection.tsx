"use client";
import { projectsData } from "@/lib/data";
import ProjectCard from "@/components/custom-ui/ProjectCard";
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
  return (
    <section id="projects" className="py-16 sm:py-24 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={ { opacity: 0, y: -20 } }
          whileInView={ { opacity: 1, y: 0 } }
          viewport={ { once: true, amount: 0.5 } }
          transition={ { duration: 0.5 } }
          className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 text-teal-400"
        >
          Featured Projects
        </motion.h2>
        <motion.div
          variants={ containerVariants }
          initial="hidden"
          whileInView="visible"
          viewport={ { once: true, amount: 0.1 } }
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
        >
          { projectsData.map((project, index) => (
            <ProjectCard key={ project.id } project={ project } index={ index } />
          )) }
        </motion.div>
      </div>
    </section>
  );
}
