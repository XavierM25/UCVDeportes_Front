import {
  Home,
  Users,
  Video,
  BarChart2,
  Activity,
  FileText,
  FileSpreadsheet,
  User,
  Settings,
  LogOut,
} from "lucide-react"

interface SidebarProps {
  isSidebarOpen: boolean
  activeView: string
  setActiveView: (view: string) => void
}

export default function Sidebar({ isSidebarOpen, activeView, setActiveView }: SidebarProps) {
  return (
    <div
      className={`${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } fixed inset-y-0 left-0 z-30 w-64 bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out md:translate-x-0 ${
        isSidebarOpen ? "md:relative" : "md:w-20 md:translate-x-0 md:relative"
      }`}>
      <div className="h-full flex flex-col">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className={`text-xl font-bold text-gray-800 ${!isSidebarOpen && "md:hidden"}`}>Menu</h2>
          {!isSidebarOpen && <Home className="h-6 w-6 text-gray-800 hidden md:block mx-auto" />}
        </div>



        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1">
            <li>
              <button
                onClick={() => setActiveView("dashboard")}
                className={`flex items-center px-4 py-2 w-full text-left ${
                  activeView === "dashboard" ? "text-blue-600 bg-gray-100" : "text-gray-700 hover:bg-gray-100"
                } rounded-lg`}
              >
                <Home className={`h-5 w-5 mr-3 ${activeView === "dashboard" ? "text-blue-600" : "text-gray-500"}`} />
                <span className={`${!isSidebarOpen && "md:hidden"}`}>Dashboard</span>
              </button>
            </li>


            <li>
              <button
                onClick={() => setActiveView("usuarios")}
                className={`flex items-center px-4 py-2 w-full text-left ${
                  activeView === "usuarios" ? "text-blue-600 bg-gray-100" : "text-gray-700 hover:bg-gray-100"
                } rounded-lg`}
              >
                <Users className={`h-5 w-5 mr-3 ${activeView === "usuarios" ? "text-blue-600" : "text-gray-500"}`} />
                <span className={`${!isSidebarOpen && "md:hidden"}`}>Usuarios</span>
              </button>
            </li>


            <li>
              <button
                onClick={() => setActiveView("videos")}
                className={`flex items-center px-4 py-2 w-full text-left ${
                  activeView === "videos" ? "text-blue-600 bg-gray-100" : "text-gray-700 hover:bg-gray-100"
                } rounded-lg`}
              >
                <Video className={`h-5 w-5 mr-3 ${activeView === "videos" ? "text-blue-600" : "text-gray-500"}`} />
                <span className={`${!isSidebarOpen && "md:hidden"}`}>Videos</span>
              </button>
            </li>



            <li>
              <button
                onClick={() => setActiveView("ranking")}
                className={`flex items-center px-4 py-2 w-full text-left ${
                  activeView === "ranking" ? "text-blue-600 bg-gray-100" : "text-gray-700 hover:bg-gray-100"
                } rounded-lg`}
              >
                <BarChart2 className={`h-5 w-5 mr-3 ${activeView === "ranking" ? "text-blue-600" : "text-gray-500"}`} />
                <span className={`${!isSidebarOpen && "md:hidden"}`}>Ranking</span>
              </button>
            </li>



            <li>
              <button
                onClick={() => setActiveView("actividades")}
                className={`flex items-center px-4 py-2 w-full text-left ${
                  activeView === "actividades" ? "text-blue-600 bg-gray-100" : "text-gray-700 hover:bg-gray-100"
                } rounded-lg`}
              >
                <Activity
                  className={`h-5 w-5 mr-3 ${activeView === "actividades" ? "text-blue-600" : "text-gray-500"}`}
                />
                <span className={`${!isSidebarOpen && "md:hidden"}`}>Actividades</span>
              </button>
            </li>


            <li>
              <button
                onClick={() => setActiveView("habilidades")}
                className={`flex items-center px-4 py-2 w-full text-left ${
                  activeView === "habilidades" ? "text-blue-600 bg-gray-100" : "text-gray-700 hover:bg-gray-100"
                } rounded-lg`}
              >
                <Activity
                  className={`h-5 w-5 mr-3 ${activeView === "habilidades" ? "text-blue-600" : "text-gray-500"}`}
                />
                <span className={`${!isSidebarOpen && "md:hidden"}`}>Habilidades</span>
              </button>
            </li>



            <li>
              <button
                onClick={() => setActiveView("inscripciones")}
                className={`flex items-center px-4 py-2 w-full text-left ${
                  activeView === "inscripciones" ? "text-blue-600 bg-gray-100" : "text-gray-700 hover:bg-gray-100"
                } rounded-lg`}
              >
                <FileText
                  className={`h-5 w-5 mr-3 ${activeView === "inscripciones" ? "text-blue-600" : "text-gray-500"}`}
                />
                <span className={`${!isSidebarOpen && "md:hidden"}`}>Inscripciones</span>
              </button>
            </li>



            <li>
              <button
                onClick={() => setActiveView("reportes")}
                className={`flex items-center px-4 py-2 w-full text-left ${
                  activeView === "reportes" ? "text-blue-600 bg-gray-100" : "text-gray-700 hover:bg-gray-100"
                } rounded-lg`}
              >
                <FileSpreadsheet
                  className={`h-5 w-5 mr-3 ${activeView === "reportes" ? "text-blue-600" : "text-gray-500"}`}
                />
                <span className={`${!isSidebarOpen && "md:hidden"}`}>Reportes</span>
              </button>
            </li>




            <li>
              <button
                onClick={() => setActiveView("perfil")}
                className={`flex items-center px-4 py-2 w-full text-left ${
                  activeView === "perfil" ? "text-blue-600 bg-gray-100" : "text-gray-700 hover:bg-gray-100"
                } rounded-lg`}
              >
                <User className={`h-5 w-5 mr-3 ${activeView === "perfil" ? "text-blue-600" : "text-gray-500"}`} />
                <span className={`${!isSidebarOpen && "md:hidden"}`}>Perfil</span>
              </button>
            </li>




            <li>
              <button
                onClick={() => setActiveView("ajustes")}
                className={`flex items-center px-4 py-2 w-full text-left ${
                  activeView === "ajustes" ? "text-blue-600 bg-gray-100" : "text-gray-700 hover:bg-gray-100"
                } rounded-lg`}
              >
                <Settings className={`h-5 w-5 mr-3 ${activeView === "ajustes" ? "text-blue-600" : "text-gray-500"}`} />
                <span className={`${!isSidebarOpen && "md:hidden"}`}>Ajustes</span>
              </button>
            </li>


            
          </ul>
        </nav>
        <div className="p-4 border-t border-gray-200">
          <button className="flex items-center text-gray-700 hover:text-gray-900 w-full text-left">
            <LogOut className="h-5 w-5 mr-3" />
            <span className={`${!isSidebarOpen && "md:hidden"}`}>Cerrar Sesión</span>
          </button>
        </div>
      </div>
    </div>
  )
}
