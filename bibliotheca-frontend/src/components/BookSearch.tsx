import BookCard from "./BookCard";

const mockBooks = [
  { title: "El Nombre de la Rosa", author: "Umberto Eco", cover: "https://covers.openlibrary.org/b/id/10523339-L.jpg" },
  { title: "Don Quijote de la Mancha", author: "Miguel de Cervantes", cover: "https://covers.openlibrary.org/b/id/11153227-L.jpg" },
  { title: "La Divina Comedia", author: "Dante Alighieri", cover: "https://covers.openlibrary.org/b/id/10958358-L.jpg" }
];

export default function BookSearch() {
  return (
    <div className="w-full p-[10px] bg-amber-50/50 rounded-lg shadow-inner border border-amber-200">
      <h2 className="text-2xl font-title text-amber-900 mb-4">Buscar Libros</h2>
      <div className="flex flex-wrap justify-center gap-[110px]">
        {mockBooks.map((book, index) => (
          <BookCard key={index} title={book.title} author={book.author} cover={book.cover} />
        ))}
      </div>
    </div>
  );
}
