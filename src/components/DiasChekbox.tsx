import React from "react";

interface DiasCheckboxProps {
  dias: string[];
  setDias: (dias: string[]) => void;
}

const diasDisponibles = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

export default function DiasCheckbox({ dias, setDias }: DiasCheckboxProps) {
  const toggleDia = (dia: string) => {
    if (dias.includes(dia)) {
      setDias(dias.filter((d) => d !== dia));
    } else {
      setDias([...dias, dia]);
    }
  };

  return (
    <div>
      <h4 className="font-semibold mb-2">Selecciona el día disponible</h4>
      <div className="flex flex-wrap gap-4">
        {diasDisponibles.map((dia) => (
          <label key={dia} className="inline-flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              value={dia}
              checked={dias.includes(dia)}
              onChange={() => toggleDia(dia)}
              className="cursor-pointer"
            />
            {dia}
          </label>
        ))}
      </div>
    </div>
  );
}
