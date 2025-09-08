
import { useState } from "react";
import { addRecarga } from "../db/bono-services";

const Recarga = () => {
  const [cantidad, setCantidad] = useState(0);
  const [comentario, setComentario] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isNaN(cantidad) || cantidad <= 0) {
      setMensaje("Introduce una cantidad válida (mayor que 0)");
      return;
    }
    if (comentario.length > 100) {
      setMensaje("El comentario es demasiado largo (máx. 100 caracteres)");
      return;
    }
    await addRecarga(cantidad, new Date().toISOString(), comentario);
    setMensaje("Recarga realizada correctamente");
    setCantidad(0);
    setComentario("");
  };

  return (
  <div className="p-2 sm:p-4 w-full max-w-sm mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-6 mt-2 mb-4">
        <h2 className="text-xl font-bold mb-4 text-blue-700 text-center">Recarga de Bono</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium text-sm">Cantidad</label>
            <input
              type="number"
              step="0.01"
              className="w-full border-2 border-blue-100 rounded-xl px-4 py-3 text-lg focus:outline-none focus:border-blue-400 transition"
              value={cantidad}
              onChange={e => setCantidad(Number(e.target.value))}
              min={0.01}
              inputMode="decimal"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-sm">Comentario (opcional)</label>
            <input
              type="text"
              className="w-full border-2 border-blue-100 rounded-xl px-4 py-3 text-base focus:outline-none focus:border-blue-400 transition"
              value={comentario}
              onChange={e => setComentario(e.target.value)}
              maxLength={100}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl shadow hover:bg-blue-700 active:bg-blue-800 transition text-lg"
          >
            Recargar
          </button>
          {mensaje && <div className="mt-2 text-center text-green-600 font-medium">{mensaje}</div>}
        </form>
      </div>
    </div>
  );
};

export default Recarga;
