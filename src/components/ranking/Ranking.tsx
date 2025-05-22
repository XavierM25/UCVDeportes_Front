"use client"

import { useState } from "react"
import { Heart, User, Medal } from "lucide-react"


type RankingItem = {
  id: number
  posicion: number
  nombre: string
  apellidos: string
  carrera: string
  categoria: string
  subcategoria: string
  puntos: number
  estado: string
  favorito: boolean
}

export default function Ranking() {

  const [activeTab, setActiveTab] = useState("todos")
  const [activeSubcategory, setActiveSubcategory] = useState("todos")
  const [selectedRankingItem, setSelectedRankingItem] = useState<RankingItem | null>(null)
  const [editMode, setEditMode] = useState(false)


  const rankingItems: RankingItem[] = [
    {
      id: 1,
      posicion: 1,
      nombre: "Leonardo",
      apellidos: "Mendoza Alvarez",
      carrera: "Ingeniería de Sistemas",
      categoria: "Cultura y Eventos",
      subcategoria: "Concurso",
      puntos: 1200,
      estado: "Estudiante Destacado",
      favorito: false,
    },
    {
      id: 2,
      posicion: 2,
      nombre: "Alejandro",
      apellidos: "Mendoza Alvarez",
      carrera: "Administración y Marketing",
      categoria: "Talleres",
      subcategoria: "Baile",
      puntos: 1100,
      estado: "Estudiante Destacado",
      favorito: false,
    },
    {
      id: 3,
      posicion: 3,
      nombre: "test",
      apellidos: "test test",
      carrera: "Contabilidad",
      categoria: "Deportes",
      subcategoria: "Volleyball",
      puntos: 500,
      estado: "Estudiante Destacado",
      favorito: false,
    },
  ]

{/* aqui puede q salga error pero solo es porq no estoy usando algunas funciones por ahora  xd */}
  const toggleFavorite = (id: number) => {
    const updatedRanking = rankingItems.map((item) => (item.id === id ? { ...item, favorito: !item.favorito } : item))
    console.log("Favorito actualizado", updatedRanking)
  }
  const handleSelectRankingItem = (item: RankingItem) => {
    setSelectedRankingItem(item)
  }
  const handleEditMode = () => {
    setEditMode(true)
  }
  const handleSaveChanges = () => {
    setEditMode(false)
    console.log("Cambios guardados")
  }



  return (
    <div className="space-y-4">
      <div className="bg-white p-6 rounded-xl border border-red-800">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Ranking | Deportes, Cultura y Talleres UCV</h2>

        
        <div className="flex flex-wrap border-b border-gray-200 mb-6">
          <button
            onClick={() => setActiveTab("todos")}
            className={`mr-4 py-2 px-4 text-sm font-medium ${
              activeTab === "todos" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Todos
          </button>
          <button
            onClick={() => setActiveTab("deportes")}
            className={`mr-4 py-2 px-4 text-sm font-medium ${
              activeTab === "deportes"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Deportes
          </button>
          <button
            onClick={() => setActiveTab("cultura")}
            className={`mr-4 py-2 px-4 text-sm font-medium ${
              activeTab === "cultura" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Cultura y Eventos
          </button>
          <button
            onClick={() => setActiveTab("talleres")}
            className={`mr-4 py-2 px-4 text-sm font-medium ${
              activeTab === "talleres"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Talleres
          </button>
        </div>





  
        <div className="flex flex-wrap mb-6">
          <button
            onClick={() => setActiveSubcategory("todos")}
            className={`mr-2 mb-2 py-1 px-3 text-xs font-medium rounded-full ${
              activeSubcategory === "todos"
                ? "bg-blue-100 text-blue-800"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            Todos
          </button>
          <button
            onClick={() => setActiveSubcategory("futbol")}
            className={`mr-2 mb-2 py-1 px-3 text-xs font-medium rounded-full ${
              activeSubcategory === "futbol"
                ? "bg-blue-100 text-blue-800"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            Fútbol
          </button>
          <button
            onClick={() => setActiveSubcategory("basketball")}
            className={`mr-2 mb-2 py-1 px-3 text-xs font-medium rounded-full ${
              activeSubcategory === "basketball"
                ? "bg-blue-100 text-blue-800"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            Basketball
          </button>
          <button
            onClick={() => setActiveSubcategory("volleyball")}
            className={`mr-2 mb-2 py-1 px-3 text-xs font-medium rounded-full ${
              activeSubcategory === "volleyball"
                ? "bg-blue-100 text-blue-800"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            Volleyball
          </button>
        </div>






        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

{/* Ranking tops xddd */}
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">


{/* 1  */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 relative">
                <div className="absolute top-2 right-2">
                  <button onClick={() => toggleFavorite(1)} className="text-gray-400 hover:text-red-500">
                    <Heart className="h-5 w-5" fill={rankingItems[0].favorito ? "red" : "none"} />
                  </button>
                </div>
                <div className="p-6" onClick={() => handleSelectRankingItem(rankingItems[0])}>
                  <div className="text-4xl font-bold mb-2">#1</div>
                  <h3 className="text-xl font-bold border-b-2 border-red-500 pb-1 mb-2">Judo</h3>
                  <p className="text-sm text-gray-600 mb-1">palacin alanya</p>
                  <p className="text-sm font-medium mb-3">alex</p>
                  <p className="text-xs text-gray-500 mb-6">Ingeniería de Sistemas</p>

                  <div className="flex justify-center mb-4">
                    <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                      <User className="h-10 w-10 text-gray-400" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Medal className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="text-xs font-medium">Estudiante Destacado</span>
                    </div>
                    <div className="text-sm font-bold">1,200 puntos</div>
                  </div>
                </div>
              </div>

{/* 2 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 relative">
                <div className="absolute top-2 right-2">
                  <button onClick={() => toggleFavorite(2)} className="text-gray-400 hover:text-red-500">
                    <Heart className="h-5 w-5" fill={rankingItems[1].favorito ? "red" : "none"} />
                  </button>
                </div>
                <div className="p-6" onClick={() => handleSelectRankingItem(rankingItems[1])}>
                  <div className="text-4xl font-bold mb-2">#2</div>
                  <h3 className="text-xl font-bold border-b-2 border-red-500 pb-1 mb-2">Baile</h3>
                  <p className="text-sm text-gray-600 mb-1">Mendoza Alvarez</p>
                  <p className="text-sm font-medium mb-3">Alejandro</p>
                  <p className="text-xs text-gray-500 mb-6">Administración y Marketing</p>

                  <div className="flex justify-center mb-4">
                    <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                      <User className="h-10 w-10 text-gray-400" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Medal className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="text-xs font-medium">Estudiante Destacado</span>
                    </div>
                    <div className="text-sm font-bold">1,100 puntos</div>
                  </div>
                </div>
              </div>

{/* 3 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 relative">
                <div className="absolute top-2 right-2">
                  <button onClick={() => toggleFavorite(3)} className="text-gray-400 hover:text-red-500">
                    <Heart className="h-5 w-5" fill={rankingItems[2].favorito ? "red" : "none"} />
                  </button>
                </div>
                <div className="p-6" onClick={() => handleSelectRankingItem(rankingItems[2])}>
                  <div className="text-4xl font-bold mb-2">#3</div>
                  <h3 className="text-xl font-bold border-b-2 border-red-500 pb-1 mb-2">Volleyball</h3>
                  <p className="text-sm text-gray-600 mb-1">random</p>
                  <p className="text-sm font-medium mb-3">xddd</p>
                  <p className="text-xs text-gray-500 mb-6">Contabilidad</p>

                  <div className="flex justify-center mb-4">
                    <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                      <User className="h-10 w-10 text-gray-400" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Medal className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="text-xs font-medium">Estudiante Destacado</span>
                    </div>
                    <div className="text-sm font-bold">500 puntos</div>
                  </div>
                </div>
              </div>
            </div>




            <div className="flex justify-center mt-6">
              <button className="bg-gray-800 text-white py-2 px-6 rounded-md hover:bg-gray-700">Ver Más</button>
            </div>
          </div>









          <div className="md:col-span-1">
            <div className="bg-white p-6 rounded-xl border border-red-800">
              <h3 className="font-medium mb-4">Detalle Estudiante</h3>

              {selectedRankingItem ? (
                <div className="space-y-4">
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-24 h-24 bg-gray-200 rounded-full mb-3 flex items-center justify-center">
                      <User className="h-12 w-12 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-bold">
                      {selectedRankingItem.nombre} {selectedRankingItem.apellidos}
                    </h3>
                    <p className="text-sm text-gray-500">{selectedRankingItem.carrera}</p>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm text-gray-500 mb-1">Categoría</label>
                      <input
                        type="text"
                        value="Deportes"
                        readOnly={!editMode}
                        className="w-full p-2 bg-gray-100 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-500 mb-1">Subcategoría</label>
                      <input
                        type="text"
                        value="Volleyball"
                        readOnly={!editMode}
                        className="w-full p-2 bg-gray-100 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-500 mb-1">Puntos</label>
                      <input
                        type="number"
                        value={selectedRankingItem.puntos}
                        readOnly={!editMode}
                        className="w-full p-2 bg-gray-100 rounded-md"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-gray-500 text-center py-8">Selecciona un estudiante para ver sus detalles</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
