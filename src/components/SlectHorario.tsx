import React from "react";

interface SelectHorarioProps {
  horario: string;
  setHorario: (value: string) => void;
}

const horariosDisponibles = ["mañana", "tarde", "noche"];

export default function SelectHorario({ horario, setHorario }: SelectHorarioProps) {
  return (
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
        {horariosDisponibles.map((h) => (
          <option key={h} value={h}>
            {h.charAt(0).toUpperCase() + h.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}
