"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GlassmorphicCard } from "@/components/custom-ui/GlassmorphicCard";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { Images } from "@/lib/images";

const AboutMeSection = () => {
  const profileImageUrl = Images.ProfilePlaceholder;
  const resumeUrl = "/resume/LanAnh_Frontend_CV.pdf";

  const imageContainerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "circOut", delay: 0.3 } },
  };

  return (
    <section id="about" className="py-24 sm:py-32 relative bg-gray-950 text-white overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-70 sm:opacity-100">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 sm:opacity-25 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 sm:opacity-25 animate-blob"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <SectionHeading title="About Me" subtitle="My journey" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start md:items-center">
          <motion.div
            className="relative"
            variants={ imageContainerVariants }
            initial="hidden"
            whileInView="visible"
            viewport={ { once: true, amount: 0.2 } }
          >
            <div className="absolute -inset-3 sm:-inset-4 rounded-xl bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-teal-500/30 blur-xl opacity-60 sm:opacity-70 transition-all duration-500 group-hover:opacity-90"></div>
            <div className="relative aspect-[3/4] sm:aspect-square rounded-xl overflow-hidden border border-zinc-800 shadow-2xl group">
              <Image
                src={ profileImageUrl }
                alt="Lan Anh - Frontend Developer"
                layout="fill"
                objectFit="cover"
                className="transform transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6">
                <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-md w-fit">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-xs sm:text-sm font-medium text-gray-100">Available for work</span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">
            <GlassmorphicCard>
              <p className="text-lg text-zinc-300 leading-relaxed">
                Hello! I'm <strong className="text-teal-400">Lan Anh</strong>, a passionate and detail-oriented Frontend Developer dedicated to crafting
                beautiful, intuitive, and high-performance web experiences. I thrive on turning complex problems into elegant solutions
                and bridging the gap between innovative design and robust technology.
              </p>
              <p className="text-lg text-zinc-300 mt-4 leading-relaxed">
                With a strong foundation in modern JavaScript frameworks like <strong className="font-semibold">React</strong> and <strong className="font-semibold">Next.js</strong>,
                I enjoy building responsive and accessible user interfaces that users love to interact with. I'm always eager to learn
                new technologies and continuously refine my skills to stay at the forefront of web development.
              </p>
              <p className="text-lg text-zinc-300 mt-4 leading-relaxed">
                I believe in a collaborative approach, working closely with designers and backend developers to deliver seamless
                and effective products. My goal is to not only meet user needs but to exceed their expectations with every project I undertake.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mt-8 pt-6 border-t border-zinc-700/50">
                <div>
                  <div className="text-xs sm:text-sm text-white/90">Name</div>
                  <div className="font-medium text-zinc-200">Lan Anh</div>
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-white/90">Email</div>
                  <Link href="mailto:dhlananh2309@gmail.com" className="font-medium text-zinc-200 hover:text-teal-400 transition-colors">
                    dhlananh2309@gmail.com
                  </Link>
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-white/90">Location</div>
                  <div className="font-medium text-zinc-200">Ho Chi Minh City, Vietnam</div>
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-white/90">Availability</div>
                  <div className="font-medium text-green-400">Open to opportunities</div>
                </div>
              </div>
            </GlassmorphicCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
