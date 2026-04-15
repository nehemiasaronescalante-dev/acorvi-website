"use client";

const testimonials = [
  {
    name: "María González",
    role: "CEO, Startup EdTech",
    avatar: "MG",
    color: "blue",
    quote:
      "ACORVI automatizó todo nuestro proceso de producción de video. Lo que nos tomaba 3 días de edición ahora sucede en 20 minutos. Literalmente cambiaron nuestro modelo de negocio.",
    result: "3 días → 20 minutos",
  },
  {
    name: "Carlos Ramírez",
    role: "Director de Marketing",
    avatar: "CR",
    color: "green",
    quote:
      "Las secuencias de email automatizadas que construyeron duplicaron nuestra tasa de conversión en 30 días. El sistema sabe exactamente cuándo y qué enviar a cada lead.",
    result: "+2x conversión",
  },
  {
    name: "Ana Martínez",
    role: "Fundadora, E-commerce",
    avatar: "AM",
    color: "red",
    quote:
      "Mi equipo de atención al cliente pasó de 200 tickets por día a menos de 30. El chatbot de WhatsApp resuelve el 85% de las consultas sin intervención humana.",
    result: "85% automático",
  },
];

const colorMap = {
  blue: {
    avatar: "bg-brand-blue/30 text-brand-blue-light border-brand-blue/40",
    result: "bg-brand-blue/20 text-brand-blue-light",
    stars: "text-brand-blue-light",
  },
  green: {
    avatar: "bg-brand-green/30 text-brand-green-light border-brand-green/40",
    result: "bg-brand-green/20 text-brand-green-light",
    stars: "text-brand-green-light",
  },
  red: {
    avatar: "bg-brand-red/30 text-brand-red-light border-brand-red/40",
    result: "bg-brand-red/20 text-brand-red-light",
    stars: "text-brand-red-light",
  },
};

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-24 section-mid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-green/20 border border-brand-green/30 rounded-full px-4 py-1.5 mb-4">
            <span className="text-brand-green-light text-sm font-medium">Testimonios</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Clientes que ya{" "}
            <span className="text-gradient">trabajan menos y ganan más</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Resultados reales de negocios reales. Sin exageraciones.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => {
            const colors = colorMap[t.color as keyof typeof colorMap];
            return (
              <div
                key={t.name}
                className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600 transition-colors duration-300"
              >
                {/* Stars */}
                <div className={`flex gap-1 mb-4 ${colors.stars}`}>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-slate-300 text-sm leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Result Badge */}
                <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold mb-6 ${colors.result}`}>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  {t.result}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-700/50">
                  <div className={`w-10 h-10 rounded-full border flex items-center justify-center font-bold text-sm ${colors.avatar}`}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-slate-500 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Coming soon note */}
        <p className="text-center text-slate-600 text-sm mt-8">
          * Casos de estudio detallados disponibles próximamente
        </p>
      </div>
    </section>
  );
}
