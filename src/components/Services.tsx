"use client";

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Automatización",
    description:
      "Creamos sistemas que generan clientes automáticamente, reducen tiempo y mejoran eficiencia — totalmente personalizados para tu negocio.",
    features: [
      "Sistemas que trabajan por ti 24/7",
      "Reducción de tareas manuales",
      "Generación automática de clientes",
      "Personalizado a tu operación",
    ],
    color: "red",
    badge: "Más popular",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Páginas web",
    description:
      "Diseñadas para convertir visitantes en clientes. Sitios modernos, rápidos y optimizados para que tu negocio genere resultados.",
    features: [
      "Diseño moderno y profesional",
      "Optimizado para conversión",
      "Responsive en todos los dispositivos",
      "Rápido y fácil de mantener",
    ],
    color: "blue",
    badge: null,
  },
];

const colorMap = {
  red: {
    icon: "text-brand-red-light bg-brand-red/20",
    border: "border-brand-red/30 hover:border-brand-red/60",
    badge: "bg-brand-red/20 text-brand-red-light border-brand-red/30",
    check: "text-brand-red-light",
  },
  blue: {
    icon: "text-brand-blue-light bg-brand-blue/20",
    border: "border-brand-blue/30 hover:border-brand-blue/60",
    badge: "bg-brand-blue/20 text-brand-blue-light border-brand-blue/30",
    check: "text-brand-blue-light",
  },
};

export default function Services() {
  return (
    <section id="servicios" className="py-24 section-dark bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-red/20 border border-brand-red/30 rounded-full px-4 py-1.5 mb-4">
            <span className="text-brand-red-light text-sm font-medium">Nuestros Servicios</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Soluciones que{" "}
            <span className="text-gradient">generan resultados</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Dos servicios enfocados en lo que más importa: conseguirte más clientes y liberar tu tiempo.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service) => {
            const colors = colorMap[service.color as keyof typeof colorMap];
            return (
              <div
                key={service.title}
                className={`relative bg-slate-800/50 border ${colors.border} rounded-2xl p-8 card-hover transition-all duration-300 backdrop-blur-sm`}
              >
                {/* Badge */}
                {service.badge && (
                  <div className={`absolute top-4 right-4 text-xs font-bold px-2 py-1 rounded-full border ${colors.badge}`}>
                    {service.badge}
                  </div>
                )}

                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl ${colors.icon} mb-6`}>
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-slate-300">
                      <svg className={`w-4 h-4 flex-shrink-0 ${colors.check}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contacto"
                  className={`mt-8 w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl border ${colors.border} text-slate-300 hover:text-white text-sm font-medium transition-colors duration-200`}
                >
                  Quiero este servicio
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
