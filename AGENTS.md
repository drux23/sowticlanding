# Sowtic Landing Page Guidelines

Este proyecto es una landing page desarrollada en **React** y orquestada con **Docker** para facilitar el despliegue y el entorno de desarrollo. A continuación se definen algunas reglas y recomendaciones para mantener la consistencia del código y la coherencia con el stack utilizado.

## Estructura del proyecto
- El código fuente se encuentra en `components/`, `App.tsx`, `main.tsx` y otros archivos de la raíz.
- Usa **TypeScript** y React 18.
- El contenedor Docker ejecuta `npm run dev -- --host` para desarrollo.

## Buenas prácticas de desarrollo
- Prefiere componentes funcionales y hooks de React.
- Mantén los componentes desacoplados en la medida de lo posible; crea subcarpetas si surgen nuevas secciones.
- Usa `npm run build` para generar la versión de producción.
- Al agregar dependencias, actualiza `package.json` y `Dockerfile` si es necesario.
- Documenta los componentes principales dentro de comentarios o en el README.

## Uso de Docker
- Para levantar el entorno ejecuta:
  ```bash
  docker-compose up
  ```
  Esto utilizará el `Dockerfile` para instalar dependencias y exponer el puerto 5173.
- Para crear la imagen de producción usa:
  ```bash
  docker build -t sowtic-landing .
  ```

## Contribución
- Antes de crear un Pull Request, asegúrate de que el proyecto compila sin errores.
- Sigue un estilo de código consistente; se recomienda emplear formateadores como Prettier.
- Las descripciones de los commits deben ser claras y en inglés.

