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
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-8">
            Available for Consultations
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-6 text-white">
            Hanjala Habib <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Sadik.</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-8 leading-relaxed font-medium">
            AI & Web Software Engineer
          </p>
          <p className="text-zinc-500 max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
            I specialize in the synthesis of advanced machine learning algorithms and high-performance web systems. My mission is to craft digital experiences that are robust, intelligent, and scalable.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#projects" 
              className="group relative px-8 py-4 bg-blue-600 text-white rounded-lg font-medium transition-all hover:bg-blue-700 hover:-translate-y-1 active:translate-y-0 flex items-center gap-2 shadow-lg shadow-blue-500/20"
            >
              View My Work
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="mailto:Sadik.work.bd@gmail.com" 
              className="px-8 py-4 bg-zinc-900 border border-zinc-800 text-zinc-100 rounded-lg font-medium transition-all hover:bg-zinc-800 hover:-translate-y-1 active:translate-y-0"
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
