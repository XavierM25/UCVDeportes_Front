"use client"

import { useState } from "react"
import { Edit, User } from "lucide-react"


type Inscripcion = {
  id: number
  nombre: string
  email: string
  categoria: string
  subcategoria: string
  fecha: string
  estado: string
  vacante: number
}

export default function Inscripciones() {
 
  const [selectedInscripcion, setSelectedInscripcion] = useState<Inscripcion | null>(null)





  const inscripciones: Inscripcion[] = [
    {
      id: 1,
      nombre: "Alejandro",
      email: "alexmendoza@gmail.com",
      categoria: "Deportes",
      subcategoria: "Fútbol",
      fecha: "24-06-2024",
      estado: "Aprobado",
      vacante: 1,
    },
    {
      id: 2,
      nombre: "Alejandro",
      email: "alexmendoza@gmail.com",
      categoria: "Cultura y Eventos",
      subcategoria: "Concurso",
      fecha: "24-06-2024",
      estado: "Aprobado",
      vacante: 1,
    },
    {
      id: 3,
      nombre: "Alejandro",
      email: "alexmendoza@gmail.com",
      categoria: "Deportes",
      subcategoria: "Basketball",
      fecha: "24-06-2024",
      estado: "Pendiente",
      vacante: 1,
    },
    {
      id: 4,
      nombre: "test",
      email: "test@gmail.com",
      categoria: "Cultura y Eventos",
      subcategoria: "Concurso",
      fecha: "05-07-2024",
      estado: "Pendiente",
      vacante: 2,
    },
  ]









  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">



{/* administrar las incripsiones */}
      <div className="md:col-span-3 space-y-4">
        <div className="bg-white p-6 rounded-xl border border-red-800">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-700">Administrar Inscripciones</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nombre
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Categoría
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Subcategoría
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Fecha
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Estado
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    N° Vacante
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {inscripciones.map((inscripcion) => (
                  <tr
                    key={inscripcion.id}
                    onClick={() => setSelectedInscripcion(inscripcion)}
                    className="hover:bg-gray-50 cursor-pointer"
                  >
                    <td className="px-3 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center">
                          <User className="h-4 w-4 text-gray-500" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{inscripcion.nombre}</div>
                          <div className="text-sm text-gray-500">{inscripcion.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{inscripcion.categoria}</td>
                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{inscripcion.subcategoria}</td>
                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{inscripcion.fecha}</td>
                    <td className="px-3 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          inscripcion.estado === "Aprobado"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {inscripcion.estado}
                      </span>
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{inscripcion.vacante}</td>
                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button className="text-blue-600 hover:text-blue-900">
                        <Edit className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>







{/* Detallitos  */}
      <div className="space-y-4">
        <div className="bg-white p-6 rounded-xl border border-red-800">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">Detalle Inscripción</h2>
          {selectedInscripcion ? (
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">{selectedInscripcion.nombre} N° Vacante:</h3>
                <p className="text-sm text-gray-500">{selectedInscripcion.email}</p>
              </div>

              <div>
                <label className="block text-sm text-gray-500 mb-1">Categoría:</label>
                <select className="w-full p-2 bg-gray-100 rounded-md" defaultValue={selectedInscripcion.categoria}>
                  <option>Deportes</option>
                  <option>Cultura y Eventos</option>
                  <option>Talleres</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-500 mb-1">Subcategoría:</label>
                <select className="w-full p-2 bg-gray-100 rounded-md" defaultValue={selectedInscripcion.subcategoria}>
                  <option>Fútbol</option>
                  <option>Basketball</option>
                  <option>Concurso</option>
                </select>
              </div>

              <div className="flex justify-between">
                <div className="w-1/2 pr-2">
                  <label className="block text-sm text-gray-500 mb-1">Fecha de Registro:</label>
                  <input
                    type="text"
                    defaultValue={selectedInscripcion.fecha}
                    className="w-full p-2 bg-gray-100 rounded-md"
                  />
                </div>
                <div className="w-1/2 pl-2">
                  <label className="block text-sm text-gray-500 mb-1">Estado:</label>
                  <select className="w-full p-2 bg-gray-100 rounded-md" defaultValue={selectedInscripcion.estado}>
                    <option>Pendiente</option>
                    <option>Aprobado</option>
                    <option>Rechazado</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-between">
                <div className="w-1/2 pr-2">
                  <label className="block text-sm text-gray-500 mb-1">Día registrado:</label>
                  <select className="w-full p-2 bg-gray-100 rounded-md">
                    <option>Sábado</option>
                    <option>Domingo</option>
                    <option>Lunes</option>
                  </select>
                </div>
                <div className="w-1/2 pl-2">
                  <label className="block text-sm text-gray-500 mb-1">Horario Registrado:</label>
                  <select className="w-full p-2 bg-gray-100 rounded-md">
                    <option>17:00:00-18:00:00</option>
                    <option>18:00:00-19:00:00</option>
                    <option>19:00:00-20:00:00</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-500 mb-1">Commentarios del Usuario:</label>
                <textarea
                  className="w-full p-2 bg-gray-100 rounded-md"
                  rows={3}
                  defaultValue="Probando text"
                ></textarea>
              </div>

              <div className="flex space-x-2 pt-4">
                <button className="flex-1 py-2 px-4 bg-black text-white rounded-md hover:bg-gray-800">
                  Guardar Cambios
                </button>
                <button className="flex-1 py-2 px-4 bg-white border border-gray-300 text-gray-800 rounded-md hover:bg-gray-100">
                  Eliminar
                </button>
              </div>
            </div>
          ) : (
            <p className="text-gray-500 text-center py-8">Selecciona una inscripción para ver sus detalles</p>
          )}
        </div>
      </div>
    </div>
  )
}
