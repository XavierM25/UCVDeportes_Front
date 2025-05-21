export default function RegisterForm({ onSwitchToLogin }: { onSwitchToLogin: () => void }) {
  return (
    <div className="w-full flex flex-col md:flex-row min-h-screen">
    
      <div className="w-full md:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-800 rounded-r-[100px]"></div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-12 text-white">
          <h2 className="text-2xl font-bold mb-4">Bienvenido de nuevo!</h2>
          <p className="mb-8">Ingresa tus datos personales para saber todo sobre Deportes y Cultura UCV</p>
          <button
            onClick={onSwitchToLogin}
            className="px-8 py-2 border-2 border-white text-white rounded-full hover:bg-white hover:text-blue-800 transition-colors"
          >
            INICIAR SESIÓN
          </button>
        </div>
      </div>
     
      <div className="w-full md:w-1/2 p-12">
        <h1 className="text-3xl font-bold mb-8">Crear Cuenta</h1>
        <form className="space-y-6">
          
          <div>
            <label htmlFor="nombre" className="text-sm text-gray-600 mb-1 block">Nombre</label>
            <input
              id="nombre"
              type="text"
              placeholder="Nombre"
              className="w-full px-3 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label htmlFor="apellidoPaterno" className="text-sm text-gray-600 mb-1 block">Apellido Paterno</label>
            <input
              id="apellidoPaterno"
              type="text"
              placeholder="Apellido Paterno"
              className="w-full px-3 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label htmlFor="apellidoMaterno" className="text-sm text-gray-600 mb-1 block">Apellido Materno</label>
            <input
              id="apellidoMaterno"
              type="text"
              placeholder="Apellido Materno"
              className="w-full px-3 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          
          <div className="flex justify-end">
            <button className="w-16 h-12 bg-red-600 text-white rounded-md flex items-center justify-center hover:bg-red-700 transition-colors">
           
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </form>
     
        <div className="mt-4 text-center">
          <button
            onClick={onSwitchToLogin}
            className="text-sm text-blue-600 hover:underline"
          >
            ¿Ya tienes cuenta? Inicia sesión
          </button>
        </div>
      </div>
    </div>
  )
}