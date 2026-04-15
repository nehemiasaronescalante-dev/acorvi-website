"use client";

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.069A1 1 0 0121 8.882v6.236a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: "Automatización de Video",
    description:
      "Convierte tus videos crudos en contenido listo para publicar con transcripción automática, subtítulos, edición y renderizado — sin intervención humana.",
    features: [
      "Transcripción con IA (español nativo)",
      "Subtítulos automáticos",
      "Renderizado en la nube",
      "Entrega directa en Drive/Telegram",
    ],
    color: "blue",
    badge: "Más popular",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    title: "Flujos de Trabajo IA",
    description:
      "Diseñamos e implementamos pipelines de automatización con n8n, conectando tus herramientas existentes para eliminar el trabajo manual repetitivo.",
    features: [
      "Integración con +400 apps",
      "Lógica condicional avanzada",
      "Manejo de errores automático",
      "Reportes en tiempo real",
    ],
    color: "red",
    badge: null,
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    title: "Marketing Automation",
    description:
      "Automatizamos tus campañas de email, WhatsApp y redes sociales para que tu mensaje llegue al cliente correcto en el momento ideal.",
    features: [
      "Secuencias de email automatizadas",
      "Chatbot WhatsApp con IA",
      "Publicación en redes sociales",
      "Análisis y optimización continua",
    ],
    color: "green",
    badge: "Nuevo",
  },
];

const colorMap = {
  blue: {
    icon: "text-brand-blue-light bg-brand-blue/20",
    border: "border-brand-blue/30 hover:border-brand-blue/60",
    badge: "bg-brand-blue/20 text-brand-blue-light border-brand-blue/30",
    check: "text-brand-blue-light",
  },
  red: {
    icon: "text-brand-red-light bg-brand-red/20",
    border: "border-brand-red/30 hover:border-brand-red/50",
    badge: "bg-brand-red/20 text-brand-red-light border-brand-red/30",
    check: "text-brand-red-light",
  },
  green: {
    icon: "text-brand-green-light bg-brand-green/20",
    border: "border-brand-green/30 hover:border-brand-green/50",
    badge: "bg-brand-green/20 text-brand-green-light border-brand-green/30",
    check: "text-brand-green-light",
  },
};

export default function Services() {
  return (
    <section id="servicios" className="py-24 section-dark bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-blue/20 border border-brand-blue/30 rounded-full px-4 py-1.5 mb-4">
            <span className="text-brand-blue-light text-sm font-medium">Nuestros Servicios</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Soluciones que{" "}
            <span className="text-gradient">transforman tu negocio</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Tres servicios especializados para automatizar las partes más importantes
            de tu operación y liberar a tu equipo para lo que realmente importa.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
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
