import React from 'react';
import { User, CheckCircle2, Award, Briefcase } from 'lucide-react';

export const About = () => {
  const highlights = [
    "Enfoque en arquitectura limpia y mantenibilidad del código.",
    "Experiencia construyendo aplicaciones SaaS y plataformas escalables.",
    "Compromiso con el rendimiento web y la optimización de UX.",
    "Trabajo ágil y comunicación efectiva orientada a resultados."
  ];

  return (
    <section id="about" className="py-24 bg-corporate-950 text-corporate-100 border-b border-corporate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Title & Description */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-corporate-900 border border-corporate-700 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <User className="w-3.5 h-3.5" />
              <span>Sobre Mí</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
              Ingeniería de software con pasión por la excelencia técnica
            </h2>
            
            <p className="text-corporate-300 text-base sm:text-lg leading-relaxed mb-6 font-normal">
              Hola, soy Claudio. Me dedico al desarrollo de software y aplicaciones web con un fuerte enfoque en la calidad de código, la robustez backend y la experiencia de usuario intuitiva. A lo largo de mi trayectoria he diseñado y desplegado soluciones completas que resuelven problemas reales de negocio.
            </p>

            <p className="text-corporate-300 text-base sm:text-lg leading-relaxed mb-8 font-normal">
              Mi objetivo es aportar valor inmediato a través de software mantenible, testeable y preparado para escalar.
            </p>

            {/* Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-corporate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Stats / Corporate Card */}
          <div className="lg:col-span-5">
            <div className="bg-corporate-900 border border-corporate-800 rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <Briefcase className="w-5 h-5 mr-3 text-indigo-400" />
                <span>Resumen Profesional</span>
              </h3>

              <div className="space-y-6">
                <div className="border-b border-corporate-800 pb-5">
                  <span className="text-xs text-corporate-400 uppercase font-semibold">Experiencia</span>
                  <p className="text-lg font-medium text-white mt-1">+3 Años en Desarrollo Web & Full Stack</p>
                </div>

                <div className="border-b border-corporate-800 pb-5">
                  <span className="text-xs text-corporate-400 uppercase font-semibold">Proyectos Exitosos</span>
                  <p className="text-lg font-medium text-white mt-1">+15 Aplicaciones y Sistemas Desplegados</p>
                </div>

                <div>
                  <span className="text-xs text-corporate-400 uppercase font-semibold">Especialización</span>
                  <p className="text-lg font-medium text-white mt-1">Arquitectura Web Moderna</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
