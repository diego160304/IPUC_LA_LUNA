import { Route, Routes } from "react-router-dom";
import { Inicio } from "../../componentes/contenedor/Inicio"; 
import { Miembros } from "../../componentes/contenedor/Miembros"; // Importa el componente Miembros

export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
 
      <Route path="/miembros" element={<Miembros/>} />

    </Routes>
  );
};