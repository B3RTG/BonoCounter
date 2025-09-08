
import { useEffect, useState } from "react";
import { getMovimientos, getSaldoActual, deleteMovimiento } from "../db/bono-services";
import type { Movimiento } from "../db/bonocounter-db";
import SaldoCard from "../components/SaldoCard";

const SaldoMovimientos = () => {
  const [saldo, setSaldo] = useState<number>(0);
  const [movimientos, setMovimientos] = useState<Movimiento[]>([]);
  const [loading, setLoading] = useState(true);


  const cargarMovimientos = async () => {
    setLoading(true);
    setSaldo(await getSaldoActual());
    setMovimientos(await getMovimientos());
    setLoading(false);
  };

  useEffect(() => {
    cargarMovimientos();
  }, []);

  const handleDelete = async (id: string) => {
    if (window.confirm("¿Seguro que quieres eliminar este movimiento?")) {
      await deleteMovimiento(id);
      cargarMovimientos();
    }
  };

  return (
  <div className="p-2 sm:p-4 w-full max-w-lg mx-auto">
      <SaldoCard saldo={saldo} />
      <h3 className="text-lg font-semibold mb-2 mt-6 text-blue-700">Historial de movimientos</h3>
      {loading ? (
        <div className="text-center py-8 text-blue-600 animate-pulse">Cargando...</div>
      ) : movimientos.length === 0 ? (
        <div className="text-center py-8 text-gray-400">No hay movimientos registrados.</div>
      ) : (
        <ul className="divide-y divide-blue-50 bg-white rounded-2xl shadow-lg overflow-hidden">
          {movimientos.map((mov) => (
            <li key={mov.id} className="flex items-center justify-between px-4 py-3">
              <div className="flex flex-col gap-0.5">
                <span className={
                  mov.tipo === "carga"
                    ? "text-green-600 font-bold text-lg"
                    : "text-red-600 font-bold text-lg"
                }>
                  {mov.tipo === "carga" ? "+" : "-"}
                  {mov.cantidad} €
                </span>
                <span className="text-xs text-gray-500">
                  {new Date(mov.fecha).toLocaleString()}
                </span>
                {mov.motivo && (
                  <span className="text-xs text-gray-400 italic">{mov.motivo}</span>
                )}
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 font-semibold">
                  {mov.tipo === "carga" ? "Recarga" : "Descuento"}
                </span>
                <button
                  className="text-xs text-red-500 hover:bg-red-50 px-2 py-1 rounded transition"
                  onClick={() => handleDelete(mov.id)}
                  title="Eliminar movimiento"
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SaldoMovimientos;
