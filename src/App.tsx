import { useState, useEffect } from "react"
import { Eye, EyeOff } from "lucide-react"
export default function App() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoginView, setIsLoginView] = useState(true)

  useEffect(() => {
    fetch("http://localhost:3000/api/ping") 
      .then((res) => res.json())
      .then((data) => console.log("✅ Conexión con el backend:", data))
      .catch((err) => console.error("❌ Error al conectar con el backend:", err))
  }, [])



  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
  const toggleView = () => {
    setIsLoginView(!isLoginView)
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-lg overflow-hidden flex">
        {isLoginView ? (
          // Login View
          <>
            <div className="w-1/2 p-12">
              <h1 className="text-3xl font-bold mb-8">Iniciar Sesión</h1>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="usuario" className="text-sm text-gray-600">
                    Usuario
                  </label>
                  <input
                    id="usuario"
                    type="text"
                    placeholder="Usuario"
                    className="w-full px-3 py-2 bg-gray-100 rounded-md"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contraseña" className="text-sm text-gray-600">
                    Contraseña
                  </label>
                  <div className="relative">
                    <input
                      id="contraseña"
                      type={showPassword ? "text" : "password"}
                      placeholder="Contraseña"
                      className="w-full px-3 py-2 bg-gray-100 rounded-md pr-10"
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-500" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-500" />
                      )}
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <a href="#" className="text-sm text-blue-600">
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full py-2 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-colors"
                >
                  INICIAR SESIÓN
                </button>
                <div className="text-center mt-4">
                  <a href="#" className="text-sm text-blue-600">
                    Ingresa como Admin
                  </a>
                </div>
              </form>
            </div>
            <div className="w-1/2 relative overflow-hidden">
              <div className="absolute inset-0 bg-blue-800 rounded-l-[100px]"></div>
              <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-12 text-white">
                <h2 className="text-2xl font-bold mb-4">Hola, Vallejiano!</h2>
                <p className="mb-8">Regístrate con tus datos personales para saber todo sobre Deportes y Cultura UCV</p>
                <button
                  onClick={toggleView}
                  className="px-8 py-2 border-2 border-white text-white rounded-full hover:bg-white hover:text-blue-800 transition-colors"
                >
                  REGISTRARSE
                </button>
              </div>
            </div>
          </>
        ) : (
          // Register View
          <>
            <div className="w-1/2 relative overflow-hidden">
              <div className="absolute inset-0 bg-blue-800 rounded-r-[100px]"></div>
              <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-12 text-white">
                <h2 className="text-2xl font-bold mb-4">Bienvenido de nuevo!</h2>
                <p className="mb-8">Ingresa tus datos personales para saber todo sobre Deportes y Cultura UCV</p>
                <button
                  onClick={toggleView}
                  className="px-8 py-2 border-2 border-white text-white rounded-full hover:bg-white hover:text-blue-800 transition-colors"
                >
                  INICIAR SESIÓN
                </button>
              </div>
            </div>
            <div className="w-1/2 p-12">
              <h1 className="text-3xl font-bold mb-8">Crear Cuenta</h1>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="nombre" className="text-sm text-gray-600">
                    Nombre
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    placeholder="Nombre"
                    className="w-full px-3 py-2 bg-gray-100 rounded-md"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="apellidoPaterno" className="text-sm text-gray-600">
                    Apellido Paterno
                  </label>
                  <input
                    id="apellidoPaterno"
                    type="text"
                    placeholder="Apellido Paterno"
                    className="w-full px-3 py-2 bg-gray-100 rounded-md"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="apellidoMaterno" className="text-sm text-gray-600">
                    Apellido Materno
                  </label>
                  <input
                    id="apellidoMaterno"
                    type="text"
                    placeholder="Apellido Materno"
                    className="w-full px-3 py-2 bg-gray-100 rounded-md"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="w-16 h-12 bg-red-600 text-white rounded-md flex items-center justify-center hover:bg-red-700 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  )
}