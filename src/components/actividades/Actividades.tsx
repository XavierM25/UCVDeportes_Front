"use client"

import { useState } from "react"
import { Plus } from "lucide-react"


type Categoria = {
  id: number
  nombre: string
  subcategorias: Subcategoria[]
}

type Subcategoria = {
  id: number
  nombre: string
  categoriaId: number
}

export default function Actividades() {

  const [selectedCategoria, setSelectedCategoria] = useState<Categoria | null>(null)
  const [selectedSubcategoria, setSelectedSubcategoria] = useState<Subcategoria | null>(null)
  const [nuevaSubcategoria, setNuevaSubcategoria] = useState("")
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(1)


  const categorias: Categoria[] = [
    { id: 1, nombre: "Deportes", subcategorias: [] },
    { id: 2, nombre: "Cultura y Eventos", subcategorias: [] },
    { id: 3, nombre: "Talleres", subcategorias: [] },
  ]

  const subcategorias: Subcategoria[] = [
    { id: 1, nombre: "Fútbol", categoriaId: 1 },
    { id: 2, nombre: "Basketball", categoriaId: 1 },
    { id: 3, nombre: "gta", categoriaId: 1 },
    { id: 4, nombre: "Judo xd", categoriaId: 2 },
    { id: 5, nombre: "counter strike", categoriaId: 3 },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
   
      <div className="md:col-span-2 space-y-4">


        
        <div className="bg-white p-6 rounded-xl border border-red-800">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">Administrar Actividades Culturales</h2>
          <div className="mt-6">
            <h3 className="font-medium mb-3">Categorías</h3>
            <div className="space-y-2">
              {categorias.map((categoria) => (
                <div
                  key={categoria.id}
                  className="p-2 hover:bg-gray-100 cursor-pointer rounded"
                  onClick={() => setSelectedCategoria(categoria)}
                >
                  {categoria.nombre}
                </div>
              ))}
            </div>
          </div>
        </div>

 



        <div className="bg-white p-6 rounded-xl border border-red-800">
          <h3 className="font-medium mb-3">Detalles de la Subcategoría</h3>
          <div className="flex space-x-2">
            <input type="text" placeholder="Fútbol" className="flex-1 p-2 border border-gray-300 rounded-md" />
            <button className="px-4 py-2 bg-black text-white rounded-md">Guardar</button>
            <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md">Eliminar</button>
          </div>
        </div>
      </div>

      <div className="md:col-span-2 space-y-4">
        




        <div className="bg-white p-6 rounded-xl border border-red-800">
          <h3 className="font-medium mb-3">Subcategorías</h3>
          <div className="space-y-2">
            {subcategorias.map((subcategoria) => (
              <div
                key={subcategoria.id}
                className="p-2 hover:bg-gray-100 cursor-pointer rounded"
                onClick={() => setSelectedSubcategoria(subcategoria)}
              >
                {subcategoria.nombre}
              </div>
            ))}
          </div>
        </div>

    



        <div className="bg-white p-6 rounded-xl border border-red-800">
          <h3 className="font-medium mb-3">Crear Subcategoría</h3>
          <div className="space-y-3">
            <select
              className="w-full p-2 border border-gray-300 rounded-md"
              value={categoriaSeleccionada}
              onChange={(e) => setCategoriaSeleccionada(Number.parseInt(e.target.value))}
            >
              {categorias.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.nombre}
                </option>
              ))}
            </select>
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Nombre de la subcategoría"
                className="flex-1 p-2 border border-gray-300 rounded-md"
                value={nuevaSubcategoria}
                onChange={(e) => setNuevaSubcategoria(e.target.value)}
              />
              <button className="px-3 py-2 bg-gray-200 text-gray-800 rounded-md">
                <Plus className="h-5 w-5" />
              </button>
            </div>
            <button className="w-full py-2 bg-black text-white rounded-md">Crear</button>
          </div>
        </div>

       



        <div className="bg-white p-6 rounded-xl border border-red-800">
          <h3 className="font-medium mb-3">Horarios</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span>Miércoles - 20:00:00 - 22:00:00</span>
              <button className="px-3 py-1 bg-red-500 text-white text-xs rounded">Eliminar</button>
            </div>
            <select className="w-full p-2 border border-gray-300 rounded-md">
              <option>Lunes</option>
              <option>Martes</option>
              <option>Miércoles</option>
              <option>Jueves</option>
              <option>Viernes xd</option>
            </select>
            <button className="w-full py-2 bg-gray-800 text-white rounded-md">Agregar Horario</button>
          </div>
        </div>

      



        <div className="bg-white p-6 rounded-xl border border-red-800">
          <h3 className="font-medium mb-3">Vacantes</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Total de vacantes</span>
              <span className="font-medium">30</span>
            </div>
            <div className="flex justify-between">
              <span>Vacantes disponibles</span>
              <span className="font-medium">29</span>
            </div>
            <div className="flex justify-between">
              <span>Vacantes ocupadas</span>
              <span className="font-medium">1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
