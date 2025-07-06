import { useState } from "react";
import NavigationBar from "../../../components/NavigationBar";
import BookSearch from "../../../components/BookSearch";
import Favorites from "../../../components/Favorites";
import Footer from "../../../components/Footer"; // Importar el nuevo componente

// SVG decorativo tipo manuscrito
const DecorativeDivider = () => (
  <svg width="100" height="24" viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto my-4">
    <path d="M2 12 Q 25 2, 50 12 T 98 12" stroke="#bfa76a" strokeWidth="2" fill="none"/>
    <circle cx="50" cy="12" r="3" fill="#f4c542" stroke="#bfa76a" strokeWidth="1"/>
  </svg>
);

// SVG pluma decorativa
const FeatherIcon = () => (
  <svg width="52" height="52" viewBox="0 0 32 32" fill="none" className="mx-auto mb-2">
    <path d="M26 6C18 2 6 14 6 26" stroke="#bfa76a" strokeWidth="2" fill="none"/>
    <path d="M26 6C24 12 12 24 6 26" stroke="#bfa76a" strokeWidth="2" fill="none"/>
    <circle cx="26" cy="6" r="1.5" fill="#bfa76a"/>
  </svg>
);

// SVG corona decorativa
const CrownIcon = () => (
  <svg width="32" height="16" viewBox="0 0 32 16" fill="none" className="mx-auto mt-2">
    <path d="M2 14L8 4L16 14L24 4L30 14Z" stroke="#bfa76a" strokeWidth="2" fill="#f4c542"/>
    <circle cx="8" cy="4" r="1.2" fill="#bfa76a"/>
    <circle cx="24" cy="4" r="1.2" fill="#bfa76a"/>
    <circle cx="16" cy="14" r="1.2" fill="#bfa76a"/>
  </svg>
);

export default function Home() {
  const [activeView, setActiveView] = useState<'search' | 'favorites'>('search');
  const [favoritesCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center bg-parchment relative px-4 home-background">
      {/* Header decorativo */}
      <header className="w-full max-w-4xl mx-auto text-center pt-24 pb-8">
        <FeatherIcon />
        <h1 className="text-[3.3rem] md:text-[8rem] font-title text-[#7c4a03] tracking-wide mb-2 leading-none">BIBLIOTHECA</h1>
        <div className="text-[40px] italic text-[#a67c52] mb-2">~ Personalis ~</div>
        <div className="text-[23px] italic text-[#a67c52] mb-4">
          "Libri sunt amici silentes et constantes" <span className="not-italic">–</span> Los libros son amigos silenciosos y constantes
        </div>
        <CrownIcon />
        <DecorativeDivider />
      </header>
      <NavigationBar
        activeView={activeView}
        setActiveView={setActiveView}
        favoritesCount={favoritesCount}
      />

      <main className="w-full max-w-4xl p-4">
        {activeView === 'search' ? <BookSearch /> : <Favorites />}
      </main>
      <Footer /> {/* Añadir el Footer al final */}
    </div>
  );
}
