import React from 'react';
import { skillsData } from '../data/projectsData';
import { Cpu } from 'lucide-react';

export const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-corporate-950 text-corporate-100 border-b border-corporate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-corporate-900 border border-corporate-700 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Stack Tecnológico</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Habilidades y Tecnologías
          </h2>
          <p className="text-corporate-400 text-base sm:text-lg">
            Herramientas y lenguajes que domino para construir soluciones robustas y eficientes de extremo a extremo.
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((group, index) => (
            <div
              key={index}
              className="bg-corporate-900 border border-corporate-800 rounded-2xl p-6 shadow-lg hover:border-corporate-700 transition-colors"
            >
              <h3 className="text-lg font-bold text-white mb-4 pb-3 border-b border-corporate-800">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, sIndex) => (
                  <span
                    key={sIndex}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-corporate-950 border border-corporate-800 text-corporate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
