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
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

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

    // Autorespuesta al cliente
    const clientSubject = `Recibimos tu solicitud — ${quoteId}`;
    const clientHtml = `
      <div style="font-family: Arial, sans-serif; line-height:1.6">
        <h2>¡Gracias, ${escapeHtml(name)}!</h2>
        <p>Recibimos tu solicitud de cotización (<b>${quoteId}</b>).</p>
        <p><b>Siguientes pasos:</b></p>
        <ul>
          <li>Revisaremos la información.</li>
          <li>Si hace falta, coordinamos visita o levantamiento.</li>
          <li>Te enviaremos la propuesta formal.</li>
        </ul>
        <p style="margin-top:16px">
          <b>Resumen:</b><br/>
          Servicio: ${escapeHtml(service)}<br/>
          Ubicación: ${escapeHtml(city || "-")}
        </p>
        <p style="margin-top:16px">Este correo es una confirmación automática.</p>
      </div>
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
