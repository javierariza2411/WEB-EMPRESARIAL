import { Link } from "react-router-dom";
import { PageShell } from "../components/layout/PageShell";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { SectionTitle } from "../components/ui/SectionTitle";
import { WhatsAppFloat } from "../components/ui/WhatsAppFloat";
import { services } from "../data/services";
import { projects } from "../data/projects";

export function Home() {
  return (
    <PageShell hideIntro>
      {/* HERO FULL BLEED */}
      <section className="heroBleed" aria-label="Hero principal">
        <div className="heroBleed-bg" aria-hidden="true" />
        <div className="heroBleed-shade" aria-hidden="true" />

        <div className="heroBleed-inner">
          <p className="heroBleed-kicker">FABRICACIÓN · SOLDADURA · MONTAJE</p>

          <h1 className="heroBleed-title">
            METALMECÁNICA <span>PARA LA CONSTRUCCIÓN</span>
          </h1>

          <p className="heroBleed-subtitle">
            Soluciones en acero con enfoque industrial: seguridad, trazabilidad y
            entregas claras.
          </p>

          <div className="heroBleed-actions">
            <Link to="/cotizacion">
              <Button>Solicitar cotización</Button>
            </Link>
            <Link to="/servicios">
              <Button variant="outline">Ver servicios</Button>
            </Link>
          </div>

          <div className="heroBleed-badges" aria-label="Diferenciales">
            <span className="heroBadge">Respuesta rápida</span>
            <span className="heroBadge">Visita técnica</span>
            <span className="heroBadge">Calidad y seguridad</span>
          </div>
        </div>

        {/* DIVISOR CURVO (propio) */}
        <div className="heroBleed-divider" aria-hidden="true">
          <svg viewBox="0 0 1440 160" preserveAspectRatio="none">
            <path
              d="M0,120 C180,150 360,70 540,105 C720,140 900,165 1080,120 C1260,75 1350,105 1440,125 L1440,160 L0,160 Z"
              fill="#ffffff"
              opacity="1"
            />
          </svg>
        </div>
      </section>

      {/* CONTENIDO (normal) */}
      <section aria-label="Fortalezas principales" style={{ marginTop: 28 }}>
        <div className="kpis">
          <Card className="kpi">
            <strong>Atención y diagnóstico</strong>
            <div className="muted" style={{ marginTop: 6 }}>
              Entendemos tu necesidad y definimos la solución más adecuada.
            </div>
          </Card>

          <Card className="kpi">
            <strong>Proceso claro</strong>
            <div className="muted" style={{ marginTop: 6 }}>
              Levantamiento → propuesta → ejecución → entrega → soporte.
            </div>
          </Card>

          <Card className="kpi">
            <strong>Enfoque industrial</strong>
            <div className="muted" style={{ marginTop: 6 }}>
              Materiales, soldadura y montaje pensados para operación real.
            </div>
          </Card>
        </div>
      </section>

      <section aria-label="Servicios" style={{ marginTop: 32 }}>
        <SectionTitle
          title="Servicios principales"
          subtitle="Lo esencial para iniciar con un portafolio claro y confiable."
        />

        <div className="grid-2">
          {services.slice(0, 6).map((s) => (
            <article key={s.title}>
              <Card className="kpi">
                <strong>{s.title}</strong>
                <div className="muted" style={{ marginTop: 6 }}>
                  {s.description}
                </div>
              </Card>
            </article>
          ))}
        </div>

        <div style={{ marginTop: 14 }}>
          <Link to="/servicios" className="muted">
            Ver todos los servicios
          </Link>
        </div>
      </section>

      <section aria-label="Proyectos" style={{ marginTop: 32 }}>
        <SectionTitle
          title="Proyectos destacados"
          subtitle="Casos resumidos. Luego agregamos fotos y resultados."
        />

        <div className="grid-2">
          {projects.slice(0, 4).map((p) => (
            <article key={p.name}>
              <Card className="kpi">
                <strong>{p.name}</strong>
                <div className="muted" style={{ marginTop: 6 }}>
                  {p.summary}
                </div>
                <div className="muted" style={{ marginTop: 10, fontSize: 13 }}>
                  {p.category} · {p.location} · {p.year}
                </div>
              </Card>
            </article>
          ))}
        </div>

        <div style={{ marginTop: 14 }}>
          <Link to="/proyectos" className="muted">
            Ver portafolio
          </Link>
        </div>
      </section>

      <section aria-label="CTA" style={{ marginTop: 32 }}>
        <Card className="kpi" style={{ padding: 18 }}>
          <strong style={{ fontSize: 18 }}>¿Hacemos tu cotización?</strong>
          <div className="muted" style={{ marginTop: 6 }}>
            Cuéntanos el servicio, ubicación y detalles. Te respondemos con los
            siguientes pasos.
          </div>

          <div style={{ marginTop: 12, display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link to="/cotizacion">
              <Button>Solicitar cotización</Button>
            </Link>
            <Link to="/contactanos">
              <Button variant="outline">Hablar con un asesor</Button>
            </Link>
          </div>
        </Card>
      </section>

      <WhatsAppFloat />
    </PageShell>
  );
}
