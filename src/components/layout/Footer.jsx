import { Link } from "react-router-dom";
import { company } from "../../data/company";

export function Footer(){
  return (
    <footer className="siteFooter" role="contentinfo">

      {/* CTA SUPERIOR */}
      <section className="footerCta">
        <div className="container footerCtaGrid">
          <div>
            <p className="footerCtaKicker">PONTE EN CONTACTO CON NOSOTROS</p>
            <p className="footerCtaText">
              Llena el formulario para registrar tu proyecto y recibir un mejor servicio.
            </p>
          </div>

          <div className="footerCtaAction">
            <Link to="/cotizacion" className="footerCtaBtn">
              Solicitar cotización
            </Link>
          </div>
        </div>
      </section>

      {/* FRANJA INFO */}
      <section className="footerInfo">
        <div className="footerInfoGrid">
          <div className="footerInfoCol footerInfoColA">
            <div className="footerInfoIcon">📍</div>
            <div>
              <div className="footerInfoLabel">VISÍTANOS</div>
              <div className="footerInfoValue">{company.city}</div>
              <div className="footerInfoSmall">{company.address}</div>
            </div>
          </div>

          <div className="footerInfoCol footerInfoColB">
            <div className="footerInfoIcon">🕒</div>
            <div>
              <div className="footerInfoLabel">HORARIO DE ATENCIÓN</div>
              <div className="footerInfoValue">{company.hours}</div>
              <div className="footerInfoSmall">Lunes a Viernes</div>
            </div>
          </div>

          <div className="footerInfoCol footerInfoColC">
            <div className="footerInfoIcon">📞</div>
            <div>
              <div className="footerInfoLabel">LLÁMANOS</div>
              <div className="footerInfoValue">{company.phone}</div>
              <div className="footerInfoSmall">{company.email}</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER OSCURO */}
      <section className="footerBottom">
        <div className="container footerBottomInner">
          <div className="footerBrand">
            <div className="footerBrandText">
              <div className="footerBrandName">{company.brandName}</div>
              <div className="footerBrandSlogan">{company.slogan}</div>
            </div>
          </div>

          <div className="footerMeta">
            <div>{company.legal}</div>
            <div className="footerMetaLinks">
              <Link to="/privacidad">Política de privacidad</Link>
            </div>
          </div>
        </div>
      </section>

    </footer>
  );
}
