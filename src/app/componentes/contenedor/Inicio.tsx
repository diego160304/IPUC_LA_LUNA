import { Cabecera } from "../../componentes/contenedor/Cabecera";
import ipucGeneral from "../../../../src/assets/Imagen/ipucGeneral.jpeg";
import { Footer } from "./Footer";

export const Inicio = () => {
  return (
    <div>
      <Cabecera />
      <div className="container mt-2">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title text-center">SOMOS IPUC</h2>
            <p className="card-text">
              La Iglesia es el cuerpo de Cristo en la tierra, según lo afirma el
              apóstol Pablo en su carta a los efesios. Por lo tanto, este cuerpo
              requiere trabajar armónicamente para alcanzar su objetivo
              principal de predicación del evangelio.
            </p>
          </div>
        </div>
      </div>

      <div
        className="accordion container mt-4 "
        id="accordionPanelsStayOpenExample"
      >
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              IPUC LA LUNA
            </button>
          </h2>

          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
          >
            <div className="card-body container border-5">
              <img src={ipucGeneral} className="card-img" alt="Ipuc General" />
              <div className="card-body">
                <h5 className="card-title">Miembros</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
