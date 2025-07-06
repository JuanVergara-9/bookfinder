import { Heart, Search } from "lucide-react";
import clsx from "clsx";

interface NavigationBarProps {
  activeView: "search" | "favorites";
  setActiveView: (view: "search" | "favorites") => void;
  favoritesCount: number;
}

export default function NavigationBar({
  activeView,
  setActiveView,
}: NavigationBarProps) {
  return (
    <div className="w-full flex justify-center my-8">
      <div className="flex w-[1000px] max-w-lg h-[45px] rounded-[8px] overflow-hidden border-4 border-[#a67c52] bg-amber-50 shadow-sm mb-[35px]">
        {/* Botón de búsqueda */}
        <button
          onClick={() => setActiveView("search")}
          className={clsx(
            "flex-1 flex items-center justify-center gap-2 p-3 cursor-pointer",
            "font-body text-amber-900 text-base tracking-wider transition-all duration-300",
            activeView === "search"
              ? "bg-[#f8ddc1] border-b-2 border-[#a67c52] font-bold shadow-inner"
              : "hover:bg-black/5"
          )}
        >
          <Search className="w-5 h-5" />
          Quaerere Libros
        </button>

        {/* Separador */}
        <div className="w-px bg-amber-900/80"></div>

        {/* Botón de favoritos */}
        <button
          onClick={() => setActiveView("favorites")}
          className={clsx(
            "flex-1 flex items-center justify-center gap-2 p-3 cursor-pointer",
            "font-body text-amber-900 text-base tracking-wider transition-all duration-300",
            activeView === "favorites"
              ? "bg-[#f8ddc1] border-b-2 border-[#a67c52] font-bold shadow-inner"
              : "hover:bg-black/5"
          )}
        >
          <Heart className="w-5 h-5" />
          {`Dilecti Libri`}
        </button>
      </div>
    </div>
  );
}
