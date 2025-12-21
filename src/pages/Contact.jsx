import { useState } from "react";
import { PageShell } from "../components/layout/PageShell";
import { Card } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { Textarea } from "../components/ui/Textarea";
import { Button } from "../components/ui/Button";
import { Alert } from "../components/ui/Alert";
import { submitLead } from "../services/leads";
import { company } from "../data/company";

function isEmail(v){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v || "").trim());
}

export function Contact(){
  const [form, setForm] = useState({ name:"", email:"", phone:"", message:"" });
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [errors, setErrors] = useState({});

  function update(k, v){
    setForm(prev => ({ ...prev, [k]: v }));
  }

  function validate(){
    const e = {};
    if(!form.name || form.name.trim().length < 3) e.name = "Nombre requerido (mínimo 3 caracteres).";
    if(!form.email || !isEmail(form.email)) e.email = "Email inválido.";
    if(!form.phone || String(form.phone).trim().length < 7) e.phone = "Teléfono requerido.";
    if(!form.message || form.message.trim().length < 10) e.message = "Mensaje requerido (mínimo 10 caracteres).";
    return e;
  }

  async function onSubmit(ev){
    ev.preventDefault();
    setStatus({ type: "idle", message: "" });
    const e = validate();
    setErrors(e);
    if(Object.keys(e).length) return;

    try{
      setStatus({ type: "loading", message: "Enviando mensaje..." });
      await submitLead("contact", { ...form, createdAt: new Date().toISOString() });
      setStatus({ type: "success", message: "Mensaje enviado. Te responderemos pronto." });
      setForm({ name:"", email:"", phone:"", message:"" });
      setErrors({});
    }catch(err){
      setStatus({ type: "error", message: err?.message || "Error enviando mensaje." });
    }
  }

  return (
    <PageShell
      title="Contáctanos"
      subtitle="Escríbenos y coordinamos la mejor forma de ayudarte."
      badges={["Atención", "Soporte", "Visita técnica"]}
    >
      <div className="grid-2">
        <Card className="kpi" style={{padding: 18}}>
          <strong style={{fontSize: 18}}>Formulario de contacto</strong>

          <div style={{marginTop: 14}}>
            {status.type === "success" ? <Alert variant="success" title="Listo">{status.message}</Alert> : null}
            {status.type === "error" ? <Alert variant="error" title="Ups">{status.message}</Alert> : null}
            {status.type === "loading" ? <Alert title="Procesando">{status.message}</Alert> : null}
          </div>

          <form onSubmit={onSubmit} style={{marginTop: 14, display:"grid", gap: 12}}>
            <Input
              label="Nombre"
              placeholder="Tu nombre y apellido"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              error={errors.name}
            />
            <div className="grid-2">
              <Input
                label="Email"
                placeholder="correo@empresa.com"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                error={errors.email}
              />
              <Input
                label="Teléfono"
                placeholder="+57 3XX XXX XXXX"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                error={errors.phone}
              />
            </div>
            <Textarea
              label="Mensaje"
              placeholder="Cuéntanos qué necesitas."
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              error={errors.message}
            />

            <div style={{display:"flex", gap: 10, flexWrap:"wrap", marginTop: 6}}>
              <Button type="submit" disabled={status.type === "loading"}>Enviar</Button>
              <Button variant="outline" type="button" onClick={() => { setForm({ name:"", email:"", phone:"", message:"" }); setErrors({}); setStatus({type:"idle", message:""}); }}>
                Limpiar
              </Button>
            </div>
          </form>
        </Card>

        <div style={{display:"grid", gap: 14}}>
          <Card className="kpi" style={{padding: 18}}>
            <strong>Datos de contacto</strong>
            <div className="muted" style={{marginTop: 10}}>
              <div><strong>Teléfono:</strong> {company.phone}</div>
              <div style={{marginTop: 6}}><strong>Email:</strong> {company.email}</div>
              <div style={{marginTop: 6}}><strong>Ciudad:</strong> {company.city}</div>
              <div style={{marginTop: 6}}><strong>Horario:</strong> {company.hours}</div>
              <div style={{marginTop: 6}}><strong>Dirección:</strong> {company.address}</div>
            </div>
          </Card>

          <Card className="kpi" style={{padding: 18}}>
            <strong>Notas</strong>
            <div className="muted" style={{marginTop: 8}}>
              Cuando definamos despliegue, podemos agregar:
              <ul style={{marginTop: 8, marginBottom: 0, paddingLeft: 18}}>
                <li>Mapa integrado</li>
                <li>WhatsApp directo</li>
                <li>Tracking de conversiones (CTAs)</li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </PageShell>
  );
}
