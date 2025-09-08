
import { useState, useEffect } from "react";
import { addDescuento, getReglas } from "../db/bono-services";
import type { ReglaPrecio } from "../db/bonocounter-db";

const Descuento = () => {

  const [reglas, setReglas] = useState<ReglaPrecio[]>([]);
  const [reglaSeleccionada, setReglaSeleccionada] = useState<string>("");
  const [cantidad, setCantidad] = useState(0);
  const [motivo, setMotivo] = useState("");
  const [partido, setPartido] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [showOpciones, setShowOpciones] = useState(false);

  // Cargar reglas y seleccionar automáticamente la primera (o la más apropiada)
  useEffect(() => {
    async function cargar() {
      const reglasBD = await getReglas();
      setReglas(reglasBD);
      if (reglasBD.length > 0) {
        setReglaSeleccionada(reglasBD[0].id);
        setCantidad(reglasBD[0].precio);
      }
    }
    cargar();
  }, []);

  // Cambiar cantidad al cambiar de regla
  useEffect(() => {
    const regla = reglas.find(r => r.id === reglaSeleccionada);
    if (regla) setCantidad(regla.precio);
  }, [reglaSeleccionada, reglas]);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isNaN(cantidad) || cantidad <= 0) {
      setMensaje("Introduce una cantidad válida (mayor que 0)");
      return;
    }
    if (motivo.length > 100) {
      setMensaje("El motivo es demasiado largo (máx. 100 caracteres)");
      return;
    }
    if (partido.length > 100) {
      setMensaje("El campo partido es demasiado largo (máx. 100 caracteres)");
      return;
    }
    await addDescuento(
      cantidad,
      new Date().toISOString(),
      motivo,
      partido,
      reglaSeleccionada
    );
    setMensaje("Descuento registrado correctamente");
    setCantidad(0);
    setMotivo("");
    setPartido("");
    setReglaSeleccionada(reglas.length > 0 ? reglas[0].id : "");
    setShowOpciones(false);
    setTimeout(() => setMensaje(""), 2000);
  };

  return (
    <div className="p-2 sm:p-4 w-full max-w-sm mx-auto flex flex-col min-h-[80vh]">
      <div className="bg-white rounded-2xl shadow-lg p-4 mt-2 mb-4 flex-1 flex flex-col">
        <h2 className="text-xl font-bold mb-4 text-blue-700 text-center">Descontar bono</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 flex-1">
          <div>
            <div className="flex flex-col gap-2">
              {reglas.length === 0 && (
                <div className="text-center text-gray-400">No hay reglas definidas</div>
              )}
              {reglas.map((r) => (
                <button
                  type="button"
                  key={r.id}
                  className={`w-full px-4 py-4 rounded-xl text-lg font-bold border-2 transition mb-1 flex flex-col items-start text-left
                    ${reglaSeleccionada === r.id ? "bg-blue-100 border-blue-500 text-blue-700" : "bg-white border-blue-100 text-blue-600 hover:bg-blue-50"}`}
                  onClick={() => { setReglaSeleccionada(r.id); setCantidad(r.precio); }}
                >
                  <span>{r.nombre}</span>
                  <span className="text-xs text-gray-500">{r.condicion}</span>
                  <span className="text-base font-bold">{r.precio} €</span>
                </button>
              ))}
            </div>
          </div>
          <div>
            <input
              type="number"
              step="0.01"
              className="w-full border-2 border-blue-100 rounded-xl px-4 py-4 text-2xl font-bold focus:outline-none focus:border-blue-400 transition text-center"
              value={cantidad}
              onChange={e => setCantidad(Number(e.target.value))}
              min={0.01}
              inputMode="decimal"
              required
              placeholder="Cantidad a descontar"
            />
          </div>
          <button
            type="button"
            className="text-blue-600 underline text-sm mb-2"
            onClick={() => setShowOpciones(v => !v)}
          >
            {showOpciones ? "Ocultar opciones avanzadas" : "Opciones avanzadas"}
          </button>
          {showOpciones && (
            <div className="flex flex-col gap-2">
              <input
                type="text"
                className="w-full border-2 border-blue-100 rounded-xl px-4 py-3 text-base focus:outline-none focus:border-blue-400 transition"
                value={motivo}
                onChange={e => setMotivo(e.target.value)}
                maxLength={100}
                placeholder="Motivo (opcional)"
              />
              <input
                type="text"
                className="w-full border-2 border-blue-100 rounded-xl px-4 py-3 text-base focus:outline-none focus:border-blue-400 transition"
                value={partido}
                onChange={e => setPartido(e.target.value)}
                maxLength={100}
                placeholder="Partido (opcional)"
              />
            </div>
          )}
          <div className="flex-1" />
          <button
            type="submit"
            className="w-full bg-red-600 text-white font-bold py-4 rounded-xl shadow hover:bg-red-700 active:bg-red-800 transition text-2xl fixed left-0 right-0 bottom-0 mx-auto max-w-sm mb-4"
            style={{ zIndex: 20 }}
            disabled={reglas.length === 0}
          >
            Registrar descuento
          </button>
          {mensaje && <div className="mt-2 text-center text-green-600 font-medium">{mensaje}</div>}
        </form>
      </div>
    </div>
  );
};

export default Descuento;
