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
    <section id="about" className="py-32 relative overflow-hidden bg-zinc-950">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Left Column: Massive Typography & Intro */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.2em] font-bold text-blue-400 mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                The Visionary Architect
              </div>
              
              <h2 className="text-7xl md:text-9xl font-display font-bold mb-12 leading-[0.8] tracking-tighter text-white">
                CODE <br />
                <span className="text-zinc-800 italic">MEETS</span> <br />
                MIND.
              </h2>
              
              <div className="max-w-xl">
                <p className="text-zinc-400 text-xl leading-relaxed mb-8">
                  I am Hanjala Habib Sadik, a developer dedicated to crafting intelligent systems. My work spans from robust backend architectures to sophisticated machine learning models.
                </p>
                
                <div className="flex flex-wrap gap-8 py-8 border-t border-white/5">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold mb-2">Location</p>
                    <p className="text-white font-medium">Dhaka, Bangladesh</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold mb-2">Experience</p>
                    <p className="text-white font-medium">Full-Stack AI Expert</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold mb-2">Focus</p>
                    <p className="text-white font-medium">Neural Systems</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Technical Roles Grid */}
          <div className="lg:col-span-5 flex flex-col justify-end">
            <div className="space-y-6">
              {roles.map((role, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group relative p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-white/10 hover:bg-zinc-900/60 transition-all duration-500"
                >
                  <div className="absolute top-8 right-8 text-[40px] font-display font-black text-white/5 group-hover:text-white/10 transition-colors">
                    {role.tag}
                  </div>
                  
                  <div className="flex items-start gap-6 relative z-10">
                    <div className={`${role.color} p-4 rounded-2xl bg-zinc-950 border border-white/5 group-hover:scale-110 transition-transform duration-500 shadow-2xl`}>
                      {role.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-2 tracking-tight">{role.title}</h4>
                      <p className="text-sm text-zinc-500 leading-relaxed max-w-[240px]">{role.desc}</p>
                    </div>
                  </div>
                  
                  {/* Hover Accent Line */}
                  <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
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
