import React from 'react';
import './App.css'

const HabilidadesAdmin = () => {
  return (
    <div className="space-y-8">
      <h3 className="text-xl font-bold border-b pb-2">Administrar Habilidades</h3>

      {/* Tabla de habilidades */}
      <section className="p-5 bg-white rounded-2xl shadow-md overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 text-left">Seleccionar</th>
              <th className="p-3 text-left">Nombre</th>
              <th className="p-3 text-left">Carrera</th>
              <th className="p-3 text-left">Categoría</th>
              <th className="p-3 text-left">Subcategoría</th>
              <th className="p-3 text-left">Puntos</th>
              <th className="p-3 text-left">Estado</th>
            </tr>
          </thead>
          <tbody>
            {/* Aquí van las filas dinámicas */}
          </tbody>
        </table>
      </section>

      {/* Asignar Categoría */}
      <h3 className="text-xl font-bold border-b pb-2">Asignar Categoría</h3>
      <section className="p-5 bg-white rounded-2xl shadow-md space-y-5">
        <div className="flex flex-col">
          <label htmlFor="userSelected" className="font-bold mb-1">Usuario</label>
          <input type="text" id="userSelected" className="p-2 border-2 border-gray-300 rounded-lg w-full" readOnly />
        </div>

        <div className="flex flex-col">
          <label htmlFor="category-select" className="font-bold mb-1">Categoría</label>
          <select id="category-select" className="p-2 border-2 border-gray-300 rounded-lg w-full">
            <option value="-1">Categorías</option>
            <option value="Administración y Marketing">Administración y Marketing</option>
            <option value="Administración y Negocios Internacionales">Administración y Negocios Internacionales</option>
            <option value="Administración">Administración</option>
            <option value="Administración en Turimos y Hotelería">Administración en Turimos y Hotelería</option>
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
            <option value="Estomología">Estomología</option>
            <option value="Medicina">Medicina</option>
            <option value="Nutrición">Nutrición</option>
            <option value="Psicología">Psicología</option>
            <option value="Tecnología Médica">Tecnología Médica</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="subcategory-select" className="font-bold mb-1">Subcategoría</label>
          <select id="subcategory-select" className="p-2 border-2 border-gray-300 rounded-lg w-full">
            <option value="-1">Subcategorías</option>
            <option value="Investigación">Investigación</option>
            <option value="Liderazgo">Liderazgo</option>
            <option value="Innovación">Innovación</option>
            <option value="Responsabilidad Social">Responsabilidad Social</option>
            <option value="Deporte y Cultura">Deporte y Cultura</option>
            <option value="Excelencia Académica">Excelencia Académica</option>
            <option value="Desarrollo Profesional">Desarrollo Profesional</option>
            <option value="Emprendimiento">Emprendimiento</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="points-input" className="font-bold mb-1">Puntos</label>
          <input type="text" id="points-input" className="p-2 border-2 border-gray-300 rounded-lg w-full" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="state-select" className="font-bold mb-1">Estado</label>
          <select id="state-select" className="p-2 border-2 border-gray-300 rounded-lg w-full">
            <option value="Estudiante Destacado">Estudiante Destacado</option>
          </select>
        </div>

        <div className="flex gap-3">
          <button className="w-1/2 bg-zinc-900 text-white p-2 rounded-lg hover:bg-zinc-800">Asignar</button>
          <button className="w-full bg-zinc-900 text-white p-2 rounded-lg hover:bg-zinc-800">Editar</button>
          <button className="w-1/2 bg-white text-zinc-900 border border-zinc-900 p-2 rounded-lg hover:border-zinc-800">Cancelar</button>
        </div>
      </section>

      {/* Funciones Adicionales */}
      <h3 className="text-xl font-bold border-b pb-2">Funciones Adicionales</h3>
      <section className="p-5 bg-white rounded-2xl shadow-md">
        <button className="w-full bg-zinc-900 text-white p-2 rounded-lg hover:bg-zinc-800">Restablecer</button>
      </section>
    </div>
  );
};

export default HabilidadesAdmin;