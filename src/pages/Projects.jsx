import { PageShell } from "../components/layout/PageShell";
import { Card } from "../components/ui/Card";
import { SectionTitle } from "../components/ui/SectionTitle";
import { projects } from "../data/projects";

export function Projects(){
  return (
    <PageShell
      title="Proyectos"
      subtitle="Portafolio inicial en formato de casos. Ideal para mostrar evidencia, calidad y resultados."
      badges={["Casos", "Evidencias", "Resultados", "Trazabilidad"]}
    >
      <SectionTitle
        title="Portafolio"
        subtitle="Editable en src/data/projects.js. Luego agregamos fotos y fichas por proyecto."
      />
      <div className="grid-2">
        {projects.map((p) => (
          <Card key={p.name} className="kpi">
            <strong>{p.name}</strong>
            <div className="muted" style={{marginTop: 6}}>{p.summary}</div>
            <div className="muted" style={{marginTop: 10, fontSize: 13}}>
              {p.category} · {p.location} · {p.year}
            </div>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
