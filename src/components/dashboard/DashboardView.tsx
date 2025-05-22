import { Video, Users, BarChart2, FileText, Plus } from "lucide-react"

export default function DashboardView() {




  return (



    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
    
      <div className="md:col-span-3 space-y-4">



{/* aqui ta el div  de aceso rapido */}
        <div className="bg-white p-6 rounded-xl border border-red-800">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">Acceso Rápido</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">


         
            <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center">
              <div className="bg-green-100 p-2 rounded-lg mb-2">
                <Video className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="font-medium text-gray-900">Videos</h3>
              <p className="text-sm text-gray-500">Total: 24</p>
            </div>

          
            <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center">
              <div className="bg-blue-100 p-2 rounded-lg mb-2">
                <Users className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="font-medium text-gray-900">Usuarios</h3>
              <p className="text-sm text-gray-500">Total: 156</p>
            </div>

         
            <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center">
              <div className="bg-yellow-100 p-2 rounded-lg mb-2">
                <BarChart2 className="h-6 w-6 text-yellow-500" />
              </div>
              <h3 className="font-medium text-gray-900">Ranking</h3>
              <p className="text-sm text-gray-500">Mejor: Juan Pérez</p>
            </div>

          
            <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center">
              <div className="bg-blue-100 p-2 rounded-lg mb-2">
                <FileText className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="font-medium text-gray-900">Inscripciones</h3>
              <p className="text-sm text-gray-500">Total: 42</p>
            </div>
          </div>
        </div>
{/* aaaaaaa  */}









{/* a actividades recientes xd */}
        <div className="bg-white p-6 rounded-xl border border-red-800">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">Actividad Reciente</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Título
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Likes/Nombres
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Estado
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td colSpan={3} className="px-6 py-10 text-center text-sm text-gray-500">
                    No hay actividad reciente 
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
{/* aaaaaaa  */}



     
      <div className="space-y-4">


{/* aqui esta el procentaje ese xd */}
        <div className="bg-white p-6 rounded-xl border border-red-800">
          <div className="flex justify-center">
            <div className="relative h-32 w-32">
              <svg className="h-full w-full" viewBox="0 0 36 36">
                <circle cx="18" cy="18" r="16" fill="none" stroke="#e6e6e6" strokeWidth="2"></circle>
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  strokeDasharray="100"
                  strokeDashoffset="50"
                  transform="rotate(-90 18 18)"
                ></circle>
                <text x="18" y="20" textAnchor="middle" fill="#3b82f6" fontSize="8" fontWeight="bold">
                  50%
                </text>
              </svg>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              <span className="font-medium">2</span> registros aprobados / <span className="font-medium">4</span>{" "}
              inscripciones
            </p>
          </div>
        </div>
{/* aaaaaa */}





       
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg flex items-center justify-center">
          <span>Nuevo Video</span>
          <Plus className="ml-2 h-5 w-5" />
        </button>

      

      
        <div className="bg-white p-6 rounded-xl border border-red-800">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">Nuevos Usuarios</h2>
          <p className="text-sm text-gray-500">No hay  usuarios</p>
        </div>





      </div>
    </div>
  )
}
