import React from "react";
import './App.css'


const RankingSection = () => {
  return (
    <>
      <section className="separator-rank text-center py-6">
        <h1 className="text-2xl font-bold">Ranking | Deportes, Cultura y Talleres UCV</h1>

        <ul className="categories-rank flex justify-center gap-4 mt-4 font-semibold text-[#243659]">
          {["Deportes", "Cultura", "Talleres"].map((categoria, i) => (
            <li
              key={i}
              className="px-4 py-1 rounded cursor-pointer transition duration-300 hover:text-white hover:bg-[#243659] hover:shadow-[0_0_15px_#243659]"
            >
              {categoria}
            </li>
          ))}
        </ul>

        <ul className="subcategories-rank flex justify-center gap-3 mt-2 text-sm text-gray-600">
          {["Fútbol", "Danza", "Programación"].map((subcat, i) => (
            <li
              key={i}
              className="px-3 py-1 rounded transition duration-300 hover:text-[#243659] hover:shadow-[0_0_8px_#243659]"
            >
              {subcat}
            </li>
          ))}
        </ul>
      </section>

      <section className="w-full flex justify-center">
        <div className="w-[90%]">
          <h2 className="text-xl font-semibold mb-4 text-center">Estudiantes Top</h2>

          {(() => {
            const estudiantes = [
              { id: 1, nombre: "Juan Pérez", puesto: "#1", puntos: 120, descripcion: "Participante destacado en Deportes" },
              { id: 2, nombre: "Lucía Ramírez", puesto: "#2", puntos: 110, descripcion: "Participante destacada en Cultura" },
              { id: 3, nombre: "Carlos Gómez", puesto: "#3", puntos: 105, descripcion: "Participante destacado en Talleres" },
            ];

            return (
              <div className="flex flex-wrap justify-center gap-6">
                {estudiantes.map((estudiante) => (
                  <div
                    key={estudiante.id}
                    className="w-[248px] h-[600px] flex items-center justify-center transition-transform duration-700 transform hover:scale-110"
                  >
                    <div className="relative bg-white p-6 rounded-[14px] flex flex-col items-center shadow-[0_10px_10px_rgba(0,0,0,0.3)]">
                      {/* Corazón que se ilumina */}
                      <div className="absolute top-5 right-5 p-2 text-xl rounded-full z-10 cursor-pointer text-gray-400 transition-colors duration-300 hover:text-red-500 select-none">
                        ❤️
                      </div>

                      <h2 className="text-[48px] border-b-2 border-red-500 w-1/2 font-poppins text-center">{estudiante.puesto}</h2>
                      <div className="py-6 text-center">
                        <h3 className="text-base font-poppins">{estudiante.nombre}</h3>
                        <h4 className="text-sm text-[#656565] font-poppins">{estudiante.descripcion}</h4>
                      </div>
                      {/* Avatar con sombra (sin imagen) */}
                      <div className="w-[200px] h-[200px] bg-gray-200 rounded-xl shadow-lg"></div>
                      <div className="pt-6 flex justify-center text-center gap-6">
                        <div className="flex items-center justify-center gap-1">
                          <h3 className="text-left text-sm font-poppins">{estudiante.puntos} Puntos</h3>
                          <span className="text-2xl transition-colors duration-300 hover:text-yellow-400 cursor-pointer">⭐</span>
                        </div>
                        <div className="flex items-center justify-center">
                          <p className="text-base">Opciones</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            );
          })()}
        </div>
      </section>

      <button
        id="btnViewMore"
        type="button"
        className="block mx-auto mt-6 px-4 py-2 bg-[#243659] text-white rounded hover:bg-[#1a2747] transition duration-300"
      >
        Ver Más
      </button>

      <section className="table-content my-10">
        <div id="tableRank" className="table-rank hidden max-w-4xl mx-auto shadow-lg rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-[#243659] text-white">
              <tr>
                <th className="py-2">Puesto</th>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>Categoría</th>
                <th>Puntos</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {/* No hay datos aún */}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default RankingSection;