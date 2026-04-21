"use client";

import { motion } from "framer-motion";
import { AreaChart, Activity, Users, Settings, Database, Cloud } from "lucide-react";

export default function DashboardPreview() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Enterprise <span className="text-gradient">Control Centers</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                We design and build bespoke dashboards that give you real-time visibility into your digital infrastructure. Monitor traffic, manage users, and deploy updates with a single click.
              </p>
              
              <ul className="space-y-4">
                {[
                  { icon: Activity, text: "Real-time performance metrics" },
                  { icon: Database, text: "Automated database backups" },
                  { icon: Cloud, text: "Cloud-native deployment pipelines" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <item.icon size={18} />
                    </div>
                    {item.text}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="flex-1 w-full relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-morphism rounded-3xl border border-white/10 overflow-hidden glow-shadow p-8 min-h-[460px] flex flex-col"
            >
              {/* Mock Dashboard header */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span className="px-2 py-1 bg-white/5 rounded">v2.4.9 Stable</span>
                  <Activity size={14} className="text-green-500 animate-pulse" />
                </div>
              </div>

              {/* Grid Content */}
              <div className="grid grid-cols-2 gap-4 flex-1">
                <div className="col-span-2 bg-white/5 rounded-xl p-4 flex flex-col justify-end">
                  <div className="h-24 w-full flex items-end gap-1">
                    {[40, 70, 45, 90, 65, 80, 55, 100, 75, 95].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        transition={{ delay: i * 0.05, duration: 0.5 }}
                        className="flex-1 bg-primary/40 rounded-t-sm"
                      />
                    ))}
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm font-medium">Traffic Ingress</span>
                    <span className="text-xs text-secondary">+12.5% Today</span>
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <Users size={20} />
                  </div>
                  <div>
                    <div className="text-xl font-bold">14,209</div>
                    <div className="text-[10px] text-gray-500">Active Users</div>
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                    <Settings size={20} />
                  </div>
                  <div>
                    <div className="text-xl font-bold">99.9%</div>
                    <div className="text-[10px] text-gray-500">Uptime Score</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
