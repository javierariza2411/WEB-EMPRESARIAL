import { Container } from "./Container";

export function PageShell({
  title,
  subtitle,
  badges = [],
  hideIntro = false,
  children,
}) {
  const hasIntro = Boolean(title || subtitle || (badges && badges.length > 0));

  return (
    <div>
      {/*  SOLO renderizamos el bloque superior si realmente hay intro */}
      {!hideIntro && hasIntro ? (
        <Container>
          <div className="pageIntro">
            <div className="hero">
              <div className="hero-inner">
                {title ? <h1 className="hero-title">{title}</h1> : null}
                {subtitle ? <p className="hero-sub">{subtitle}</p> : null}
                {badges?.length ? (
                  <div className="hero-badges">
                    {badges.map((b) => (
                      <span className="badge" key={b}>
                        {b}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </Container>
      ) : null}

      {/* Importante: no metas "section + Container" que pueda romper full-bleed
          Mantén el wrapper, pero el Home puede meter secciones full-bleed con 100vw. */}
      <div className={`section ${hideIntro ? "section--flush" : ""}`}>
        <Container>{children}</Container>
      </div>

    </div>
  );
}
