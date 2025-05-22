import React from "react";

interface ComentariosInputProps {
  comentarios: string;
  setComentarios: (value: string) => void;
  charCount: number;
  setCharCount: (value: number) => void;
}

export default function ComentariosInput({ comentarios, setComentarios, charCount, setCharCount }: ComentariosInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setComentarios(text);
    setCharCount(text.length);
  };

  return (
    <div>
      <h4 className="font-semibold mb-2">Comentarios</h4>
      <textarea
        id="comments"
        name="comentarios"
        placeholder="Comentarios"
        maxLength={500}
        value={comentarios}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded p-2 resize-none"
        rows={4}
      />
      <div className="text-right text-sm text-gray-500">{charCount}/500</div>
    </div>
  );
}
