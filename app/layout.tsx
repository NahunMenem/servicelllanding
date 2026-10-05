import type { Metadata, Viewport } from "next";
import "./globals.css";
import { PageShell } from "@/components/Site";
import { siteUrl } from "@/lib/site";
export const metadata: Metadata = { metadataBase: new URL(siteUrl), title: { default: "Servicio técnico de celulares | Servicell", template: "%s | Servicell" }, description: "Servicio técnico de celulares en La Rioja Capital y San Juan Capital. Consultá por reparaciones para iPhone, Samsung y otras marcas.", applicationName: "Servicell", openGraph: { type: "website", locale: "es_AR", siteName: "Servicell", images: [{ url: "/servicell-logo.png", width: 1600, height: 1600, alt: "Servicell" }] }, twitter: { card: "summary_large_image" }, robots: { index: true, follow: true } };
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#075fe0" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="es-AR"><body><PageShell>{children}</PageShell></body></html>; }
