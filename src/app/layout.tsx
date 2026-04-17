import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://acorvi.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ACORVI",
  url: siteUrl,
  logo: `${siteUrl}/ultimo.svg`,
  description:
    "Automatizamos procesos, generamos más clientes y optimizamos negocios con sistemas inteligentes y páginas web diseñadas para convertir.",
  email: "acorvioficial@gmail.com",
  telephone: "+5127183591",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+5127183591",
    contactType: "customer service",
    availableLanguage: "Spanish",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios ACORVI",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Automatización de negocios",
          description:
            "Sistemas que responden mensajes, agendan citas y gestionan clientes automáticamente 24/7. Automatización de WhatsApp, Instagram y Email.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Páginas web para negocios",
          description:
            "Páginas web diseñadas para convertir visitantes en clientes. Sitios modernos, rápidos y optimizados para generar resultados.",
        },
      },
    ],
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "ACORVI - Automatización de negocios y páginas web",
  description:
    "Automatizamos procesos, generamos más clientes y optimizamos negocios con sistemas inteligentes y páginas web diseñadas para convertir.",
  keywords:
    "automatización de negocios, automatizar procesos empresariales, páginas web para negocios, páginas web que convierten clientes, automatizar WhatsApp, agendamiento automático, generación de leads automática",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "ACORVI - Automatización de negocios y páginas web",
    description:
      "Automatizamos procesos, generamos más clientes y optimizamos negocios con sistemas inteligentes y páginas web diseñadas para convertir.",
    url: siteUrl,
    siteName: "ACORVI",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ACORVI - Automatización de negocios y páginas web",
    description:
      "Automatizamos procesos, generamos más clientes y optimizamos negocios con sistemas inteligentes y páginas web diseñadas para convertir.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
