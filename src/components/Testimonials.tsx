"use client";

export default function Auditoria() {
  return (
    <section id="auditoria" className="py-24 section-mid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-brand-red/20 border border-brand-red/30 rounded-full px-4 py-1.5 mb-4">
              <span className="w-2 h-2 bg-brand-red-light rounded-full animate-pulse" />
              <span className="text-brand-red-light text-sm font-medium">Oferta limitada — solo 3 cupos</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Auditoría estratégica de{" "}
              <span className="text-gradient">automatización</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Analizamos tu negocio a profundidad para identificar dónde estás perdiendo tiempo y dinero,
              y diseñamos un plan claro de automatización.
            </p>
          </div>

          {/* Main card */}
          <div className="bg-slate-800/40 border border-brand-red/30 rounded-2xl p-8 sm:p-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* What's included */}
              <div>
                <h3 className="text-white font-bold text-xl mb-6">¿Qué incluye?</h3>
                <ul className="space-y-4">
                  {[
                    "Análisis completo de procesos actuales",
                    "Identificación de oportunidades de automatización",
                    "Plan personalizado de implementación",
                    "Estimación de ahorro de tiempo y dinero",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-brand-red/20 border border-brand-red/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-brand-red-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-slate-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing */}
              <div className="bg-slate-900/60 border border-slate-700/50 rounded-xl p-6 text-center">
                <p className="text-slate-500 text-sm mb-1">Precio regular</p>
                <p className="text-slate-500 text-2xl font-bold line-through mb-3">$1,000 USD</p>
                <div className="bg-brand-red/10 border border-brand-red/30 rounded-lg py-2 px-4 inline-block mb-3">
                  <span className="text-brand-red-light text-xs font-bold">50% de descuento</span>
                </div>
                <p className="text-slate-400 text-sm mb-1">Precio especial</p>
                <p className="text-white text-4xl font-black mb-2">$500 <span className="text-xl font-normal text-slate-400">USD</span></p>
                <p className="text-slate-500 text-xs mb-6">Para los primeros 3 clientes a cambio de resultados y testimonio</p>
                <a
                  href="#contacto"
                  className="btn-red text-white font-bold py-3 px-6 rounded-xl w-full flex items-center justify-center gap-2 text-sm"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Obtener auditoría
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
