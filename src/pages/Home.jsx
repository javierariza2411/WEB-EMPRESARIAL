import { Link } from "react-router-dom";
import { PageShell } from "../components/layout/PageShell";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { SectionTitle } from "../components/ui/SectionTitle";

import { services } from "../data/services";
import { projects } from "../data/projects";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useEffect, useRef } from "react";


import "swiper/css";
import "swiper/css/pagination";


export function Home() {

    const swiperRef = useRef(null);

  useEffect(() => {
    // intenta arrancar autoplay aunque el navegador/OS quiera reducir animaciones
    const s = swiperRef.current;
    if (!s) return;

    // pequeño delay para asegurar que ya montó el DOM
    const t = setTimeout(() => {
      try {
        s.update();
        if (s.autoplay && typeof s.autoplay.start === "function") {
          s.autoplay.start();
        }
      } catch (e) {
        // no hacemos nada; solo evita que se rompa
      }
    }, 300);

    return () => clearTimeout(t);
  }, []);


  return (
    <PageShell hideIntro>
      {/* HERO MODERNO (ÚNICO) */}
      <section className="full-bleed" aria-label="Hero principal">
        <div className="heroGuide">
          <div className="heroGuide-overlay" aria-hidden="true" />

          <div className="heroGuide-content">
            <div className="heroGuide-inner">
              <p className="heroGuide-kicker">FABRICACIÓN · SOLDADURA · MONTAJE</p>

              <h1 className="heroGuide-title">METALMECÁNICA PARA LA CONSTRUCCIÓN</h1>

              <p className="heroGuide-sub">
                Construimos soluciones en acero con seguridad, trazabilidad y entregas claras.
              </p>

              <div className="heroGuide-actions" aria-label="Acciones principales">
                <Link to="/cotizacion">
                  <Button>Contáctanos ahora</Button>
                </Link>
                <Link to="/servicios">
                  <Button variant="outline">Ver servicios</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALERÍA / SLIDER (separada del hero) */}
<section
  aria-label="Galería destacada"
  style={{ marginTop: 64, opacity: 0.9 }}
>
   <Swiper
  modules={[Autoplay, Pagination]}
  spaceBetween={24}
  slidesPerView={1}
  loop={true}
  speed={800}
  init={true}
  onSwiper={(swiper) => {
    swiperRef.current = swiper;

    // Arranque inmediato también (por si useEffect demora)
    setTimeout(() => {
      try {
        swiper.update();
        swiper.autoplay?.start?.();
      } catch (e) {}
    }, 200);
  }}
  autoplay={{
    delay: 800,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  }}
  pagination={{ clickable: true }}
  style={{ marginBottom: 32, width: "100%" }}
>


  <SwiperSlide>
    <img
      src="/brand/slider1.png"
      alt="Proceso de soldadura industrial"
      style={{ width: "100%", borderRadius: 10, display: "block" }}
    />
  </SwiperSlide>

  <SwiperSlide>
    <img
      src="/brand/slider2.png"
      alt="Fabricación de estructuras metálicas"
      style={{ width: "100%", borderRadius: 10, display: "block" }}
    />
  </SwiperSlide>

  <SwiperSlide>
    <img
      src="/brand/slider3.png"
      alt="Montaje y mantenimiento industrial"
      style={{ width: "100%", borderRadius: 10, display: "block" }}
    />
  </SwiperSlide>
</Swiper>

      </section>

      {/* KPIs */}
      <section aria-label="Fortalezas principales">
        <div className="kpis">
          <Card className="kpi">
            <strong>Respuesta rápida</strong>
            <div className="muted" style={{ marginTop: 6 }}>
              Atendemos solicitudes y coordinamos visita técnica según necesidad.
            </div>
          </Card>

          <Card className="kpi">
            <strong>Trabajo con proceso</strong>
            <div className="muted" style={{ marginTop: 6 }}>
              Levantamiento, propuesta, ejecución, entrega y soporte.
            </div>
          </Card>

          <Card className="kpi">
            <strong>Enfoque industrial</strong>
            <div className="muted" style={{ marginTop: 6 }}>
              Soluciones pensadas para operación real, seguridad y durabilidad.
            </div>
          </Card>
        </div>
      </section>

      {/* SERVICIOS */}
      <section aria-label="Servicios principales" style={{ marginTop: 32 }}>
        <SectionTitle
          title="Servicios principales"
          subtitle="Lo esencial: lo que más se cotiza y lo que mejor representará su marca al inicio."
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

      {/* PROYECTOS */}
      <section aria-label="Proyectos destacados" style={{ marginTop: 32 }}>
        <SectionTitle
          title="Proyectos destacados"
          subtitle="Portafolio inicial con formato de casos. Aquí luego agregamos fotos y resultados."
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

      {/* CTA */}
      <section aria-label="Cotización" style={{ marginTop: 32 }}>
        <Card className="kpi" style={{ padding: 18 }}>
          <strong style={{ fontSize: 18 }}>¿Listo para cotizar?</strong>
          <div className="muted" style={{ marginTop: 6 }}>
            Cuéntanos qué necesitas (servicio, ubicación y descripción). Te respondemos con los siguientes pasos.
          </div>

          <div style={{ marginTop: 12, display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link to="/cotizacion">
              <Button>Solicitar cotización</Button>
            </Link>
            <Link to="/contacto">
              <Button variant="outline">Hacer una consulta</Button>
            </Link>
          </div>
        </Card>
      </section>
    </PageShell>
  );
}
