import "../../App.css";
import { Cabecera } from "../componentes/contenedor/Cabecera";
import IsaiFoto from "../../assets/Imagen/Isai.jpeg";
import { Footer } from "../componentes/contenedor/Footer";

export const Musica = () => {
  return (
    <div>
      <Cabecera />
      <div className="container mt-5">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title text-center">Música</h2>
            <p className="card-text">Aquí van los integrantes de Música</p>
            <button className="btn btn-primary">Seguir</button>
          </div>
        </div>
      </div>
      <div className="container m-auto mt-lg-2  card-group">
        <div className="card">
          <img
            src={IsaiFoto}
            className="card-img-top shadow-lg p-1 mb-1 bg-body-tertiary rounded-circle"
            alt="..."
          />
          <div className="card-body ">
            <h5 className="card-title">Isaí Romero</h5>
            <p className="card-text">Líder, secretario y tesorero de música</p>
          </div>
          <div className="card-footer ">
            <small className="text-body-secondary">
              <a href="https://www.facebook.com/isaidavif.romerohernandez">Facebook</a>
            </small>
          </div>
          <small className="text-body-secondary">
            <a href="https://www.instagram.com/isai_romero05/">Instagram</a>
          </small>
        </div>
      </div>
      <Footer />
    </div>
  );
};
