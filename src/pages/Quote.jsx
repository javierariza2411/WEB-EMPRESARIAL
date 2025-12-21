import { useMemo, useState } from "react";
import { PageShell } from "../components/layout/PageShell";
import { Card } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { Textarea } from "../components/ui/Textarea";
import { Select } from "../components/ui/Select";
import { Button } from "../components/ui/Button";
import { Alert } from "../components/ui/Alert";
import { submitLead } from "../services/leads";
import { services } from "../data/services";

function isEmail(v){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v || "").trim());
}

export function Quote(){
  const serviceOptions = useMemo(() => services.map(s => s.title), []);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    city: "",
    details: ""
  });
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
    if(!form.service) e.service = "Selecciona un servicio.";
    if(!form.details || form.details.trim().length < 10) e.details = "Describe el trabajo (mínimo 10 caracteres).";
    return e;
  }

  async function onSubmit(ev){
    ev.preventDefault();
    setStatus({ type: "idle", message: "" });
    const e = validate();
    setErrors(e);
    if(Object.keys(e).length) return;

    try{
      setStatus({ type: "loading", message: "Enviando solicitud..." });
      await submitLead("quote", { ...form, createdAt: new Date().toISOString() });
      setStatus({ type: "success", message: "Solicitud enviada. Te contactaremos con los siguientes pasos." });
      setForm({ name:"", company:"", email:"", phone:"", service:"", city:"", details:"" });
      setErrors({});
    }catch(err){
      setStatus({ type: "error", message: err?.message || "Error enviando solicitud." });
    }
  }

  return (
    <PageShell
      title="Cotización"
      subtitle="Cuéntanos qué necesitas. Mientras más información, más precisa la propuesta."
      badges={["Respuesta rápida", "Visita técnica", "Propuesta formal"]}
    >
      <div className="grid-2">
        <Card className="kpi" style={{padding: 18}}>
          <strong style={{fontSize: 18}}>Formulario de cotización</strong>
          <div className="muted" style={{marginTop: 6}}>
            Este formulario está listo para integrarse a backend cuando lo definamos.
          </div>

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
            <Input
              label="Empresa (opcional)"
              placeholder="Nombre de empresa"
              value={form.company}
              onChange={(e) => update("company", e.target.value)}
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

            <div className="grid-2">
              <Select
                label="Servicio requerido"
                value={form.service}
                onChange={(e) => update("service", e.target.value)}
                error={errors.service}
              >
                <option value="">Selecciona...</option>
                {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
              </Select>

              <Input
                label="Ciudad / ubicación"
                placeholder="Barranquilla / Soledad / Malambo..."
                value={form.city}
                onChange={(e) => update("city", e.target.value)}
              />
            </div>

            <Textarea
              label="Descripción del trabajo"
              placeholder="Describe alcance, medidas, tiempos, materiales, ubicación y cualquier detalle importante."
              value={form.details}
              onChange={(e) => update("details", e.target.value)}
              error={errors.details}
            />

            <div style={{display:"flex", gap: 10, flexWrap:"wrap", marginTop: 6}}>
              <Button type="submit" disabled={status.type === "loading"}>Enviar solicitud</Button>
              <Button variant="outline" type="button" onClick={() => { setForm({ name:"", company:"", email:"", phone:"", service:"", city:"", details:"" }); setErrors({}); setStatus({type:"idle", message:""}); }}>
                Limpiar
              </Button>
            </div>
          </form>
        </Card>

        <div style={{display:"grid", gap: 14}}>
          <Card className="kpi" style={{padding: 18}}>
            <strong>¿Qué incluir para cotizar mejor?</strong>
            <ul className="muted" style={{marginTop: 10, marginBottom: 0, paddingLeft: 18}}>
              <li>Fotos o video del área (si aplica)</li>
              <li>Medidas aproximadas</li>
              <li>Ubicación exacta y condiciones de acceso</li>
              <li>Urgencia (fecha ideal)</li>
              <li>Material o acabado esperado</li>
            </ul>
          </Card>
          <Card className="kpi" style={{padding: 18}}>
            <strong>Proceso típico</strong>
            <div className="muted" style={{marginTop: 8}}>
              Solicitud → levantamiento/visita → propuesta → ejecución → entrega.
            </div>
          </Card>
        </div>
      </div>
    </PageShell>
  );
}
