import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"

export default function LoginForm({ onSwitchToRegister }: { onSwitchToRegister: () => void }) {
  const [showPassword, setShowPassword] = useState(false)
  const togglePassword = () => setShowPassword(!showPassword)

  return (
    <div className="w-full flex flex-col md:flex-row min-h-screen">
      
      <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
        <h1 className="text-3xl font-bold mb-8">Iniciar Sesión</h1>
        <form className="space-y-6">
         
          <div>
            <label htmlFor="usuario" className="text-sm text-gray-600 mb-1 block">Usuario</label>
            <input
              id="usuario"
              type="text"
              placeholder="Usuario"
              className="w-full px-3 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
         
          <div>
            <label htmlFor="contraseña" className="text-sm text-gray-600 mb-1 block">Contraseña</label>
            <div className="relative">
              <input
                id="contraseña"
                type={showPassword ? "text" : "password"}
                placeholder="Contraseña"
                className="w-full px-3 py-2 bg-gray-100 rounded-md pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="button"
                onClick={togglePassword}
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                aria-label="Mostrar/Ocultar contraseña"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-500" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-500" />
                )}
              </button>
            </div>
          </div>
        
          <div className="text-right text-sm">
            <a href="#" className="text-blue-600 hover:underline">¿Olvidaste tu contraseña?</a>
          </div>
       
          <button className="w-full py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md transition-colors">
            INICIAR SESIÓN
          </button>
          
          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={onSwitchToRegister}
              className="text-sm text-blue-600 hover:underline"
            >
              ¿No tienes cuenta? Regístrate
            </button>
          </div>
        </form>
      </div>
     
      <div className="w-full md:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-800 rounded-l-[100px]"></div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-12 text-white">
          <h2 className="text-2xl font-bold mb-4">Hola, Vallejiano!</h2>
          <p className="mb-8">Regístrate con tus datos personales para saber todo sobre Deportes y Cultura UCV</p>
          <button
            onClick={onSwitchToRegister}
            className="px-8 py-2 border-2 border-white text-white rounded-full hover:bg-white hover:text-blue-800 transition-colors"
          >
            REGISTRARSE
          </button>
        </div>
      </div>
    </div>
  )
}