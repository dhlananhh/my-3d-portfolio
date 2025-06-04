"use client";
import { testimonialsData } from "@/lib/data";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function TestimonialsSection() {
  if (!testimonialsData || testimonialsData.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={ { opacity: 0, y: -20 } }
          whileInView={ { opacity: 1, y: 0 } }
          viewport={ { once: true, amount: 0.5 } }
          transition={ { duration: 0.5 } }
          className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 text-teal-400"
        >
          What Customers Say
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={ containerVariants }
          initial="hidden"
          whileInView="visible"
          viewport={ { once: true, amount: 0.1 } }
        >
          { testimonialsData.map((testimonial) => (
            <motion.div key={ testimonial.id } variants={ itemVariants }>
              <TestimonialCard testimonial={ testimonial } />
            </motion.div>
          )) }
        </motion.div>
      </div>
    </section>
  );
}
