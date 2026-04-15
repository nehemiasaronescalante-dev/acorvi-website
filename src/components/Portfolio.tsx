"use client";

const placeholderProjects = [
  {
    category: "Video Automation",
    title: "Canal de YouTube automatizado",
    description: "Flujo de producción de video: ingesta → transcripción → edición → publicación.",
    tags: ["n8n", "AssemblyAI", "Creatomate"],
    status: "caso de estudio próximamente",
    color: "blue",
  },
  {
    category: "Marketing Automation",
    title: "Sistema de email marketing IA",
    description: "Secuencias personalizadas con segmentación automática y optimización continua.",
    tags: ["n8n", "OpenAI", "SendGrid"],
    status: "caso de estudio próximamente",
    color: "red",
  },
  {
    category: "Flujos de Trabajo",
    title: "CRM automatizado con IA",
    description: "Seguimiento de leads, respuestas automáticas y scoring predictivo.",
    tags: ["n8n", "OpenAI", "WhatsApp API"],
    status: "caso de estudio próximamente",
    color: "green",
  },
];

const colorMap = {
  blue: {
    badge: "bg-brand-blue/20 text-brand-blue-light border-brand-blue/30",
    tag: "bg-brand-blue/10 text-brand-blue-light",
    dot: "bg-brand-blue-light",
  },
  red: {
    badge: "bg-brand-red/20 text-brand-red-light border-brand-red/30",
    tag: "bg-brand-red/10 text-brand-red-light",
    dot: "bg-brand-red-light",
  },
  green: {
    badge: "bg-brand-green/20 text-brand-green-light border-brand-green/30",
    tag: "bg-brand-green/10 text-brand-green-light",
    dot: "bg-brand-green-light",
  },
};

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 section-dark bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-blue/20 border border-brand-blue/30 rounded-full px-4 py-1.5 mb-4">
            <span className="text-brand-blue-light text-sm font-medium">Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Proyectos que{" "}
            <span className="text-gradient">generan resultados</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Casos de estudio reales de automatizaciones que transformaron operaciones completas.
            Casos de estudio detallados próximamente.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {placeholderProjects.map((project) => {
            const colors = colorMap[project.color as keyof typeof colorMap];
            return (
              <div
                key={project.title}
                className="bg-slate-800/40 border border-slate-700/50 rounded-2xl overflow-hidden group hover:border-slate-600 transition-colors duration-300"
              >
                {/* Thumbnail placeholder */}
                <div className="h-44 bg-slate-900 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                  <div className={`w-16 h-16 rounded-2xl border flex items-center justify-center ${colors.badge}`}>
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className={`text-xs px-2 py-1 rounded-full border ${colors.badge}`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-white font-bold mb-2">{project.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className={`text-xs px-2 py-1 rounded-md ${colors.tag}`}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Status */}
                  <div className="flex items-center gap-2 text-slate-500 text-xs">
                    <div className={`w-1.5 h-1.5 rounded-full ${colors.dot} opacity-60`} />
                    {project.status}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 mb-4">
            ¿Tu proyecto podría ser el siguiente caso de estudio?
          </p>
          <a
            href="#contacto"
            className="btn-blue text-white font-semibold px-6 py-3 rounded-xl inline-flex items-center gap-2"
          >
            Hablemos de tu proyecto
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
