"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    businessType: "",
    improvement: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const whatsappMsg = encodeURIComponent(
      `Hola ACORVI! 👋\n\n` +
      `*Nombre:* ${formData.name}\n` +
      `*Teléfono:* ${formData.phone}\n` +
      `*Tipo de negocio:* ${formData.businessType}\n` +
      `*¿Qué desea mejorar?:* ${formData.improvement}\n\n` +
      `_Enviado desde acorvi.com_`
    );

    setTimeout(() => {
      setStatus("sent");
      window.open(`https://wa.me/5127183591?text=${whatsappMsg}`, "_blank");
    }, 800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contacto" className="py-24 section-dark bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-red/20 border border-brand-red/30 rounded-full px-4 py-1.5 mb-4">
            <span className="text-brand-red-light text-sm font-medium">Contacto</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Empieza a{" "}
            <span className="text-gradient">automatizar hoy</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Cuéntanos tu negocio y te decimos exactamente cómo podemos ayudarte a generar más clientes y ahorrar tiempo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8">
            <h3 className="text-white font-bold text-xl mb-6">Escríbenos</h3>

            {status === "sent" ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-brand-red/20 border border-brand-red/40 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-red-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-white font-bold text-lg mb-2">¡Mensaje enviado!</h4>
                <p className="text-slate-400 text-sm">
                  Se abrió WhatsApp con tu mensaje. Si no se abrió,{" "}
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-brand-red-light underline"
                  >
                    intenta de nuevo
                  </button>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-slate-400 text-xs font-medium mb-1.5">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className="w-full bg-slate-900 border border-slate-700 text-white placeholder-slate-600 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand-red transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 text-xs font-medium mb-1.5">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+52 55 1234 5678"
                    className="w-full bg-slate-900 border border-slate-700 text-white placeholder-slate-600 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand-red transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 text-xs font-medium mb-1.5">
                    Tipo de negocio *
                  </label>
                  <input
                    type="text"
                    name="businessType"
                    required
                    value={formData.businessType}
                    onChange={handleChange}
                    placeholder="Ej: restaurante, tienda online, consultora..."
                    className="w-full bg-slate-900 border border-slate-700 text-white placeholder-slate-600 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand-red transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 text-xs font-medium mb-1.5">
                    ¿Qué desea mejorar? *
                  </label>
                  <textarea
                    name="improvement"
                    required
                    rows={4}
                    value={formData.improvement}
                    onChange={handleChange}
                    placeholder="¿Qué procesos quieres automatizar? ¿Qué te está costando más tiempo o dinero?"
                    className="w-full bg-slate-900 border border-slate-700 text-white placeholder-slate-600 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand-red transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-red w-full text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {status === "sending" ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Enviar por WhatsApp
                    </>
                  )}
                </button>

                <p className="text-slate-600 text-xs text-center">
                  Al enviar, se abrirá WhatsApp para continuar la conversación.
                </p>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/5127183591"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-green-900/20 border border-green-700/30 rounded-2xl p-6 hover:bg-green-900/30 transition-colors duration-300 group"
            >
              <div className="w-12 h-12 bg-green-700/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-700/30 transition-colors">
                <svg className="w-6 h-6 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <div className="text-white font-bold">WhatsApp directo</div>
                <div className="text-slate-400 text-sm">512-718-3591</div>
                <div className="text-green-400 text-sm font-medium mt-1">Escribir ahora →</div>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:acorvioficial@gmail.com"
              className="flex items-center gap-4 bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600 transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-brand-blue/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-brand-blue-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="text-white font-bold">Email</div>
                <div className="text-slate-400 text-sm">acorvioficial@gmail.com</div>
              </div>
            </a>

            {/* FAQ */}
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6">
              <h4 className="text-white font-bold mb-4">Preguntas frecuentes</h4>
              <div className="space-y-4">
                {[
                  {
                    q: "¿Cuánto cuesta una automatización?",
                    a: "El precio varía según la complejidad del proyecto. Primero hacemos una auditoría para darte un precio exacto.",
                  },
                  {
                    q: "¿La auditoría es gratis?",
                    a: "No. La auditoría es un análisis profundo de tu negocio que tiene un costo. Precio regular $1,000 USD — ahora $500 USD para los primeros 3 clientes.",
                  },
                  {
                    q: "¿Qué incluye el soporte?",
                    a: "El soporte incluye corrección de errores del sistema sin costo adicional (dentro del alcance acordado). Nuevas implementaciones o funcionalidades adicionales sí tienen costo.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-slate-700/50 last:border-0 pb-4 last:pb-0">
                    <div className="text-white text-sm font-medium mb-1">{item.q}</div>
                    <div className="text-slate-400 text-sm">{item.a}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
