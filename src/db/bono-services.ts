// Eliminar un movimiento por id
export async function deleteMovimiento(id: string) {
  await db.movimientos.delete(id);
}
import { db } from './bonocounter-db';
import type { Movimiento, ReglaPrecio } from './bonocounter-db';

// Añadir una recarga de saldo
export async function addRecarga(cantidad: number, fecha: string, comentario?: string) {
  const movimiento: Movimiento = {
    id: crypto.randomUUID(),
    tipo: 'carga',
    cantidad,
    fecha,
    motivo: comentario,
  };
  await db.movimientos.add(movimiento);
}

// Registrar un partido/descuento
export async function addDescuento(cantidad: number, fecha: string, motivo?: string, partido?: string, reglaAplicada?: string) {
  const movimiento: Movimiento = {
    id: crypto.randomUUID(),
    tipo: 'descuento',
    cantidad,
    fecha,
    motivo,
    partido,
    reglaAplicada,
  };
  await db.movimientos.add(movimiento);
}

// Obtener todos los movimientos ordenados por fecha descendente
export async function getMovimientos(): Promise<Movimiento[]> {
  return db.movimientos.orderBy('fecha').reverse().toArray();
}

// Calcular el saldo actual a partir de los movimientos
export async function getSaldoActual(): Promise<number> {
  const movimientos = await db.movimientos.toArray();
  return movimientos.reduce((saldo, mov) =>
    mov.tipo === 'carga' ? saldo + mov.cantidad : saldo - mov.cantidad, 0);
}

// Reglas de precio
export async function getReglas(): Promise<ReglaPrecio[]> {
  return db.reglas.toArray();
}

export async function addRegla(regla: Omit<ReglaPrecio, 'id'>) {
  const nuevaRegla: ReglaPrecio = { ...regla, id: crypto.randomUUID() };
  await db.reglas.add(nuevaRegla);
}

export async function updateRegla(id: string, data: Partial<ReglaPrecio>) {
  await db.reglas.update(id, data);
}

export async function deleteRegla(id: string) {
  await db.reglas.delete(id);
}

// Buscar la regla aplicable según condiciones (simplificado)
export async function findReglaAplicable(condicion: string): Promise<ReglaPrecio | undefined> {
  const reglas = await db.reglas.toArray();
  return reglas.find(r => r.condicion === condicion);
}
