import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import DashboardPreview from "@/components/DashboardPreview";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Services />
      <DashboardPreview />
      <About />
      <Contact />
      <footer className="py-12 border-t border-white/5 text-center text-gray-500 text-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6">
          <p>© {new Date().getFullYear()} Advanced Web System Services. All rights reserved.</p>
          <a href="https://www.paletech.co.za/" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-1 transition-all">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-600 group-hover:text-secondary">Explore more high-end solutions</span>
            <span className="text-xl font-black tracking-tighter text-white group-hover:text-primary">
              FOR MORE, VISIT <span className="text-secondary italic">PALETECH</span>
            </span>
          </a>
        </div>
      </footer>
    </main>
  );
}
