"use client";

import Link from "next/link";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import React, { useEffect } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useTheme } from "next-themes";

const COLORS_TOP = [ "#13FFAA", "#1E67C6", "#CE84CF", "#DD335C" ];

export default function HeroSection() {
  const color = useMotionValue(COLORS_TOP[ 0 ]);
  const { theme } = useTheme();

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [ color ]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

  return (
    <motion.section
      id="hero"
      style={ {
        backgroundImage,
      } }
      className="relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-foreground"
    >
      <div className="relative z-10 flex flex-col items-center text-center">
        <h1 className="max-w-4xl text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 tracking-tight leading-tight">
          <span className="bg-gradient-to-r from-green-400 via-teal-500 to-blue-600 bg-clip-text text-transparent block">
            Hello, I'm Lan Anh
          </span>
          <span className="block text-teal-400 mt-2">
            Frontend Developer
          </span>
        </h1>

        <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed text-muted-foreground text-white">
          Passionate about creating dynamic websites and applications with modern frontend technology.
        </p>

        <motion.div
          initial={ { opacity: 0, y: 20 } }
          animate={ { opacity: 1, y: 0 } }
          transition={ { duration: 0.5, delay: 0.4 } }
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <Button
            asChild
            size="lg"
            className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-lg px-6 py-3 text-center"
          >
            <Link href="#projects" className="flex items-center">
              View Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="font-medium rounded-lg text-lg px-6 py-3 text-center hover:scale-105"
            onClick={ (e) => {
              e.preventDefault();
              const contactSection = document.querySelector("#contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            } }
          >
            <Link href="#contact">Contact me</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={ { opacity: 0 } }
          animate={ { opacity: 1 } }
          transition={ { duration: 0.5, delay: 0.6 } }
          className="flex items-center justify-center space-x-4 sm:space-x-6"
        >
          <Link
            href="https://github.com/dhlananhh"
            passHref
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <Button
              variant="ghost"
              size="icon"
              className="p-2.5 sm:p-3 rounded-full shadow-lg bg-gray-200 hover:bg-blue-300 transition-colors"
            >
              <Github className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Link
            href="https://linkedin.com/in/dhlananh"
            passHref target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <Button
              variant="ghost"
              size="icon"
              className="p-2.5 sm:p-3 rounded-full shadow-lg bg-gray-200 hover:bg-blue-300 transition-colors"
            >
              <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </Link>
          <Link
            href="mailto:dhlananh2309@gmail.com"
            passHref
            aria-label="Send Email"
          >
            <Button
              variant="ghost"
              size="icon"
              className="p-2.5 sm:p-3 rounded-full shadow-lg bg-gray-200 hover:bg-blue-300 transition-colors"
            >
              <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="sr-only">Email</span>
            </Button>
          </Link>
        </motion.div>
      </div>

      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={ 50 } count={ 2500 } factor={ 4 } fade speed={ 2 } />
        </Canvas>
      </div>
    </motion.section>
  );
}
