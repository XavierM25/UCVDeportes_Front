import React, { useState } from 'react';
import { FaArrowLeft, FaEye, FaEyeSlash } from 'react-icons/fa';

const NewPasswordDesign = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-4x1 bg-white rounded-xl shadow-md overflow-hidden p-12">
        {/* Botón Atrás */}
        <button 
          className="flex items-center text-gray-600 mb-3 hover:text-gray-800 transition duration-200"
          onClick={() => window.history.back()}
        >
          <FaArrowLeft className="mr-2" />
          Atrás
        </button>

        <h1 className="text-3xl font-bold text-gray-800 mb-3">Crea una nueva contraseña</h1>
        <p className="text-gray-600 mb-6 text-sm">
          Ingresa una nueva contraseña, esta debe ser diferente a contraseñas anteriores.
        </p>

        <form className="space-y-4">
          {/* Campo Contraseña */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Contraseña
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-1 ">
              Debe tener al menos una mayúscula, una minúscula, un símbolo y tener 5 o más caracteres.
            </p>
          </div>

          {/* Campo Confirmar Contraseña */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
              Confirmar contraseña
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Ambas contraseñas deben coincidir
            </p>
          </div>

          {/* Botón de Recuperación */}
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition duration-200 mt-6"
          >
            Recuperar contraseña
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPasswordDesign;