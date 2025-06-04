import Link from "next/link";
import Image from "next/image";

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
          <span className="block text-white">Hello, I&apos;m Lan Anh</span>
          <span className="block text-teal-400">FrontEnd Developer</span>
        </h1>
        <p className="mt-3 text-base sm:text-lg md:text-xl text-gray-300 max-w-xl mx-auto mb-8">
          Passionate about creating dynamic websites and applications with modern frontend technology.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/#projects"
            className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 shadow-lg"
          >
            View My Projects
          </Link>
          <Link
            href="/#contact"
            className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 shadow-lg"
          >
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
