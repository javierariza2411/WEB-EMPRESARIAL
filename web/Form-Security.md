# Seguridad del formulario de contacto

Este documento describe las medidas implementadas para proteger el formulario de contacto frente a abusos, spam o ataques. Además, se incluyen recomendaciones para optimizar costos y mejorar la eficiencia.

## Riesgos

- Envío masivo de peticiones
- Spam automatizado
- Saturación del endpoint
- Uso indebido de recursos

## Medidas aplicadas

- Validación estricta de campos
- Campos ocultos para detección de bots
- Limitación de peticiones por IP
- Verificación del origen de la solicitud
- No almacenamiento público de datos
- Envío directo a WhatsApp / correo

**Recomendaciones:**
- Implementar reCAPTCHA de Google para protección adicional.
- Utilizar servicios como [Cloudflare](https://www.cloudflare.com) para mitigar ataques DDoS.

## Resultado

- Alta disponibilidad del sitio
- Bajo costo de operación
- Riesgo reducido de ataques
