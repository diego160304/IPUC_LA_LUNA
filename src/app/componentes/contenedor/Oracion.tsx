import { Cabecera } from "../../componentes/contenedor/Cabecera";

export const Oracion = () => {
    return (
        <div>
          <Cabecera />
          <div className="container mt-5">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title text-center">Oración</h2>
                <p className="card-text">Aqui van las peticiones</p>
                <button className="btn btn-primary">Amén</button>
              </div>
            </div>
          </div>
        </div>
      );
    };