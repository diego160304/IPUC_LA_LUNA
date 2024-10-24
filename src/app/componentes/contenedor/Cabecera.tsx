import "../../../App.css";
import { Link } from "react-router-dom";
const Logo = () => {
  return <img src="../../../public/icono/ipucLogo.ico" width="30" height="24" />; // Asegúrate de que la ruta sea correcta
};

export const Cabecera = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            IPUC
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul
              className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
              style={{ "--bs-scroll-height": "100px" } as React.CSSProperties}
            >
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/miembros"
                >
                  Miembros
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Oración
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Directivas
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Junta Local
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Jovenes
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Dorcas
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Caballeros
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Escuela Dominical
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Misiones y evangelismo
                    </a>
                  </li>

                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Otras
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Acerca de nosotros
                </a>
              </li>
            </ul>

            <button className="btn btn-outline-success" type="submit">
              Iniciar sesión
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
