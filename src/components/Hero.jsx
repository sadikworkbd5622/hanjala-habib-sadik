import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6">
            Available for Work
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-6">
            Hanjala Habib <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Sadik.</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
            AI & Web Architect | Crafting the Next Generation of Digital Intelligence
          </p>
          <p className="text-zinc-500 max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
            I specialize in the synthesis of advanced machine learning algorithms and high-performance web systems. My mission is to craft digital experiences that are as intelligent as they are beautiful.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#projects" 
              className="group relative px-8 py-4 bg-blue-600 text-white rounded-full font-bold transition-all hover:bg-blue-700 hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              View My Work
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="mailto:Sadik.work.bd@gmail.com" 
              className="px-8 py-4 bg-zinc-900 text-zinc-100 border border-zinc-800 rounded-full font-bold transition-all hover:bg-zinc-800 hover:border-zinc-700 active:scale-95"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
