import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function isEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v || "").trim());
}

function escapeHtml(str = "") {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export default async function handler(req, res) {
 
    
    // ✅ CORS / Preflight
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const {
      name, company, email, phone, service, city, details
    } = req.body || {};

    // Validación server-side (mínima)
    if (!name || String(name).trim().length < 3) return res.status(400).json({ error: "Nombre inválido" });
    if (!email || !isEmail(email)) return res.status(400).json({ error: "Email inválido" });
    if (!phone || String(phone).trim().length < 7) return res.status(400).json({ error: "Teléfono inválido" });
    if (!service) return res.status(400).json({ error: "Servicio requerido" });
    if (!details || String(details).trim().length < 10) return res.status(400).json({ error: "Descripción insuficiente" });

    const quoteId = `COT-${new Date().getFullYear()}-${Math.floor(Math.random() * 90000 + 10000)}`;

    // Correo interno (ventas)
    const internalSubject = `Nueva solicitud de cotización — ${quoteId}`;
    const internalHtml = `
      <div style="font-family: Arial, sans-serif; line-height:1.5">
        <h2>Nueva solicitud de cotización</h2>
        <p><b>ID:</b> ${quoteId}</p>
        <hr/>
        <p><b>Nombre:</b> ${escapeHtml(name)}</p>
        <p><b>Empresa:</b> ${escapeHtml(company || "-")}</p>
        <p><b>Email:</b> ${escapeHtml(email)}</p>
        <p><b>Teléfono:</b> ${escapeHtml(phone)}</p>
        <p><b>Servicio:</b> ${escapeHtml(service)}</p>
        <p><b>Ciudad/Ubicación:</b> ${escapeHtml(city || "-")}</p>
        <p><b>Detalles:</b><br/>${escapeHtml(details).replaceAll("\n", "<br/>")}</p>
      </div>
    `;

    await resend.emails.send({
      from: process.env.MAIL_FROM,          // ej: "SOLIDUM <no-reply@tu-dominio.com>"
      to: process.env.MAIL_TO_INTERNAL,     // ej: "cotizaciones@tu-dominio.com"
      subject: internalSubject,
      html: internalHtml
    });

    const clientSubject = `Solicitud recibida — ${quoteId}`;

const waPhone = process.env.WHATSAPP_PHONE || "57XXXXXXXXXX";
const waText = `Hola, quiero seguimiento de la cotización ${quoteId}. Nombre: ${name}. Servicio: ${service}. Ciudad: ${city || "-"}.`;
const waLink = `https://wa.me/${waPhone}?text=${encodeURIComponent(waText)}`;

const clientHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Confirmación de cotización</title>
</head>

<body style="margin:0; padding:0; background-color:#0b1220; font-family:Arial, Helvetica, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0b1220; padding:24px 0;">
    <tr>
      <td align="center">

        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px; width:100%;">

          <!-- Header -->
          <tr>
            <td style="padding:20px 24px; background:#0f172a; border-radius:14px 14px 0 0;">
              <div style="display:block;">
                <div style="color:#ffffff; font-size:18px; font-weight:700; letter-spacing:0.2px;">
                  SOLIDUM INDUSTRIAL S.A.S.
                </div>
                <div style="margin-top:6px; color:#94a3b8; font-size:13px;">
                  Barranquilla, Colombia
                </div>
              </div>
            </td>
          </tr>

          <!-- Body bg -->
          <tr>
            <td style="background:#020617; padding:24px; border-radius:0 0 14px 14px;">

              <!-- Card 1 -->
              <table width="100%" cellpadding="0" cellspacing="0"
                style="border:1px solid #1e293b; border-radius:12px; background:#0b1220;">
                <tr>
                  <td style="padding:18px 18px 16px;">
                    <div style="color:#22c55e; font-size:12px; letter-spacing:1px;">
                      SOLICITUD RECIBIDA
                    </div>
                    <div style="margin-top:8px; color:#ffffff; font-size:18px; font-weight:700;">
                      Cotización registrada
                    </div>
                    <div style="margin-top:6px; color:#cbd5f5; font-size:14px;">
                      ID de seguimiento: <strong style="color:#ffffff;">${quoteId}</strong>
                    </div>
                    <div style="margin-top:10px; color:#94a3b8; font-size:14px; line-height:1.6;">
                      Hola <strong style="color:#e5e7eb;">${escapeHtml(name)}</strong>, gracias por contactarnos.
                      Ya registramos tu solicitud y te contactaremos para avanzar con la propuesta.
                    </div>
                  </td>
                </tr>
              </table>

              <!-- Spacer -->
              <div style="height:14px; line-height:14px;">&nbsp;</div>

              <!-- Card 2 -->
              <table width="100%" cellpadding="0" cellspacing="0"
                style="border:1px solid #1e293b; border-radius:12px; background:#0b1220;">
                <tr>
                  <td style="padding:18px;">
                    <div style="margin:0 0 10px; color:#ffffff; font-size:15px; font-weight:700;">
                      Resumen de tu solicitud
                    </div>

                    <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                      <tr>
                        <td style="padding:10px 0; color:#94a3b8; font-size:14px; width:35%;">Nombre</td>
                        <td style="padding:10px 0; color:#e5e7eb; font-size:14px;">${escapeHtml(name)}</td>
                      </tr>
                      <tr>
                        <td style="padding:10px 0; color:#94a3b8; font-size:14px;">Empresa</td>
                        <td style="padding:10px 0; color:#e5e7eb; font-size:14px;">${escapeHtml(company || "-")}</td>
                      </tr>
                      <tr>
                        <td style="padding:10px 0; color:#94a3b8; font-size:14px;">Servicio</td>
                        <td style="padding:10px 0; color:#e5e7eb; font-size:14px;">${escapeHtml(service)}</td>
                      </tr>
                      <tr>
                        <td style="padding:10px 0; color:#94a3b8; font-size:14px;">Ciudad</td>
                        <td style="padding:10px 0; color:#e5e7eb; font-size:14px;">${escapeHtml(city || "-")}</td>
                      </tr>
                      <tr>
                        <td style="padding:10px 0; color:#94a3b8; font-size:14px;">Teléfono</td>
                        <td style="padding:10px 0; color:#e5e7eb; font-size:14px;">${escapeHtml(phone)}</td>
                      </tr>
                    </table>

                    <div style="margin-top:12px; color:#94a3b8; font-size:14px; line-height:1.6;">
                      <strong style="color:#e5e7eb;">Detalles:</strong><br/>
                      ${escapeHtml(details).replaceAll("\n", "<br/>")}
                    </div>
                  </td>
                </tr>
              </table>

              <!-- Spacer -->
              <div style="height:14px; line-height:14px;">&nbsp;</div>

              <!-- Card 3 -->
              <table width="100%" cellpadding="0" cellspacing="0"
                style="border:1px solid #1e293b; border-radius:12px; background:#0b1220;">
                <tr>
                  <td style="padding:18px;">
                    <div style="margin:0 0 10px; color:#ffffff; font-size:15px; font-weight:700;">
                      Próximos pasos
                    </div>
                    <ul style="margin:0; padding-left:18px; color:#94a3b8; font-size:14px; line-height:1.7;">
                      <li>Revisión técnica de la solicitud.</li>
                      <li>Contacto para aclaraciones o visita técnica.</li>
                      <li>Envío de propuesta formal con alcance y tiempos.</li>
                    </ul>
                  </td>
                </tr>
              </table>

              <!-- CTA -->
              <div style="height:16px; line-height:16px;">&nbsp;</div>

              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <a href="${waLink}"
                      style="display:inline-block; padding:14px 22px; background:#22c55e; color:#020617;
                             font-weight:700; font-size:14px; text-decoration:none; border-radius:999px;">
                      Continuar por WhatsApp
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Footer -->
              <div style="margin-top:18px; padding-top:12px; border-top:1px solid #1e293b; color:#64748b; font-size:12px; line-height:1.6;">
                Este es un mensaje automático. Si deseas agregar información, responde este correo indicando el ID
                <strong style="color:#cbd5f5;">${quoteId}</strong>.
              </div>

            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;


    await resend.emails.send({
      from: process.env.MAIL_FROM,
      to: email,
      subject: clientSubject,
      html: clientHtml
    });

    return res.status(200).json({ ok: true, quoteId });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Error enviando correos" });
  }
}
