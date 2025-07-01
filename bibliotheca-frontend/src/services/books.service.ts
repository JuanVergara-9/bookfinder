import axios from 'axios';

export const searchBooks = async (query: string) => {
  const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  return response.data.items.map((item: any) => {
    const volume = item.volumeInfo;
    return {
      id: item.id,
      title: volume.title,
      authors: volume.authors?.join(', ') || 'Autor desconocido',
      description: volume.description || 'Sin descripción disponible.',
      thumbnail: volume.imageLinks?.thumbnail || '',
      publishedDate: volume.publishedDate || 'Fecha desconocida',
      categories: volume.categories || []
    };
  });
};
