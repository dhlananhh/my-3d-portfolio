"use client"

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center text-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image src="/images/hero-background.png" alt="Hero Background" layout="fill" objectFit="cover" priority />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      <div className="relative z-10 p-4 sm:p-8">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
          <span className="bg-gradient-to-r from-green-400 via-teal-500 to-blue-600 bg-clip-text text-transparent block">
            Hello, I&apos;m Lan Anh
          </span>
          <span className="block text-teal-400">
            FrontEnd Developer
          </span>
        </h1>
        <p className="mt-3 text-base sm:text-lg md:text-xl text-gray-300 max-w-xl mx-auto mb-8">
          Passionate about creating dynamic websites and applications with modern frontend technology.
        </p>

        <motion.div
          initial={ { opacity: 0, y: 20 } }
          animate={ { opacity: 1, y: 0 } }
          transition={ { duration: 0.5, delay: 0.4 } }
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-green-400 to-blue-600 hover:from-green-700 hover:to-blue-600 text-white font-semibold rounded-lg text-lg shadow-lg"
          >
            <Link href="#projects">
              View Projects <ArrowRight className="ml-1 h-5 w-5 items-center justify-center" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="text-white font-semibold rounded-lg text-lg shadow-lg hover:scale-105"
          >
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
