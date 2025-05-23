import React from 'react';
import './App.css'


const LoginInfoSection = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <section className="w-full max-w-xl bg-white rounded-lg shadow-md p-8">
        {/* Header */}
        <h2 className="text-xl font-semibold text-center border-b pb-2 mb-4">Información Login</h2>
        
        {/* Header con Ranking, Foto de Perfil y Subir Imagen */}
        <div className="flex justify-between items-center mb-8">
          {/* Ranking */}
          <div className="text-center px-8">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zm6-4a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zm6-3a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
                <p className="font-bold">#1</p>
              </div>
              <p className="text-sm text-gray-600">Ranking</p>
            </div>
          </div>

          {/* Foto de Perfil */}
          <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>

          {/* Subir Imagen */}
          <div className="text-center px-8">
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
              <p className="text-sm text-gray-600">Subir Imagen</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full mb-6">
          <h2 className="text-3xl font-bold text-gray-800">AMendozaA</h2>
        </div>

        {/* Tabs */}
        <div className="w-full mb-6">
          <ul className="flex border-b w-full">
            <li className="flex-1 mr-2">
              <a 
                href="#"
                className="text-center block py-2 text-gray-500 hover:text-blue-600"
              >
                Usuario
              </a>
            </li>
            <li className="flex-1">
              <a 
                href="#"
                className="text-center block py-2 text-blue-600 border-b-2 border-blue-600 font-medium"
              >
                Contraseña
              </a>
            </li>
          </ul>
        </div>

        {/* Contenido de Pestaña: Cambiar Contraseña */}
        <div className="w-full">
          <h3 className="text-lg font-medium mb-4">Cambiar Contraseña</h3>
          <div className="space-y-4">
            <div>
              <label htmlFor="newPass" className="block text-gray-700 mb-2">Nueva Contraseña</label>
              <input
                id="newPass"
                type="password"
                name="new_password"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="veriPass" className="block text-gray-700 mb-2">Confirmar Contraseña</label>
              <input
                id="veriPass"
                type="password"
                name="confirm_password"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <button 
              id="btnPassUpdate"
              className="w-full py-3 bg-blue-900 text-white font-medium rounded-md hover:bg-blue-800 transition-colors"
            >
              GUARDAR CAMBIOS
            </button>
          </div>
        </div>

        {/* Contenido de Pestaña: Cambiar Usuario (oculto) */}
        <div className="w-full hidden">
          <h3 className="text-lg font-medium mb-4">Cambiar Usuario</h3>
          <div className="space-y-4">
            <div>
              <label htmlFor="userCli" className="block text-gray-700 mb-2">Usuario</label>
              <input
                id="userCli"
                type="text"
                name="username"
                placeholder="Usuario"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <button 
              id="btnUsernameUpdate"
              className="w-full py-3 bg-blue-900 text-white font-medium rounded-md hover:bg-blue-800 transition-colors"
            >
              GUARDAR CAMBIOS
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginInfoSection;