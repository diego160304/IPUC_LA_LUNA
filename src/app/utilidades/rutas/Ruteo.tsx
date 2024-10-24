import { Route, Routes } from "react-router-dom";
import { Inicio } from "../../componentes/contenedor/Inicio"; 
import { Miembros } from "../../componentes/contenedor/Miembros"; 
import { Oracion } from "../../componentes/contenedor/Oracion"; 
import { Acerca_nosotros } from "../../componentes/contenedor/Acerca_nosotros"; 
import { Login } from "../../componentes/contenedor/Login"; 
import { DirectivaJovenes } from "../../componentes/contenedor/DirectivaJovenes"; 



export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/Miembros" element={<Miembros/>} />
      <Route path="/Oracion" element={<Oracion/>} />
      <Route path="/acerca_nosotros" element={<Acerca_nosotros/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/directivaJovenes" element={<DirectivaJovenes/>} />


    </Routes>
  );
};