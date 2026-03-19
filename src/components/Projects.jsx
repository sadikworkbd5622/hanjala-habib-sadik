import React from 'react';
import { motion } from 'motion/react';
import { Terminal, Globe, Layers, Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Smart-FYP Advisor",
      category: "Software Engineering",
      description: "An intelligent academic planning system designed to assist students in selecting and managing their Final Year Projects (FYP) using data-driven insights.",
      tech: ["React", "Node.js", "AI Integration"],
      icon: <Terminal size={24} />,
      image: "https://picsum.photos/seed/smart-fyp/800/600",
      color: "blue"
    },
    {
      title: "Davboard",
      category: "Web Development",
      description: "A robust, scalable web application featuring a modern React frontend and a flexible MongoDB backend for seamless data management.",
      tech: ["React", "MongoDB", "Express", "Node.js"],
      icon: <Globe size={24} />,
      image: "https://picsum.photos/seed/davboard/800/600",
      color: "purple",
      github: "https://github.com/sadikworkbd5622/B11-A5-project",
      live: "https://sadikworkbd5622.github.io/B11-A5-project/"
    },
    {
      title: "Nature's Platter",
      category: "Web Development",
      description: "A dynamic and responsive web application built with modern frontend technologies, focusing on clean user interface and seamless interaction.",
      tech: ["HTML", "CSS", "JavaScript"],
      icon: <Layers size={24} />,
      image: "https://picsum.photos/seed/nature-platter/800/600",
      color: "emerald",
      github: "https://github.com/sadikworkbd5622/B11-A3-project",
      live: "https://sadikworkbd5622.github.io/B11-A3-project/"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tighter text-white">Featured Projects</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg">A selection of my recent work in software engineering and AI.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-blue-500/30 transition-all overflow-hidden flex flex-col"
            >
              {/* Project Image */}
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-60" />
                
                <div className="absolute top-4 left-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-950/80 backdrop-blur-sm flex items-center justify-center text-blue-400 border border-white/10">
                    {project.icon}
                  </div>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500 mb-3 block">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-500 mb-8 line-clamp-3 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.tech.map(t => (
                    <span key={t} className="text-[9px] font-bold uppercase tracking-wider px-2 py-1 bg-zinc-800 border border-zinc-700 rounded-md text-zinc-400">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 pt-6 border-t border-zinc-800">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-xs font-bold flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                      <Github size={14} /> Code
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-xs font-bold flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                      <ExternalLink size={14} /> Preview
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
