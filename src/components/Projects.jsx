import React from 'react';
import { projectsData } from '../data/projectsData';
import { ExternalLink, Layers } from 'lucide-react';

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-corporate-950 text-corporate-100 border-b border-corporate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-corporate-900 border border-corporate-700 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Portafolio Profesional</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Aplicaciones en Producción
          </h2>
          <p className="text-corporate-400 text-base sm:text-lg">
            Una selección de 4 proyectos desarrollados con estándares de la industria, arquitectura limpia y despliegues online funcionales.
          </p>
        </div>

        {/* Projects Grid (2x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-corporate-900 border border-corporate-800 rounded-2xl overflow-hidden hover:border-corporate-700 transition-all duration-300 flex flex-col group shadow-lg"
            >
              {/* Project Image / Mockup Container */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-corporate-800">
                <div className="absolute inset-0 bg-gradient-to-t from-corporate-900 via-transparent to-transparent opacity-80 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 z-20 px-3 py-1 rounded-lg text-xs font-medium bg-corporate-950/80 backdrop-blur-md border border-corporate-700 text-corporate-200">
                  {project.category}
                </span>
              </div>

              {/* Project Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-corporate-300 text-sm leading-relaxed mb-6 font-normal">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-corporate-950 border border-corporate-800 text-corporate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-corporate-800">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Ver Demo Online</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-sm font-medium text-corporate-400 hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    <span>Código fuente</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
