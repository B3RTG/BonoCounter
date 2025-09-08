# BonoCounter

Aplicación web para la gestión de un bono monedero de club de pádel.

## Objetivo
Permite llevar el control de saldo, recargas, descuentos y reglas de precio de un bono monedero, todo de forma local en el navegador, sin backend.

## Características principales
- Consulta y visualización del saldo actual.
- Registro de recargas y descuentos (partidos).
- Historial de movimientos con detalles.
- Configuración de reglas de precio según horario, día o tipo de partido.
- Reset independiente de movimientos, reglas o toda la app.
- Mobile first: interfaz optimizada para móviles y usable en escritorio.
- Persistencia local con IndexedDB (Dexie.js).

## Stack tecnológico
- React + Vite + TypeScript
- Tailwind CSS (diseño moderno y responsive)
- Dexie.js (IndexedDB)
- React Router
- ESLint + Prettier

## Estructura de carpetas
- `/src/pages` — Pantallas principales (Saldo, Recarga, Descuento, Configuración)
- `/src/components` — Componentes reutilizables (Header, Menú, SaldoCard...)
- `/src/db` — Lógica de acceso y modelo de datos Dexie.js

## Pantallas principales
- **Saldo e Historial:** Consulta de saldo y movimientos.
- **Recarga:** Añadir saldo al bono.
- **Descuento:** Registrar partido/descuento (selección rápida de regla, campos opcionales ocultos).
- **Configuración de reglas:** Añadir, editar o eliminar reglas de precio.
- **Configuración de app:** Reset de movimientos, reglas o todo.

## Instalación y desarrollo
1. Clona el repositorio:
   ```sh
   git clone https://github.com/B3RTG/BonoCounter.git
   cd BonoCounter
   ```
2. Instala dependencias:
   ```sh
   npm install
   ```
3. Inicia el entorno de desarrollo:
   ```sh
   npm run dev
   ```

## Uso
- Navega entre pantallas desde el menú lateral (en móvil) o superior (en escritorio).
- Añade recargas o descuentos fácilmente.
- Configura reglas de precio según tus necesidades.
- Puedes resetear movimientos, reglas o todo desde la pantalla de configuración.

## Notas técnicas
- Todos los datos se almacenan localmente en el navegador (IndexedDB).
- No requiere backend ni conexión a internet tras la carga inicial.
- El diseño es mobile first, pero usable en escritorio.

## Licencia
MIT
