import React from "react";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-800 text-white p-4 fixed">
      <h2 className="text-2xl font-bold mb-8">Menú</h2>
      <nav>
        <ul className="space-y-4">
          <li>
            <a href="#" className="hover:text-red-500">
              Inscripciones
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-red-500">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-red-500">
              Validar
            </a>
          </li>
          {/* Agrega más links según necesites */}
        </ul>
      </nav>
    </aside>
  );
}
