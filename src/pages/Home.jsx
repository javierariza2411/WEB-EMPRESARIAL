import { PageShell } from "../components/layout/PageShell";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { SectionTitle } from "../components/ui/SectionTitle";
import { services } from "../data/services";
import { projects } from "../data/projects";
import { company } from "../data/company";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // 🔹 Importar Autoplay desde modules
import 'swiper/css';

export function Home() {
  return (
    <main id="contenido" role="main">
      <PageShell
        title={company.slogan}
        subtitle="Fabricación, soldadura y mantenimiento industrial con enfoque en cumplimiento, seguridad y entregas claras."
        badges={["Calidad", "Seguridad industrial", "Trazabilidad", "Entregas a tiempo"]}
      >

<section className="full-bleed" aria-label="Hero principal">
  <div className="hero">
    <div className="hero-overlay" aria-hidden="true" />

    <div className="hero-content">
      <div className="container">
        <div style={{ maxWidth: 920, margin: "0 auto" }}>
          <p style={{ letterSpacing: "0.25em", fontSize: 12, opacity: 0.85 }}>
            FABRICACIÓN • SOLDADURA • MONTAJE
          </p>

          <h1 style={{ fontSize: 44, marginTop: 10 }}>
            METALMECÁNICA PARA LA CONSTRUCCIÓN
          </h1>

          <p style={{ fontSize: 18, marginTop: 14, opacity: 0.85 }}>
            Construimos soluciones en acero con seguridad, trazabilidad y entregas claras.
          </p>

          <div style={{ marginTop: 22, display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/cotizacion"><Button>Contáctanos ahora</Button></Link>
            <Link to="/servicios"><Button variant="outline">Ver servicios</Button></Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* Slider */}
        <section aria-label="Galería destacada">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            modules={[Autoplay]}
            style={{ marginBottom: 32 }}
          >
            <SwiperSlide>
              <img src="/brand/slider1.png" alt="Soldadura industrial en proceso" style={{ width: '100%', borderRadius: '8px' }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/brand/slider2.png" alt="Fabricación de estructuras metálicas" style={{ width: '100%', borderRadius: '8px' }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/brand/slider3.png" alt="Montaje y mantenimiento industrial" style={{ width: '100%', borderRadius: '8px' }} />
            </SwiperSlide>
          </Swiper>
        </section>

        {/* KPIs */}
        <section aria-labelledby="kpis-title">
          <h2 id="kpis-title" className="sr-only">Fortalezas principales</h2>
          <div className="kpis">
            <Card className="kpi">
              <strong>Respuesta rápida</strong>
              <div className="muted" style={{ marginTop: 6 }}>Atendemos solicitudes y coordinamos visita técnica según necesidad.</div>
            </Card>
            <Card className="kpi">
              <strong>Trabajo con proceso</strong>
              <div className="muted" style={{ marginTop: 6 }}>Levantamiento, propuesta, ejecución, entrega y soporte.</div>
            </Card>
            <Card className="kpi">
              <strong>Enfoque industrial</strong>
              <div className="muted" style={{ marginTop: 6 }}>Soluciones pensadas para operación real, seguridad y durabilidad.</div>
            </Card>
          </div>
        </section>

        {/* Acciones */}
        <nav aria-label="Acciones principales" style={{ marginTop: 22 }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link to="/cotizacion"><Button>Solicitar cotización</Button></Link>
            <Link to="/contacto"><Button variant="outline">Contactar</Button></Link>
          </div>
        </nav>

        {/* Servicios */}
        <section aria-labelledby="servicios-title" style={{ marginTop: 32 }}>
          <SectionTitle
            title="Servicios principales"
            subtitle="Lo esencial: lo que más se cotiza y lo que mejor representará su marca al inicio."
          />
          <h2 id="servicios-title" className="sr-only">Servicios principales</h2>

          <div className="grid-2">
            {services.slice(0, 6).map((s) => (
              <article key={s.title}>
                <Card className="kpi">
                  <strong>{s.title}</strong>
                  <div className="muted" style={{ marginTop: 6 }}>{s.description}</div>
                </Card>
              </article>
            ))}
          </div>

          <div style={{ marginTop: 14 }}>
            <Link to="/servicios" className="muted">Ver todos los servicios</Link>
          </div>
        </section>


        

        {/* Proyectos */}
        <section aria-labelledby="proyectos-title" style={{ marginTop: 32 }}>
          <SectionTitle
            title="Proyectos destacados"
            subtitle="Portafolio inicial con formato de casos. Aquí luego agregamos fotos y resultados."
          />
          <h2 id="proyectos-title" className="sr-only">Proyectos destacados</h2>

          <div className="grid-2">
            {projects.slice(0, 4).map((p) => (
              <article key={p.name}>
                <Card className="kpi">
                  <strong>{p.name}</strong>
                  <div className="muted" style={{ marginTop: 6 }}>{p.summary}</div>
                  <div className="muted" style={{ marginTop: 10, fontSize: 13 }}>
                    {p.category} · {p.location} · {p.year}
                  </div>
                </Card>
              </article>
            ))}
          </div>

          <div style={{ marginTop: 14 }}>
            <Link to="/proyectos" className="muted">Ver portafolio</Link>
          </div>
        </section>

        {/* CTA Cotización */}
        <section aria-labelledby="cta-title" style={{ marginTop: 32 }}>
          <h2 id="cta-title" className="sr-only">Cotización</h2>
          <Card className="kpi" style={{ padding: 18 }}>
            <strong style={{ fontSize: 18 }}>¿Listo para cotizar?</strong>
            <div className="muted" style={{ marginTop: 6 }}>
              Cuéntanos qué necesitas (servicio, ubicación y descripción). Te respondemos con los siguientes pasos.
            </div>
            <div style={{ marginTop: 12, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <Link to="/cotizacion"><Button>Solicitar cotización</Button></Link>
              <Link to="/contacto"><Button variant="outline">Hacer una consulta</Button></Link>
            </div>
          </Card>
        </section>
      </PageShell>
    </main>
  );
}
