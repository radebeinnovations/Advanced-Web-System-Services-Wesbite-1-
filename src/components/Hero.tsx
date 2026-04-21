"use client";

import { motion } from "framer-motion";
import { ChevronRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center justify-center">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/20 blur-[120px] rounded-full animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-morphism border border-white/10 text-secondary text-sm font-medium mb-8"
        >
          <Sparkles size={16} />
          <span>Innovating the Digital Frontier</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-8xl font-black tracking-tight mb-8 leading-[1.1]"
        >
          Building <span className="text-gradient">Scalable Digital Systems</span> <br /> 
          for Modern Businesses
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-12 leading-relaxed"
        >
          We engineer high-performance web systems, custom APIs, and AI integrations that power the world's most innovative companies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link
            href="#contact"
            className="group px-8 py-4 bg-primary text-white rounded-full font-bold text-lg flex items-center gap-2 transition-all glow-shadow-hover hover:scale-105"
          >
            Get a Quote
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#services"
            className="px-8 py-4 glass-morphism text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all"
          >
            Explore Services
          </Link>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-10 hidden lg:block opacity-30">
        <div className="w-24 h-24 border border-white/5 rotate-12 rounded-2xl" />
      </div>
      <div className="absolute top-40 right-20 hidden lg:block opacity-30">
        <div className="w-16 h-16 border border-primary rotate-45 rounded-xl animate-spin-slow" />
      </div>
    </section>
  );
}
