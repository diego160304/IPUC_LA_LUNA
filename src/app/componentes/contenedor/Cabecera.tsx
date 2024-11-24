import "../../../App.css";
import miLogo from "../../../../public/icono/ipucLogo.ico";
import { Link } from "react-router-dom";

export const Cabecera = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={miLogo} alt="El Logo" width="48,35" height="33,5" />
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
            <span className="navbar-toggler-icon container-lg"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul
              className="navbar-nav me-auto my-0 my-lg-0 navbar-nav-scroll"
              style={{ "--bs-scroll-height": "1000px" } as React.CSSProperties}
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
                <Link className="nav-link" to="/Eventos">
                  Eventos
                </Link>
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
                    <Link className="dropdown-item" to="/Jovenes">
                      Jóvenes
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/Musica">
                      Musica
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
                      otros
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/acerca_nosotros">
                  Acerca de nosotros
                </Link>
              </li>
            </ul>

            {/* <Link className="btn btn-outline-success" to="/login">
              Iniciar sesión
            </Link> */}
          </div>
        </div>
      </nav>
    </>
  );
};
