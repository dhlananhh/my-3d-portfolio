"use client";

import Image from "next/image";
import { Testimonial } from "@/lib/data";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <motion.div
      className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg h-full flex flex-col"
      whileHover={ { y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1)" } }
      transition={ { type: "spring", stiffness: 200, damping: 15 } }
    >
      <Quote className="text-teal-500 w-8 h-8 sm:w-10 sm:h-10 mb-4 opacity-50" />
      <p className="text-gray-300 italic mb-6 flex-grow">
        &quot;
        { testimonial.quote }
        &quot;
      </p>
      <div className="flex items-center mt-auto">
        { testimonial.avatarUrl && (
          <div className="flex-shrink-0 mr-4">
            <Image
              src={ testimonial.avatarUrl }
              alt={ testimonial.author }
              width={ 50 }
              height={ 50 }
              className="rounded-full object-cover"
            />
          </div>
        ) }
        <div>
          <p className="font-semibold text-teal-400">{ testimonial.author }</p>
          { testimonial.company && <p className="text-sm text-gray-500">{ testimonial.company }</p> }
        </div>
      </div>
    </motion.div>
  );
}
