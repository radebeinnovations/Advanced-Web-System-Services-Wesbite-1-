"use client";

import { motion } from "framer-motion";
import { Code2, Server, Database, Bot, ShieldCheck, Zap } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "High-performance frontend and backend systems built with React, Next.js, and Node.js.",
    icon: Code2,
    color: "text-blue-400",
  },
  {
    title: "Backend Architecture",
    description: "Robust, scalable API systems and microservices designed for extreme traffic.",
    icon: Server,
    color: "text-cyan-400",
  },
  {
    title: "Database Solutions",
    description: "Optimized SQL and NoSQL database architectures for speed and data integrity.",
    icon: Database,
    color: "text-purple-400",
  },
  {
    title: "AI Integrations",
    description: "Custom AI chatbots and LLM-powered features to automate your business workflows.",
    icon: Bot,
    color: "text-pink-400",
  },
  {
    title: "Cybersecurity",
    description: "Comprehensive security audits and implementation for small to medium businesses.",
    icon: ShieldCheck,
    color: "text-green-400",
  },
  {
    title: "Performance Optimization",
    description: "Fine-tuning systems for lightning-fast load times and seamless user experiences.",
    icon: Zap,
    color: "text-yellow-400",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our <span className="text-gradient">Core Capabilities</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            We provide end-to-end technical solutions tailored to the needs of modern digital enterprises.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl glass-morphism border border-white/5 hover:border-primary/50 transition-all group hover:-translate-y-2"
            >
              <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${service.color}`}>
                <service.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
