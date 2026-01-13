"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Brain, Scale, Shield, Trophy } from "lucide-react";

const projects = [
  {
    title: "Stock Market Prediction",
    description:
      "Dual-branch GRU–LSTM forecasting framework with adaptive feature selection and 40+ indicators. Achieved 99.3% directional accuracy (R²=0.97) across 32 S&P 500 stocks.",
    tags: ["Python", "TensorFlow", "LSTM", "GRU", "Research"],
    icon: Trophy,
    github: "https://github.com/Ron111104/US_StockPredictions",
    live: null,
    featured: true,
    status: "Research Paper Under Review",
  },
  {
    title: "FPLMate",
    description:
      "AI-driven fantasy football app delivering real-time injury updates, personalized recommendations, and secure visual dashboards with Firebase Auth.",
    tags: ["Next.js", "Django", "Firebase", "AI", "Vercel"],
    icon: Brain,
    github: "https://github.com/Ron111104/fplmate_frontend",
    live: "https://fplmate.vercel.app/",
    featured: true,
  },
  {
    title: "Legalytics",
    description:
      "Full-stack AI legal research tool with multilingual support (English, Hindi, Tamil). Uses FAISS, Transformers, and OCR for document insights through Q&A engine.",
    tags: ["FastAPI", "Next.js", "NLP", "FAISS", "SpaCy"],
    icon: Scale,
    github: "https://github.com/Ron111104/LEGALYTICS",
    live: "https://legalytics.vercel.app/",
    featured: true,
  },
  {
    title: "Obscurix",
    description:
      "Secure AI-powered content redaction and rewriting tool. Removes PII using SpaCy + regex, supports OCR, detects toxic content, and converts code to pseudocode.",
    tags: ["Next.js", "Django", "AWS EC2", "MongoDB", "Gemini API"],
    icon: Shield,
    github: "https://github.com/Ron111104/Obscurix",
    live: "https://obscurix.vercel.app/",
    featured: true,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-24 bg-background-section">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Title */}
          <div className="text-center mb-16">
            <span className="font-mono text-neon-cyan text-sm">// My Work</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 neon-text">
              Featured Projects
            </h2>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative"
              >
                <div className="glass-card p-6 h-full neon-border hover:shadow-neon-card transition-all duration-500 hover:-translate-y-2 relative">

                  {/* HEADER */}
                  <div className="flex items-start justify-between mb-4 relative z-50 pointer-events-auto">
                    <div className="p-3 rounded-xl bg-gradient-neon">
                      <project.icon className="w-6 h-6 text-white" />
                    </div>

                    <div className="flex gap-3 relative z-50 pointer-events-auto">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View GitHub"
                          className="relative z-50 pointer-events-auto p-2 rounded-lg bg-background-card border border-divider hover:border-neon-purple hover:bg-neon-purple/10 transition-all duration-300 group/icon"
                        >
                          <Github
                            size={20}
                            className="text-muted group-hover/icon:text-neon-purple transition-colors"
                          />
                        </a>
                      )}

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View Live Site"
                          className="relative z-50 pointer-events-auto p-2 rounded-lg bg-background-card border border-divider hover:border-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300 group/icon"
                        >
                          <ExternalLink
                            size={20}
                            className="text-muted group-hover/icon:text-neon-cyan transition-colors"
                          />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-xl font-bold text-heading mb-2 group-hover:neon-text transition-all duration-300">
                    {project.title}
                  </h3>

                  {project.status && (
                    <span className="inline-block px-3 py-1 text-xs font-mono bg-neon-purple/20 text-neon-purple rounded-full mb-3">
                      {project.status}
                    </span>
                  )}

                  {/* DESC */}
                  <p className="text-muted text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* TAGS */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono text-subtext bg-background/50 border border-divider rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/Ron111104"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-subtext hover:text-neon-purple transition-colors font-mono"
            >
              <Github size={18} />
              View more on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
