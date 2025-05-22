"use client"

import { useState } from "react"


type Habilidad = {
  id: number
  seleccionado: boolean
  nombre: string
  carrera: string
  categoria: string
  subcategoria: string
  puntos: number | string
  estado: string
}

export default function Habilidades() {

  const [selectedHabilidad, setSelectedHabilidad] = useState<Habilidad | null>(null)
  const [editMode, setEditMode] = useState(false)

  
  const habilidades: Habilidad[] = [
    {
      id: 1,
      seleccionado: true,
      nombre: "gatomontes",
      carrera: "Ingeniería de Sistemas",
      categoria: "Cultura y Eventos",
      subcategoria: "arañar",
      puntos: 1200,
      estado: "Estudiante Destacado",
    },
    {
      id: 2,
      seleccionado: false,
      nombre: "Alex",
      carrera: "Ingeniería de Sistemas",
      categoria: "Talleres",
      subcategoria: "Judo",
      puntos: 1100,
      estado: "Estudiante Destacado",
    },
    {
      id: 3,
      seleccionado: false,
      nombre: "test",
      carrera: "Contabilidad",
      categoria: "Deportes",
      subcategoria: "Volleyball",
      puntos: 500,
      estado: "Estudiante Destacado",
    },
    {
      id: 4,
      seleccionado: false,
      nombre: "José",
      carrera: "Contabilidad",
      categoria: "N/A",
      subcategoria: "N/A",
      puntos: "N/A",
      estado: "N/A",
    },
  ]

  // seleccionar una habilidad
  const handleSelectHabilidad = (habilidad: Habilidad) => {
    setSelectedHabilidad(habilidad)
    setEditMode(false)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">



{/* admin de habilidades */}
      <div className="md:col-span-3 space-y-4">
        <div className="bg-white p-6 rounded-xl border border-red-800">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-700">Administrar Habilidades</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Seleccionar
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nombre
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Carrera
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Categoría
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Subcategoría
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Puntos
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Estado
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {habilidades.map((habilidad) => (
                  <tr
                    key={habilidad.id}
                    onClick={() => handleSelectHabilidad(habilidad)}
                    className="hover:bg-gray-50 cursor-pointer"
                  >
                    <td className="px-3 py-4 whitespace-nowrap">
                      <input
                        type="checkbox"
                        checked={habilidad.seleccionado}
                        onChange={() => {}}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-900">{habilidad.nombre}</td>
                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{habilidad.carrera}</td>
                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{habilidad.categoria}</td>
                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{habilidad.subcategoria}</td>
                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{habilidad.puntos}</td>
                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{habilidad.estado}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>





{/* asignar las categorias :0 */}
      <div className="space-y-4">
        <div className="bg-white p-6 rounded-xl border border-red-800">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">Asignar Categoría</h2>
          {selectedHabilidad ? (
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-500 mb-1">Usuario</label>
                <input
                  type="text"
                  value={selectedHabilidad.nombre}
                  readOnly
                  className="w-full p-2 bg-gray-100 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">Categoría</label>
                <select className="w-full p-2 bg-gray-100 rounded-md" defaultValue={selectedHabilidad.categoria}>
                  <option>Cultura y Eventos</option>
                  <option>Deportes</option>
                  <option>Talleres</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">Subcategoría</label>
                <select className="w-full p-2 bg-gray-100 rounded-md" defaultValue={selectedHabilidad.subcategoria}>
                  <option>Concurso</option>
                  <option>Baile</option>
                  <option>Volleyball</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">Puntos</label>
                <input
                  type="number"
                  defaultValue={selectedHabilidad.puntos === "N/A" ? 0 : selectedHabilidad.puntos}
                  className="w-full p-2 bg-gray-100 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">Estado</label>
                <select className="w-full p-2 bg-gray-100 rounded-md" defaultValue={selectedHabilidad.estado}>
                  <option>Estudiante Destacado</option>
                  <option>Estudiante Regular</option>
                  <option>Inactivo</option>
                </select>
              </div>
              <div className="flex space-x-2 pt-4">
                <button className="flex-1 py-2 px-4 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">
                  Cancelar
                </button>
                <button className="flex-1 py-2 px-4 bg-black text-white rounded-md hover:bg-gray-800">Editar</button>
              </div>
            </div>
          ) : (
            <p className="text-gray-500 text-center py-8">Selecciona un usuario para asignar categoría</p>
          )}
        </div>

        <div className="bg-white p-6 rounded-xl border border-red-800">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">Funciones Adicionales</h2>
          <button className="w-full py-2 px-4 bg-black text-white rounded-md hover:bg-gray-800">Restablecer</button>
        </div>
      </div>
    </div>
  )
}
