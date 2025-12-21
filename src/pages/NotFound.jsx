import { PageShell } from "../components/layout/PageShell";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";

export function NotFound(){
  return (
    <PageShell
      title="Página no encontrada"
      subtitle="La ruta que intentas abrir no existe."
      badges={["404"]}
    >
      <Link to="/"><Button>Volver al inicio</Button></Link>
    </PageShell>
  );
}
