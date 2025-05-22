export default function Reportes() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-700">Reportes</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-3 bg-white p-6 rounded-xl border border-red-800">
          <h3 className="font-medium mb-4">Opciones de Reporte</h3>
          <p className="text-sm text-gray-500 mb-4">
            Selecciona el módulo que quieres generar un reporte y personaliza las opciones
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <div className="space-y-4 border border-gray-200 rounded-lg p-4">
              <div>
                <label className="block text-sm text-gray-500 mb-1">Módulo</label>
                <select className="w-full p-2 border border-gray-300 rounded-md">
                  <option>Usuarios</option>
                  <option>Videos</option>
                  <option>Inscripciones</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-500 mb-1">Formato</label>
                <select className="w-full p-2 border border-gray-300 rounded-md">
                  <option>PDF</option>
                  <option>Excel</option>
                  <option>CSV</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Fecha de Inicio</label>
                  <input
                    type="date"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    defaultValue="2024-06-01"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Fecha Final</label>
                  <input
                    type="date"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    defaultValue="2024-07-31"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Ordenar por:</label>
                  <select className="w-full p-2 border border-gray-300 rounded-md">
                    <option>Nombre de Usuario</option>
                    <option>Fecha</option>
                    <option>ID</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Orden:</label>
                  <select className="w-full p-2 border border-gray-300 rounded-md">
                    <option>Ascendente</option>
                    <option>Descendente</option>
                  </select>
                </div>
              </div>

              <div className="flex space-x-2 pt-2">
                <button className="flex-1 py-2 px-4 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">
                  Previsualizar
                </button>
                <button className="flex-1 py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Generar reporte
                </button>
              </div>
            </div>

        




            <div className="md:col-span-2 border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium mb-3">Previsualización</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        ID
                      </th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Nombre
                      </th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Apellido Paterno
                      </th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Apellido Materno
                      </th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Sexo
                      </th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Username
                      </th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Fecha Nacimiento
                      </th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Campus
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">2</td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-900">Alejandro</td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">Mendoza</td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">Alvarez</td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">M</td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">AMendozaA</td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">alexmendoza@gmail.com</td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">2000-04-15</td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">Trujillo</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">4</td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-900">José</td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">Saavedra</td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">Vega</td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">M</td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">JSaavedraV</td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">saavedra@gmail.com</td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">1998-03-13</td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">Huaraz</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">1</td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-900">Leonardo</td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">Mendoza</td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">Alvarez</td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">M</td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">LMendozaA</td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">contactosadmin@gmail.com</td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">2003-12-02</td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">Los Olivos</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">3</td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-900">test</td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">test</td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">test</td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">M</td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">ttest1</td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">test@gmail.com</td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">2003-02-01</td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">Los Olivos</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

 


 
        <div className="md:col-span-1 bg-white p-6 rounded-xl border border-red-800">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Historial</h3>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium mb-2">Reporte Generado:</h4>
              <p className="text-sm font-medium">Inscripciones</p>

              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Fecha</span>
                  <span>24/07/2024</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Formato</span>
                  <span>PDF</span>
                </div>
                <div className="flex justify-center mt-4">
                  <button className="px-3 py-1 bg-blue-100 text-blue-600 rounded-md mx-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <button className="px-3 py-1 bg-blue-100 text-blue-600 rounded-md mx-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path
                        fillRule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
