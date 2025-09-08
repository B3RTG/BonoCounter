import Dexie from 'dexie';
import type { Table } from 'dexie';

export interface BonoItem {
  id: string;
  cantidad: number;
  fecha: string;
  comentario?: string;
}

export interface Movimiento {
  id: string;
  tipo: 'carga' | 'descuento';
  cantidad: number;
  fecha: string;
  motivo?: string;
  partido?: string;
  reglaAplicada?: string;
}

export interface ReglaPrecio {
  id: string;
  nombre: string;
  descripcion?: string;
  condicion: string; // Ejemplo: "Lunes a Viernes 18:00-22:00"
  precio: number;
}

export class BonoCounterDB extends Dexie {
  bonos!: Table<BonoItem, string>;
  movimientos!: Table<Movimiento, string>;
  reglas!: Table<ReglaPrecio, string>;

  constructor() {
    super('BonoCounterDB');
    this.version(1).stores({
      bonos: 'id',
      movimientos: 'id, tipo, fecha',
      reglas: 'id, nombre',
    });
  }
}

export const db = new BonoCounterDB();
