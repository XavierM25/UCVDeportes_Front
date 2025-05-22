import { useState } from "react";
import Inscripciones from "./components/Inscripciones";
import Sidebar from "./components/Sidebar";

export default function App() {
  const [activeModule, setActiveModule] = useState("inscripciones");

  return (
    <div className="flex min-h-screen">
      <Sidebar onSelect={setActiveModule} />
      
      <main className="flex-1 p-6 bg-gray-50">
        {activeModule === "inscripciones" && <Inscripciones />}
        {/* Aquí luego irían más módulos */}
      </main>
    </div>
  );
}
