import React from "react";

interface BotonEnviarProps {
  disabled: boolean;
}

export default function BotonEnviar({ disabled }: BotonEnviarProps) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`w-full font-semibold py-2 rounded text-white ${
        disabled ? "bg-gray-400 cursor-not-allowed" : "bg-red-600 hover:bg-red-700"
      }`}
    >
      Enviar
    </button>
  );
}
