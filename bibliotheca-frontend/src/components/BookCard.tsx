import type { GoogleBook } from "./BookSearch";
import { useFavorites } from "../context/FavoritesContext";

interface BookCardProps {
  book: GoogleBook;
}

export default function BookCard({ book }: BookCardProps) {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const favorite = isFavorite(book.id);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Evita que el click se propague a otros elementos
    if (favorite) {
      removeFavorite(book.id);
    } else {
      addFavorite(book);
    }
  };

  const imageUrl = book.volumeInfo.imageLinks?.thumbnail || "/vite.svg";
  const title = book.volumeInfo.title || "Sin título";
  const author = book.volumeInfo.authors?.join(", ") || "Autor desconocido";
  const genre = book.volumeInfo.categories?.[0] || "Sin categoría";
  const year = book.volumeInfo.publishedDate?.split("-")[0] || "Desconocido";
  const description = book.volumeInfo.description || "Sin descripción disponible.";


return (
  <div className="w-[420px] h-[260px] bg-gradient-to-br from-amber-200 to-yellow-100 border-2 border-[#ca9229b9] hover:border-amber-400 rounded-[5px] shadow-sm hover:shadow-lg transition-all duration-300 p-[16px] flex flex-col justify-between relative">

    {/* Título y autor arriba */}
    <div className="mb-2 pr-[20px]">
      <h3 className="font-serif text-xl text-amber-900 leading-tight line-clamp-2 break-words">
        {title.toUpperCase()}
      </h3>
      <p className="text-sm font-serif italic text-amber-700 line-clamp-1">
        ~ {author} ~
      </p>
    </div>

    {/* Contenido horizontal */}
    <div className="flex flex-row items-start gap-x-[20px] flex-1">

      {/* Imagen a la izquierda */}
      <img 
        src={imageUrl} 
        alt={`Portada de ${title}`} 
        className="w-[100px] h-[140px] object-cover rounded-md shadow border border-amber-100"
      />

      {/* Datos a la derecha */}
      <div className="flex flex-col justify-between h-full text-[14px]">

        {/* Etiquetas dinámicas */}
        <div className="flex flex-wrap gap-2 mb-1">
          <span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full border border-amber-300 text-xs">
            {genre}
          </span>
          <span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full border border-amber-300 text-xs">
            Anno Domini {year}
          </span>
        </div>

        {/* Calificación (estática por ahora) */}
        <div className="text-amber-800 text-sm mt-1">
          Vestra Aestimatio
          <div className="text-yellow-500 text-base leading-snug">★★★★★</div>
        </div>

        {/* Descripción truncada */}
        <p className="text-xs text-amber-800 mt-2 overflow-hidden text-ellipsis max-h-[60px]">
          {description}
        </p>

        {/* Botón de comentarios */}
        <button className="mt-2 bg-white text-amber-700 text-sm font-semibold border border-amber-300 hover:bg-amber-100 py-1 px-3 rounded transition w-fit">
          Inspicere Commentarios (0)
        </button>
      </div>
    </div>

    {/* Ícono favorito arriba a la derecha */}
    <button 
      onClick={handleFavoriteClick} 
      className="absolute top-2 right-2 text-2xl text-yellow-500 hover:text-yellow-400 transition-colors duration-200 z-10"
      aria-label={favorite ? "Quitar de favoritos" : "Añadir a favoritos"}
    >
      {favorite ? "★" : "☆"}
    </button>
  </div>
);

}
