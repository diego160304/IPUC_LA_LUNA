import { Cabecera } from "../../componentes/contenedor/Cabecera";

export const Miembros = () => {
  return (
    <div>
      <Cabecera />
      <div className="container mt-5">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title text-center">Miembros</h2>
            <p className="card-text">Lista de los miembros</p>
            <button className="btn btn-primary">Amén</button>
          </div>
        </div>
      </div>
    </div>
  );
};
  