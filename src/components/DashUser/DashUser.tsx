import { useState } from "react";
import {
  FaUserEdit,
  FaTrashAlt,
  FaTimes,
  FaUserPlus,
  FaHome,
  FaUsers,
  FaVideo,
  FaTrophy,
  FaTasks,
  FaChartBar,
  FaUser,
  FaCog,
  FaUpload,
  FaSave,
  FaTimesCircle,
  FaSignOutAlt,
  FaSearch
} from "react-icons/fa";
import type { Usuario } from "./mockUsuarios";
import { mockUsuarios } from "./mockUsuarios";

export default function DashUser() {
  const [usuarios, setUsuarios] = useState<Usuario[]>(mockUsuarios);
  const [showForm, setShowForm] = useState(false);
  const [selectedUser, setSelectedUser] = useState<Usuario | null>(null);
  const [formData, setFormData] = useState<Usuario | null>(null);
  const [activeItem, setActiveItem] = useState("Usuarios");

  const handleOpenForm = (user?: Usuario) => {
    setFormData(
      user || {
        id: 0,
        nombre: "",
        apellidoPaterno: "",
        apellidoMaterno: "",
        usuario: "",
        rol: "",
        correo: "",
        direccion: "",
        telefono: "",
        sexo: "",
        nacimiento: ""
      }
    );
    setSelectedUser(user || null);
    setShowForm(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (formData) {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSave = () => {
    if (!formData) return;
    setUsuarios((prev) => {
      const exists = prev.find((u) => u.id === formData.id);
      if (exists) {
        return prev.map((u) => (u.id === formData.id ? formData : u));
      }
      return [...prev, { ...formData, id: prev.length + 1 }];
    });
    setShowForm(false);
    setFormData(null);
    setSelectedUser(null);
  };

  const handleDelete = (user: Usuario) => {
    setUsuarios((prev) => prev.filter((u) => u.id !== user.id));
  };

  const sidebarItems = [
    { icon: <FaHome />, label: "Dashboard" },
    { icon: <FaUsers />, label: "Usuarios" },
    { icon: <FaVideo />, label: "Videos" },
    { icon: <FaTrophy />, label: "Ranking" },
    { icon: <FaTasks />, label: "Actividades" },
    { icon: <FaChartBar />, label: "Inscripciones" },
    { icon: <FaUser />, label: "Perfil" },
    { icon: <FaCog />, label: "Ajustes" }
  ];

  return (
    <div className="flex min-h-screen bg-gray-100 text-sm">
      <aside className="w-64 bg-white shadow-md px-6 py-8 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold text-red-600 mb-10">UcvDeportes</h1>
          <nav className="space-y-4">
            {sidebarItems.map(({ icon, label }) => (
              <div
                key={label}
                className={`flex items-center gap-2 px-3 py-2 rounded cursor-pointer ${
                  activeItem === label ? "bg-red-100 text-red-600 font-semibold" : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setActiveItem(label)}
              >
                {icon} <span>{label}</span>
              </div>
            ))}
          </nav>
        </div>
        <div
          className={`flex items-center gap-2 px-3 py-2 rounded cursor-pointer ${
            activeItem === "Cerrar Sesión" ? "bg-red-100 text-red-600 font-semibold" : "text-gray-700 hover:bg-gray-100"
          }`}
          onClick={() => setActiveItem("Cerrar Sesión")}
        >
          <FaSignOutAlt /> <span>Cerrar Sesión</span>
        </div>
      </aside>

      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <div className="relative w-1/2">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-[var(--color-blue-900)]"
            />
          </div>
          <div className="flex items-center gap-4 p-2 bg-white rounded-xl border border-gray-300">
            <div className="text-left">
              <p className="font-semibold">ADMINNNN</p>
              <p className="text-xs text-gray-500">adminnn@gmail.com</p>
            </div>
            <div className="w-10 h-10 bg-gray-300 rounded-full" />
          </div>
        </div>

        <div className="text-xl text-gray-600 mb-4">
          <span className="text-gray-900 font-bold">Dashboard</span>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-red-600 font-semibold">{activeItem}</span>
        </div>

        <div className="flex justify-start w-full mb-4">
          <div className="ml-0">
            <button
              onClick={() => handleOpenForm()}
              className="bg-[var(--color-blue-900)] text-white px-4 py-2 rounded hover:bg-blue-800 flex items-center gap-2"
            >
              <FaUserPlus /> Agregar Usuario
            </button>
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl shadow bg-white">
          <table className="w-full table-auto">
            <thead className="bg-gray-50 text-left text-gray-500 text-sm border-b border-gray-200">
              <tr>
                <th className="px-4 py-2 font-medium">ID</th>
                <th className="px-4 py-2 font-medium">Nombre</th>
                <th className="px-4 py-2 font-medium">Apellido Paterno</th>
                <th className="px-4 py-2 font-medium">Apellido Materno</th>
                <th className="px-4 py-2 font-medium">Usuario</th>
                <th className="px-4 py-2 font-medium">Rol</th>
                <th className="px-4 py-2 font-medium text-center">Más</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {usuarios.map((user) => (
                <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-4 py-2">{user.id}</td>
                  <td className="px-4 py-2">{user.nombre}</td>
                  <td className="px-4 py-2">{user.apellidoPaterno}</td>
                  <td className="px-4 py-2">{user.apellidoMaterno}</td>
                  <td className="px-4 py-2">{user.usuario || "-"}</td>
                  <td className="px-4 py-2">{user.rol || "-"}</td>
                  <td className="px-4 py-2 text-center space-x-2">
                    <button onClick={() => handleOpenForm(user)} className="text-blue-600 hover:text-blue-800">
                      <FaUserEdit />
                    </button>
                    <button onClick={() => handleDelete(user)} className="text-red-600 hover:text-red-800">
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {showForm && (
        <aside className="w-96 p-6 bg-white relative">
          <button
            onClick={() => setShowForm(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-red-600"
          >
            <FaTimes />
          </button>
          <h3 className="text-lg font-semibold text-center mb-6">Detalles de Usuario</h3>
          <div className="flex justify-center mb-4">
            <label htmlFor="foto" className="relative cursor-pointer">
              <input type="file" id="foto" className="hidden" accept="image/*" />
              <div className="w-24 h-24 rounded-full bg-gray-300" />
              <span className="absolute bottom-0 right-0 text-xs bg-white px-2 py-0.5 rounded shadow text-gray-600 flex items-center gap-1">
                <FaUpload /> Subir
              </span>
            </label>
          </div>
          {formData && (
            <form className="space-y-3">
              <input name="nombre" type="text" placeholder="Ingresa el nombre" value={formData.nombre} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md shadow-sm" />
              <input name="apellidoPaterno" type="text" placeholder="Ingresa el apellido paterno" value={formData.apellidoPaterno} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md shadow-sm" />
              <input name="apellidoMaterno" type="text" placeholder="Ingresa el apellido materno" value={formData.apellidoMaterno} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md shadow-sm" />
              <input name="nacimiento" type="date" placeholder="Fecha de nacimiento" value={formData.nacimiento} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md shadow-sm" />
              <select name="sexo" value={formData.sexo} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md shadow-sm">
                <option value="">Selecciona tu sexo</option>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
              </select>
              <input name="correo" type="email" placeholder="Ingresa el correo" value={formData.correo} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md shadow-sm" />
              <input name="direccion" type="text" placeholder="Ingresa el campus" value={formData.direccion} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md shadow-sm" />
              <input name="telefono" type="text" placeholder="Número de celular" value={formData.telefono} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md shadow-sm" />
              <div className="flex justify-end gap-2 pt-2">
                <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2 bg-gray-300 rounded flex items-center gap-2">
                  <FaTimesCircle /> Cancelar
                </button>
                <button type="button" onClick={handleSave} className="px-4 py-2 bg-blue-900 text-white rounded flex items-center gap-2">
                  <FaSave /> Guardar Cambios
                </button>
              </div>
            </form>
          )}
        </aside>
      )}
    </div>
  );
}
