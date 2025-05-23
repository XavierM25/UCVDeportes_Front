import React from "react";
import './App.css'

const MiPerfil = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Mi Perfil</h1>
        
        <div className="space-y-4">
          {}
          <div>
            <label htmlFor="nomCli" className="block text-sm font-medium text-gray-700 mb-1">
              Nombre
            </label>
            <input
              id="nomCli"
              type="text"
              name="nombre"
              defaultValue=""
              className="w-full p-2 bg-gray-200 border border-gray-300 rounded-md text-gray-800"
            />
          </div>

          {}
          <div>
            <label htmlFor="apePaCli" className="block text-sm font-medium text-gray-700 mb-1">
              Apellido Paterno
            </label>
            <input
              id="apePaCli"
              type="text"
              name="apellido_paterno"
              defaultValue=""
              className="w-full p-2 bg-gray-200 border border-gray-300 rounded-md text-gray-800"
            />
          </div>

          {}
          <div>
            <label htmlFor="apeMaCli" className="block text-sm font-medium text-gray-700 mb-1">
              Apellido Materno
            </label>
            <input
              id="apeMaCli"
              type="text"
              name="apellido_materno"
              defaultValue=""
              className="w-full p-2 bg-gray-200 border border-gray-300 rounded-md text-gray-800"
            />
          </div>

          {}
          <div>
            <label htmlFor="fechCli" className="block text-sm font-medium text-gray-700 mb-1">
              Fecha de Nacimiento
            </label>
            <div className="relative">
              <input
                id="fechCli"
                type="text"
                name="fecha_nacimiento"
                defaultValue=""
                className="w-full p-2 bg-gray-200 border border-gray-300 rounded-md text-gray-800"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>

          {}
          <div>
            <label htmlFor="mailCli" className="block text-sm font-medium text-gray-700 mb-1">
              Correo electrónico
            </label>
            <input
              id="mailCli"
              type="email"
              name="email"
              defaultValue=""
              className="w-full p-2 bg-gray-200 border border-gray-300 rounded-md text-gray-800"
            />
          </div>

          {}
          <div>
            <label htmlFor="carreCli" className="block text-sm font-medium text-gray-700 mb-1">
              Carrera Profesional
            </label>
            <select
              id="carreCli"
              name="carrera"
              defaultValue="Administración y Marketing"
              className="w-full p-2 bg-gray-200 border border-gray-300 rounded-md text-gray-800 appearance-none"
            >
              <option value="Administración y Marketing">Administración y Marketing</option>
              <option value="Administración y Negocios Internacionales">Administración y Negocios Internacionales</option>
              <option value="Administración">Administración</option>
              <option value="Administración en Turismo y Hotelería">Administración en Turismo y Hotelería</option>
              <option value="Contabilidad">Contabilidad</option>
              <option value="Economía">Economía</option>
              <option value="Gestión Pública">Gestión Pública</option>
              <option value="Artes & Diseño Gráfico Empresarial">Artes & Diseño Gráfico Empresarial</option>
              <option value="Ciencias de la Comunicación">Ciencias de la Comunicación</option>
              <option value="Ciencias del Deporte">Ciencias del Deporte</option>
              <option value="Derecho">Derecho</option>
              <option value="Educación Inicial">Educación Inicial</option>
              <option value="Educación Primaria">Educación Primaria</option>
              <option value="Traducción e Interpretación">Traducción e Interpretación</option>
              <option value="Arquitectura">Arquitectura</option>
              <option value="Ingeniería de Ciberseguridad">Ingeniería de Ciberseguridad</option>
              <option value="Ingeniería en Ciencia de Datos">Ingeniería en Ciencia de Datos</option>
              <option value="Ingeniería Empresarial">Ingeniería Empresarial</option>
              <option value="Ingeniería Agroindustrial">Ingeniería Agroindustrial</option>
              <option value="Ingeniería Ambiental">Ingeniería Ambiental</option>
              <option value="Ingeniería Civil">Ingeniería Civil</option>
              <option value="Ingeniería de Minas">Ingeniería de Minas</option>
              <option value="Ingeniería de Sistemas">Ingeniería de Sistemas</option>
              <option value="Ingeniería Industrial">Ingeniería Industrial</option>
              <option value="Ingeniería Mecánica Eléctrica">Ingeniería Mecánica Eléctrica</option>
              <option value="Enfermería">Enfermería</option>
              <option value="Estomatología">Estomatología</option>
              <option value="Medicina">Medicina</option>
              <option value="Nutrición">Nutrición</option>
              <option value="Psicología">Psicología</option>
              <option value="Tecnología Médica">Tecnología Médica</option>
            </select>
          </div>

          {}
          <div>
            <label htmlFor="campuCli" className="block text-sm font-medium text-gray-700 mb-1">
              Campus
            </label>
            <select
              id="campuCli"
              name="campus"
              defaultValue="Trujillo"
              className="w-full p-2 bg-gray-200 border border-gray-300 rounded-md text-gray-800 appearance-none"
            >
              <option value="Los Olivos">Los Olivos</option>
              <option value="Trujillo">Trujillo</option>
              <option value="Ate">Ate</option>
              <option value="Callao">Callao</option>
              <option value="San Juan de Lurigancho">San Juan de Lurigancho</option>
              <option value="Chiclayo">Chiclayo</option>
              <option value="Chimbote">Chimbote</option>
              <option value="Piura">Piura</option>
              <option value="Tarapoto">Tarapoto</option>
              <option value="Chepén">Chepén</option>
              <option value="Huaraz">Huaraz</option>
              <option value="Moyobamba">Moyobamba</option>
            </select>
          </div>

          {}
          <div>
            <label htmlFor="celCli" className="block text-sm font-medium text-gray-700 mb-1">
              Celular
            </label>
            <input
              id="celCli"
              type="text"
              name="numero_telefono"
              defaultValue=""
              className="w-full p-2 bg-gray-200 border border-gray-300 rounded-md text-gray-800"
            />
          </div>

          {}
          <div className="flex justify-between pt-4">
            <button 
              type="button" 
              className="border border-gray-300 bg-white text-gray-700 py-2 px-6 rounded-md hover:bg-gray-100"
            >
              VOLVER
            </button>
            <button 
              type="button" 
              className="bg-blue-900 text-white py-2 px-6 rounded-md hover:bg-blue-800"
            >
              GUARDAR CAMBIOS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiPerfil;