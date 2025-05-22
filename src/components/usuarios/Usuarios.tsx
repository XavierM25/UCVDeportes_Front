"use client"

import { useState } from "react"
import { Edit, Trash2, Plus, User } from "lucide-react"


type Usuario = {
  id: number
  nombre: string
  apellidoPaterno: string
  apellidoMaterno: string
  usuario: string
  rol: string
  carrera?: string
}

export default function Usuarios() {

  const usuarios: Usuario[] = [
    {
      id: 1,
      nombre: "Leonardo",
      apellidoPaterno: "Mendoza",
      apellidoMaterno: "Alvarez",
      usuario: "LMendozaA",
      rol: "Administrador",
      carrera: "Ingeniería de Sistemas",
    },
    {
      id: 2,
      nombre: "Alejandro",
      apellidoPaterno: "Mendoza",
      apellidoMaterno: "Alvarez",
      usuario: "AMendozaA",
      rol: "Cliente",
      carrera: "Administración y Marketing",
    },
    {
      id: 3,
      nombre: "test",
      apellidoPaterno: "test",
      apellidoMaterno: "test",
      usuario: "ttest1",
      rol: "Cliente",
      carrera: "Contabilidad",
    },
    {
      id: 4,
      nombre: "José",
      apellidoPaterno: "Saavedra",
      apellidoMaterno: "Vega",
      usuario: "JSaavedraV",
      rol: "Cliente",
      carrera: "Contabilidad",
    },
  ]

  const [selectedUser, setSelectedUser] = useState<Usuario | null>(null)

  const handleSelectUser = (user: Usuario) => {
    setSelectedUser(user)
  }

  return (




    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">



      <div className="md:col-span-3 space-y-4">
        <div className="bg-white p-6 rounded-xl border border-red-800">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-700">Administrar Usuarios</h2>
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg flex items-center">
              <span>Agregar Nuevo Usuario</span>
              <Plus className="ml-2 h-5 w-5" />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Nombre
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Apellido Paterno
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Apellido Materno
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Usuario
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Rol
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Más
                  </th>
                </tr>
              </thead>


              <tbody className="bg-white divide-y divide-gray-200">
                {usuarios.map((usuario) => (
                  <tr
                    key={usuario.id}
                    onClick={() => handleSelectUser(usuario)}
                    className="hover:bg-gray-50 cursor-pointer"
                  >
                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{usuario.id}</td>
                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-900">{usuario.nombre}</td>
                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{usuario.apellidoPaterno}</td>
                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{usuario.apellidoMaterno}</td>
                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{usuario.usuario}</td>
                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{usuario.rol}</td>
                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500 flex space-x-2">
                      <button className="bg-blue-100 p-1 rounded-md text-blue-600 hover:bg-blue-200">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="bg-red-100 p-1 rounded-md text-red-600 hover:bg-red-200">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>







  
      <div className="space-y-4">
        <div className="bg-white p-6 rounded-xl border border-red-800">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">Detalles de Usuario</h2>
          {selectedUser ? (
            <div className="space-y-4">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mb-2 flex items-center justify-center">
                  <User className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold">{selectedUser.usuario}</h3>
                <p className="text-sm text-gray-500">Ingeniería de Sistemas</p>
              </div>

              <div className="space-y-3 mt-6">
                <div>
                  <label className="block text-xs text-gray-500">Nombre</label>
                  <input type="text" value={selectedUser.nombre} className="w-full p-2 bg-gray-100 rounded-md mt-1" />
                </div>
                <div>
                  <label className="block text-xs text-gray-500">Apellido Paterno</label>
                  <input
                    type="text"
                    value={selectedUser.apellidoPaterno}
                    className="w-full p-2 bg-gray-100 rounded-md mt-1"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500">Apellido Materno</label>
                  <input
                    type="text"
                    value={selectedUser.apellidoMaterno}
                    className="w-full p-2 bg-gray-100 rounded-md mt-1"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500">Fecha de Nacimiento</label>
                  <input type="text" defaultValue="12/02/2001" className="w-full p-2 bg-gray-100 rounded-md mt-1" />
                </div>
                <div>
                  <label className="block text-xs text-gray-500">Sexo</label>
                  <select className="w-full p-2 bg-gray-100 rounded-md mt-1">
                    <option>Masculino</option>
                    <option>Femenino</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-gray-500">Email</label>
                  <input
                    type="email"
                    defaultValue="contacto@gmail.com"
                    className="w-full p-2 bg-gray-100 rounded-md mt-1"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500">Campus</label>
                  <select className="w-full p-2 bg-gray-100 rounded-md mt-1">
                    <option>Los Olivos</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-gray-500">Número de Celular</label>
                  <input type="text" defaultValue="932154422" className="w-full p-2 bg-gray-100 rounded-md mt-1" />
                </div>
              </div>

              <div className="flex space-x-2 pt-4">
                <button className="flex-1 py-2 px-4 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">
                  Cancelar
                </button>
                <button className="flex-1 py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Guardar Cambios
                </button>
              </div>
            </div>
          ) : (
            <p className="text-gray-500 text-center py-8">Selecciona un usuario para ver sus detalles</p>
          )}
        </div>
      </div>
    </div>
  )
}
