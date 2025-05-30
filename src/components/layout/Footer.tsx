import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link
              href="#home"
              className="text-xl font-bold bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent"
            >
              Lan Anh
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Passionate about creating dynamic websites and applications with modern frontend technology.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              { [ "Home", "About", "Projects", "Skills", "Testimonials", "Resume", "Contact" ].map((item) => (
                <li key={ item }>
                  <Link
                    href={ `#${item.toLowerCase()}` }
                    className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                  >
                    { item }
                  </Link>
                </li>
              )) }
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              { [ "Web Development" ].map((item) => (
                <li key={ item }>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors"
                  >
                    { item }
                  </Link>
                </li>
              )) }
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <Mail className="h-4 w-4 mr-2" /> dhlananh2309@gmail.com
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <Twitter className="h-4 w-4 mr-2" /> @ai_developer
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <Github className="h-4 w-4 mr-2" /> github.com/aidev
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <Linkedin className="h-4 w-4 mr-2" /> linkedin.com/in/aidev
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © { new Date().getFullYear() } AI.Dev. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="#"
                className="text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky footer with social links */ }
      <div className="fixed bottom-4 left-4 z-40 flex flex-col space-y-2">
        <a
          href="#"
          className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
          aria-label="GitHub"
        >
          <Github className="h-5 w-5 text-gray-700 dark:text-gray-300" />
        </a>
        <a
          href="#"
          className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-5 w-5 text-gray-700 dark:text-gray-300" />
        </a>
        <a
          href="#"
          className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
          aria-label="Email"
        >
          <Mail className="h-5 w-5 text-gray-700 dark:text-gray-300" />
        </a>
      </div>
    </footer>
  )
}
