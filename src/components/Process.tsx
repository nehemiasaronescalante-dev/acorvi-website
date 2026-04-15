"use client";

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    subtitle: "Entendemos tu negocio",
    description:
      "Analizamos tus procesos actuales, identificamos cuellos de botella y definimos exactamente qué automatizar primero para el mayor impacto inmediato.",
    duration: "1-2 días",
    deliverable: "Reporte de oportunidades",
    color: "blue",
  },
  {
    number: "02",
    title: "Diseño",
    subtitle: "Arquitectura del sistema",
    description:
      "Diseñamos la arquitectura de tus flujos de automatización, seleccionamos las herramientas correctas y validamos el plan contigo antes de escribir una sola línea.",
    duration: "2-3 días",
    deliverable: "Blueprint de automatización",
    color: "red",
  },
  {
    number: "03",
    title: "Implementación",
    subtitle: "Construimos y conectamos",
    description:
      "Implementamos los flujos en tu entorno, conectamos todas las integraciones y hacemos pruebas exhaustivas para garantizar que todo funcione a la perfección.",
    duration: "3-5 días",
    deliverable: "Sistema funcionando",
    color: "green",
  },
  {
    number: "04",
    title: "Resultados",
    subtitle: "Medimos y optimizamos",
    description:
      "Monitoreamos el desempeño, te mostramos los ahorros de tiempo reales y ajustamos los flujos para maximizar el ROI. Tu éxito es nuestro éxito.",
    duration: "Continuo",
    deliverable: "Dashboard de métricas",
    color: "blue",
  },
];

const colorMap = {
  blue: {
    number: "text-brand-blue-light bg-brand-blue/20 border-brand-blue/40",
    badge: "bg-brand-blue/20 text-brand-blue-light",
    line: "bg-brand-blue/30",
  },
  red: {
    number: "text-brand-red-light bg-brand-red/20 border-brand-red/40",
    badge: "bg-brand-red/20 text-brand-red-light",
    line: "bg-brand-red/30",
  },
  green: {
    number: "text-brand-green-light bg-brand-green/20 border-brand-green/40",
    badge: "bg-brand-green/20 text-brand-green-light",
    line: "bg-brand-green/30",
  },
};

export default function Process() {
  return (
    <section id="proceso" className="py-24 section-dark bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-green/20 border border-brand-green/30 rounded-full px-4 py-1.5 mb-4">
            <span className="text-brand-green-light text-sm font-medium">Nuestro Proceso</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            De idea a resultados en{" "}
            <span className="text-gradient">7 días</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Un proceso probado y estructurado que garantiza implementaciones exitosas
            sin interrumpir tu operación actual.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connection line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-blue/30 via-brand-red/30 via-brand-green/30 to-brand-blue/30 z-0 mx-16" />

          {steps.map((step) => {
            const colors = colorMap[step.color as keyof typeof colorMap];
            return (
              <div
                key={step.number}
                className="relative z-10 bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600 transition-colors duration-300"
              >
                {/* Number */}
                <div className={`inline-flex w-12 h-12 rounded-xl border items-center justify-center font-black text-lg mb-4 ${colors.number}`}>
                  {step.number}
                </div>

                {/* Title */}
                <h3 className="text-white font-bold text-lg mb-1">{step.title}</h3>
                <p className="text-slate-500 text-xs font-medium mb-3">{step.subtitle}</p>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* Meta */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{step.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <svg className="w-3.5 h-3.5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className={`px-2 py-0.5 rounded-full ${colors.badge} font-medium`}>
                      {step.deliverable}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-slate-800/40 border border-brand-blue/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-3">
              ¿Listo para empezar?
            </h3>
            <p className="text-slate-400 mb-6">
              Agenda una llamada de 30 minutos totalmente gratis. Sin compromisos.
              Te decimos exactamente qué podemos automatizar en tu negocio.
            </p>
            <a
              href="#contacto"
              className="btn-green text-white font-bold px-8 py-4 rounded-xl inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Agendar Diagnóstico Gratuito
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
