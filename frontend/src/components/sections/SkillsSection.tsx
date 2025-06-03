"use client";
import { skillsData, Skill } from "@/lib/data";
import SkillBar from "@/components/ui/SkillBar";
import { motion } from "framer-motion";
import { Code, Brush, MonitorPlay, Cpu } from "lucide-react";

const categoryIcons: Record<Skill[ "category" ], React.FC<React.SVGProps<SVGSVGElement>>> = {
  Software: Code,
  Technique: Brush,
  Rendering: MonitorPlay,
  Other: Cpu,
};

const sectionTitleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const categoryColumnVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

export default function SkillsSection() {
  const categorizedSkills: Record<string, Skill[]> = skillsData.reduce((acc, skill) => {
    (acc[ skill.category ] = acc[ skill.category ] || []).push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const categoriesOrder: Skill[ "category" ][] = [ "Software", "Technique", "Rendering", "Other" ];


  return (
    <section id="skills" className="py-16 sm:py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          variants={ sectionTitleVariants }
          initial="hidden"
          whileInView="visible"
          viewport={ { once: true, amount: 0.5 } }
          className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 text-teal-400"
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          { categoriesOrder.map((categoryName, catIndex) => {
            const skillsInCategory = categorizedSkills[ categoryName ];
            if (!skillsInCategory || skillsInCategory.length === 0) return null;

            const IconComponent = categoryIcons[ categoryName as Skill[ "category" ] ];

            return (
              <motion.div
                key={ categoryName }
                className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg"
                variants={ categoryColumnVariants }
                initial="hidden"
                whileInView="visible"
                viewport={ { once: true, amount: 0.2 } }
                custom={ catIndex }
              >
                <h3 className="text-2xl font-semibold text-teal-300 mb-6 flex items-center">
                  {
                    IconComponent &&
                    <IconComponent
                      width={ 28 }
                      height={ 28 }
                      className="mr-3 text-teal-400"
                    />
                  }
                  { categoryName }
                </h3>
                <div>
                  { skillsInCategory.map((skill, index) => (
                    <SkillBar
                      key={ skill.name }
                      skill={ skill }
                      index={ catIndex * 10 + index }
                    />
                  )) }
                </div>
              </motion.div>
            );
          }) }
        </div>
      </div>
    </section>
  );
}
