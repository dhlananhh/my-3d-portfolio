"use client";

import { testimonialsData } from "@/lib/data";
import TestimonialCard from "@/components/custom-ui/TestimonialCard";
import { SectionHeading } from "@/components/SectionHeading";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
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
    <section id="testimonials" className="py-24 sm:py-32 relative bg-gray-950 text-white overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-70 sm:opacity-100">
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full mix-blend-screen filter blur-3xl opacity-15 sm:opacity-20 animate-blob"></div>
        <div className="absolute top-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-pink-500 to-red-600 rounded-full mix-blend-screen filter blur-3xl opacity-15 sm:opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <SectionHeading title="Testimonials" subtitle="What My Collaborators Say" />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:max-w-4xl mx-auto mt-10"
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
