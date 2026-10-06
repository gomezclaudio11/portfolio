import React, { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Proyectos', href: '#projects' },
    { name: 'Sobre mí', href: '#about' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-corporate-900/95 backdrop-blur-md border-b border-corporate-800 text-corporate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-lg bg-corporate-800 border border-corporate-700 flex items-center justify-center text-corporate-100 group-hover:border-corporate-500 transition-colors">
              <Code2 className="w-5 h-5 text-indigo-400" />
            </div>
            <div>
              <span className="font-semibold text-lg tracking-tight block">Claudio Dev</span>
              <span className="text-xs text-corporate-400 font-medium">Desarrollador Web</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-corporate-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-corporate-900 bg-corporate-100 rounded-lg hover:bg-white transition-colors"
            >
              Contactar
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-corporate-300 hover:text-white hover:bg-corporate-800 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-corporate-900 border-b border-corporate-800 px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-corporate-300 hover:text-white hover:bg-corporate-800 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center block px-4 py-2.5 text-sm font-medium text-corporate-900 bg-corporate-100 rounded-lg hover:bg-white transition-colors"
            >
              Contactar
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
