import { Cabecera } from "../../componentes/contenedor/Cabecera";

export const Acerca_nosotros = () => {
  return (
    <div>
      <Cabecera />
      <div className="container mt-5">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title text-center">Más información</h2>
            <p className="card-text">Somos...</p>
            <button className="btn btn-primary">Amén</button>
          </div>
        </div>
      </div>
    </div>
  );
};
