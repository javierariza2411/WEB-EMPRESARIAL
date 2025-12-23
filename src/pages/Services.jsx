import { PageShell } from "../components/layout/PageShell";
import { SectionTitle } from "../components/ui/SectionTitle";
import { ServiceGrid } from "../components/sections/ServiceGrid";
import { Card } from "../components/ui/Card";
import { services } from "../data/services";

export function Services() {
  return (
    <PageShell
      title="Servicios"
      subtitle="Servicios industriales diseñados para operación real: fabricación, soldadura, mantenimiento e intervenciones en sitio."
      badges={["Fabricación", "Soldadura", "Mantenimiento", "Intervención en planta"]}
    >
      <SectionTitle
        title="Qué hacemos"
        subtitle="Soluciones metalmecánicas para obra, planta e industria. Ajusta el contenido en src/data/services.js."
      />

      {/* ✅ Aquí estaba el problema: faltaba pasar items */}
      <ServiceGrid items={services} />

      <div style={{ marginTop: 26 }}>
        <SectionTitle
          title="Proceso de trabajo"
          subtitle="Un proceso claro aumenta la confianza y mejora la conversión."
        />

        <div className="grid-2">
          <Card className="kpi">
            <strong>1) Brief</strong>
            <div className="muted" style={{ marginTop: 6 }}>
              Entendemos necesidad, alcance y urgencia.
            </div>
          </Card>

          <Card className="kpi">
            <strong>2) Visita / levantamiento</strong>
            <div className="muted" style={{ marginTop: 6 }}>
              Mediciones, condiciones, riesgos y recomendaciones.
            </div>
          </Card>

          <Card className="kpi">
            <strong>3) Propuesta</strong>
            <div className="muted" style={{ marginTop: 6 }}>
              Materiales, tiempos, entregables y condiciones.
            </div>
          </Card>

          <Card className="kpi">
            <strong>4) Ejecución</strong>
            <div className="muted" style={{ marginTop: 6 }}>
              Trabajo con seguridad, control y seguimiento.
            </div>
          </Card>

          <Card className="kpi">
            <strong>5) Entrega</strong>
            <div className="muted" style={{ marginTop: 6 }}>
              Cierre con verificación y evidencias.
            </div>
          </Card>

          <Card className="kpi">
            <strong>6) Soporte</strong>
            <div className="muted" style={{ marginTop: 6 }}>
              Ajustes, mantenimiento y continuidad.
            </div>
          </Card>
        </div>
      </div>
    </PageShell>
  );
}
