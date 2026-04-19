import React from 'react';
import { motion } from 'motion/react';
import { Terminal, Globe, Layers, Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "MessPRO",
      category: "Management System",
      description: "A comprehensive meal management system designed to streamline daily meal tracking, member management, and financial accounting for shared accommodations.",
      tech: ["React", "Firebase", "Node.js", "MongoDB"],
      icon: <Layers size={24} />,
      image: "https://images.unsplash.com/photo-1543353071-087092ec393a?w=800&q=80",
      color: "blue",
      github: "https://github.com/sadikworkbd5622/meal-management-system",
      live: "https://meal-management-3a66d.web.app/"
    },
    {
      title: "CricketHUB",
      category: "Sports Platform",
      description: "A platform tailored for the local cricket community to organize matches, track player statistics, and manage team profiles with an intuitive dashboard.",
      tech: ["React", "Tailwind CSS", "Express", "MongoDB"],
      icon: <Globe size={24} />,
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&q=80",
      color: "emerald",
      github: "https://github.com/sadikworkbd5622/crickethub-bd",
      live: "https://crickethub-bd.vercel.app/"
    },
    {
      title: "BoiPokaBD",
      category: "E-Commerce",
      description: "An online bookstore application offering a rich collection of literature, a seamless shopping cart experience, and responsive user interfaces.",
      tech: ["React", "Next.js", "Tailwind CSS"],
      icon: <Layers size={24} />,
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80",
      color: "purple",
      github: "https://github.com/sadikworkbd5622/boipokabd2026",
      live: "https://boipokabd2026.vercel.app/"
    },
    {
      title: "LawyerBD",
      category: "Directory & Services",
      description: "A professional consultation platform connecting users with reliable legal advice, complete with appointment scheduling and an interactive directory.",
      tech: ["React", "Node.js", "Express"],
      icon: <Terminal size={24} />,
      image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=800&q=80",
      color: "indigo",
      github: "https://github.com/sadikworkbd5622/lawyer-bd",
      live: "https://lawyer-bd-2026.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-zinc-950 border-y border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight text-white">Featured Projects</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">A selection of my recent work bridging complex technology and elegant user experiences.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group rounded-3xl bg-zinc-900 border border-zinc-800 hover:shadow-xl hover:shadow-blue-500/5 hover:border-zinc-700 transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Project Image */}
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent opacity-80" />
                
                <div className="absolute top-4 left-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-950/80 backdrop-blur-sm flex items-center justify-center text-blue-400 border border-zinc-700 shadow-sm">
                    {project.icon}
                  </div>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow bg-zinc-900 border-t border-zinc-800">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-3 block">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 mb-8 line-clamp-3 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 bg-zinc-950 border border-zinc-800 rounded-lg text-zinc-400">
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
