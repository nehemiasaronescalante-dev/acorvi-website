"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-hero-gradient bg-grid-pattern flex items-center overflow-hidden">
      {/* Background decorators */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-blue/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Offer Badge */}
            <div className="inline-flex items-center gap-2 bg-brand-red/20 border border-brand-red/40 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-brand-red-light rounded-full animate-pulse" />
              <span className="text-brand-red-light text-sm font-medium">
                Oferta limitada: 50% de descuento para los primeros 3 clientes
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Automatizamos tu negocio para que{" "}
              <span className="text-gradient">generes más clientes y ahorres tiempo.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-slate-300 text-lg sm:text-xl max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Creamos sistemas que trabajan por ti 24/7, reduciendo tareas manuales y aumentando tus ingresos.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contacto"
                className="btn-red text-white font-bold px-8 py-4 rounded-xl text-base inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Solicitar auditoría
              </a>
              <a
                href="#servicios"
                className="btn-blue text-white font-semibold px-8 py-4 rounded-xl text-base inline-flex items-center justify-center gap-2"
              >
                Ver servicios
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            {/* Trust indicators */}
            <p className="mt-6 text-slate-500 text-sm">
              ✓ Sistemas personalizados &nbsp;·&nbsp; ✓ Trabajan 24/7 &nbsp;·&nbsp; ✓ Soporte incluido
            </p>
          </div>

          {/* Right: Visual */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              {/* Main card */}
              <div className="animate-float bg-slate-800/80 border border-brand-blue/30 rounded-2xl p-6 w-80 shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-brand-red/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-brand-red-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">Automatización Activa</div>
                    <div className="text-green-400 text-xs font-medium">● En vivo</div>
                  </div>
                </div>

                {/* Metrics */}
                {[
                  { label: "Clientes generados", value: 94, color: "bg-brand-red-light" },
                  { label: "Tareas automatizadas", value: 87, color: "bg-brand-blue-light" },
                  { label: "Tiempo ahorrado", value: 78, color: "bg-green-500" },
                ].map((item) => (
                  <div key={item.label} className="mb-3">
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>{item.label}</span>
                      <span>{item.value}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className={`${item.color} h-2 rounded-full`}
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Floating badge 1 */}
              <div className="absolute -top-4 -right-4 bg-brand-red/20 border border-brand-red/40 rounded-xl px-3 py-2 text-center">
                <div className="text-brand-red-light font-black text-lg">24/7</div>
                <div className="text-slate-300 text-xs">Siempre activo</div>
              </div>

              {/* Floating badge 2 */}
              <div className="absolute -bottom-4 -left-4 bg-brand-blue/20 border border-brand-blue/30 rounded-xl px-3 py-2">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-blue-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-300 text-xs">Más clientes, menos trabajo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500">
        <span className="text-xs">Conoce más</span>
        <div className="w-5 h-8 border-2 border-slate-600 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-brand-red-light rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
