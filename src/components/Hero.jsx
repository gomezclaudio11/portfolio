import React from 'react';
import { ArrowRight, Mail, ExternalLink } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-corporate-950 text-corporate-100 py-24 sm:py-32 border-b border-corporate-800">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-corporate-900 border border-corporate-700 text-corporate-300 text-xs sm:text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Disponible para nuevos proyectos y oportunidades</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6">
            Desarrollo de <span className="text-indigo-400">Software</span> y Aplicaciones Web
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-corporate-300 mb-10 leading-relaxed font-normal">
            Programador Full Stack especializado en construir productos digitales eficientes, escalables y con un diseño corporativo limpio. Explora mis proyectos en producción.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-medium text-corporate-950 bg-corporate-100 hover:bg-white transition-all shadow-sm"
            >
              <span>Ver mis proyectos</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-medium text-corporate-200 bg-corporate-900 border border-corporate-700 hover:bg-corporate-800 hover:text-white transition-all"
            >
              Contactar conmigo
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-6 text-corporate-400">
            <a
              href="https://github.com/gomezclaudio11"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-corporate-900 border border-corporate-800 hover:text-white hover:border-corporate-700 transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/claudio-gomez-950a15242/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-corporate-900 border border-corporate-800 hover:text-white hover:border-corporate-700 transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="mailto:claudiogomez23@gmail.com"
              className="p-2.5 rounded-lg bg-corporate-900 border border-corporate-800 hover:text-white hover:border-corporate-700 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
