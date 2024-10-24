import { Cabecera } from "../../componentes/contenedor/Cabecera";

export const Inicio = () => {
  return (
    <div>
      <Cabecera />
      <>
        <div className="h-100 p-5 bg-body-tertiary border rounded-3">
          <h2>SOMOS IPUC</h2>
          <p>
            La Iglesia es el cuerpo de Cristo en la tierra, según lo afirma el
            apóstol Pablo en su carta a los efesios. Por lo tanto, este cuerpo
            requiere trabajar armónicamente para alcanzar su objetivo principal
            de predicación del evangelio.
          </p>
          <button className="btn btn-outline-secondary" type="button">
            Amén
          </button>
        </div>
      </>
    </div>
  );
};
