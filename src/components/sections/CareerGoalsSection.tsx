"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Rocket, BarChartBig, Target } from "lucide-react";

const goals = [
  {
    icon: Rocket,
    title: "Short-Term Goal",
    description: "To secure a challenging Frontend Developer position where I can apply my skills in React and Next.js, contribute to meaningful projects, and continuously learn from experienced mentors within a collaborative team."
  },
  {
    icon: BarChartBig,
    title: "Mid-Term Goal",
    description: "To evolve into a Senior Frontend Developer, taking ownership of complex features, mentoring junior developers, and deepening my expertise in performance optimization and building highly scalable applications."
  },
  {
    icon: Target,
    title: "Long-Term Goal",
    description: "To become a technical lead or solutions architect, guiding technical strategy, driving innovation in user experience, and making a significant impact on the products and teams I help create."
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const CareerGoalsSection = () => {
  return (
    <section id="goals" className="py-24 sm:py-32 relative bg-gray-950 text-white overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-70 sm:opacity-100">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 sm:opacity-25 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-teal-500 to-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 sm:opacity-25 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/5 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full mix-blend-screen filter blur-3xl opacity-15 sm:opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <SectionHeading title="Career Goals" subtitle="My Roadmap" />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          { goals.map((goal, index) => (
            <motion.div
              key={ index }
              className="h-full"
              variants={ cardVariants }
              initial="hidden"
              whileInView="visible"
              viewport={ { once: true, amount: 0.3 } }
              custom={ index }
            >
              <div className="p-8 h-full rounded-2xl bg-slate-900/50 border border-slate-700/80
                              hover:border-teal-500/80 hover:bg-slate-800/60
                              transition-all duration-300 shadow-lg">
                <div className="flex items-center gap-4 mb-5">
                  <goal.icon className="w-9 h-9 text-teal-400 flex-shrink-0" />
                  <h3 className="text-xl font-bold text-slate-100">{ goal.title }</h3>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  { goal.description }
                </p>
              </div>
            </motion.div>
          )) }
        </div>
      </div>
    </section>
  );
};

export default CareerGoalsSection;
