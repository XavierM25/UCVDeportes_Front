import { useEffect, useState } from "react";

const imagenes = [
  "/assets/imagen1.jpg",
  "/assets/imagen2.jpg",
  "/assets/imagen3.jpg",
  "/assets/imagen4.jpg",
  "/assets/imagen5.jpg",
];

export default function Inscripciones() {
  const [categoria, setCategoria] = useState("");
  const [subcategoria, setSubcategoria] = useState("");
  const [dias, setDias] = useState<string[]>([]);
  const [horario, setHorario] = useState("");
  const [comentarios, setComentarios] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [index, setIndex] = useState(0);

  const total = 50;
  const ocupadas = 12;
  const disponibles = total - ocupadas;

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
    console.log({ categoria, subcategoria, dias, horario, comentarios });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % imagenes.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="max-w-7xl mx-auto mt-12 grid grid-cols-1 lg:grid-cols-3 gap-10 px-6">
      {/* Formulario */}
      <div className="lg:col-span-2 bg-white p-10 rounded-3xl shadow-xl border border-blue-300">
        <header className="mb-8 text-center">
          <h2 className="text-5xl font-extrabold text-blue-900 tracking-tight mb-2 drop-shadow-sm">
            Inscripciones
          </h2>
          <p className="text-blue-700 text-lg font-medium">¡Inscríbete en las distintas disciplinas!</p>
          <p className="text-blue-400 mt-1 italic">Verifica las vacantes antes de enviar.</p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Categorías */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <select
              id="selectCategoria"
              name="categoria_id"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              className="border border-blue-400 rounded-lg p-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-700 transition"
            >
              <option value="" disabled>
                Selecciona una categoría
              </option>
              <option value="1">Categoría 1</option>
              <option value="2">Categoría 2</option>
            </select>

            <select
              id="selectSubcategoria"
              name="subcategoria_id"
              value={subcategoria}
              onChange={(e) => setSubcategoria(e.target.value)}
              className="border border-blue-400 rounded-lg p-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-700 transition disabled:opacity-60 cursor-pointer"
              disabled={!categoria}
            >
              <option value="" disabled>
                Subcategoría
              </option>
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

          {/* Días */}
          <div>
            <p className="font-semibold text-blue-900 mb-3 text-lg">Días disponibles</p>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"].map((dia) => (
                <label
                  key={dia}
                  className="flex items-center gap-3 px-4 py-2 border border-blue-300 rounded-lg bg-white cursor-pointer select-none hover:bg-blue-50 transition"
                >
                  <input
                    type="checkbox"
                    value={dia}
                    checked={dias.includes(dia)}
                    onChange={handleDiaChange}
                    className="accent-blue-700 w-5 h-5"
                  />
                  <span className="text-blue-800 font-medium">{dia}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Horario */}
          <div>
            <label htmlFor="selectHorario" className="block font-semibold text-blue-900 mb-3 text-lg">
              Horario
            </label>
            <select
              id="selectHorario"
              name="horario_id"
              value={horario}
              onChange={(e) => setHorario(e.target.value)}
              className="w-full border border-blue-400 rounded-lg p-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-700 transition"
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
            <label htmlFor="comments" className="block font-semibold text-blue-900 mb-3 text-lg">
              Comentarios
            </label>
            <textarea
              id="comments"
              name="comentarios"
              maxLength={500}
              value={comentarios}
              onChange={handleComentariosChange}
              placeholder="Escribe aquí tus comentarios..."
              className="w-full h-36 border border-blue-400 rounded-lg p-4 resize-none text-lg focus:outline-none focus:ring-2 focus:ring-blue-700 transition placeholder:text-blue-300"
            />
            <p className="text-right text-sm text-blue-400 mt-2">{charCount}/500</p>
          </div>

          {/* Enviar */}
          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-extrabold py-4 rounded-xl shadow-md transition transform hover:scale-[1.02]"
          >
            Enviar inscripción
          </button>
        </form>
      </div>

      {/* Carrusel + Vacantes */}
      <aside className="flex flex-col gap-8">
        {/* Carrusel de imágenes */}
        <div className="relative w-full h-72 overflow-hidden rounded-3xl shadow-xl border border-blue-300">
          <img
            src={imagenes[index]}
            alt={`Imagen ${index + 1}`}
            className="w-full h-full object-cover transition duration-1000 ease-in-out"
          />
          <div className="absolute bottom-3 right-3 bg-blue-900/80 text-white text-sm px-3 py-1 rounded-full select-none font-semibold drop-shadow-md">
            {index + 1} / {imagenes.length}
          </div>
        </div>

        {/* Vacantes */}
        <div className="bg-white p-6 rounded-3xl shadow-lg border border-blue-300 text-center">
          <h3 className="text-xl font-semibold text-blue-900 mb-4 tracking-wide">Vacantes disponibles</h3>
          <div className="space-y-2 text-blue-800 text-lg font-medium">
            <p>
              Total: <span className="font-extrabold text-blue-700">{total}</span>
            </p>
            <p>
              Ocupadas: <span className="font-extrabold text-blue-700">{ocupadas}</span>
            </p>
            <p>
              Disponibles: <span className="font-extrabold text-green-600">{disponibles}</span>
            </p>
          </div>
        </div>
      </aside>
    </section>
  );
}
