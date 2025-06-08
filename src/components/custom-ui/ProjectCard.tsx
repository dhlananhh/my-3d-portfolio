"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/lib/data";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  ExternalLink as LucideExternalLink,
  CalendarDays,
  GitBranch,
  Construction,
} from "lucide-react";

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

const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat("en-UK", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(date);
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const statusColor =
    project.projectStatus.toLowerCase() === "completed"
      ? "bg-green-500 text-green-50"
      : project.projectStatus.toLowerCase() === "in progress"
        ? "bg-yellow-500 text-yellow-50"
        : "bg-gray-500 text-gray-50";

  return (
    <motion.div
      variants={ cardVariants }
      initial="hidden"
      whileInView="visible"
      viewport={ { once: true, amount: 0.2 } }
      custom={ index }
      className={ `bg-gray-800 rounded-xl overflow-hidden shadow-xl transition-all duration-300 ease-in-out hover:shadow-teal-500/30 hover:scale-[1.02] flex flex-col` }
    >

      <div className="relative w-full h-56 sm:h-60">
        <Image
          src={ project.imageUrl || "/images/placeholder-project.png" }
          alt={ project.title }
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500"
        />
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-teal-400">
          { project.title }
        </h3>
        <p className="text-gray-400 text-sm mb-3 line-clamp-3 flex-grow">
          { project.shortDescription }
        </p>

        <div className="flex flex-wrap text-xs text-gray-500 mb-3 gap-x-4 gap-y-1">
          <div className="flex items-center">
            <CalendarDays size={ 14 } className="mr-1.5 text-teal-500" />
            <span>Start: { formatDate(new Date(project.projectStartDate)) }</span>
          </div>
          <div className="flex items-center">
            { project.projectStatus.toLowerCase() === "in progress" ? (
              <Construction size={ 14 } className="mr-1.5 text-yellow-400" />
            ) : (
              <GitBranch size={ 14 } className="mr-1.5 text-green-400" />
            ) }
            Status:
            <span
              className={ `ml-1 px-1.5 py-0.5 rounded-sm text-xs ${statusColor}` }
            >
              { project.projectStatus }
            </span>
          </div>
        </div>

        <div className="mb-4">
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-700 bg-teal-200">
            { project.category }
          </span>
        </div>

        <p className="text-xs text-gray-400 mb-1 font-medium">
          Technologies & Frameworks:
        </p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          { project.tools.map((tool) => (
            <span
              key={ tool }
              className="text-xs bg-gray-700 text-gray-300 px-2 py-0.5 rounded-full"
            >
              { tool }
            </span>
          )) }
        </div>

        {/* Links: GitHub, Live Demo, Details */ }
        <div className="mt-auto pt-4 border-t border-gray-700 flex flex-col sm:flex-row sm:items-center gap-3">
          { project.githubUrl && (
            <Link
              href={ project.githubUrl }
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center sm:text-left inline-flex items-center justify-center sm:justify-start gap-2 bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white
              font-medium py-2 px-4 rounded-md transition-colors text-sm"
            >
              <FaGithub size={ 16 } />
              View Code
            </Link>
          ) }
          { project.liveDemoUrl && (
            <Link
              href={ project.liveDemoUrl }
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:text-left inline-flex items-center justify-center sm:justify-start gap-2 rounded-lg text-md py-2 px-4 text-center font-medium
              transition-colors bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
            >
              <FaExternalLinkAlt size={ 14 } />
              Live Demo
            </Link>
          ) }
          { !project.githubUrl &&
            !project.liveDemoUrl && (
              <Link
                href={ `/projects/${project.slug}` }
                className="flex-1 sm:text-left inline-flex items-center justify-center sm:justify-start gap-2 rounded-lg text-md py-2 px-4 text-center font-medium text-teal-400 hover:text-teal-300
                transition-colors text-sm border border-teal-500 hover:bg-teal-500/10"
              >
                <LucideExternalLink size={ 16 } />
                View Details
              </Link>
            ) }
        </div>
      </div>
    </motion.div>
  );
}
