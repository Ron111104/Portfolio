"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "React.js / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Framer Motion", level: 85 },
      { name: "Material UI / ShadCN", level: 88 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Django / FastAPI", level: 92 },
      { name: "Node.js / Express", level: 88 },
      { name: "Python", level: 95 },
      { name: "REST APIs", level: 90 },
      { name: "MongoDB / MySQL", level: 85 },
    ],
  },
  {
    name: "AI / ML",
    skills: [
      { name: "TensorFlow / PyTorch", level: 88 },
      { name: "NLP / Transformers", level: 90 },
      { name: "OpenAI / LangChain", level: 85 },
      { name: "FinBERT / spaCy", level: 87 },
      { name: "scikit-learn", level: 90 },
    ],
  },
  {
    name: "DevOps",
    skills: [
      { name: "AWS / GCP", level: 80 },
      { name: "Docker", level: 78 },
      { name: "GitHub Actions", level: 85 },
      { name: "Vercel / Netlify", level: 90 },
      { name: "Firebase", level: 88 },
    ],
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-24">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <span className="font-mono text-neon-cyan text-sm">// My Skills</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 neon-text">
              Technical Expertise
            </h2>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {skillCategories.map((category, index) => (
              <button
                key={category.name}
                onClick={() => setActiveTab(index)}
                className={cn(
                  "px-6 py-3 rounded-full font-mono text-sm transition-all duration-300",
                  activeTab === index
                    ? "btn-neon text-white"
                    : "glass-card text-subtext hover:text-heading hover:border-neon-purple/50"
                )}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-3xl mx-auto"
          >
            {skillCategories[activeTab].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="mb-6"
              >
                <div className="flex justify-between mb-2">
                  <span className="text-heading font-medium">{skill.name}</span>
                  <span className="text-neon-purple font-mono">{skill.level}%</span>
                </div>
                <div className="h-3 bg-background-card rounded-full overflow-hidden border border-divider">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className="h-full progress-bar"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Skills Tags */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16"
          >
            <h3 className="text-center text-subtext mb-6 font-mono text-sm">
              // Also experienced with
            </h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {[
                "C++", "Java", "SQL", "Flask", "Bootstrap",
                "Pandas", "NumPy", "FAISS", "EasyOCR", "Qiskit",
                "Supabase", "Postman", "Figma", "Git", "SSH"
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 glass-card text-sm text-muted hover:text-heading hover:border-neon-purple/50 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
