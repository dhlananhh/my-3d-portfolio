"use client";
import { Download, Eye } from "lucide-react";
import { motion } from "framer-motion";

const resumeLink = "/resume/CV_DUONG HOANG LAN ANH.pdf";

export default function ResumeSection() {
  return (
    <section id="resume" className="py-16 sm:py-24 bg-gray-800 text-center">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={ { opacity: 0, y: -20 } }
          whileInView={ { opacity: 1, y: 0 } }
          viewport={ { once: true, amount: 0.5 } }
          transition={ { duration: 0.5 } }
          className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-teal-400"
        >
          Resume / CV
        </motion.h2>
        <motion.p
          initial={ { opacity: 0, y: 20 } }
          whileInView={ { opacity: 1, y: 0 } }
          viewport={ { once: true, amount: 0.5 } }
          transition={ { duration: 0.5, delay: 0.2 } }
          className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto"
        >
          Check out my experience. You can view it online or download a PDF.
        </motion.p>
        <motion.div
          initial={ { opacity: 0, scale: 0.8 } }
          whileInView={ { opacity: 1, scale: 1 } }
          viewport={ { once: true, amount: 0.5 } }
          transition={ { duration: 0.5, delay: 0.4 } }
          className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6"
        >
          <a
            href={ resumeLink }
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-300 transform hover:scale-105 shadow-md w-full sm:w-auto"
          >
            <Eye size={ 20 } className="mr-2" />
            View Online
          </a>
          <a
            href={ resumeLink }
            download="CV_DUONG HOANG LAN ANH.pdf"
            className="inline-flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-300 transform hover:scale-105 shadow-md w-full sm:w-auto"
          >
            <Download size={ 20 } className="mr-2" />
            Download CV (.pdf)
          </a>
        </motion.div>

        {/* <motion.div
          initial={ { opacity: 0 } }
          whileInView={ { opacity: 1 } }
          viewport={ { once: true, amount: 0.1 } }
          transition={ { duration: 0.5, delay: 0.6 } }
          className="mt-12 aspect-w-16 aspect-h-9 sm:aspect-h-12 max-w-4xl mx-auto bg-gray-700 rounded-lg overflow-hidden shadow-lg"
        >
          <iframe
            src={ `${resumeLink}#toolbar=0&navpanes=0&scrollbar=0` }
            title="Resume Preview"
            className="w-full h-full"
            style={ { minHeight: '600px' } }
          ></iframe>
        </motion.div> */}
      </div>
    </section>
  );
}
