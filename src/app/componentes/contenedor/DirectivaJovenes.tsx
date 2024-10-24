import { Cabecera } from "../../componentes/contenedor/Cabecera";

export const DirectivaJovenes = () => {
  return (
    <div>
      <Cabecera />
      <div className="container mt-5">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title text-center">Comité de Jovenes</h2>
            <p className="card-text">Lista de los Jovenes</p>
            <button className="btn btn-primary">Amén</button>
          </div>
        </div>
      </div>
    </div>
  );
};
  