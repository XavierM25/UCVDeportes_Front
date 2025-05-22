"use client"

import { useState, useEffect } from "react"
import Sidebar from "../components/layout/Sidebar"
import Header from "../components/layout/Header"
import DashboardView from "../components/dashboard/DashboardView"
import Usuarios from "../components/usuarios/Usuarios"
import Videos from "../components/videos/Videos"
import Ranking from "../components/ranking/Ranking"
import Actividades from "../components/actividades/Actividades"
import Habilidades from "../components/habilidades/Habilidades"
import Inscripciones from "../components/inscripciones/Inscripciones"
import Reportes from "../components/reportes/Reportes"

export default function Dashboard() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [activeView, setActiveView] = useState("dashboard")

 
  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth >= 768)
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

 
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* el menucito  */}
      <Sidebar isSidebarOpen={isSidebarOpen} activeView={activeView} setActiveView={setActiveView} />

      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden" onClick={toggleSidebar}></div>
      )}


      <div className="flex-1 flex flex-col overflow-hidden">

        
        {/*el header */}
        <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        
        <main className="flex-1 overflow-y-auto p-4 bg-gray-100">





          {/* la vista del Dashboar xd  */}
          {activeView === "dashboard" && <DashboardView />}

          {/* los usuarios */}
          {activeView === "usuarios" && <Usuarios />}

          {/* videooo */}
          {activeView === "videos" && <Videos />}

          {/* ranki */}
          {activeView === "ranking" && <Ranking />}

          {/* Actividades*/}
          {activeView === "actividades" && <Actividades />}

          {/* Habilidades xd*/}
          {activeView === "habilidades" && <Habilidades />}

          {/* Inscripcion  */}
          {activeView === "inscripciones" && <Inscripciones />}

          {/* Reportes falla jeison*/}
          {activeView === "reportes" && <Reportes />}

          {/* uwu */}
          {(activeView === "perfil" || activeView === "ajustes") && (
            <div className="bg-white p-6 rounded-xl">
              <h2 className="text-lg font-semibold mb-4 text-gray-700">Vista de {activeView}</h2>
              <p className="text-gray-500"> esto aun no hago xddd </p>
            </div>
          )}





        </main>
      </div>
    </div>
  )
}
