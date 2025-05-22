import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Inscripciones from "./Inscripciones";

export default function App() {
  const [selectedModule, setSelectedModule] = useState("inscripciones");

  return (
    <div className="flex">
      <Sidebar onSelect={setSelectedModule} />
      <main className="flex-1 p-6">
        {selectedModule === "inscripciones" && <Inscripciones />}
        {/* Aquí puedes poner otros módulos en el futuro */}
      </main>
    </div>
  );
}
