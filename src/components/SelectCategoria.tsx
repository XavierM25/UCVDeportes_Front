import React from "react";

interface SelectCategoriaProps {
  categoria: string;
  setCategoria: (value: string) => void;
}

export default function SelectCategoria({ categoria, setCategoria }: SelectCategoriaProps) {
  return (
    <div>
      <h4 className="font-semibold mb-2">Selecciona una categoría</h4>
      <select
        id="selectCategoria"
        name="categoria_id"
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
        className="w-full border border-gray-300 rounded p-2"
      >
        <option value="" disabled>
          Selecciona una categoría
        </option>
        <option value="1">Categoría 1</option>
        <option value="2">Categoría 2</option>
      </select>
    </div>
  );
}
