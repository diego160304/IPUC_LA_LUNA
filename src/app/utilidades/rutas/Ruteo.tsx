import { Route, Routes } from "react-router-dom";
import { Inicio } from "../../componentes/contenedor/Inicio"; 
import { Miembros } from "../../componentes/contenedor/Miembros"; 
import { Eventos } from "../../componentes/contenedor/Eventos"; 
import { Acerca_nosotros } from "../../componentes/contenedor/Acerca_nosotros"; 
import { Login } from "../../componentes/contenedor/Login"; 
import { Jovenes } from "../../Directivas/Jovenes"; 



export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/Miembros" element={<Miembros/>} />
      <Route path="/Eventos" element={<Eventos/>} />
      <Route path="/acerca_nosotros" element={<Acerca_nosotros/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/Jovenes" element={<Jovenes/>} />
    </Routes>
  );
};