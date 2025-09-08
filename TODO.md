# TODO - BonoCounter

Lista de tareas para el desarrollo completo del proyecto, siguiendo los objetivos, stack y casos de uso definidos.

## 1. Inicialización y configuración

- [x] Inicializar proyecto Vite + React + TypeScript
- [x] Configurar Tailwind CSS
- [x] Instalar y configurar ESLint y Prettier
- [x] Instalar Dexie.js para IndexedDB
- [x] Crear estructura de carpetas base (`/src/components`, `/src/pages`, `/src/db`, `/src/styles`, `/src/utils`)
- [x] Añadir README.md con información básica y completa
- [x] Añadir archivo LICENSE con licencia MIT
- [x] Inicializar repositorio git y subir a GitHub

## 2. Persistencia local

- [x] Implementar configuración de Dexie.js en `/src/db/bonocounter-db.ts`
- [x] Definir modelos de datos: BonoItem, Movimiento, ReglaPrecio

## 3. Pantallas y navegación

- [x] Configurar React Router
- [x] Crear pantalla de saldo e historial de movimientos
- [x] Crear pantalla de recarga de saldo
- [x] Crear pantalla de descuento/registro de partido (rediseñada para mobile)
- [x] Crear pantalla de configuración de reglas de precio
- [x] Crear pantalla de configuración general (reset de movimientos, reglas o todo)

## 4. Lógica de negocio

- [x] Implementar lógica para añadir recargas
- [x] Implementar lógica para registrar partidos y descuentos
- [x] Implementar lógica para aplicar reglas de precio según horario/día (selección automática y manual, soporte decimales)
- [x] Implementar validaciones de formularios
- [x] Implementar eliminación de movimientos
- [x] Implementar reset de movimientos, reglas y app

## 5. Estilos y experiencia de usuario

- [x] Aplicar estilos con Tailwind CSS (mobile first, moderno)
- [x] Mejorar usabilidad y feedback visual
- [x] Añadir mensajes de confirmación y error
- [x] Rediseñar pantalla de descuento para simplicidad móvil
- [x] Menú lateral móvil y navegación responsive

## 6. Testing y calidad

- [ ] Añadir tests con Jest y React Testing Library
- [ ] Verificar persistencia y recuperación de datos
- [ ] Revisar accesibilidad básica

## 7. Documentación y entrega

- [x] Documentar el uso y las funcionalidades en README.md
- [x] Documentar estructura de datos y casos de uso
- [x] Revisar y limpiar código antes de la entrega

---

Actualiza y marca las tareas según avances en el desarrollo.
