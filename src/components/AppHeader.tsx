import { Link, useLocation } from "react-router-dom";
import MobileMenu from "./MobileMenu";

const navItems = [
  { to: "/", label: "Historial" },
  { to: "/recarga", label: "Recarga" },
  { to: "/descuento", label: "Descuento" },
  { to: "/config-reglas", label: "Reglas" },
];

const AppHeader = () => {
  const location = useLocation();
  return (
    <header className="fixed top-0 left-0 w-full z-20 bg-white/80 backdrop-blur shadow-md border-b border-blue-100">
      <div className="relative max-w-2xl mx-auto flex flex-col items-center py-2 px-4 min-h-[60px] sm:min-h-0">
        {/* Botón menú móvil en posición absoluta */}
        <div className="absolute left-0 top-1 sm:hidden">
          <MobileMenu />
        </div>
        <h1 className="text-2xl font-extrabold tracking-tight text-blue-700 mb-1 mt-1 select-none">
          BonoCounter
        </h1>
        {/* Menú horizontal solo visible en sm+ */}
        <nav className="hidden sm:flex w-full justify-between gap-1 text-sm sm:text-base">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`flex-1 text-center py-2 rounded-lg transition-colors duration-150
                ${location.pathname === item.to ? "bg-blue-100 text-blue-700 font-bold" : "text-blue-600 hover:bg-blue-50"}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default AppHeader;
