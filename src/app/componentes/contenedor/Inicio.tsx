import { Cabecera } from "../../componentes/contenedor/Cabecera";

export const Inicio = () => {
return (
    <div>
      <Cabecera />
      <div className="container mt-5">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title text-center">SOMOS IPUC</h2>
            <p className="card-text">La Iglesia es el cuerpo de Cristo en la tierra, según lo afirma el
            apóstol Pablo en su carta a los efesios. Por lo tanto, este cuerpo
            requiere trabajar armónicamente para alcanzar su objetivo principal
            de predicación del evangelio.</p>
            <button className="btn btn-primary">Amén</button>
          </div>
        </div>
      </div>
    </div>
  );
};
