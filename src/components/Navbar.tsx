"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#servicios", label: "Servicios" },
    { href: "#proceso", label: "Proceso" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-blue-900/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-sm">AC</span>
            </div>
            <span className="text-white font-bold text-xl tracking-tight">
              ACORVI
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-white text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/1234567890?text=Hola%2C%20quiero%20agendar%20una%20consulta"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-green text-white text-sm font-semibold px-4 py-2 rounded-lg"
            >
              Consulta Gratis
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-slate-900/98 border-t border-blue-900/30 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 text-slate-300 hover:text-white font-medium border-b border-slate-800 last:border-0"
              >
                {link.label}
              </a>
            ))}
            <div className="px-4 pt-4">
              <a
                href="https://wa.me/1234567890?text=Hola%2C%20quiero%20agendar%20una%20consulta"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-green text-white text-sm font-semibold px-4 py-3 rounded-lg w-full text-center block"
              >
                Consulta Gratis
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
