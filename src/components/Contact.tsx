"use client";

import { motion } from "framer-motion";
import { Send, Mail, Briefcase, User } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-card/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Ready to <span className="text-gradient">Scale Your Vision?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400"
          >
            Fill out the form below and our engineers will get back to you within 24 hours.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-12 glass-morphism rounded-3xl border border-white/5 glow-shadow"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-4 flex items-center gap-2">
                  <User size={14} /> Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-primary transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-4 flex items-center gap-2">
                  <Briefcase size={14} /> Business Name
                </label>
                <input
                  type="text"
                  placeholder="Acme Corp"
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-primary transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 ml-4 flex items-center gap-2">
                <Mail size={14} /> Business Email
              </label>
              <input
                type="email"
                placeholder="john@acme.com"
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-primary transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 ml-4">Project Description</label>
              <textarea
                rows={4}
                placeholder="Tell us about your digital infrastructure needs..."
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-primary transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-primary hover:bg-primary/80 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all glow-shadow-hover"
            >
              Send Request
              <Send size={20} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
