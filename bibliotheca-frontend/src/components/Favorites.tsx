import { useFavorites } from "../context/FavoritesContext";
import BookCard from "./BookCard";

export default function Favorites() {
  const { favorites } = useFavorites();

  return (
    <div className="w-full p-6 bg-amber-50/60 rounded-lg shadow-inner">
      {favorites.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-xl text-amber-700 font-serif">Bibliotheca Vacua</p>
          <p className="text-stone-500 mt-2">Vestra bibliotheca favoritorum vacua est. Adde libros quos amas.</p>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-[40px]">
          {favorites.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
}

