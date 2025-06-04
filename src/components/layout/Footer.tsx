"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { IoArrowUpCircleOutline } from "react-icons/io5";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/dhlananh",
    icon: FaLinkedin,
    ariaLabel: "Connect with me on LinkedIn",
  },
  {
    name: "GitHub",
    url: "https://github.com/dhlananhh",
    icon: FaGithub,
    ariaLabel: "Check out my projects on GitHub",
  },
  {
    name: "Email",
    url: "mailto:dhlananh2309@gmail.com",
    icon: FaEnvelope,
    ariaLabel: "Email me",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.footer
      initial={ { opacity: 0, y: 20 } }
      whileInView={ { opacity: 1, y: 0 } }
      viewport={ { once: true, amount: 0.2 } }
      transition={ { duration: 0.6 } }
      className="bg-gray-800 text-gray-400 py-10 sm:py-12"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          {/* Social Links */ }
          <div className="flex justify-center md:justify-start space-x-5">
            { socialLinks.map((link) => (
              <Link
                key={ link.name }
                href={ link.url }
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ link.ariaLabel }
                className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
              >
                <link.icon size={ 24 } />
              </Link>
            )) }
          </div>

          {/* Copyright */ }
          <div className="text-sm">
            <p>© { currentYear } Lan Anh. All rights reserved.</p>
            <p className="mt-1">
              Website built with { " " }
              <Link href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 underline">
                Next.js
              </Link>{ " " }
              & { " " }
              <Link href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 underline">
                Tailwind CSS
              </Link>.
            </p>
          </div>

          {/* Back to top */ }
          <div className="flex justify-center md:justify-end">
            <button
              onClick={ scrollToTop }
              aria-label="Scroll to top"
              className="flex items-center text-gray-400 hover:text-teal-400 transition-colors duration-300 group"
            >
              <span className="mr-2 group-hover:underline">Back to Top</span>
              <IoArrowUpCircleOutline size={ 28 } />
            </button>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
