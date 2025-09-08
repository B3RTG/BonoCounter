
import { useEffect, useState } from "react";
import { getReglas, addRegla, deleteRegla } from "../db/bono-services";
import type { ReglaPrecio } from "../db/bonocounter-db";

const ConfigReglas = () => {
  const [reglas, setReglas] = useState<ReglaPrecio[]>([]);
  const [nombre, setNombre] = useState("");
  const [condicion, setCondicion] = useState("");
  const [precio, setPrecio] = useState(0);
  const [mensaje, setMensaje] = useState("");

  const cargarReglas = async () => {
    setReglas(await getReglas());
  };

  useEffect(() => {
    cargarReglas();
  }, []);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombre || !condicion || isNaN(precio) || precio <= 0) {
      setMensaje("Completa todos los campos correctamente y usa un precio válido");
      return;
    }
    if (nombre.length > 50) {
      setMensaje("El nombre es demasiado largo (máx. 50 caracteres)");
      return;
    }
    if (condicion.length > 100) {
      setMensaje("La condición es demasiado larga (máx. 100 caracteres)");
      return;
    }
    await addRegla({ nombre, condicion, precio });
    setNombre("");
    setCondicion("");
    setPrecio(0);
    setMensaje("Regla añadida");
    cargarReglas();
  };

  const handleDelete = async (id: string) => {
    await deleteRegla(id);
    cargarReglas();
  };

  return (
  <div className="p-2 sm:p-4 w-full max-w-lg mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-6 mt-2 mb-4">
        <h2 className="text-xl font-bold mb-4 text-blue-700 text-center">Configuración de Reglas de Precio</h2>
        <form onSubmit={handleAdd} className="space-y-5 mb-6">
          <div>
            <label className="block mb-1 font-medium text-sm">Nombre</label>
            <input type="text" className="w-full border-2 border-blue-100 rounded-xl px-4 py-3 text-base focus:outline-none focus:border-blue-400 transition" value={nombre} onChange={e => setNombre(e.target.value)} maxLength={50} required />
          </div>
          <div>
            <label className="block mb-1 font-medium text-sm">Condición (ej: Lunes a Viernes 18:00-22:00)</label>
            <input type="text" className="w-full border-2 border-blue-100 rounded-xl px-4 py-3 text-base focus:outline-none focus:border-blue-400 transition" value={condicion} onChange={e => setCondicion(e.target.value)} maxLength={100} required />
          </div>
          <div>
            <label className="block mb-1 font-medium text-sm">Precio (€)</label>
            <input type="number" step="0.01" className="w-full border-2 border-blue-100 rounded-xl px-4 py-3 text-lg focus:outline-none focus:border-blue-400 transition" value={precio} onChange={e => setPrecio(Number(e.target.value))} min={0.01} inputMode="decimal" required />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl shadow hover:bg-blue-700 active:bg-blue-800 transition text-lg">Añadir regla</button>
          {mensaje && <div className="mt-2 text-center text-green-600 font-medium">{mensaje}</div>}
        </form>
        <h3 className="text-lg font-semibold mb-2 text-blue-700">Reglas existentes</h3>
        <ul className="divide-y divide-blue-50 bg-blue-50 rounded-xl shadow-inner overflow-hidden">
          {reglas.length === 0 && <li className="p-3 text-gray-400 text-center">No hay reglas definidas.</li>}
          {reglas.map((regla) => (
            <li key={regla.id} className="flex items-center justify-between px-4 py-3">
              <div className="flex flex-col gap-0.5">
                <span className="font-bold text-blue-700">{regla.nombre}</span>
                <span className="text-xs text-gray-500">{regla.condicion}</span>
                <span className="text-sm text-blue-900 font-semibold">{regla.precio} €</span>
              </div>
              <button onClick={() => handleDelete(regla.id)} className="text-xs text-red-500 hover:bg-red-50 px-2 py-1 rounded transition" title="Eliminar regla">Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ConfigReglas;
