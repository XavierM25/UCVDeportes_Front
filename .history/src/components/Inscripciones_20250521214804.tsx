import { useState } from "react";

export default function Inscripciones() {
  const [categoria, setCategoria] = useState("");
  const [subcategoria, setSubcategoria] = useState("");
  const [dias, setDias] = useState<string[]>([]);
  const [horario, setHorario] = useState("");
  const [comentarios, setComentarios] = useState("");
  const [charCount, setCharCount] = useState(0);

  const handleDiaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setDias([...dias, value]);
    } else {
      setDias(dias.filter((d) => d !== value));
    }
  };

  const handleComentariosChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setComentarios(text);
    setCharCount(text.length);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí manejas el envío de datos, validaciones, etc.
    console.log({ categoria, subcategoria, dias, horario, comentarios });
  };

  return (
    <section className="ins-container p-6 max-w-2xl mx-auto bg-white rounded shadow">
      <div className="mb-6 text-right">
        <h3 className="text-2xl font-bold">INSCRIPCIONES</h3>
        <p>Inscríbete en las distintas disciplinas</p>
        <span className="text-sm text-gray-600">Recuerda verificar las vacantes disponibles</span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Categorías */}
        <div>
          <h4 className="font-semibold mb-2">Selecciona una categoría</h4>
          <div className="flex gap-4">
            <select
              id="selectCategoria"
              name="categoria_id"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              className="flex-1 border border-gray-300 rounded p-2"
            >
              <option value="" disabled>
                Selecciona una categoría
              </option>
              {/* Aquí puedes mapear las categorías dinámicamente */}
              <option value="1">Categoría 1</option>
              <option value="2">Categoría 2</option>
            </select>

            <select
              id="selectSubcategoria"
              name="subcategoria_id"
              value={subcategoria}
              onChange={(e) => setSubcategoria(e.target.value)}
              className="flex-1 border border-gray-300 rounded p-2"
              disabled={!categoria}
            >
              <option value="" disabled>
                Subcategoría
              </option>
              {/* Aquí según categoría, opciones dinámicas */}
              {categoria === "1" && (
                <>
                  <option value="1-1">Subcategoría 1-1</option>
                  <option value="1-2">Subcategoría 1-2</option>
                </>
              )}
              {categoria === "2" && (
                <>
                  <option value="2-1">Subcategoría 2-1</option>
                  <option value="2-2">Subcategoría 2-2</option>
                </>
              )}
            </select>
          </div>
        </div>

        {/* Días */}
        <div>
          <h4 className="font-semibold mb-2">Selecciona el día disponible</h4>
          <div className="flex flex-wrap gap-4">
            {["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"].map((dia) => (
              <label key={dia} className="inline-flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="dias[]"
                  value={dia}
                  checked={dias.includes(dia)}
                  onChange={handleDiaChange}
                  className="cursor-pointer"
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
            className="w-full border border-gray-300 rounded p-2"
          >
            <option value="" disabled>
              Selecciona un horario
            </option>
            <option value="mañana">Mañana</option>
            <option value="tarde">Tarde</option>
            <option value="noche">Noche</option>
          </select>
        </div>

        {/* Comentarios */}
        <div>
          <h4 className="font-semibold mb-2">Comentarios</h4>
          <textarea
            id="comments"
            name="comentarios"
            placeholder="Comentarios"
            maxLength={500}
            value={comentarios}
            onChange={handleComentariosChange}
            className="w-full border border-gray-300 rounded p-2 resize-none"
            rows={4}
          />
          <div className="text-right text-sm text-gray-500">{charCount}/500</div>
        </div>

        {/* Botón enviar */}
        <div>
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded"
          >
            Enviar
          </button>
        </div>
      </form>
    </section>
  );
}
