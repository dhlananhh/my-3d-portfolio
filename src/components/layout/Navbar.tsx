"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavItem {
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#resume", label: "Resume" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [ isOpen, setIsOpen ] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 bg-opacity-80 backdrop-blur-md sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold text-teal-400 hover:text-teal-300 transition-colors"
            >
              Lan Anh
            </Link>
          </div>
          {/* Desktop Menu */ }
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              { navItems.map((item) => (
                <Link
                  key={ item.label }
                  href={ item.href }
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  onClick={ (e) => {
                    if (item.href.startsWith("/#")) {
                      e.preventDefault();
                      document.querySelector(item.href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
                      setIsOpen(false);
                    } else {
                      setIsOpen(false);
                    }
                  } }
                >
                  { item.label }
                </Link>
              )) }
            </div>
          </div>
          {/* Mobile Menu Button */ }
          <div className="md:hidden flex items-center">
            <button
              onClick={ toggleMenu }
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={ isOpen }
              aria-label={ isOpen ? "Close menu" : "Open menu" }
            >
              { isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" /> }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */ }
      { isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-gray-800 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            { navItems.map((item) => (
              <Link
                key={ item.label }
                href={ item.href }
                onClick={ (e) => {
                  if (item.href.startsWith("/#")) {
                    e.preventDefault();
                    document.querySelector(item.href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
                  }
                  setIsOpen(false);
                } }
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                { item.label }
              </Link>
            )) }
          </div>
        </div>
      ) }
    </nav>
  );
}
