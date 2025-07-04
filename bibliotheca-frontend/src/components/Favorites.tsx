import { useFavorites } from "../context/FavoritesContext";
import BookCard from "./BookCard";

export default function Favorites() {
  const { favorites } = useFavorites();

  return (
    <div className="w-full p-4 bg-amber-50/50 rounded-lg shadow-inner border border-amber-200">
      <h2 className="text-2xl font-title text-amber-900 mb-4">Mis Libros Favoritos</h2>
      {favorites.length === 0 ? (
        <p className="text-center text-stone-500">Aún no has añadido ningún libro a tus favoritos.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
}
