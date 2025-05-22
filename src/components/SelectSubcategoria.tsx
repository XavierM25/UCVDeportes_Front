import React from "react";

interface SelectSubcategoriaProps {
  categoria: string;
  subcategoria: string;
  setSubcategoria: (value: string) => void;
}

export default function SelectSubcategoria({ categoria, subcategoria, setSubcategoria }: SelectSubcategoriaProps) {
  return (
    <div>
      <h4 className="font-semibold mb-2">Selecciona una subcategoría</h4>
      <select
        id="selectSubcategoria"
        name="subcategoria_id"
        value={subcategoria}
        onChange={(e) => setSubcategoria(e.target.value)}
        className="w-full border border-gray-300 rounded p-2"
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
  );
}
