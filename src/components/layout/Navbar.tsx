"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: "/#hero", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#resume", label: "Resume" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [ isOpen, setIsOpen ] = useState(false);
  const [ isScrolled, setIsScrolled ] = useState(false);
  const [ activeSection, setActiveSection ] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      let currentSection = "";
      navItems.forEach(item => {
        if (item.href.startsWith("/#")) {
          const sectionId = item.href.substring(2);
          const sectionElement = document.getElementById(sectionId);
          if (sectionElement) {
            const rect = sectionElement.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
              currentSection = sectionId;
            }
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const sectionId = href.substring(2);
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };


  return (
    <nav
      className={ cn(
        "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ease-in-out",
        isScrolled || isOpen
          ? "bg-background/80 backdrop-blur-lg shadow-md border-b border-border/50"
          : "bg-transparent"
      ) }
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <Link
              href="/#hero"
              onClick={ (e) => handleLinkClick(e, "/#hero") }
              className="text-2xl font-bold bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent"
            >
              Lan Anh
            </Link>
          </div>

          {/* Desktop Menu */ }
          <div className="hidden md:flex items-center space-x-2">
            { navItems.map((item) => (
              <Link
                key={ item.label }
                href={ item.href }
                onClick={ (e) => handleLinkClick(e, item.href) }
                className={ cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200",
                  activeSection === item.href.substring(2)
                    ? "text-teal-300 bg-teal-500/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/70"
                ) }
              >
                { item.label }
              </Link>
            )) }
          </div>

          {/* Mobile Menu Button */ }
          <div className="md:hidden flex items-center">
            <button
              onClick={ toggleMenu }
              className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
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
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md shadow-lg border-t border-border/50">
          <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3">
            { navItems.map((item) => (
              <Link
                key={ item.label }
                href={ item.href }
                onClick={ (e) => handleLinkClick(e, item.href) }
                className={ cn(
                  "block px-3 py-2 rounded-md text-base font-medium transition-colors",
                  activeSection === item.href.substring(2)
                    ? "text-primary bg-accent"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/70"
                ) }
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
