"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/lib/data";
import { ExternalLink, Video } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      variants={ cardVariants }
      initial="hidden"
      whileInView="visible"
      viewport={ { once: true, amount: 0.2 } }
      custom={ index }
      className="bg-gray-800 rounded-lg overflow-hidden shadow-xl transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105"
    >
      <div className="relative w-full h-56 sm:h-64">
        <Image
          src={ project.imageUrl }
          alt={ project.title }
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 group-hover:scale-110"
        />
        { project.videoUrl && (
          <div className="absolute top-2 right-2 bg-black bg-opacity-50 p-2 rounded-full text-white">
            <Video size={ 20 } />
          </div>
        ) }
      </div>
      <div className="p-5">
        <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-teal-400">{ project.title }</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-3">{ project.shortDescription }</p>
        <div className="mb-4">
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
            { project.category }
          </span>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          { project.tools.map((tool) => (
            <span key={ tool } className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full">
              { tool }
            </span>
          )) }
        </div>
        <Link
          href={ `/projects/${project.slug}` }
          className="inline-flex items-center text-teal-400 hover:text-teal-300 font-medium transition-colors"
        >
          View Details
          <ExternalLink size={ 16 } className="ml-2" />
        </Link>
      </div>
    </motion.div>
  );
}
