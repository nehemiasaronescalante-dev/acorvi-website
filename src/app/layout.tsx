import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ACORVI | Automatización Inteligente para Negocios",
  description:
    "Transformamos negocios con automatización de IA. Video automation, flujos inteligentes y marketing automation. Resultados reales desde la primera semana.",
  keywords: "automatización, inteligencia artificial, video automation, n8n, flujos de trabajo, marketing automation",
  openGraph: {
    title: "ACORVI | Automatización Inteligente para Negocios",
    description: "Transformamos negocios con automatización de IA. Resultados reales desde la primera semana.",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
