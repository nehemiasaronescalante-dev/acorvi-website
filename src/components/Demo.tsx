"use client";

const stats = [
  { value: "80%", label: "Reducción de tiempo operativo", icon: "⏱" },
  { value: "3x", label: "Más contenido generado", icon: "📈" },
  { value: "$0", label: "Costo por operación adicional", icon: "💰" },
  { value: "7 días", label: "Tiempo de implementación", icon: "🚀" },
];

const steps = [
  {
    step: "01",
    title: "Recibes el video",
    description: "Tu equipo envía el video crudo por Telegram o WhatsApp",
    icon: "📱",
  },
  {
    step: "02",
    title: "IA procesa automáticamente",
    description: "Transcripción, limpieza de audio y matching de imágenes en segundos",
    icon: "🤖",
  },
  {
    step: "03",
    title: "Renderizado en la nube",
    description: "El sistema genera el video final con subtítulos y branding",
    icon: "☁️",
  },
  {
    step: "04",
    title: "Entrega automática",
    description: "Video listo en tu Google Drive y notificación en Telegram",
    icon: "✅",
  },
];

export default function Demo() {
  return (
    <section id="demo" className="py-24 section-mid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-red/20 border border-brand-red/30 rounded-full px-4 py-1.5 mb-4">
            <span className="text-brand-red-light text-sm font-medium">Cómo Funciona</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            De video crudo a{" "}
            <span className="text-gradient">contenido listo en minutos</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Mira cómo nuestra automatización de video transforma tu flujo de trabajo
            — sin editores, sin demoras, sin costos ocultos.
          </p>
        </div>

        {/* Demo Visual */}
        <div className="bg-slate-800/40 border border-brand-blue/20 rounded-3xl p-8 mb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Flow steps */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-6">
                Pipeline de Video Automation
              </h3>
              {steps.map((step, i) => (
                <div key={step.step} className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-10 h-10 bg-brand-blue/30 border border-brand-blue/50 rounded-xl flex items-center justify-center text-brand-blue-light font-bold text-sm">
                      {step.step}
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-0.5 h-8 bg-brand-blue/20 mt-2" />
                    )}
                  </div>
                  <div className="pt-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg">{step.icon}</span>
                      <span className="text-white font-semibold text-sm">{step.title}</span>
                    </div>
                    <p className="text-slate-400 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Terminal-style display */}
            <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-700">
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 border-b border-slate-700">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-slate-400 text-xs">acorvi-pipeline.log</span>
              </div>
              <div className="p-4 font-mono text-xs space-y-2">
                {[
                  { time: "10:23:01", status: "INFO", msg: "📱 Video recibido vía Telegram (247MB)" },
                  { time: "10:23:03", status: "INFO", msg: "☁️ Subiendo a Google Drive /raw/" },
                  { time: "10:23:08", status: "OK", msg: "✅ Archivo guardado: video_2024_01_15.mp4" },
                  { time: "10:23:09", status: "INFO", msg: "🎙 Iniciando transcripción con AssemblyAI..." },
                  { time: "10:24:02", status: "OK", msg: "✅ Transcripción completada: 1,247 palabras" },
                  { time: "10:24:02", status: "INFO", msg: "🖼 Procesando imágenes de apoyo..." },
                  { time: "10:24:18", status: "OK", msg: "✅ 12 imágenes seleccionadas" },
                  { time: "10:24:19", status: "INFO", msg: "🎬 Renderizando video con Creatomate..." },
                  { time: "10:26:44", status: "OK", msg: "✅ Video final: video_final_2024_01_15.mp4" },
                  { time: "10:26:45", status: "OK", msg: "📲 Notificación enviada a @acorvi_bot" },
                ].map((line, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-slate-600 flex-shrink-0">{line.time}</span>
                    <span className={`flex-shrink-0 ${line.status === "OK" ? "text-brand-green" : "text-brand-blue-light"}`}>
                      [{line.status}]
                    </span>
                    <span className="text-slate-300">{line.msg}</span>
                  </div>
                ))}
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-slate-600">10:26:46</span>
                  <span className="text-brand-green">[DONE]</span>
                  <span className="text-brand-green font-bold">⚡ Total: 3m 45s — Sin intervención humana</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-slate-800/40 border border-brand-blue/20 rounded-2xl p-6 text-center card-hover"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
