const API_URL = import.meta.env.VITE_API_URL;

export const getUsuarios = async () => {
  const res = await fetch(`${API_URL}/usuarios`);
  return res.json();
};
