# Alcance y Objetivo del Proyecto

**NOTA SOBRE EL SISTEMA OPERATIVO:**
El desarrollo y uso de este proyecto se realiza en Windows. Todos los comandos y scripts deben ser compatibles con Windows y su shell (PowerShell o CMD). Evitar comandos específicos de otros sistemas operativos como Linux o macOS.

# Alcance y Objetivo del Proyecto

El objetivo de este proyecto es desarrollar una aplicación web que permita a los usuarios llevar un control sencillo y efectivo de un bono monedero de un club de pádel. La aplicación permitirá:

- Registrar y visualizar el saldo actual del bono monedero.
- Añadir nuevas recargas o cargas de saldo al bono.
- Registrar y descontar el importe correspondiente cada vez que se juegue un partido, permitiendo ajustar el importe según el horario o día del partido.
- Visualizar el historial de movimientos (cargas y descuentos) para un mejor seguimiento.

El alcance se limita a la gestión local de los datos en el navegador del usuario, sin necesidad de backend ni sincronización en la nube.

# NOTA IMPORTANTE

Todas las decisiones técnicas, implementaciones y configuraciones del proyecto deben seguir las directrices y recomendaciones de este documento. Consulta y actualiza este archivo ante cualquier cambio relevante en el stack o la arquitectura.

# Proyecto Web: Stack Tecnológico

Este documento define el stack tecnológico inicial recomendado para el desarrollo de un proyecto web con React en el frontend. Puedes modificar o ampliar estas recomendaciones según las necesidades del proyecto.

## 1. Frontend

- **Persistencia local de datos:** IndexedDB (recomendado para datos estructurados y persistentes)
  - Librería sugerida: Dexie.js (simplifica el uso de IndexedDB en React)
- **Consumo de APIs:** fetch, axios o react-query
- **Testing:** Jest + React Testing Library
  - `/db` (configuración y lógica de acceso a IndexedDB)
- **ORM:** Prisma, Sequelize o Mongoose
- **Testing:** Jest, Supertest
- Instalar la librería Dexie.js para gestionar IndexedDB: `npm install dexie`
- Crear una carpeta `/src/db` con la configuración de la base de datos y funciones de acceso.

### Ejemplo de estructura de IndexedDB con Dexie.js

```typescript
// src/db/bonocounter-db.ts
import Dexie, { Table } from "dexie";

export interface BonoItem {
  id: string;
  nombre: string;
  cantidad: number;
  fecha: string;
}

export class BonoCounterDB extends Dexie {
  bonos!: Table<BonoItem, string>;
  constructor() {
    super("BonoCounterDB");
    this.version(1).stores({
      bonos: "id, nombre, cantidad, fecha",
    });
  }
}

export const db = new BonoCounterDB();
```

Puedes adaptar la interfaz `BonoItem` y los campos según las necesidades de tu aplicación.

- **Documentación:** README.md, Storybook (para componentes UI)

## 4. Estructura de carpetas sugerida

- `/src` (código fuente)
  - `/components` (componentes React)
  - `/pages` (vistas o páginas)
  - `/services` (servicios/API)
  - `/styles` (estilos globales)
  - `/utils` (utilidades)
- `/public` (archivos estáticos)

## 5. Indicaciones iniciales

- Iniciar el proyecto con:
  - `npm create vite@latest` y seleccionar **React + TypeScript**
- Instalar y configurar **Tailwind CSS** siguiendo la documentación oficial.
- Configurar ESLint y Prettier desde el inicio.
- Usar control de versiones desde el primer commit.
- Escribir documentación básica en el README.md.

---

**Siguiente paso:**

- Confirmar el stack y las herramientas elegidas.
- Inicializar el proyecto con el generador seleccionado.
- Configurar las herramientas de linting y formateo.
- Crear la estructura de carpetas base.
