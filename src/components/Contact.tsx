"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Build WhatsApp message as fallback / primary contact
    const whatsappMsg = encodeURIComponent(
      `Hola ACORVI! 👋\n\n` +
      `*Nombre:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Teléfono:* ${formData.phone || "No especificado"}\n` +
      `*Servicio de interés:* ${formData.service || "Por definir"}\n\n` +
      `*Mensaje:*\n${formData.message}\n\n` +
      `_Enviado desde acorvi.com_`
    );

    // Simulate form submission (in production, replace with API call)
    setTimeout(() => {
      setStatus("sent");
      window.open(`https://wa.me/1234567890?text=${whatsappMsg}`, "_blank");
    }, 800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contacto" className="py-24 section-dark bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-green/20 border border-brand-green/30 rounded-full px-4 py-1.5 mb-4">
            <span className="text-brand-green-light text-sm font-medium">Contacto</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Empieza a{" "}
            <span className="text-gradient">automatizar hoy</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Primera consulta 100% gratis. Cuéntanos tu negocio y te decimos
            exactamente cómo podemos ayudarte.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8">
            <h3 className="text-white font-bold text-xl mb-6">Escríbenos</h3>

            {status === "sent" ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-brand-green/20 border border-brand-green/40 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-white font-bold text-lg mb-2">¡Mensaje enviado!</h4>
                <p className="text-slate-400 text-sm">
                  Se abrió WhatsApp con tu mensaje. Si no se abrió,{" "}
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-brand-blue-light underline"
                  >
                    intenta de nuevo
                  </button>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-400 text-xs font-medium mb-1.5">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className="w-full bg-slate-900 border border-slate-700 text-white placeholder-slate-600 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand-blue transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-xs font-medium mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@empresa.com"
                      className="w-full bg-slate-900 border border-slate-700 text-white placeholder-slate-600 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand-blue transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-400 text-xs font-medium mb-1.5">
                      Teléfono / WhatsApp
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+52 55 1234 5678"
                      className="w-full bg-slate-900 border border-slate-700 text-white placeholder-slate-600 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand-blue transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-xs font-medium mb-1.5">
                      Servicio de interés
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-slate-900 border border-slate-700 text-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand-blue transition-colors"
                    >
                      <option value="">Selecciona uno</option>
                      <option value="Video Automation">Automatización de Video</option>
                      <option value="Flujos de Trabajo">Flujos de Trabajo IA</option>
                      <option value="Marketing Automation">Marketing Automation</option>
                      <option value="Diagnóstico general">Diagnóstico general</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 text-xs font-medium mb-1.5">
                    Cuéntanos tu negocio *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="¿Qué procesos quieres automatizar? ¿Cuánto tiempo pierdes en tareas manuales?"
                    className="w-full bg-slate-900 border border-slate-700 text-white placeholder-slate-600 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand-blue transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-green w-full text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 disabled:opacity-60"
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
                      Enviar y continuar en WhatsApp
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
              href="https://wa.me/1234567890?text=Hola%20ACORVI%2C%20quiero%20agendar%20una%20consulta%20gratuita"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-brand-green/10 border border-brand-green/30 rounded-2xl p-6 hover:bg-brand-green/20 transition-colors duration-300 group"
            >
              <div className="w-12 h-12 bg-brand-green/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-green/30 transition-colors">
                <svg className="w-6 h-6 text-brand-green" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <div className="text-white font-bold">WhatsApp directo</div>
                <div className="text-slate-400 text-sm">Respuesta en menos de 2 horas</div>
                <div className="text-brand-green text-sm font-medium mt-1">Agendar ahora →</div>
              </div>
            </a>

            {/* FAQ */}
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6">
              <h4 className="text-white font-bold mb-4">Preguntas frecuentes</h4>
              <div className="space-y-4">
                {[
                  {
                    q: "¿Cuánto cuesta una automatización?",
                    a: "Desde $500 USD dependiendo de la complejidad. La consulta inicial es siempre gratuita.",
                  },
                  {
                    q: "¿Necesito conocimientos técnicos?",
                    a: "No. Nosotros manejamos todo lo técnico. Tú solo nos dices qué quieres automatizar.",
                  },
                  {
                    q: "¿Qué pasa si algo falla?",
                    a: "Incluimos mantenimiento y monitoreo. Si algo falla, lo arreglamos sin costo adicional.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-slate-700/50 last:border-0 pb-4 last:pb-0">
                    <div className="text-white text-sm font-medium mb-1">{item.q}</div>
                    <div className="text-slate-400 text-sm">{item.a}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 text-slate-400 text-sm">
              <svg className="w-5 h-5 text-brand-blue-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>hola@acorvi.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
