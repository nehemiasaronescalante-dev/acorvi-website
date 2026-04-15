"use client";

const steps = [
  {
    number: "01",
    title: "Auditoría",
    subtitle: "Analizamos tu negocio",
    description:
      "Analizamos a profundidad tus procesos para identificar dónde estás perdiendo tiempo y dinero, y diseñamos un plan claro de automatización.",
    color: "red",
  },
  {
    number: "02",
    title: "Estrategia",
    subtitle: "Diseñamos el plan",
    description:
      "Definimos exactamente qué sistemas construir, qué herramientas usar y cómo conectar tu operación para el mayor impacto posible.",
    color: "blue",
  },
  {
    number: "03",
    title: "Implementación",
    subtitle: "Construimos y conectamos",
    description:
      "Implementamos los sistemas en tu negocio, hacemos pruebas completas y nos aseguramos de que todo funcione correctamente.",
    color: "red",
  },
  {
    number: "04",
    title: "Optimización",
    subtitle: "Mejoramos continuamente",
    description:
      "Monitoreamos el desempeño, medimos resultados reales y ajustamos los sistemas para maximizar el impacto en tu negocio.",
    color: "blue",
  },
];

const colorMap = {
  red: {
    number: "text-brand-red-light bg-brand-red/20 border-brand-red/40",
    badge: "bg-brand-red/20 text-brand-red-light",
  },
  blue: {
    number: "text-brand-blue-light bg-brand-blue/20 border-brand-blue/40",
    badge: "bg-brand-blue/20 text-brand-blue-light",
  },
};

export default function Process() {
  return (
    <section id="proceso" className="py-24 section-dark bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-blue/20 border border-brand-blue/30 rounded-full px-4 py-1.5 mb-4">
            <span className="text-brand-blue-light text-sm font-medium">Nuestro Proceso</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            De auditoría a{" "}
            <span className="text-gradient">resultados reales</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Un proceso claro y probado que garantiza que cada sistema que implementamos
            genere resultados para tu negocio.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connection line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-red/30 via-brand-blue/30 via-brand-red/30 to-brand-blue/30 z-0 mx-16" />

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
                <p className="text-slate-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-slate-800/40 border border-brand-red/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-3">
              Empieza con una auditoría
            </h3>
            <p className="text-slate-400 mb-6">
              Analizamos tu negocio a profundidad para identificar dónde estás perdiendo tiempo y dinero.
              Precio: <span className="text-white font-bold">$1,000 USD</span>{" "}
              <span className="text-brand-red-light font-bold">— ahora $500 USD</span> para los primeros 3 clientes.
            </p>
            <a
              href="#contacto"
              className="btn-red text-white font-bold px-8 py-4 rounded-xl inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Solicitar auditoría
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
