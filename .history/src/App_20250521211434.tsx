import { useState } from "react";
import Inscripciones from "./components/Inscripciones";
import Sidebar from "./components/Sidebar";

import './App.css';

function App() {
  // Puedes controlar qué módulo mostrar si quieres, aquí solo inscripciones
  const [activeModule, setActiveModule] = useState("inscripciones");

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar recibe una función para cambiar el módulo activo */}
      <Sidebar onSelect={setActiveModule} />
      
      <main className="flex-grow p-8">
        {activeModule === "inscripciones" && <Inscripciones />}
        {/* Aquí podrías agregar otros módulos según la selección */}
      </main>
    </div>
  );
}

export default App;
