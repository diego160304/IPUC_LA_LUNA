import "../../../App.css";

export const Footer = () => {
  return (
    <>
      <div>
        <div
          className="container-md elementor-element elementor-element-96e741e e-flex e-con-boxed e-con e-parent e-lazyloaded container m-3"
          data-id="96e741e"
          data-element_type="container"
          data-settings='{"background_background":"classic"}'
        ></div>
        <div
          className="container-md card text-center"
          style={{ borderRadius: "20px" }}
        >
          <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs">
              <li className="nav-item">
                <a className="nav-link active" aria-current="true" href="#">
                  Contactos
                </a>
              </li>
            </ul>
          </div>
          <div className="card-body">
            <h3 className="card-title">Correo electronico</h3>
            <p className="card-text">ipuclaluna@gmail.com</p>
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWstwNjtcfVpLldBBwPZdXnDSQmdKfjzDkPNZWhFrvGhgLQTGLMnRWrkdwdQcMDZSSNXHVvgv"
              className="btn btn-primary"
            >
              Enviar correo
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
