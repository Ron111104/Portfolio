"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Github, Linkedin, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/Ron111104", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ronak-chordia/", label: "LinkedIn" },
  { icon: Code2, href: "https://leetcode.com/u/Ron1104/", label: "LeetCode" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) => link.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "glass py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.a
          href="#home"
          className="font-mono text-xl font-bold neon-text"
          whileHover={{ scale: 1.05 }}
        >
          &lt;RC /&gt;
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "font-mono text-sm relative py-2 transition-colors duration-300",
                activeSection === link.href.substring(1)
                  ? "text-neon-purple"
                  : "text-subtext hover:text-heading"
              )}
            >
              {link.name}
              {activeSection === link.href.substring(1) && (
                <motion.span
                  layoutId="navbar-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-neon rounded-full"
                />
              )}
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className="hidden md:flex items-center gap-4">
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-subtext hover:text-neon-purple transition-colors duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              aria-label={social.label}
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-heading"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden glass mt-2 mx-4 rounded-xl p-6"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "font-mono text-sm py-2 transition-colors duration-300",
                  activeSection === link.href.substring(1)
                    ? "text-neon-purple"
                    : "text-subtext hover:text-heading"
                )}
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-4 border-t border-divider">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-subtext hover:text-neon-purple transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
