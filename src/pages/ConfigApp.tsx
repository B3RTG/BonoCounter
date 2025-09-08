import { useState } from "react";
import { db } from "../db/bonocounter-db";

const ConfigApp = () => {
  const [mensaje, setMensaje] = useState("");

  const resetMovimientos = async () => {
    if (window.confirm("¿Seguro que quieres borrar TODOS los movimientos?")) {
      await db.movimientos.clear();
      setMensaje("Movimientos eliminados");
    }
  };

  const resetReglas = async () => {
    if (window.confirm("¿Seguro que quieres borrar TODAS las reglas de precio?")) {
      await db.reglas.clear();
      setMensaje("Reglas eliminadas");
    }
  };

  const resetTodo = async () => {
    if (window.confirm("¿Seguro que quieres borrar TODO (movimientos y reglas)?")) {
      await db.movimientos.clear();
      await db.reglas.clear();
      setMensaje("Movimientos y reglas eliminados");
    }
  };

  return (
    <div className="p-2 sm:p-4 w-full max-w-lg mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-6 mt-2 mb-4">
        <h2 className="text-xl font-bold mb-4 text-blue-700 text-center">Configuración de la aplicación</h2>
        <div className="space-y-4">
          <button onClick={resetMovimientos} className="w-full bg-red-500 text-white font-bold py-3 rounded-xl shadow hover:bg-red-600 active:bg-red-700 transition text-lg">Resetear solo movimientos</button>
          <button onClick={resetReglas} className="w-full bg-yellow-500 text-white font-bold py-3 rounded-xl shadow hover:bg-yellow-600 active:bg-yellow-700 transition text-lg">Resetear solo reglas</button>
          <button onClick={resetTodo} className="w-full bg-gray-700 text-white font-bold py-3 rounded-xl shadow hover:bg-gray-800 active:bg-black transition text-lg">Resetear TODO</button>
        </div>
        {mensaje && <div className="mt-4 text-center text-green-600 font-medium">{mensaje}</div>}
        <div className="mt-6 text-xs text-gray-500 text-center">Esta acción no se puede deshacer.</div>
      </div>
    </div>
  );
};

export default ConfigApp;