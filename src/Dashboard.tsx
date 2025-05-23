import {
  FaHome,
  FaUser,
  FaTrophy,
  FaClipboardList,
  FaCog,
  FaSignOutAlt,
  FaHeart,
  FaPlay,
} from "react-icons/fa";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md px-6 py-8 flex flex-col justify-between">
        <div className="space-y-6">
          <div className="text-red-600 font-bold text-lg mb-4 cursor-pointer">
            Dashboard
          </div>
          <nav className="space-y-4 text-sm">
            <div className="flex items-center gap-3 text-red-600 font-semibold cursor-pointer">
              <FaHome /> Dashboard
            </div>
            <div className="flex items-center gap-3 text-gray-600 hover:text-red-500 cursor-pointer">
              <FaUser /> Mi Perfil
            </div>
            <div className="flex items-center gap-3 text-gray-600 hover:text-red-500 cursor-pointer">
              <FaTrophy /> Ranking
            </div>
            <div className="flex items-center gap-3 text-gray-600 hover:text-red-500 cursor-pointer">
              <FaClipboardList /> Inscripciones
            </div>
            <div className="flex items-center gap-3 text-gray-600 hover:text-red-500 cursor-pointer">
              <FaCog /> Ajustes
            </div>
          </nav>
        </div>
        <div className="flex items-center gap-3 text-gray-600 hover:text-red-500 cursor-pointer">
          <FaSignOutAlt /> Cerrar Sesión
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 px-10 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <input
            type="text"
            placeholder="Buscar videos..."
            className="w-1/2 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <div className="flex items-center gap-4">
            <span className="text-sm">Bienvenido, Leonardo</span>
            <div className="w-8 h-8 bg-gray-300 rounded-full" />
          </div>
        </div>

        {/* Video destacado */}
        <div className="mb-6">
          <div className="relative w-full h-48 bg-black rounded-xl shadow-md overflow-hidden cursor-pointer">
            <div className="absolute bottom-0 w-full bg-black/70 text-white px-4 py-2 text-sm">
              El Video Popular de Hoy : <span className="ml-4">👍 0</span>{" "}
              <span className="ml-4">📅 10 ago</span>
            </div>
          </div>
        </div>

        {/* Filtros */}
        <h2 className="text-lg font-semibold mb-2">
          Descubre Deportes y Noticias
        </h2>
        <div className="flex gap-2 mb-4">
          {["Todo", "Deportes", "Cultura y Eventos", "Talleres"].map((cat) => (
            <button
              key={cat}
              className="bg-gray-200 hover:bg-blue-100 text-sm text-gray-800 px-4 py-1 rounded-full cursor-pointer"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Galería de videos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="relative rounded-xl bg-black h-48 shadow-md overflow-hidden cursor-pointer"
            >
              <button className="absolute top-2 right-2 text-white bg-white/40 rounded-full p-2 cursor-pointer">
                <FaHeart />
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* Panel lateral derecho */}
      <aside className="w-80 px-6 py-6">
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Reproduciendo Actualmente</h3>
          <div className="bg-blue-900 text-white p-3 rounded-xl flex justify-between items-center cursor-pointer">
            <div>
              <div className="text-sm font-semibold">Beach at the night</div>
              <div className="text-xs">❤️ Deportes | Basketball</div>
            </div>
            <button className="bg-red-600 rounded-full p-2 cursor-pointer">
              <FaPlay />
            </button>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Ranking | Desempeño</h3>
          <div className="flex items-center gap-4 p-2 bg-white shadow-md rounded-xl cursor-pointer">
            <div className="w-10 h-10 bg-gray-300 rounded-full" />
            <div>
              <div className="font-semibold text-sm">Saavedra Vega Jose</div>
              <div className="text-xs text-gray-500">
                🏅 Estudiante Destacado | Baile
              </div>
            </div>
            <FaHeart className="ml-auto text-black" />
          </div>
        </div>
      </aside>
    </div>
  );
}
