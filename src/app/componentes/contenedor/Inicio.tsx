import { Link } from "react-router-dom";
import "../../../App.css";

const Logo = () => {
  return <img src="../../../public/icono/ipucLogo.ico" width="30" height="24" />; // Asegúrate de que la ruta sea correcta
};

export const Inicio = () => {
  return (
    <>
      <div className="col-md-15 container-fluid">
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
        <nav
          className="navbar navbar-expand-lg bg-primary fixed-top"
          data-bs-theme="dark"
        >
          <div className="container-fluid">
            <Link className="navbar-brand" to="" />
            <img
              src="../../../public/icono/ipucLogo.ico"
              width="75"
              height="60"
            />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarColor02"
              aria-controls="navbarColor02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor02">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Miembros
                  </a>{" "}
                </li>{" "}
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
                        Junta local{" "}
                      </a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#">
                        Jovenes
                      </a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#">
                        Caballeros
                      </a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#">
                        Dorcas
                      </a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#">
                        Evangelismo{" "}
                      </a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#">
                        Escuela dominical{" "}
                      </a>
                    </li>

                    <li>
                      <hr className="dropdown-divider" />
                    </li>

                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here{" "}
                      </a>
                    </li>
                  </ul>{" "}
                </li>{" "}
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Oración
                  </a>{" "}
                </li>{" "}
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Acerca de
                  </a>{" "}
                </li>{" "}
              </ul>{" "}
              <form className="d-flex" role="search">
                {" "}
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />{" "}
                <button className="btn btn-outline-light" type="submit">
                  Search{" "}
                </button>{" "}
              </form>{" "}
            </div>{" "}
          </div>{" "}
        </nav>{" "}
      </div>{" "}
    </>
  );
};
