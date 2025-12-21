import { Container } from "./Container";

export function PageShell({
  title,
  subtitle,
  badges = [],
  hideIntro = false,
  children
}) {
  const hasIntro = Boolean(title || subtitle || (badges && badges.length > 0));

  return (
    <div>
      <Container>
        <div style={{ paddingTop: 18 }}>
          {!hideIntro && hasIntro ? (
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
          ) : null}
        </div>
      </Container>

      <div className="section">
        <Container>{children}</Container>
      </div>
    </div>
  );
}
