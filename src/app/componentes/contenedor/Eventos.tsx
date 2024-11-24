import { Cabecera } from "./Cabecera";

export const Eventos = () => {
    return (
        <div>
          <Cabecera />
          <div className="container mt-5">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title text-center">Eventos</h2>
                <p className="card-text">Aqui van los proximos eventos</p>
                <button className="btn btn-primary">Seguir</button>
              </div>
            </div>
          </div>
        </div>
      );
    };