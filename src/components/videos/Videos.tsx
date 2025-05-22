"use client"

import { useState } from "react"
import { Edit, Trash2, Plus, Play, Pause, Volume2, Maximize } from "lucide-react"


type VideoItem = {
  id: number
  titulo: string
  descripcion: string
  visibilidad: string
}

export default function Videos() {
 
  const videos: VideoItem[] = [
    { id: 7, titulo: "joji - worldStar money", descripcion: "Joji-WorldStar Money", visibilidad: "Público" },
    { id: 8, titulo: "Radiohead - No Surprises", descripcion: "Radiohead - No Surprises", visibilidad: "Público" },
  ]

  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)


  const handleSelectVideo = (video: VideoItem) => {
    setSelectedVideo(video)
  }

 
  const toggleVideoPlay = () => {
    setIsVideoPlaying(!isVideoPlaying)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

     
      <div className="md:col-span-3 space-y-4">
        <div className="bg-white p-6 rounded-xl border border-red-800">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-700">Administrar Videos</h2>
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg flex items-center">
              <span>Agregar Nuevo Video</span>
              <Plus className="ml-2 h-5 w-5" />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    ID
                  </th>
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
                    Descripción
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Visibilidad
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {videos.map((video) => (
                  <tr
                    key={video.id}
                    onClick={() => handleSelectVideo(video)}
                    className="hover:bg-gray-50 cursor-pointer"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{video.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">{video.titulo}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{video.descripcion}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{video.visibilidad}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex space-x-2">
                        <button className="bg-blue-100 p-1 rounded-md text-blue-600 hover:bg-blue-200">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="bg-red-100 p-1 rounded-md text-red-600 hover:bg-red-200">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
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
          <h2 className="text-lg font-semibold mb-4 text-gray-700">Previsualización</h2>
          {selectedVideo ? (
            <div className="space-y-4">

{/*esto lo cambiamos luego por el un video real en la base de datos xd  */}
              <div className="bg-black rounded-lg aspect-video relative flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={toggleVideoPlay}
                    className="bg-white bg-opacity-20 rounded-full p-3 hover:bg-opacity-30 transition-all"
                  >
                    {isVideoPlaying ? (
                      <Pause className="h-6 w-6 text-white" />
                    ) : (
                      <Play className="h-6 w-6 text-white" />
                    )}
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-2 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span>0:00</span>
                    <span>/</span>
                    <span>3:47</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button>
                      <Volume2 className="h-4 w-4" />
                    </button>
                    <button>
                      <Maximize className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div> {/*parte del videito xd */}

              <div>
                <h3 className="font-medium text-lg mb-4">Detalle Video</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-500 mb-1">Categoría</label>
                    <div className="flex items-center space-x-2">
                      <input type="radio" id="cultura" name="categoria" defaultChecked />
                      <label htmlFor="cultura" className="text-sm">
                        Cultura y Eventos
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-500 mb-1">Subcategoría</label>
                    <select className="w-full p-2 bg-gray-100 rounded-md">
                      <option>Concierto</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-500 mb-1">Campus</label>
                    <select className="w-full p-2 bg-gray-100 rounded-md">
                      <option>Los Olivos</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-500 mb-1">Fecha de Publicación</label>
                    <input type="text" defaultValue="06/23/2024" className="w-full p-2 bg-gray-100 rounded-md" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm">🥵</span>
                    <span className="text-sm">0</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-gray-500 text-center py-8">Selecciona un video para previsualizar</p>
          )}
        </div>
      </div>
    </div>
  )
}
