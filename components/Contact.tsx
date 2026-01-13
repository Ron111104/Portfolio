"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Send, Github, Linkedin, Code2 } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "ronak.m.chordia@gmail.com",
    href: "mailto:ronak.m.chordia@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Chennai, India",
    href: null,
  },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/Ron111104", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ronak-chordia/", label: "LinkedIn" },
  { icon: Code2, href: "https://leetcode.com/u/Ron1104/", label: "LeetCode" },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mailto = `mailto:ronak.m.chordia@gmail.com?subject=Portfolio Contact from ${formState.name}&body=${encodeURIComponent(
      `Email: ${formState.email}\n\n${formState.message}`
    )}`;

    window.location.href = mailto;

    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-24 bg-background-section">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Title */}
          <div className="text-center mb-16">
            <span className="font-mono text-neon-cyan text-sm">// Get In Touch</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 neon-text">
              Contact Me
            </h2>
            <p className="text-muted mt-4 max-w-lg mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-heading mb-6">Let&apos;s Connect</h3>

              <div className="space-y-6 mb-10">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-gradient-neon">
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-muted text-sm">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="text-heading hover:text-neon-purple">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-heading">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="text-subtext font-mono text-sm mb-4">// Find me on</h4>
                <div className="flex gap-4 relative z-50 pointer-events-auto">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-50 pointer-events-auto p-3 glass-card hover:border-neon-purple/50 hover:shadow-neon-purple"
                      whileHover={{ scale: 1.1, y: -3 }}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 text-subtext hover:text-neon-purple transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <form
                onSubmit={handleSubmit}
                className="glass-card p-8 neon-border relative z-50 pointer-events-auto"
              >
                <div className="space-y-6 relative z-50 pointer-events-auto">
                  {["name", "email", "message"].map((field) => (
                    <div key={field}>
                      <label className="block text-sm font-mono text-subtext mb-2 capitalize">
                        {field}
                      </label>
                      {field === "message" ? (
                        <textarea
                          rows={5}
                          required
                          value={formState.message}
                          onChange={(e) =>
                            setFormState({ ...formState, message: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-background border border-divider rounded-lg focus:border-neon-purple focus:ring-1 focus:ring-neon-purple/50"
                          placeholder="Your message..."
                        />
                      ) : (
                        <input
                          required
                          type={field === "email" ? "email" : "text"}
                          value={(formState as any)[field]}
                          onChange={(e) =>
                            setFormState({ ...formState, [field]: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-background border border-divider rounded-lg focus:border-neon-purple focus:ring-1 focus:ring-neon-purple/50"
                          placeholder={field === "email" ? "you@email.com" : "Your name"}
                        />
                      )}
                    </div>
                  ))}

                  <motion.button
                    type="submit"
                    className="w-full btn-neon py-4 text-white flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Send size={18} />
                    Send Message
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
