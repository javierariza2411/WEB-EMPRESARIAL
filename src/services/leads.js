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

export async function submitLead(kind, payload){
  const endpoint = kind === "quote" ? "/api/leads/quote" : "/api/leads/contact";
  return postJson(endpoint, payload);
}

