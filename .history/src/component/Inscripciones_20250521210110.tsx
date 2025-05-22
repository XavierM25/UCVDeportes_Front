import { useState } from "react";

export default function Inscripciones() {
  const [categoria, setCategoria] = useState("");
  const [subcategoria, setSubcategoria] = useState("");
  const [dias, setDias] = useState<string[]>([]);
  const [horario, setHorario] = useState("");
  const [comentarios, setComentarios] = useState("");
  const maxComentarios = 500;

  const toggleDia = (dia: string) => {
    if (dias.includes(dia)) {
      setDias(dias.filter(d => d !== dia));
    } else {
      setDias([...dias, dia]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Datos enviados: \nCategoría: ${categoria}\nSubcategoría: ${subcategoria}\nDías: ${dias.join(", ")}\nHorario: ${horario}\nComentarios: ${comentarios}`);
  };

  return (
    <section className="max-w-3xl mx-auto p-6 bg-white rounded shadow mt-8">
      <h2 className="text-2xl font-bold mb-4">Inscripciones</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Categoría */}
        <div>
          <label className="block font-semibold mb-1" htmlFor="categoria">Categoría</label>
          <select
            id="categoria"
            value={categoria}
            onChange={e => setCategoria(e.target.value)}
            className="w-full border rounded px-3 py-2"
            required
          >
            <option value="" disabled>Selecciona una categoría</option>
            <option value="cat1">Categoría 1</option>
            <option value="cat2">Categoría 2</option>
          </select>
        </div>

        {/* Subcategoría */}
        <div>
          <label className="block font-semibold mb-1" htmlFor="subcategoria">Subcategoría</label>
          <select
            id="subcategoria"
            value={subcategoria}
            onChange={e => setSubcategoria(e.target.value)}
            className="w-full border rounded px-3 py-2"
            required
          >
            <option value="" disabled>Selecciona una subcategoría</option>
            {categoria === "cat1" && <option value="sub1">Subcategoría 1</option>}
            {categoria === "cat2" && <option value="sub2">Subcategoría 2</option>}
          </select>
        </div>

        {/* Días disponibles */}
        <fieldset>
          <legend className="font-semibold mb-2">Días disponibles</legend>
          <div className="flex flex-wrap gap-4">
            {["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"].map(dia => (
              <label key={dia} className="inline-flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  value={dia}
                  checked={dias.includes(dia)}
                  onChange={() => toggleDia(dia)}
                  className="form-checkbox"
                />
                <span>{dia}</span>
              </label>
            ))}
          </div>
        </fieldset>

        {/* Horario */}
        <div>
          <label className="block font-semibold mb-1" htmlFor="horario">Horario</label>
          <select
            id="horario"
            value={horario}
            onChange={e => setHorario(e.target.value)}
            className="w-full border rounded px-3 py-2"
            required
          >
            <option value="" disabled>Selecciona un horario</option>
            <option value="8-10">08:00 - 10:00</option>
            <option value="15-17">15:00 - 17:00</option>
          </select>
        </div>

        {/* Comentarios */}
        <div>
          <label className="block font-semibold mb-1" htmlFor="comentarios">Comentarios</label>
          <textarea
            id="comentarios"
            value={comentarios}
            maxLength={maxComentarios}
            onChange={e => setComentarios(e.target.value)}
            placeholder="Comentarios"
            className="w-full border rounded px-3 py-2 resize-none"
            rows={4}
          />
          <div className="text-right text-sm text-gray-500">{comentarios.length} / {maxComentarios}</div>
        </div>

        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded w-full"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}
