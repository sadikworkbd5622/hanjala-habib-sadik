import React from 'react';
import { motion } from 'motion/react';
import { 
  Cpu, 
  Brain, 
  Bot, 
  Network, 
  Globe, 
  Code, 
  Code2, 
  FileCode, 
  Palette, 
  Braces, 
  Atom, 
  Database, 
  Target, 
  Zap 
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Core Intelligence",
      icon: <Brain size={24} />,
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/20",
      skills: [
        { name: "Artificial Intelligence", icon: <Brain size={16} /> },
        { name: "Machine Learning", icon: <Bot size={16} /> },
        { name: "Deep Learning", icon: <Network size={16} /> },
        { name: "YOLO v8", icon: <Target size={16} /> }
      ]
    },
    {
      title: "Web Architecture",
      icon: <Globe size={24} />,
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/20",
      skills: [
        { name: "React", icon: <Atom size={16} /> },
        { name: "JavaScript", icon: <Braces size={16} /> },
        { name: "HTML/CSS", icon: <FileCode size={16} /> },
        { name: "Modern UI/UX", icon: <Palette size={16} /> }
      ]
    },
    {
      title: "Data & Systems",
      icon: <Database size={24} />,
      color: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-500/20",
      skills: [
        { name: "MongoDB", icon: <Database size={16} /> },
        { name: "n8n Automation", icon: <Zap size={16} /> },
        { name: "System Design", icon: <Cpu size={16} /> },
        { name: "Programming", icon: <Code size={16} /> }
      ]
    }
  ];

  return (
    <section id="skills" className="py-32 relative overflow-hidden bg-zinc-950">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(24,24,27,1),rgba(9,9,11,1))]" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6">
              Expertise
            </span>
            <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
              Technical <span className="text-zinc-500 italic">Arsenal.</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              A curated collection of technologies I've mastered to bridge the gap between complex algorithms and intuitive user interfaces.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <div className="w-20 h-20 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 shadow-sm">
              <Code2 size={32} />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group relative p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-blue-500/30 hover:bg-zinc-900 transition-all duration-300"
            >
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-white mb-8 group-hover:-translate-y-1 group-hover:text-blue-400 transition-all duration-300 shadow-sm">
                  {category.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-6">{category.title}</h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, sIdx) => (
                    <div 
                      key={skill.name}
                      className="flex items-center gap-4 group/item"
                    >
                      <div className="w-8 h-8 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-500 group-hover/item:border-blue-500/30 group-hover/item:text-blue-400 transition-colors">
                        {skill.icon}
                      </div>
                      <span className="text-zinc-400 group-hover/item:text-zinc-200 transition-colors font-medium">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800/50 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
        >
          <div>
            <h4 className="text-white font-bold text-lg mb-1">Always Learning.</h4>
            <p className="text-zinc-500 text-sm">Currently exploring Large Language Models and Edge Computing.</p>
          </div>
          <div className="flex gap-2">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="w-2 h-2 rounded-full bg-blue-500/20" />
            ))}
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
