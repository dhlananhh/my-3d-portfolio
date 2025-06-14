"use client";

import ContactForm from "@/components/custom-ui/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

const contactDetails = [
  {
    name: "Email",
    value: "dhlananh2309@gmail.com",
    href: "mailto:dhlananh2309@gmail.com",
    icon: FaEnvelope,
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/dhlananh",
    href: "https://linkedin.com/in/dhlananh",
    icon: FaLinkedin,
  },
  {
    name: "GitHub",
    value: "github.com/dhlananhh",
    href: "https://github.com/dhlananhh",
    icon: FaGithub,
  },
];

const currentStatus = "Available for freelance work and full-time opportunities";

export default function ContactSection() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative bg-gray-950 text-white overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-70 sm:opacity-100">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 sm:opacity-25 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-teal-500 to-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 sm:opacity-25 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/5 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full mix-blend-screen filter blur-3xl opacity-15 sm:opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <SectionHeading title="Get In Touch" subtitle="Let's work together" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          <motion.div
            variants={ cardVariants }
            initial="hidden"
            whileInView="visible"
            viewport={ { once: true, amount: 0.2 } }
            className="bg-zinc-800/70 backdrop-blur-md border border-zinc-700/50 rounded-xl p-6 sm:p-8 shadow-xl mt-10"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
            <ul className="space-y-5 mb-8">
              { contactDetails.map((item) => (
                <li key={ item.name } className="flex items-start gap-4">
                  <item.icon className="text-blue-400 w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-zinc-400">{ item.name }</p>
                    <Link
                      href={ item.href }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-200 hover:text-blue-300 transition-colors break-all"
                    >
                      { item.value }
                    </Link>
                  </div>
                </li>
              )) }
            </ul>

            <div className="border-t border-zinc-700/50 pt-6">
              <h4 className="text-lg font-medium text-white mb-3">Current Status</h4>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                <p className="text-sm text-zinc-300">{ currentStatus }</p>
              </div>
            </div>
          </motion.div>

          <div className="bg-zinc-800/70 backdrop-blur-md border border-zinc-700/50 rounded-xl p-6 sm:p-8 shadow-xl mt-10">
            <h3 className="text-2xl font-semibold text-white mb-6">Send Me a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
