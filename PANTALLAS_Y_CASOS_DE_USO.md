# Definición Técnica: Pantallas y Casos de Uso

Este documento describe las pantallas principales y los casos de uso previstos para la aplicación BonoCounter.


## Mejoras sugeridas para la pantalla de saldo e historial

- Mejorar el tipado de los movimientos para mayor robustez.
- Añadir filtros por tipo de movimiento (recarga/descuento) y por fecha.
- Permitir búsqueda o filtrado por comentario/motivo.
- Mostrar detalles adicionales como reglas aplicadas o tipo de partido.
- Añadir opción para eliminar o editar movimientos (con confirmación).

## Pantallas principales

1. **Pantalla de saldo y movimientos**
   - Visualiza el saldo actual del bono monedero.
   - Lista de movimientos (cargas y descuentos) con fecha, tipo y cantidad.
   - Acceso a acciones de recarga y descuento.

2. **Pantalla de recarga**
   - Formulario para añadir una nueva recarga al bono.
   - Campos: cantidad, fecha (por defecto hoy), comentario opcional.
   - Botón para confirmar recarga.

3. **Pantalla de descuento (partido)**
   - Formulario para registrar un partido y descontar el importe correspondiente.
   - Campos: cantidad a descontar, fecha (por defecto hoy), tipo de partido (normal, especial, horario, etc.), comentario opcional.
   - Botón para confirmar descuento.

4. **Pantalla de configuración (opcional)**
   - Permite definir reglas de precio según horario, día o tipo de partido.
   - Permite editar o eliminar reglas.

## Casos de uso principales

- Consultar saldo actual del bono.
- Consultar historial de movimientos.
- Añadir una recarga de saldo.
- Registrar un partido y descontar saldo.
- Configurar reglas de precio (opcional, para automatizar descuentos según condiciones).
- Editar/eliminar movimientos (opcional, para corrección de errores).


## Notas técnicas

- El diseño y la interfaz deben ser mobile first, priorizando la experiencia en dispositivos móviles, pero asegurando también una visualización y uso óptimos en ordenadores de escritorio.
- Todas las operaciones afectan solo al almacenamiento local (IndexedDB).
- La navegación entre pantallas se realizará con React Router.
- Los formularios validarán los datos antes de guardar.

---

Este documento puede ampliarse o detallarse según evolucione el desarrollo.
