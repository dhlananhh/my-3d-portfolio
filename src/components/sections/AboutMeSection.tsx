"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const AboutMeSection = () => {
  const profileImageUrl = "/images/profile-placeholder.png";

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } },
  };

  return (
    <section id="about" className="py-16 sm:py-24 bg-gray-700 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={ { opacity: 0, y: -20 } }
          whileInView={ { opacity: 1, y: 0 } }
          viewport={ { once: true, amount: 0.5 } }
          transition={ { duration: 0.5 } }
          className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 text-teal-400"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 sm:gap-12 items-center">
          <motion.div
            className="md:col-span-2 flex justify-center md:justify-start"
            variants={ imageVariants }
            initial="hidden"
            whileInView="visible"
            viewport={ { once: true, amount: 0.3 } }
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-teal-500">
              <Image
                src={ profileImageUrl }
                alt="Lan Anh - Frontend Developer"
                layout="fill"
                objectFit="cover"
                className="transform hover:scale-105 transition-transform duration-500"
                aria-label="This is RM (BTS), not my boyfriend. I don't have a profile image, so I set him as mine."
                aria-labelledby="Me"
              />
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-3 text-center md:text-left"
            variants={ textVariants }
            initial="hidden"
            whileInView="visible"
            viewport={ { once: true, amount: 0.3 } }
          >
            <p className="text-lg sm:text-xl text-gray-300 mb-6 leading-relaxed text-justify">
              Hello! I&apos;m { " " }
              <strong className="text-teal-400">Lan Anh</strong>,
              a passionate and detail-oriented Frontend Developer dedicated to crafting
              beautiful, intuitive, and high-performance web experiences.
              I thrive on turning complex problems into elegant solutions
              and bridging the gap between innovative design and robust technology.
            </p>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 leading-relaxed text-justify">
              With a strong foundation in modern JavaScript frameworks like { " " }
              <strong className="font-semibold">React</strong> { " " }
              and <strong className="font-semibold">Next.js</strong>,
              I enjoy building responsive and accessible user interfaces that users love to interact with.
              I&apos;m always eager to learn
              new technologies and continuously refine my skills to stay at the forefront of web development.
            </p>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed text-justify">
              I believe in a collaborative approach, working closely with designers and backend developers to deliver seamless and effective products.
              My goal is to not only meet user needs but to exceed their expectations with every project I undertake.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
