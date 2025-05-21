export default function LoginAdmin() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 rounded-3xl px-4">
      <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-lg w-full max-w-xs sm:max-w-sm text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-black mb-2">Iniciar Sesión</h2>
        <p className="text-xs sm:text-sm text-gray-600 mb-6">Inicia sesión como administrador</p>

        <form className="space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Username"
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-sm sm:text-base"
            />
            <span className="absolute left-3 top-2.5 text-gray-500 text-sm sm:text-base">
              <i className="fas fa-user" />
            </span>
          </div>

          <div className="relative">
            <input
              type="password"
              placeholder="Contraseña"
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-sm sm:text-base"
            />
            <span className="absolute left-3 top-2.5 text-gray-500 text-sm sm:text-base">
              <i className="fas fa-lock" />
            </span>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-md transition duration-300 text-sm sm:text-base"
          >
            INICIAR SESIÓN
          </button>
        </form>

        <div className="mt-4">
          <a href="#" className="text-xs sm:text-sm text-gray-600 hover:underline">
            ¿Olvidaste tu contraseña?
          </a>
        </div>

        <div className="mt-2">
          <a href="#" className="text-xs sm:text-sm text-red-700 font-semibold hover:underline">
            Ingresa como Estudiante
          </a>
        </div>
      </div>
    </div>
  );
}
