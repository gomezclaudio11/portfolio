import React, { useState } from 'react';
import { Mail, Send, CheckCircle, MessageSquare } from 'lucide-react';

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 bg-corporate-950 text-corporate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-corporate-900 border border-corporate-700 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Contacto Profesional</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            ¿Hablamos sobre tu próximo proyecto?
          </h2>
          <p className="text-corporate-400 text-base sm:text-lg">
            Estoy disponible para colaborar en nuevos proyectos, consultorías o posiciones de desarrollo de software.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
          
          {/* Contact Info Card */}
          <div className="lg:col-span-5 bg-corporate-900 border border-corporate-800 rounded-2xl p-8 shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Información de contacto</h3>
              <p className="text-corporate-300 text-sm mb-8 leading-relaxed">
                Puedes escribirme directamente por correo o conectar conmigo a través de mis perfiles profesionales. Te responderé a la brevedad.
              </p>

              <div className="space-y-6">
                <a
                  href="mailto:claudiogomez23@gmail.com"
                  className="flex items-center space-x-4 text-corporate-200 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-corporate-950 border border-corporate-800 flex items-center justify-center group-hover:border-corporate-600 transition-colors">
                    <Mail className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <span className="text-xs text-corporate-400 block">Correo electrónico</span>
                    <span className="text-sm font-medium">claudiogomez23@gmail.com</span>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/claudio-gomez-950a15242/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-corporate-200 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-corporate-950 border border-corporate-800 flex items-center justify-center group-hover:border-corporate-600 transition-colors">
                    <svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs text-corporate-400 block">LinkedIn</span>
                    <span className="text-sm font-medium">Claudio Gomez</span>
                  </div>
                </a>

                <a
                  href="https://github.com/gomezclaudio11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-corporate-200 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-corporate-950 border border-corporate-800 flex items-center justify-center group-hover:border-corporate-600 transition-colors">
                    <svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs text-corporate-400 block">GitHub</span>
                    <span className="text-sm font-medium">@gomezclaudio11</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-corporate-800 text-xs text-corporate-400">
              Ubicación: Remoto / Buenos Aires, Argentina
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-corporate-900 border border-corporate-800 rounded-2xl p-8 shadow-xl">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">¡Mensaje enviado con éxito!</h3>
                <p className="text-corporate-300 text-sm">
                  Gracias por contactar. Te responderé lo antes posible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-corporate-300 mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-corporate-950 border border-corporate-800 rounded-xl text-white placeholder-corporate-500 focus:outline-none focus:border-indigo-500 transition-colors text-sm"
                    placeholder="Ej. Juan Pérez"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-corporate-300 mb-2">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-corporate-950 border border-corporate-800 rounded-xl text-white placeholder-corporate-500 focus:outline-none focus:border-indigo-500 transition-colors text-sm"
                    placeholder="juan@empresa.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-corporate-300 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-corporate-950 border border-corporate-800 rounded-xl text-white placeholder-corporate-500 focus:outline-none focus:border-indigo-500 transition-colors text-sm resize-none"
                    placeholder="Cuéntame sobre tu proyecto o propuesta..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-medium text-corporate-950 bg-corporate-100 hover:bg-white transition-all shadow-sm"
                >
                  <span>Enviar mensaje</span>
                  <Send className="w-4 h-4 ml-2" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
