import { Cabecera } from "../../componentes/contenedor/Cabecera";

export const Login = () => {
    return (
      <div> 
        <Cabecera />
        <form>
          <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" />
          <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
          <input type="submit" className="fadeIn fourth" value="Log In" /> 
        </form>
      </div>
    );
  };