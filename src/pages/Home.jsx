import { PageShell } from "../components/layout/PageShell";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { SectionTitle } from "../components/ui/SectionTitle";
import { services } from "../data/services";
import { projects } from "../data/projects";
import { company } from "../data/company";
import { Link } from "react-router-dom";

export function Home(){
  return (
    <div>
      <PageShell
        title={company.slogan}
        subtitle="Fabricación, soldadura y mantenimiento industrial con enfoque en cumplimiento, seguridad y entregas claras."
        badges={["Calidad", "Seguridad industrial", "Trazabilidad", "Entregas a tiempo"]}
      >
        <div className="kpis">
          <Card className="kpi">
            <strong>Respuesta rápida</strong>
            <div className="muted" style={{marginTop: 6}}>Atendemos solicitudes y coordinamos visita técnica según necesidad.</div>
          </Card>
          <Card className="kpi">
            <strong>Trabajo con proceso</strong>
            <div className="muted" style={{marginTop: 6}}>Levantamiento, propuesta, ejecución, entrega y soporte.</div>
          </Card>
          <Card className="kpi">
            <strong>Enfoque industrial</strong>
            <div className="muted" style={{marginTop: 6}}>Soluciones pensadas para operación real, seguridad y durabilidad.</div>
          </Card>
        </div>

        <div style={{marginTop: 22}}>
          <div style={{display:"flex", gap: 10, flexWrap:"wrap"}}>
            <Link to="/cotizacion"><Button>Solicitar cotización</Button></Link>
            <Link to="/contacto"><Button variant="outline">Contactar</Button></Link>
          </div>
        </div>

        <div style={{marginTop: 32}}>
          <SectionTitle
            title="Servicios principales"
            subtitle="Lo esencial: lo que más se cotiza y lo que mejor representará su marca al inicio."
          />
          <div className="grid-2">
            {services.slice(0, 6).map((s) => (
              <Card key={s.title} className="kpi">
                <strong>{s.title}</strong>
                <div className="muted" style={{marginTop: 6}}>{s.description}</div>
              </Card>
            ))}
          </div>
          <div style={{marginTop: 14}}>
            <Link to="/servicios" className="muted">Ver todos los servicios</Link>
          </div>
        </div>

        <div style={{marginTop: 32}}>
          <SectionTitle
            title="Proyectos destacados"
            subtitle="Portafolio inicial con formato de casos. Aquí luego agregamos fotos y resultados."
          />
          <div className="grid-2">
            {projects.slice(0, 4).map((p) => (
              <Card key={p.name} className="kpi">
                <strong>{p.name}</strong>
                <div className="muted" style={{marginTop: 6}}>{p.summary}</div>
                <div className="muted" style={{marginTop: 10, fontSize: 13}}>
                  {p.category} · {p.location} · {p.year}
                </div>
              </Card>
            ))}
          </div>
          <div style={{marginTop: 14}}>
            <Link to="/proyectos" className="muted">Ver portafolio</Link>
          </div>
        </div>

        <div style={{marginTop: 32}}>
          <Card className="kpi" style={{padding: 18}}>
            <strong style={{fontSize: 18}}>¿Listo para cotizar?</strong>
            <div className="muted" style={{marginTop: 6}}>
              Cuéntanos qué necesitas (servicio, ubicación y descripción). Te respondemos con los siguientes pasos.
            </div>
            <div style={{marginTop: 12, display:"flex", gap: 10, flexWrap:"wrap"}}>
              <Link to="/cotizacion"><Button>Solicitar cotización</Button></Link>
              <Link to="/contacto"><Button variant="outline">Hacer una consulta</Button></Link>
            </div>
          </Card>
        </div>
      </PageShell>
    </div>
  );
}
