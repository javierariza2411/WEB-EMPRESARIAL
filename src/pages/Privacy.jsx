import { PageShell } from "../components/layout/PageShell";
import { Card } from "../components/ui/Card";

export function Privacy(){
  return (
    <PageShell
      title="Política de privacidad"
      subtitle="Documento básico para el MVP. Ajustaremos según sus políticas y asesoría legal."
      badges={["Datos", "Uso", "Finalidad"]}
    >
      <Card className="kpi" style={{padding: 18}}>
        <strong>1) Información recolectada</strong>
        <p className="muted" style={{marginTop: 8}}>
          Recolectamos datos enviados por el usuario en formularios de contacto o cotización: nombre, email, teléfono, y detalles del requerimiento.
        </p>

        <strong>2) Finalidad</strong>
        <p className="muted" style={{marginTop: 8}}>
          Usamos esta información únicamente para responder solicitudes, preparar propuestas y dar seguimiento comercial.
        </p>

        <strong>3) Conservación</strong>
        <p className="muted" style={{marginTop: 8}}>
          Conservamos la información el tiempo necesario para la gestión comercial y soporte, o según normativa aplicable.
        </p>

        <strong>4) Solicitudes</strong>
        <p className="muted" style={{marginTop: 8, marginBottom: 0}}>
          Para solicitudes sobre datos, contáctanos por los canales oficiales publicados en la web.
        </p>
      </Card>
    </PageShell>
  );
}
