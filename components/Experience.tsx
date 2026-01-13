"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Award, Calendar } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Software Developer",
    company: "ProfitAngles",
    period: "Dec 2024 – Present",
    description: [
      "Led a team of 10+ engineers to design and deliver a financial intelligence platform with screening, sentiment analysis, and balance sheet insights.",
      "Engineered automated pipeline collecting 100k+ financial news articles with FinBERT sentiment analysis across 6.4k+ NASDAQ tickers.",
      "Spearheaded NLP engine using FinBERT + OpenAI + Custom LLMs, reducing financial lookup time by 65%.",
    ],
  },
  {
    type: "work",
    title: "Software Developer Intern",
    company: "ProfitAngles",
    period: "Jun 2024 – Dec 2024",
    description: [
      "Developed interactive financial dashboards with real-time heatmaps and technical indicators (RSI, SMA, EMA, MACD, OBV).",
      "Built scalable full-stack system with React + Django, reducing deployment time from 30m to 5m via CI/CD automation.",
    ],
  },
];

const education = [
  {
    degree: "BTech Computer Science and Engineering",
    institution: "Vellore Institute of Technology, Chennai",
    period: "Sep 2022 – Jul 2026",
    grade: "CGPA: 9.18",
    activities: [
      "Microsoft Innovations Club – Coordinated 10+ events, increased participation by 20%",
      "Google Developer Student Club – Contributed to DevsHouse national hackathon",
    ],
  },
  {
    degree: "Grade 12",
    institution: "PSBB Millennium School, Chennai",
    period: "Jun 2022",
    grade: "Percentage: 95.8%",
  },
];

const certifications = [
  {
    name: "Natural Language Processing Specialization",
    issuer: "DeepLearning.ai Coursera",
    date: "Feb 2025",
    link: "https://www.coursera.org/account/accomplishments/specialization/MEZ58UQ232QD",
  },
  {
    name: "Deep Learning Specialization",
    issuer: "DeepLearning.ai Coursera",
    date: "Oct 2024",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/6IOP1W8NAFQL",
  },
  {
    name: "Machine Learning Specialization",
    issuer: "Stanford Online Coursera",
    date: "Jun 2024",
    link: "https://www.coursera.org/account/accomplishments/specialization/L9A7Z4WXDBS8",
  },
  {
    name: "FullStack Web Development",
    issuer: "Apna College",
    date: "Mar 2024",
    link: "https://mycourse.app/VuHJZ1mU7XqwqfpF8",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-24">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <span className="font-mono text-neon-cyan text-sm">// My Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 neon-text">
              Experience & Education
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Work Experience */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="w-6 h-6 text-neon-purple" />
                <h3 className="text-xl font-bold text-heading">Work Experience</h3>
              </div>
              
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-purple to-neon-blue" />
                
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="relative pl-12 pb-8"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-2 top-1 w-5 h-5 rounded-full bg-background border-2 border-neon-purple shadow-neon-purple" />
                    
                    <div className="glass-card p-6 neon-border hover:shadow-neon-card transition-all duration-300">
                      <div className="flex items-center gap-2 text-neon-cyan text-sm font-mono mb-2">
                        <Calendar size={14} />
                        {exp.period}
                      </div>
                      <h4 className="text-lg font-bold text-heading">{exp.title}</h4>
                      <p className="text-neon-purple font-medium mb-4">{exp.company}</p>
                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-muted text-sm flex items-start gap-2">
                            <span className="text-neon-purple mt-1">▹</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="w-6 h-6 text-neon-cyan" />
                <h3 className="text-xl font-bold text-heading">Education</h3>
              </div>
              
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="glass-card p-6 mb-6 neon-border hover:shadow-neon-card transition-all duration-300"
                >
                  <div className="flex items-center gap-2 text-neon-cyan text-sm font-mono mb-2">
                    <Calendar size={14} />
                    {edu.period}
                  </div>
                  <h4 className="text-lg font-bold text-heading">{edu.degree}</h4>
                  <p className="text-subtext mb-2">{edu.institution}</p>
                  <span className="inline-block px-3 py-1 text-sm font-mono bg-neon-purple/20 text-neon-purple rounded-full">
                    {edu.grade}
                  </span>
                  {edu.activities && (
                    <ul className="mt-4 space-y-2">
                      {edu.activities.map((activity, i) => (
                        <li key={i} className="text-muted text-sm flex items-start gap-2">
                          <span className="text-neon-cyan mt-1">▹</span>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}

              {/* Certifications */}
              <div className="flex items-center gap-3 mb-6 mt-10">
                <Award className="w-6 h-6 text-neon-pink" />
                <h3 className="text-xl font-bold text-heading">Certifications</h3>
              </div>
              
              <div className="grid gap-3">
                {certifications.map((cert, index) => (
                  <motion.a
                    key={index}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="glass-card p-4 flex justify-between items-center hover:border-neon-purple/50 hover:shadow-neon-purple transition-all duration-300 group"
                  >
                    <div>
                      <h4 className="text-heading font-medium text-sm group-hover:neon-text transition-all">
                        {cert.name}
                      </h4>
                      <p className="text-muted text-xs">{cert.issuer}</p>
                    </div>
                    <span className="text-neon-cyan text-xs font-mono">{cert.date}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
