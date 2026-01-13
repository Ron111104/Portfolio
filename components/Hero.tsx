"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";

const roles = [
  "Full-Stack Developer",
  "ML Engineer",
  "NLP Enthusiast",
  "Tech Innovator",
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.substring(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.substring(0, displayText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-60" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      
      {/* Floating Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-blue/20 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-neon-cyan text-sm md:text-base mb-4 block">
            &lt;Hello World /&gt;
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          <span className="text-heading">I&apos;m </span>
          <span className="neon-text neon-glow">Ronak Chordia</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="h-12 md:h-16 flex items-center justify-center mb-8"
        >
          <span className="font-mono text-xl md:text-3xl text-subtext">
            {displayText}
            <span className="inline-block w-0.5 h-6 md:h-8 bg-neon-purple ml-1 animate-blink" />
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-muted text-base md:text-lg max-w-2xl mx-auto mb-10"
        >
          Final-year BTech CSE student at VIT Chennai with expertise in full-stack development, 
          machine learning, and NLP. Building production-grade systems with AI/ML to solve real-world problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="btn-neon px-8 py-4 text-white font-medium flex items-center gap-2 animate-glow-pulse"
          >
            <Mail size={18} />
            Get In Touch
          </a>
          <a
            href="#projects"
            className="glass-card px-8 py-4 text-subtext font-medium flex items-center gap-2 hover:text-heading hover:border-neon-purple/50 transition-all duration-300"
          >
            <Download size={18} />
            View Projects
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <a href="#about" className="text-subtext hover:text-neon-purple transition-colors">
          <ArrowDown size={24} />
        </a>
      </motion.div>
    </section>
  );
}
