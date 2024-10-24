import { Cabecera } from "../../componentes/contenedor/Cabecera";

export const Miembros = () => {
    return (
      <div>
        <Cabecera />
        <>
          <div className="h-100 p-5 bg-body-tertiary border rounded-3">
            <h2>MIEMBROS</h2>
            <p>
              AQUI VAN LOS MIEMBROS
            </p>
            <button className="btn btn-outline-secondary" type="button">
              Amén
            </button>
          </div>
        </>
      </div>
    );
  };
  