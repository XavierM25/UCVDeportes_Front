import { useState, useEffect } from "react";
import { FaFileAlt, FaCalendarTimes, FaCalendarCheck } from "react-icons/fa";

function Sidebar() {
  // Copia tu sidebar actual o adapta el que tienes en Dashboard.tsx
  return (
    <aside className="w-64 bg-white shadow-md px-6 py-8 flex flex-col justify-between">
      <div className="space-y-6">
        <div className="text-red-600 font-bold text-lg mb-4 cursor-pointer">Dashboard</div>
        <nav className="space-y-4 text-sm">
          {/* Aquí links del sidebar */}
        </nav>
      </div>
      <div className="flex items-center gap-3 text-gray-600 hover:text-red-500 cursor-pointer">
        {/* Cerrar sesión */}
      </div>
    </aside>
  );
}

export default function Inscripciones() {
  // Estado formulario
  const [categoria, setCategoria] = useState("");
  const [subcategoria, setSubcategoria] = useState("");
  const [dias, setDias] = useState<string[]>([]);
  const [horario, setHorario] = useState("");
  const [comentarios, setComentarios] = useState("");
  const maxComentarios = 500;

  // Vacantes (puedes conectar a API para llenar esto)
  const [totalVacantes, setTotalVacantes] = useState(0);
  const [ocupadas, setOcupadas] = useState(0);
  const [disponibles, setDisponibles] = useState(0);

  // Función para manejar checkboxes días (habilitar/deshabilitar según categoría/subcategoría)
  const toggleDia = (dia: string) => {
    if (dias.includes(dia)) {
      setDias(dias.filter(d => d !== dia));
    } else {
      setDias([...dias, dia]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí envías la info a tu backend o la validas
    console.log({ categoria, subcategoria, dias, horario, comentarios });
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 p-8">
        <section className="max-w-3xl bg-white rounded-xl shadow-md p-8">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-1">INSCRIPCIONES</h3>
            <p className="text-gray-700 mb-1">Inscríbete en las distintas disciplinas</p>
            <span className="text-sm text-gray-500">Recuerda verificar las vacantes disponibles</span>
          </div>

          <form id="inscriptionForm" onSubmit={handleSubmit} className="space-y-6">
            {/* Categorías y Subcategorías */}
            <div>
              <h4 className="font-semibold mb-2">Selecciona una categoría</h4>
              <div className="flex gap-4">
                <select
                  id="selectCategoria"
                  name="categoria_id"
                  value={categoria}
                  onChange={(e) => setCategoria(e.target.value)}
                  className="flex-1 border border-gray-300 rounded-md px-3 py-2"
                >
                  <option value="" disabled>Selecciona una categoría</option>
                  {/* Opciones dinámicas o estáticas */}
                  <option value="cat1">Categoría 1</option>
                  <option value="cat2">Categoría 2</option>
                </select>

                <select
                  id="selectSubcategoria"
                  name="subcategoria_id"
                  value={subcategoria}
                  onChange={(e) => setSubcategoria(e.target.value)}
                  className="flex-1 border border-gray-300 rounded-md px-3 py-2"
                >
                  <option value="" disabled>Subcategoría</option>
                  {/* Opciones según categoría */}
                  {categoria === "cat1" && <option value="sub1">Subcategoría 1</option>}
                  {categoria === "cat2" && <option value="sub2">Subcategoría 2</option>}
                </select>
              </div>
            </div>

            {/* Días disponibles */}
            <div>
              <h4 className="font-semibold mb-2">Selecciona el día disponible</h4>
              <div className="flex flex-wrap gap-4">
                {["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"].map(dia => (
                  <label key={dia} className={`cursor-pointer select-none ${false ? "opacity-50 cursor-not-allowed" : ""}`}>
                    <input
                      type="checkbox"
                      name="dias[]"
                      value={dia}
                      checked={dias.includes(dia)}
                      disabled={false /* aquí lógica para habilitar o deshabilitar */}
                      onChange={() => toggleDia(dia)}
                      className="mr-2"
                    />
                    {dia}
                  </label>
                ))}
              </div>
            </div>

            {/* Horario */}
            <div>
              <h4 className="font-semibold mb-2">Selecciona el horario</h4>
              <select
                id="selectHorario"
                name="horario_id"
                value={horario}
                onChange={(e) => setHorario(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              >
                <option value="" disabled>Selecciona un horario</option>
                <option value="morning">08:00 - 10:00</option>
                <option value="afternoon">15:00 - 17:00</option>
              </select>
            </div>

            {/* Comentarios */}
            <div>
              <h4 className="font-semibold mb-2">Comentarios</h4>
              <textarea
                id="comments"
                name="comentarios"
                placeholder="Comentarios"
                maxLength={maxComentarios}
                value={comentarios}
                onChange={e => setComentarios(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2 resize-none"
                rows={4}
              />
              <div className="text-right text-sm text-gray-500">
                {comentarios.length}/{maxComentarios}
              </div>
            </div>

            {/* Botón */}
            <div>
              <button
                id="createInscrip"
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md w-full"
              >
                Enviar
              </button>
            </div>
          </form>

          {/* Vacantes Disponibles */}
          <section className="mt-10">
            <h3 className="text-xl font-semibold mb-4">Vacantes Disponibles</h3>
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <FaFileAlt className="text-gray-600 text-2xl" />
                <input type="text" value={categoria} readOnly placeholder="Categoría" className="border border-gray-300 rounded px-2 py-1" />
                <input type="text" value={subcategoria} readOnly placeholder="Subcategoría" className="border border-gray-300 rounded px-2 py-1" />
              </div>

              <div className="flex gap-8">
                <div className="flex items-center gap-2">
                  <FaFileAlt className="text-gray-600" />
                  <p>Total: <span>{totalVacantes}</span></p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCalendarTimes className="text-red-600" />
                  <p>Ocupadas: <span>{ocupadas}</span></p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCalendarCheck className="text-green-600" />
                  <p>Disponibles: <span>{disponibles}</span></p>
                </div>
              </div>
            </div>
          </section>

          {/* Aquí puedes agregar slider */}
          {/* <Slider /> */}
        </section>
      </main>
    </div>
  );
}
