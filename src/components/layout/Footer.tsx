"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { IoChevronUpCircleSharp } from "react-icons/io5";

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
      initial={ { opacity: 0 } }
      whileInView={ { opacity: 1 } }
      viewport={ { once: true, amount: 0.1 } }
      transition={ { duration: 0.8 } }
      className="bg-black text-gray-400 py-10 sm:py-12"
    >
      <div className="container mx-auto px-4">
        {/* Social Links */ }
        <div className="flex justify-center items-center space-x-6 mb-6">
          { socialLinks.map((link) => (
            <motion.a
              key={ link.name }
              href={ link.url }
              target="_blank"
              rel="noopener noreferrer"
              aria-label={ link.ariaLabel }
              className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
              whileHover={ { y: -3, scale: 1.1 } }
              transition={ { type: "spring", stiffness: 300 } }
            >
              <link.icon size={ 28 } />
            </motion.a>
          )) }
        </div>

        {/* Copyrights */ }
        <div className="text-sm text-center text-gray-500">
          <p>© { currentYear } Lan Anh. All rights reserved.</p>
          <p className="mt-1">
            Website built with { " " }
            <Link href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 underline">
              Next.js
            </Link> { " " }
            & { " " }
            <Link href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 underline">
              Tailwind CSS
            </Link>
            . Hosted on { " " }
            <Link href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 underline">
              Vercel
            </Link>.
          </p>
        </div>
      </div>

      {/* Back to Top Button */ }
      <motion.button
        onClick={ scrollToTop }
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-teal-500 text-white hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50 transition-all duration-300 shadow-lg"
        whileHover={ { scale: 1.1, rotate: 360 } }
        whileTap={ { scale: 0.95 } }
        initial={ { scale: 0, opacity: 0 } }
        animate={ { scale: 1, opacity: 1 } }
        exit={ { scale: 0, opacity: 0 } }
        transition={ { type: "spring", stiffness: 260, damping: 20, rotate: { duration: 0.7 } } }
      >
        <IoChevronUpCircleSharp size={ 30 } />
      </motion.button>
    </motion.footer>
  );
};

export default Footer;
