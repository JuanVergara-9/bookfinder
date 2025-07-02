interface BookCardProps {
  title: string;
  author: string;
  cover: string;
}

export default function BookCard({ title, author, cover }: BookCardProps) {
  return (
    <div 
      className="book-card bg-white/80 rounded-lg shadow-md overflow-hidden border border-amber-200 flex flex-row items-start p-4 transition-transform duration-300 hover:scale-105 hover:shadow-xl pl-[10px]"
      style={{ width: '350px', height: '300px' }}
    >
      <div className="flex flex-col justify-between h-full ">
        <div className="pt-[18px]">
          <h3 className="font-title text-lg text-amber-900 leading-tight">{title}</h3>
          <p className="font-body text-sm text-amber-800 italic mt-1 mb-[18px]">{author}</p>
        </div>
            <img src={cover} alt={`Portada de ${title}`} className="w-[100px] h-[140px] object-cover rounded-md shadow-sm border-2 border-amber-100 mr-4 flex-shrink-0" />

        <button className="btn btn-secondary mt-auto text-sm py-1 px-3 self-start">Ver Detalles</button>
      </div>
    </div>
  );
}
