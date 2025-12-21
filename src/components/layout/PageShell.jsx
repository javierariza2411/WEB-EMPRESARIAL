import { Container } from "./Container";

export function PageShell({ title, subtitle, badges = [], children }){
  return (
    <div>
      <Container>
        <div style={{paddingTop: 18}}>
          <div className="hero">
            <div className="hero-inner">
              <h1 className="hero-title">{title}</h1>
              {subtitle ? <p className="hero-sub">{subtitle}</p> : null}
              {badges?.length ? (
                <div className="hero-badges">
                  {badges.map((b) => <span className="badge" key={b}>{b}</span>)}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </Container>

      <div className="section">
        <Container>{children}</Container>
      </div>
    </div>
  );
}
