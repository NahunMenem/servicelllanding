# Servicell · web pública

Sitio público independiente para captar consultas de reparación en La Rioja Capital y San Juan Capital. Construido con Next.js App Router, React y TypeScript; las páginas locales y las 16 páginas de servicio se generan estáticamente para mantener HTML indexable.

## Desarrollo

```bash
npm install
Copy-Item .env.example .env.local
npm run dev
```

Abrir `http://localhost:3000`. No hay dependencia ni integración con el sistema administrativo.

## Datos oficiales antes del despliegue

Completar `.env.local` con el dominio y la información confirmada de contacto de cada ciudad. Variables disponibles: `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_LA_RIOJA_WHATSAPP`, `NEXT_PUBLIC_LA_RIOJA_PHONE`, `NEXT_PUBLIC_LA_RIOJA_ADDRESS`, `NEXT_PUBLIC_LA_RIOJA_HOURS`, `NEXT_PUBLIC_LA_RIOJA_MAPS_URL` y sus equivalentes `NEXT_PUBLIC_SAN_JUAN_*`. El WhatsApp debe ingresarse con código internacional y solo dígitos, sin `+` ni espacios. Hasta entonces los CTA se muestran inactivos y las direcciones aparecen como pendientes, sin inventar información.

Revisar también el dominio de producción y el archivo Open Graph antes de conectar Search Console. El `sitemap.xml` y `robots.txt` se generan desde las rutas públicas automáticamente.

## Rutas

- `/`
- `/reparacion-celulares-la-rioja`
- `/reparacion-celulares-san-juan`
- `/{la-rioja|san-juan}/{cambio-modulo|cambio-pantalla|cambio-bateria|pin-de-carga|reparacion-iphone|reparacion-samsung|celular-no-carga|celular-mojado}`

Las páginas de servicio comparten estructura pero describen síntomas, decisiones y preguntas útiles; títulos, metadescripciones, canonical y contenido por ciudad son específicos. No se han añadido precios, reseñas, garantías, tiempos ni credenciales no confirmadas.
