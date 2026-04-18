"use client";

import { useState } from "react";
import Logo from "@/components/Logo";

const WEBHOOK_URL =
  process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL ||
  "https://mi-agencia-n8n.xt5kbb.easypanel.host/webhook/analisis-form";

const benefits = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Más clientes",
    description: "Sistemas que capturan y convierten prospectos automáticamente, incluso mientras duermes.",
    color: "red",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Menos trabajo manual",
    description: "Elimina tareas repetitivas: respuestas, seguimientos, agendamientos y reportes en piloto automático.",
    color: "blue",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Sistema activo 24/7",
    description: "Tu negocio responde y vende a cualquier hora, todos los días, sin depender de tu presencia.",
    color: "red",
  },
];

const colorMap = {
  red: {
    icon: "text-brand-red-light bg-brand-red/20 border-brand-red/30",
    border: "border-brand-red/20",
  },
  blue: {
    icon: "text-brand-blue-light bg-brand-blue/20 border-brand-blue/30",
    border: "border-brand-blue/20",
  },
};

export default function AnalisisPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    negocio: "",
    email: "",
    web: "",
    telefono: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
        }),
      });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-hero-gradient bg-grid-pattern">
      {/* Header minimal */}
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-slate-800/50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Logo />
          <span className="text-slate-400 text-sm hidden sm:block">Análisis gratuito de tu negocio</span>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-28 pb-20">
        {/* HERO */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-red/20 border border-brand-red/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-brand-red-light rounded-full animate-pulse" />
            <span className="text-brand-red-light text-sm font-medium">Análisis gratuito</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Detectamos{" "}
            <span className="text-gradient">oportunidades</span>
            <br />
            en tu negocio
          </h1>

          <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
            Muchos negocios pierden clientes y tiempo por procesos manuales que se pueden automatizar.
            En 30 minutos te mostramos exactamente cómo optimizar tu negocio.
          </p>

          <a
            href="#formulario"
            className="btn-red inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-xl text-base"
          >
            Quiero mi análisis gratuito
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </section>

        {/* PROBLEMA → SOLUCIÓN */}
        <section className="mb-16">
          <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8 sm:p-10 max-w-3xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-brand-red-light font-bold text-sm uppercase tracking-wider mb-3">El problema</div>
                <h2 className="text-white font-black text-2xl mb-4 leading-snug">
                  Los procesos manuales te cuestan clientes y tiempo
                </h2>
                <ul className="space-y-2">
                  {[
                    "Prospectos sin respuesta rápida se pierden",
                    "Seguimientos manuales que nunca se hacen",
                    "Horas en tareas que una máquina puede hacer",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-slate-400 text-sm">
                      <svg className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-brand-blue-light font-bold text-sm uppercase tracking-wider mb-3">La solución</div>
                <h2 className="text-white font-black text-2xl mb-4 leading-snug">
                  Automatización + sistemas que trabajan por ti
                </h2>
                <ul className="space-y-2">
                  {[
                    "Respuestas automáticas en segundos",
                    "Seguimientos sin esfuerzo manual",
                    "Tu negocio funcionando 24/7",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-slate-300 text-sm">
                      <svg className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFICIOS */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-black text-white text-center mb-10">
            Lo que obtienes con tu{" "}
            <span className="text-gradient">análisis</span>
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {benefits.map((b) => {
              const c = colorMap[b.color as keyof typeof colorMap];
              return (
                <div
                  key={b.title}
                  className={`bg-slate-800/40 border ${c.border} rounded-2xl p-6 text-center`}
                >
                  <div className={`inline-flex p-3 rounded-xl border ${c.icon} mb-4`}>
                    {b.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{b.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{b.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* FORMULARIO */}
        <section id="formulario" className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-black text-white mb-3">
              Solicita tu análisis{" "}
              <span className="text-gradient">gratuito</span>
            </h2>
            <p className="text-slate-400 text-sm">
              Completa el formulario y te contactamos en menos de 24 horas.
            </p>
          </div>

          <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8">
            {status === "sent" ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-900/30 border border-green-600/40 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-white font-black text-xl mb-2">¡Solicitud enviada!</h3>
                <p className="text-slate-400 text-sm max-w-sm mx-auto">
                  Recibimos tu información. Te contactaremos en menos de 24 horas para coordinar tu análisis gratuito.
                </p>
                <div className="mt-6 pt-6 border-t border-slate-700/50">
                  <p className="text-slate-500 text-xs mb-3">¿Prefieres hablar ahora?</p>
                  <a
                    href="https://wa.me/5127183591?text=Hola%2C%20solicité%20mi%20análisis%20gratuito%20en%20acorvi.com/analisis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-700/20 border border-green-600/30 text-green-400 hover:text-green-300 font-medium px-5 py-2.5 rounded-xl text-sm transition-colors"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Escríbenos por WhatsApp
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-400 text-xs font-medium mb-1.5">
                      Nombre <span className="text-brand-red-light">*</span>
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Tu nombre completo"
                      className="w-full bg-slate-900 border border-slate-700 text-white placeholder-slate-600 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand-red transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-xs font-medium mb-1.5">
                      Negocio <span className="text-brand-red-light">*</span>
                    </label>
                    <input
                      type="text"
                      name="negocio"
                      required
                      value={formData.negocio}
                      onChange={handleChange}
                      placeholder="Ej: restaurante, clínica..."
                      className="w-full bg-slate-900 border border-slate-700 text-white placeholder-slate-600 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand-red transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 text-xs font-medium mb-1.5">
                    Email <span className="text-brand-red-light">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className="w-full bg-slate-900 border border-slate-700 text-white placeholder-slate-600 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand-red transition-colors"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-400 text-xs font-medium mb-1.5">
                      Página web <span className="text-slate-600">(opcional)</span>
                    </label>
                    <input
                      type="url"
                      name="web"
                      value={formData.web}
                      onChange={handleChange}
                      placeholder="https://tunegocio.com"
                      className="w-full bg-slate-900 border border-slate-700 text-white placeholder-slate-600 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand-blue transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-xs font-medium mb-1.5">
                      Teléfono <span className="text-slate-600">(opcional)</span>
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="+52 55 1234 5678"
                      className="w-full bg-slate-900 border border-slate-700 text-white placeholder-slate-600 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand-blue transition-colors"
                    />
                  </div>
                </div>

                {status === "error" && (
                  <p className="text-red-400 text-xs text-center bg-red-900/20 border border-red-700/30 rounded-lg py-2 px-3">
                    Hubo un error al enviar. Intenta de nuevo o escríbenos por{" "}
                    <a href="https://wa.me/5127183591" className="underline" target="_blank" rel="noopener noreferrer">
                      WhatsApp
                    </a>
                    .
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-red w-full text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 disabled:opacity-60 text-base mt-2"
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
                      Quiero mi análisis gratuito
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-slate-600 text-xs text-center">
                  Sin compromiso. Te contactamos en menos de 24 horas.
                </p>
              </form>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
