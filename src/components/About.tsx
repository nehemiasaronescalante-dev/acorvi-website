"use client";

const values = [
  {
    icon: "🎯",
    title: "Orientado a resultados",
    description: "No implementamos tecnología por tecnología. Cada automatización tiene un ROI medible desde la primera semana.",
  },
  {
    icon: "🔒",
    title: "Transparencia total",
    description: "Te explicamos cada decisión técnica en lenguaje humano. Nunca te dejamos en la oscuridad sobre tu propio sistema.",
  },
  {
    icon: "⚡",
    title: "Velocidad de ejecución",
    description: "Somos una startup ágil. Lo que otras agencias tardan semanas, nosotros lo entregamos en días.",
  },
];

export default function About() {
  return (
    <section id="nosotros" className="py-24 section-mid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-blue/20 border border-brand-blue/30 rounded-full px-4 py-1.5 mb-6">
              <span className="text-brand-blue-light text-sm font-medium">Sobre ACORVI</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
              Construimos sistemas,{" "}
              <span className="text-gradient">no solo herramientas</span>
            </h2>

            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                ACORVI nació de una frustración real: negocios con enorme potencial
                desperdiciando horas en tareas repetitivas que una máquina puede hacer mejor.
              </p>
              <p>
                Somos un equipo enfocado en implementar automatización de IA que funciona
                en el mundo real — no demos bonitas que nunca llegan a producción.
              </p>
              <p>
                Cada proyecto que tomamos se convierte en un sistema que opera 24/7,
                sin errores humanos, sin demoras, escalando contigo.
              </p>
            </div>

            {/* Values */}
            <div className="mt-10 space-y-4">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="flex items-start gap-4 bg-slate-800/30 border border-slate-700/50 rounded-xl p-4"
                >
                  <span className="text-2xl flex-shrink-0">{value.icon}</span>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{value.title}</h4>
                    <p className="text-slate-400 text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative">
            <div className="bg-slate-800/40 border border-brand-blue/20 rounded-3xl p-8">
              {/* Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-brand-blue/30 border border-brand-blue/50 rounded-2xl flex items-center justify-center">
                  <span className="text-2xl font-black text-brand-blue-light">AC</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Aaron Escalante</h3>
                  <p className="text-brand-blue-light text-sm">Fundador & CEO, ACORVI</p>
                </div>
              </div>

              <blockquote className="text-slate-300 text-lg italic leading-relaxed mb-8 border-l-4 border-brand-blue pl-4">
                &ldquo;Automatizar no es el futuro — es el presente. Los negocios que no
                adopten IA hoy estarán compitiendo contra robots mañana. Yo prefiero
                que seas el que tiene los robots.&rdquo;
              </blockquote>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-700/50">
                {[
                  { value: "50+", label: "Flujos construidos" },
                  { value: "20+", label: "Clientes satisfechos" },
                  { value: "2 años", label: "En automatización" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-xl font-black text-white">{stat.value}</div>
                    <div className="text-slate-500 text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech stack badges */}
            <div className="mt-4 flex flex-wrap gap-2">
              {["n8n", "AssemblyAI", "Creatomate", "Google Drive", "Telegram", "OpenAI", "Vercel"].map((tech) => (
                <span
                  key={tech}
                  className="bg-slate-800 border border-slate-700 text-slate-400 text-xs px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
