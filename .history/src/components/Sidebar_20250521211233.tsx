import { FaHome, FaUser, FaTrophy, FaClipboardList, FaCog, FaSignOutAlt } from 'react-icons/fa';

export default function Sidebar({ onSelect }: { onSelect: (view: string) => void }) {
  return (
    <aside className="w-64 bg-white shadow-md px-6 py-8 flex flex-col justify-between">
      <div className="space-y-6">
        <div className="text-red-600 font-bold text-lg mb-4 cursor-pointer" onClick={() => onSelect('dashboard')}>
          Dashboard
        </div>
        <nav className="space-y-4 text-sm">
          <div
            className="flex items-center gap-3 text-red-600 font-semibold cursor-pointer"
            onClick={() => onSelect('dashboard')}
          >
            <FaHome /> Dashboard
          </div>
          <div
            className="flex items-center gap-3 text-gray-600 hover:text-red-500 cursor-pointer"
            onClick={() => onSelect('perfil')}
          >
            <FaUser /> Mi Perfil
          </div>
          <div
            className="flex items-center gap-3 text-gray-600 hover:text-red-500 cursor-pointer"
            onClick={() => onSelect('ranking')}
          >
            <FaTrophy /> Ranking
          </div>
          <div
            className="flex items-center gap-3 text-gray-600 hover:text-red-500 cursor-pointer"
            onClick={() => onSelect('inscripciones')}
          >
            <FaClipboardList /> Inscripciones
          </div>
          <div
            className="flex items-center gap-3 text-gray-600 hover:text-red-500 cursor-pointer"
            onClick={() => onSelect('ajustes')}
          >
            <FaCog /> Ajustes
          </div>
        </nav>
      </div>
      <div
        className="flex items-center gap-3 text-gray-600 hover:text-red-500 cursor-pointer"
        onClick={() => alert('Cerrar sesión')}
      >
        <FaSignOutAlt /> Cerrar Sesión
      </div>
    </aside>
  );
}
