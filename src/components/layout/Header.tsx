import { Search, Menu, X, User, ChevronDown } from "lucide-react"

interface HeaderProps {
  isSidebarOpen: boolean
  toggleSidebar: () => void
}

export default function Header({ isSidebarOpen, toggleSidebar }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
      <div className="flex items-center">
        <button className="text-gray-500 focus:outline-none mr-2" onClick={toggleSidebar}>
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Buscar"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none">
          <span className="sr-only">Ver notificaciones</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </button>
        <div className="ml-3 relative flex items-center">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
              <User className="h-5 w-5 text-gray-600" />
            </div>
            <div className="ml-3 hidden md:block">
              <p className="text-sm font-medium text-gray-700">Alexito</p>
              <p className="text-xs text-gray-500">JIJIJA@gmail.com</p>
            </div>
            <ChevronDown className="ml-2 h-4 w-4 text-gray-500" /> 
          </div>
        </div>
      </div>
    </header>
  )
}
