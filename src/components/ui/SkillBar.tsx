"use client";

import { motion } from "framer-motion";
import { FrontendSkill } from "@/lib/data";

interface SkillBarProps {
  skill: FrontendSkill;
  index: number;
}

const skillBarVariants = {
  hidden: { opacity: 0, width: "0%" },
  visible: (i: number) => ({
    opacity: 1,
    width: "100%",
    transition: {
      delay: i * 0.05,
      duration: 0.3,
    },
  }),
};

const progressBarVariants = (percentage: number) => ({
  hidden: { width: "0%" },
  visible: {
    width: `${percentage}%`,
    transition: {
      duration: 1,
      ease: "easeInOut",
      delay: 0.5,
    },
  },
});

export default function SkillBar({ skill, index }: SkillBarProps) {
  return (
    <motion.div
      className="mb-4"
      variants={ skillBarVariants }
      initial="hidden"
      whileInView="visible"
      viewport={ { once: true, amount: 0.3 } }
      custom={ index }
    >
      <div className="flex justify-between mb-1 items-center">
        <span className="text-sm sm:text-base font-medium text-teal-300">
          { skill.name }
        </span>
        <span className="text-xs sm:text-sm font-medium text-gray-400">
          { skill.level }%
        </span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2 sm:h-2.5">
        <motion.div
          className="bg-teal-500 h-2 sm:h-2.5 rounded-full"
          style={ { width: `${skill.level}%` } }
          variants={ progressBarVariants(skill.level) }
          initial="hidden"
          whileInView="visible"
          viewport={ { once: true, amount: 0.5 } }
        ></motion.div>
      </div>
      { skill.description && (
        <p className="text-xs text-gray-500 mt-1">{ skill.description }</p>
      ) }
    </motion.div>
  );
}
