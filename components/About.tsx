"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { MapPin, GraduationCap, Briefcase, Award } from "lucide-react";

const stats = [
  { label: "CGPA", value: "9.18", icon: GraduationCap },
  { label: "Projects", value: "10+", icon: Briefcase },
  { label: "Certifications", value: "4+", icon: Award },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 bg-background-section">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <span className="font-mono text-neon-cyan text-sm">// About Me</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 neon-text">
              Who I Am
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mx-auto"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                {/* Neon Border Glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-neon p-1 animate-glow-pulse">
                  <div className="w-full h-full rounded-full bg-background-card overflow-hidden">
                    <Image
                      src="/img.jpeg"
                      alt="Ronak Chordia"
                      width={320}
                      height={320}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>
                {/* Floating decorative elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-neon-purple rounded-full"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-2 -left-2 w-6 h-6 bg-neon-cyan rounded-full"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-heading mb-4">
                Ronak Chordia
              </h3>
              <div className="flex items-center gap-2 text-subtext mb-6">
                <MapPin size={16} className="text-neon-purple" />
                <span>Chennai, India</span>
              </div>

              <p className="text-muted leading-relaxed mb-6">
                I&apos;m a final-year BTech Computer Science student at VIT Chennai, 
                passionate about building intelligent systems that make a difference. 
                With hands-on experience in full-stack development and machine learning, 
                I&apos;ve worked on production-grade platforms in finance and legaltech at ProfitAngles.
              </p>

              <p className="text-muted leading-relaxed mb-8">
                My expertise spans from architecting scalable web applications with React, 
                Next.js, and Django to implementing cutting-edge NLP solutions using 
                FinBERT, OpenAI, and custom LLMs. I thrive on leading teams, solving 
                complex problems, and turning innovative ideas into reality.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="glass-card p-4 text-center hover:shadow-neon-purple transition-shadow duration-300"
                  >
                    <stat.icon className="w-6 h-6 mx-auto mb-2 text-neon-purple" />
                    <div className="text-2xl font-bold neon-text">{stat.value}</div>
                    <div className="text-xs text-muted">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
