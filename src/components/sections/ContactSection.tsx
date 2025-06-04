"use client";

import ContactForm from "@/components/ui/ContactForm";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/dhlananh",
    icon: FaLinkedin,
    color: "hover:text-blue-400",
  },
  {
    name: "GitHub",
    url: "https://github.com/dhlananhh",
    icon: FaGithub,
    color: "hover:text-gray-400",
  },
  {
    name: "Email",
    url: "mailto:dhlananh2309@gmail.com",
    icon: FaEnvelope,
    color: "hover:text-red-400",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={ { opacity: 0, y: -20 } }
          whileInView={ { opacity: 1, y: 0 } }
          viewport={ { once: true, amount: 0.5 } }
          transition={ { duration: 0.5 } }
          className="text-3xl sm:text-4xl font-bold text-center mb-12 text-teal-400"
        >
          Contact
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          <motion.p
            initial={ { opacity: 0 } }
            whileInView={ { opacity: 1 } }
            viewport={ { once: true, amount: 0.5 } }
            transition={ { duration: 0.5, delay: 0.2 } }
            className="text-lg text-center text-gray-300 mb-10"
          >
            Have an interesting project you want to discuss, or just want to say hello? Feel free to send me a message! I&apos;d love to hear from you.
          </motion.p>
          <ContactForm />

          <motion.div
            initial={ { opacity: 0, y: 20 } }
            whileInView={ { opacity: 1, y: 0 } }
            viewport={ { once: true, amount: 0.5 } }
            transition={ { duration: 0.5, delay: 0.6 } }
            className="mt-12 text-center"
          >
            <p className="text-gray-400 mb-4">Or find me on:</p>
            <div className="flex justify-center space-x-6">
              { socialLinks.map((link) => (
                <motion.a
                  key={ link.name }
                  href={ link.url }
                  target="_blank"
                  rel="noopener noreferrer"
                  className={ `text-gray-500 transition-colors duration-300 ${link.color}` }
                  aria-label={ `Connect with me via ${link.name}` }
                  whileHover={ { y: -3, scale: 1.1 } }
                  transition={ { type: "spring", stiffness: 300 } }
                >
                  <link.icon size={ 28 } />
                </motion.a>
              )) }
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
