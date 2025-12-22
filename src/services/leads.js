async function postJson(url, payload) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  // Intentar leer respuesta (json o texto)
  const contentType = res.headers.get("content-type") || "";
  const data = contentType.includes("application/json")
    ? await res.json().catch(() => ({}))
    : await res.text().catch(() => "");

  if (!res.ok) {
    const msg =
      (typeof data === "string" && data) ||
      (data && data.error) ||
      `Error HTTP ${res.status}`;
    throw new Error(msg);
  }

  return data;
}

/**
 * kind:
 *  - "quote"   -> /api/leads/quote
 *  - "contact" -> /api/leads/contact
 */
export async function submitLead(kind, payload) {
  const endpoint = kind === "quote" ? "/api/leads/quote" : "/api/leads/contact";
  return postJson(endpoint, payload);
}
