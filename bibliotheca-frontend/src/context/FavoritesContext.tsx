import type { ReactNode } from 'react';
import { createContext, useState, useContext } from 'react';
import type { GoogleBook } from '../components/BookSearch';

interface FavoritesContextType {
  favorites: GoogleBook[];
  addFavorite: (book: GoogleBook) => void;
  removeFavorite: (bookId: string) => void;
  isFavorite: (bookId: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<GoogleBook[]>([]);

  const addFavorite = (book: GoogleBook) => {
    setFavorites((prevFavorites) => [...prevFavorites, book]);
  };

  const removeFavorite = (bookId: string) => {
    setFavorites((prevFavorites) => prevFavorites.filter((book) => book.id !== bookId));
  };

  const isFavorite = (bookId: string) => {
    return favorites.some((book) => book.id === bookId);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};
