import { FaClipboardList } from "react-icons/fa";

interface SidebarProps {
  onSelect: (module: string) => void;
}

export default function Sidebar({ onSelect }: SidebarProps) {
  return (
    <aside className="w-64 bg-white shadow-md px-6 py-8 flex flex-col justify-between">
      <nav className="space-y-4 text-sm">
        <div
          className="flex items-center gap-3 text-gray-600 hover:text-red-500 cursor-pointer font-semibold"
          onClick={() => onSelect("inscripciones")}
        >
          <FaClipboardList /> Inscripciones
        </div>
        {/* Aquí puedes agregar más opciones en el futuro */}
      </nav>
    </aside>
  );
}
