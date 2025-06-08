"use client";

import { motion } from "framer-motion";
import { SkillBadge } from "@/components/custom-ui/SkillBadge";

const skillsToDisplay = [
  { name: "ReactJS", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Next.js", level: 90 },
  { name: "Node.js", level: 75 },
  { name: "HTML/CSS", level: 95 },
  { name: "Tailwind CSS", level: 95 },
  { name: "JavaScript", level: 95 },
  { name: "Git", level: 95 },
  { name: "MongoDB", level: 70 },
  { name: "Figma", level: 80 },
  { name: "RESTful APIs", level: 90 },
  { name: "Responsive Design", level: 95 }
];

const sectionTitleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const subtitleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } },
};

const underlineVariants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.5, delay: 0.2, ease: "easeOut" } },
};


export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 sm:py-32 relative bg-gray-950 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-70 sm:opacity-100">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 sm:opacity-25 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-teal-500 to-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 sm:opacity-25 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/5 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full mix-blend-screen filter blur-3xl opacity-15 sm:opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center">
          <motion.p
            variants={ subtitleVariants }
            initial="hidden"
            whileInView="visible"
            viewport={ { once: true, amount: 0.5 } }
            className="text-sm font-medium text-teal-400 uppercase tracking-wider mb-3"
          >
            Technologies I work with
          </motion.p>
          <motion.h2
            variants={ sectionTitleVariants }
            initial="hidden"
            whileInView="visible"
            viewport={ { once: true, amount: 0.5 } }
            className="text-4xl sm:text-5xl font-bold text-white mb-3 mt-3"
          >
            My Skills
          </motion.h2>
          <motion.div
            variants={ underlineVariants }
            initial="hidden"
            whileInView="visible"
            viewport={ { once: true, amount: 0.5 } }
            className="flex justify-center mb-16"
          >
            <div className="w-24 h-1.5 mt-3 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 rounded-full"></div>
          </motion.div>
        </div>

        <motion.div
          initial={ { opacity: 0 } }
          whileInView={ { opacity: 1 } }
          transition={ { duration: 0.5, delay: 0.4 } }
          viewport={ { once: true, amount: 0.05 } }
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5"
        >
          { skillsToDisplay.map((skill) => (
            <SkillBadge
              key={ skill.name }
              name={ skill.name }
              level={ skill.level }
            />
          )) }
        </motion.div>
      </div>
    </section>
  );
}
