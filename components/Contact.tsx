"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Code2 } from "lucide-react";

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
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Open email client with pre-filled message
    const mailtoLink = `mailto:ronak.m.chordia@gmail.com?subject=Portfolio Contact from ${formState.name}&body=${encodeURIComponent(formState.message)}`;
    window.location.href = mailtoLink;
    
    setIsSubmitting(false);
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
          {/* Section Title */}
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
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-heading mb-6">
                Let&apos;s Connect
              </h3>
              
              <div className="space-y-6 mb-10">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-gradient-neon">
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-muted text-sm">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-heading hover:text-neon-purple transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-heading">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-subtext font-mono text-sm mb-4">// Find me on</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 glass-card hover:border-neon-purple/50 hover:shadow-neon-purple transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -3 }}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 text-subtext hover:text-neon-purple transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="glass-card p-8 neon-border">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-mono text-subtext mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-divider rounded-lg text-heading placeholder-placeholder focus:border-neon-purple focus:outline-none focus:ring-1 focus:ring-neon-purple/50 transition-all"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-mono text-subtext mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-divider rounded-lg text-heading placeholder-placeholder focus:border-neon-purple focus:outline-none focus:ring-1 focus:ring-neon-purple/50 transition-all"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-mono text-subtext mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 bg-background border border-divider rounded-lg text-heading placeholder-placeholder focus:border-neon-purple focus:outline-none focus:ring-1 focus:ring-neon-purple/50 transition-all resize-none"
                      placeholder="Your message..."
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-neon py-4 text-white font-medium flex items-center justify-center gap-2 disabled:opacity-50"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
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
