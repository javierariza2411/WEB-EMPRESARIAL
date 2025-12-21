const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

async function postJson(url, payload){
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  if(!res.ok){
    const txt = await res.text().catch(() => "");
    throw new Error(txt || "No fue posible enviar la solicitud.");
  }
  return res.json().catch(() => ({}));
}

/**
 * En desarrollo (sin backend), esta función simula envío.
 * Cuando haya backend, habilita API_BASE_URL y descomenta el fetch real.
 */
export async function submitLead(kind, payload){
  // Si existe API base, intenta enviar a backend real:
  if(API_BASE_URL){
    const endpoint = kind === "quote" ? "/api/leads/quote" : "/api/leads/contact";
    return postJson(`${API_BASE_URL}${endpoint}`, payload);
  }

  // Simulación local (para que la UI funcione desde el día 1)
  await new Promise(r => setTimeout(r, 500));
  return { ok: true };
}
