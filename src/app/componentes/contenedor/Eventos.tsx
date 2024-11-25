import "../../../App.css";
import Evento1 from "../../../assets/Imagen/Carrusel/evento1.png";
import Evento2 from "../../../assets/Imagen/Carrusel/evento2.png";
import Evento3 from "../../../assets/Imagen/Carrusel/evento3.png";
import { Cabecera } from "./Cabecera";  
export const Eventos = () => {
  return (
    <>
      <Cabecera />

      
          <div
            id="carouselExampleIndicators"
            className="carousel slide "
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={Evento1} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={Evento2} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={Evento3} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Anterior</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Siguiente</span>
            </button>
          </div>
    </>
  );
};
