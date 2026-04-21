"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 text-center md:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Your <span className="text-gradient">Forward-Thinking</span> Tech Partner
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-lg leading-relaxed mb-6"
            >
              Advanced Web System Services isn't just a development agency; we're your outsourced R&D department. Founded on the principle that digital infrastructure should be invisible but indestructible, we help businesses transition into the future of automated systems and AI-driven growth.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg leading-relaxed"
            >
              From custom-built neural integrations to high-transaction fintech backends, our team of world-class engineers brings silicon-valley expertise to your doorstep.
            </motion.p>
          </div>
          
          <div className="flex-1 grid grid-cols-2 gap-4">
            {[
              { label: "Projects Delivered", value: "250+" },
              { label: "Systems Uptime", value: "99.99%" },
              { label: "Security Experts", value: "15+" },
              { label: "Global Clients", value: "80+" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 glass-morphism border border-white/5 rounded-3xl text-center"
              >
                <div className="text-3xl font-black text-secondary mb-2">{stat.value}</div>
                <div className="text-sm text-gray-500 uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
