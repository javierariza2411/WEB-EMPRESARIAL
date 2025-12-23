import { Link } from "react-router-dom";

export function ServiceGrid({ items = [] }) {
  if (!items?.length) return null;

  return (
    <div className="svc-grid" role="list">
      {items.map((s) => (
        <article className="svc-card" key={s.id} role="listitem" id={s.id}>
          <div
            className="svc-media"
            style={{ backgroundImage: `url(${s.image})` }}
            aria-hidden="true"
          />
          <div className="svc-overlay" aria-hidden="true" />

          <div className="svc-content">
            {s.kicker ? <p className="svc-kicker">{s.kicker}</p> : null}
            <h3 className="svc-title">{s.title}</h3>
            {s.summary ? <p className="svc-desc">{s.summary}</p> : null}

            <div className="svc-actions">
              <Link className="btn btn-primary" to="/cotizacion">
                Solicitar cotización
              </Link>
              <a className="btn btn-outline" href={`#${s.id}`}>
                Ver detalle
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
