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
    const { name, email, phone, message } = req.body || {};

    if (!name || String(name).trim().length < 3) return res.status(400).json({ error: "Nombre inválido" });
    if (!email || !isEmail(email)) return res.status(400).json({ error: "Email inválido" });
    if (!phone || String(phone).trim().length < 7) return res.status(400).json({ error: "Teléfono inválido" });
    if (!message || String(message).trim().length < 10) return res.status(400).json({ error: "Mensaje inválido" });

    const internalSubject = `Nuevo mensaje de contacto — ${escapeHtml(name)}`;
    const internalHtml = `
      <div style="font-family: Arial, sans-serif; line-height:1.5">
        <h2>Nuevo mensaje de contacto</h2>
        <p><b>Nombre:</b> ${escapeHtml(name)}</p>
        <p><b>Email:</b> ${escapeHtml(email)}</p>
        <p><b>Teléfono:</b> ${escapeHtml(phone)}</p>
        <p><b>Mensaje:</b><br/>${escapeHtml(message).replaceAll("\n", "<br/>")}</p>
      </div>
    `;

    await resend.emails.send({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO_INTERNAL,
      subject: internalSubject,
      html: internalHtml
    });

    // Autorespuesta al cliente
    await resend.emails.send({
      from: process.env.MAIL_FROM,
      to: email,
      subject: "Recibimos tu mensaje",
      html: `
        <div style="font-family: Arial, sans-serif; line-height:1.6">
          <h2>¡Gracias, ${escapeHtml(name)}!</h2>
          <p>Recibimos tu mensaje y te responderemos pronto.</p>
          <p>Este correo es una confirmación automática.</p>
        </div>
      `
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Error enviando correos" });
  }
}
