import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} Hanjala Habib Sadik.
        </p>
        <div className="flex items-center gap-6">
          <a href="https://github.com/sadikworkbd5622" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors"><Github size={20} /></a>
          <a href="https://www.linkedin.com/in/hanjala-habib-sadik-644680346/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
          <a href="mailto:Sadik.work.bd@gmail.com" className="text-zinc-500 hover:text-white transition-colors"><Mail size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
