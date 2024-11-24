import "../../App.css";
import { Cabecera } from "../componentes/contenedor/Cabecera";
import ValeriaFoto from "../../assets/Imagen/Valeria.jpeg";
import AlejandroFoto from "../../assets/Imagen/Alejandro.jpeg";
import NatanaelFoto from "../../assets/Imagen/Natanael.jpg";
import DiegoFoto from "../../assets/Imagen/Diego.svg";
import { Footer } from "../componentes/contenedor/Footer";

export const Jovenes = () => {
  return (
    <div>
      <Cabecera />
      <div className="container mt-5">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title text-center">Jóvenes</h2>
            <p className="card-text">Aqui van los jóvenes</p>
            <button className="btn btn-primary">Seguir</button>
          </div>
        </div>
      </div>
      <div className="container m-auto mt-lg-2  card-group">
        <div className="card">
          <img
            src={NatanaelFoto}
            className="card-img-top shadow-lg p-1 mb-1 bg-body-tertiary rounded-circle"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Natanael Romero</h5>
            <p className="card-text">Lider de jóvenes</p>
          </div>
          <div className="card-footer">
            <small className="text-body-secondary">
              <a href="https://www.facebook.com/natanael.romero.9843">Facebook</a>
            </small>
          </div>
          <small className="text-body-secondary">
            <a href="https://www.instagram.com/natanaelromeroh/">Instagram</a>
          </small>
        </div>
        <div className="card">
          <img
            src={ValeriaFoto}
            className="card-img-top shadow-lg p-1 mb-1 bg-body-tertiary rounded-circle"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Valeria Redondo</h5>
            <p className="card-text">Secretaria de jóvens</p>
          </div>
          <div className="card-footer">
            <small className="text-body-secondary">
              <a href="https://www.facebook.com/ValeriaRedondo160914080">Facebook</a>
            </small>
          </div>
          <small className="text-body-secondary">
            <a href="https://www.instagram.com/val_redondo05/">Instagram</a>
          </small>
        </div>
        <div className="card">
          <img
            src={AlejandroFoto}
            className="card-img-top shadow-lg p-1 mb-1 bg-body-tertiary rounded-circle"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Alejandro González</h5>
            <p className="card-text">Tesorero de Jóvenes</p>
          </div>
          <div className="card-footer">
            <small className="text-body-secondary">
              <a href="https://www.facebook.com/profile.php?id=100067566891029">Facebook</a>
            </small>
          </div>
      {/*     <small className="text-body-secondary">
            <a href="https://instagram.com/">Instagram</a>
          </small> */}
        </div>
        <div className="card">
          <img
            src={DiegoFoto}
            className="card-img-top shadow-lg p-1 mb-1 bg-body-tertiary rounded-circle"
            alt="..."
          />
          <div className="card-body ">
            <h5 className="card-title">Diego Puerta</h5>
            <p className="card-text">Lider de misión juvenil</p>
          </div>
          <div className="card-footer ">
            <small className="text-body-secondary">
              <a href="https://www.facebook.com/DiegoAndres160304">Facebook</a>
            </small>
          </div>
          <small className="text-body-secondary">
            <a href="https://www.instagram.com/diego_puerta_16/">Instagram</a>
          </small>
        </div>
      </div>
      <Footer />
    </div>
  );
};
