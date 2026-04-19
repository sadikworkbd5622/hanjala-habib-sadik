import React from 'react';
import { motion } from 'motion/react';
import { BrainCircuit, Globe, Sparkles, Database, GraduationCap, Code2 } from 'lucide-react';

const About = () => {
  const roles = [
    { 
      title: 'Web Architect', 
      icon: <Globe size={20} />, 
      desc: 'Crafting high-performance digital ecosystems with modern frameworks.',
      color: 'text-blue-400',
      tag: '01'
    },
    { 
      title: 'ML Engineer', 
      icon: <BrainCircuit size={20} />, 
      desc: 'Developing intelligent models that solve complex real-world problems.',
      color: 'text-purple-400',
      tag: '02'
    },
    { 
      title: 'AI Strategist', 
      icon: <Sparkles size={20} />, 
      desc: 'Integrating artificial intelligence into seamless user experiences.',
      color: 'text-emerald-400',
      tag: '03'
    },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden bg-zinc-950 border-y border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Typography & Intro */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400 mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                Professional Summary
              </div>
              
              <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 tracking-tight text-white">
                Bridging intelligence <br />
                <span className="text-zinc-500 italic">with innovation</span>
              </h2>
              
              <div className="max-w-xl">
                <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                  I am Hanjala Habib Sadik, a software engineer dedicated to crafting intelligent systems. My expertise spans from robust backend architectures to sophisticated machine learning models, ensuring reliable and scalable solutions.
                </p>
                
                <div className="flex flex-wrap gap-10 py-8 border-t border-zinc-800">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold mb-2">Location</p>
                    <p className="text-zinc-100 font-medium tracking-tight">Dhaka, Bangladesh</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold mb-2">Experience</p>
                    <p className="text-zinc-100 font-medium tracking-tight">Full-Stack & ML Specialist</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold mb-2">Focus</p>
                    <p className="text-zinc-100 font-medium tracking-tight">Intelligent Web Systems</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Roles Grid */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="space-y-4">
              {roles.map((role, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group relative p-6 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-sm hover:border-zinc-700 transition-all duration-300 overflow-hidden"
                >
                  <div className="flex items-start gap-5 relative z-10">
                    <div className={`${role.color} p-3 rounded-xl bg-zinc-950 border border-zinc-800 group-hover:bg-zinc-800 transition-colors duration-300`}>
                      {role.icon}
                    </div>
                    <div>
                      <h4 className="text-zinc-100 font-bold text-lg mb-1 tracking-tight">{role.title}</h4>
                      <p className="text-sm text-zinc-400 leading-relaxed">{role.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
