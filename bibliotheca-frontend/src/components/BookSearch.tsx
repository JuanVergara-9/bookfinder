import { useEffect, useState } from "react";
import BookCard from "./BookCard";

export interface GoogleBook {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    imageLinks?: {
      thumbnail?: string;
    };
    publishedDate?: string;
    categories?: string[];
  };
}

const classicTerms = [
  "historia",
  "filosofía",
  "arte renacentista",
  "ciencia antigua",
  "poesía clásica",
  "mitología griega",
  "imperio romano",
  "grandes exploradores",
  "arquitectura gótica",
  "literatura universal",
];

const getRandomTerm = () => classicTerms[Math.floor(Math.random() * classicTerms.length)];

export default function BookSearch() {
  const [books, setBooks] = useState<GoogleBook[]>([]);
  const [query, setQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState(getRandomTerm());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchTerm)}`
        );
        const data = await res.json();
        setBooks(data.items || []);
      } catch (error) {
        console.error("Error al buscar libros:", error);
        setBooks([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [searchTerm]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) setSearchTerm(query.trim());
  };

  return (
    <div className="w-full bg-amber-50/60 rounded-lg shadow-inner border border-amber-200 p-6">
      <h2 className="text-3xl font-serif text-amber-900 mb-6 text-center">Quaerere Libros</h2>

      {/* Buscador */}
      <form onSubmit={handleSubmit} className="flex justify-center mb-8 gap-3">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Escriba un título o autor..."
          className="w-[300px] px-4 py-2 rounded border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
        />
        <button
          type="submit"
          className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700 transition"
        >
          Buscar
        </button>
      </form>

      {/* Resultados */}
      {loading ? (
        <p className="text-center text-amber-800">Buscando libros...</p>
      ) : books.length === 0 ? (
        <p className="text-center text-red-600">No se encontraron libros.</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-[40px]">
          {books.map((book) => (
            <BookCard
              key={book.id}
              book={book}
            />
          ))}
        </div>
      )}
    </div>
  );
}
