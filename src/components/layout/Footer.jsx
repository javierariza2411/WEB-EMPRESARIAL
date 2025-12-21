import { Link } from "react-router-dom";
import { company } from "../../data/company";

export function Footer(){
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid-2">
          <div>
            <strong>{company.brandName}</strong>
            <p className="muted" style={{marginTop: 8, marginBottom: 0}}>
              {company.slogan}
            </p>
            <p className="muted" style={{marginTop: 8}}>
              {company.city} · {company.hours}
            </p>
          </div>
          <div>
            <div style={{display:"grid", gap: 8}}>
              <div><strong>Contacto</strong></div>
              <div className="muted">{company.phone}</div>
              <div className="muted">{company.email}</div>
              <div className="muted">{company.address}</div>
              <div style={{marginTop: 8}}>
                <Link to="/privacidad" className="muted">Política de privacidad</Link>
              </div>
            </div>
          </div>
        </div>

        <hr className="hr" />

        <div className="muted" style={{fontSize: 13}}>
          {company.legal}
        </div>
      </div>
    </footer>
  );
}
