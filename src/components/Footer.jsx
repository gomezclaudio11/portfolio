import React from 'react';
import { Code2 } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-corporate-950 border-t border-corporate-800 text-corporate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-corporate-900 border border-corporate-800 flex items-center justify-center text-corporate-100">
              <Code2 className="w-4 h-4 text-indigo-400" />
            </div>
            <span className="font-semibold text-white tracking-tight">Claudio Dev</span>
          </div>

          <p className="text-xs sm:text-sm text-corporate-400 text-center">
            &copy; {new Date().getFullYear()} Claudio Dev. Todos los derechos reservados. Desarrollado con React & Tailwind CSS.
          </p>

          <div className="flex space-x-6 text-xs sm:text-sm">
            <a href="#projects" className="hover:text-white transition-colors">Proyectos</a>
            <a href="#about" className="hover:text-white transition-colors">Sobre mí</a>
            <a href="#contact" className="hover:text-white transition-colors">Contacto</a>
          </div>

        </div>
      </div>
    </footer>
  );
};
