"use client";
import { frontendSkillsData, FrontendSkill } from "@/lib/data";
import SkillBar from "@/components/custom-ui/SkillBar";
import { motion } from "framer-motion";
import {
  Code2,
  Package,
  Palette,
  Share2,
  ToyBrick,
  DatabaseZap,
  FlaskConical,
  GitFork,
  TerminalSquare,
  Lightbulb,
  ListChecks,
} from "lucide-react";

const categoryIcons: Record<
  FrontendSkill[ "category" ],
  React.FC<React.SVGProps<SVGSVGElement>>
> = {
  Languages: Code2,
  "Frameworks/Libraries": Package,
  Styling: Palette,
  "State Management": Share2,
  "Build Tools & Bundlers": ToyBrick,
  "API & Data Fetching": DatabaseZap,
  Testing: FlaskConical,
  "Version Control": GitFork,
  "Developer Tools": TerminalSquare,
  "Concepts & Other": Lightbulb,
};

const categoriesOrder: FrontendSkill[ "category" ][] = [
  "Languages",
  "Frameworks/Libraries",
  "Styling",
  "State Management",
  "API & Data Fetching",
  "Testing",
  "Build Tools & Bundlers",
  "Version Control",
  "Developer Tools",
  "Concepts & Other",
];

const sectionTitleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const categoryColumnVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

export default function SkillsSection() {
  const categorizedSkills: Record<string, FrontendSkill[]> =
    frontendSkillsData.reduce((acc, skill) => {
      (acc[ skill.category ] = acc[ skill.category ] || []).push(skill);
      return acc;
    }, {} as Record<string, FrontendSkill[]>);

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
          My Frontend Skills
        </motion.h2>
        { }
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          { categoriesOrder.map((categoryName, catIndex) => {
            const skillsInCategory = categorizedSkills[ categoryName ];
            if (!skillsInCategory || skillsInCategory.length === 0) return null;

            const IconComponent =
              categoryIcons[ categoryName as FrontendSkill[ "category" ] ] ||
              ListChecks;

            return (
              <motion.div
                key={ categoryName }
                className="bg-gray-800 p-5 sm:p-6 rounded-xl shadow-xl flex flex-col"
                variants={ categoryColumnVariants }
                initial="hidden"
                whileInView="visible"
                viewport={ { once: true, amount: 0.1 } }
                custom={ catIndex }
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-teal-400 mb-5 flex items-center">
                  <IconComponent
                    width={ 24 }
                    height={ 24 }
                    className="mr-3 opacity-80"
                  />
                  { categoryName }
                </h3>
                <div className="flex-grow">
                  { skillsInCategory.map((skill, skillIndex) => (
                    <SkillBar
                      key={ skill.name }
                      skill={ skill }
                      index={ (catIndex + 1) * 5 + skillIndex }
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
