import { PageShell } from "../components/layout/PageShell";
import { Card } from "../components/ui/Card";
import { SectionTitle } from "../components/ui/SectionTitle";
import { company } from "../data/company";

export function About(){
  return (
    <PageShell
      title="Quiénes Somos"
      subtitle="Somos una empresa enfocada en soluciones industriales: fabricación, soldadura y mantenimiento con estándares claros."
      badges={["Cumplimiento", "Seguridad", "Calidad", "Mejora continua"]}
    >
      <SectionTitle
        title="Nuestra propuesta"
        subtitle="Texto editable: aquí va la historia breve y la promesa de valor."
      />
      <div className="grid-2">
        <Card className="kpi">
          <strong>Misión</strong>
          <div className="muted" style={{marginTop: 6}}>
            Entregar soluciones industriales confiables, seguras y con trazabilidad, optimizando tiempos y costos para nuestros clientes.
          </div>
        </Card>
        <Card className="kpi">
          <strong>Visión</strong>
          <div className="muted" style={{marginTop: 6}}>
            Ser un aliado industrial reconocido por cumplimiento, calidad técnica y cultura de seguridad.
          </div>
        </Card>
      </div>

      <div style={{marginTop: 26}}>
        <SectionTitle
          title="Valores"
          subtitle="Simple, directo y real: valores que se ven en el trabajo."
        />
        <div className="grid-2">
          <Card className="kpi"><strong>Seguridad</strong><div className="muted" style={{marginTop:6}}>Primero el personal, luego el resto.</div></Card>
          <Card className="kpi"><strong>Calidad</strong><div className="muted" style={{marginTop:6}}>Entregables verificables y controlados.</div></Card>
          <Card className="kpi"><strong>Responsabilidad</strong><div className="muted" style={{marginTop:6}}>Cumplimiento y comunicación clara.</div></Card>
          <Card className="kpi"><strong>Mejora</strong><div className="muted" style={{marginTop:6}}>Aprendemos y optimizamos en cada proyecto.</div></Card>
        </div>
      </div>

      <div style={{marginTop: 26}}>
        <Card className="kpi" style={{padding: 18}}>
          <strong>{company.brandName}</strong>
          <div className="muted" style={{marginTop: 6}}>
            Edita datos en <code>src/data/company.js</code>.
          </div>
        </Card>
      </div>
    </PageShell>
  );
}
