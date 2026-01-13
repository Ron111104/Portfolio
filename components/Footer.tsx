"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Code2, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/Ron111104", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ronak-chordia/", label: "LinkedIn" },
  { icon: Code2, href: "https://leetcode.com/u/Ron1104/", label: "LeetCode" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 bg-background border-t border-divider">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.a
            href="#home"
            className="font-mono text-xl font-bold neon-text"
            whileHover={{ scale: 1.05 }}
          >
            &lt;RC /&gt;
          </motion.a>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-neon-purple transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-muted text-sm flex items-center gap-1">
            Made with <Heart size={14} className="text-neon-pink" /> by Ronak Chordia &copy; {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
