"use client";

import { Download, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const resumeLink = "/resume/LanAnh_Frontend_CV.pdf";
const resumeFilename = "LanAnh_Frontend_CV.pdf";

export default function ResumeSection() {
  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } },
  };

  const buttonsContainerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.2 } },
  };

  return (
    <section id="resume" className="py-24 sm:py-32 relative bg-gray-950 text-white text-center overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-70 sm:opacity-100">
        <div className="absolute top-1/4 right-1/3 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full mix-blend-screen filter blur-3xl opacity-15 sm:opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mix-blend-screen filter blur-3xl opacity-15 sm:opacity-20 animate-blob"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <SectionHeading title="Resume" subtitle="My Professional Background" />

        <motion.p
          variants={ paragraphVariants }
          initial="hidden"
          whileInView="visible"
          viewport={ { once: true, amount: 0.5 } }
          className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto"
        >
          Take a look at my professional experience and skills. You can view it directly in your browser or download a PDF copy for your convenience.
        </motion.p>
        <motion.div
          variants={ buttonsContainerVariants }
          initial="hidden"
          whileInView="visible"
          viewport={ { once: true, amount: 0.5 } }
          className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6"
        >
          <Button
            asChild
            size="lg"
            className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-lg px-6 py-3 text-center"
          >
            <Link href={ resumeLink } target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center">
              <Eye size={ 50 } className="mr-2" />
              View Online
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-gray-400 text-gray-200 hover:text-white hover:bg-gray-700/50 focus:ring-4 focus:outline-none focus:ring-gray-600 font-medium rounded-lg text-lg px-6 py-3 text-center"
          >
            <Link href={ resumeLink } download={ resumeFilename } className="inline-flex items-center justify-center">
              <Download size={ 20 } className="mr-2" />
              Download CV (.pdf)
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
