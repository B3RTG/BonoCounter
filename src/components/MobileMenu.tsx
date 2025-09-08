import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { to: "/", label: "Historial" },
  { to: "/recarga", label: "Recarga" },
  { to: "/descuento", label: "Descuento" },
  { to: "/config-reglas", label: "Reglas" },
  { to: "/config-app", label: "Configuración" },
];

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <button
        className="sm:hidden fixed top-4 left-4 z-30 bg-blue-600 text-white rounded-full p-2 shadow-lg focus:outline-none"
        onClick={() => setOpen(true)}
        aria-label="Abrir menú"
      >
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
      </button>
      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setOpen(false)} />
      )}
      {/* Drawer */}
      <nav
        className={`fixed top-0 left-0 h-full w-64 z-50 shadow-2xl transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"} sm:hidden flex flex-col`}
        style={{ height: '100dvh', maxHeight: '100dvh' }}
        aria-label="Menú lateral"
      >
        {/* Capa de fondo blanco opaco para evitar transparencias */}
        <div className="absolute inset-0 bg-white opacity-100 pointer-events-none" />
  <div className="relative flex flex-col flex-1 h-full">
          <div className="flex items-center justify-between p-4 border-b bg-white relative z-10">
          <span className="text-xl font-extrabold text-blue-700">BonoCounter</span>
          <button onClick={() => setOpen(false)} aria-label="Cerrar menú">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>
          <ul className="flex-1 flex flex-col gap-1 p-4 relative z-10 bg-white overflow-auto">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`block px-4 py-3 rounded-lg text-lg font-medium transition-colors duration-150
                    ${location.pathname === item.to ? "bg-blue-100 text-blue-700" : "text-blue-600 hover:bg-blue-50"}`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default MobileMenu;
