# Sowtic Landing Page

Bienvenido al repositorio oficial de la landing page de **Sowtic**, una empresa de desarrollo de software dedicada a brindar soluciones digitales innovadoras y a medida.

## 🌐 Descripción

Este proyecto es una interfaz web moderna diseñada para presentar los servicios, valores y propuestas de Sowtic. Está enfocada en transmitir profesionalismo, confianza y experiencia en el desarrollo de productos digitales.

## 🚀 ¿Qué resuelve?

Sowtic ayuda a empresas y organizaciones a diseñar, construir y escalar productos digitales, resolviendo desafíos técnicos y estratégicos mediante el uso de tecnologías de software modernas.

## 🛠️ Tecnologías utilizadas

El prototipo fue generado en **Figma** y posteriormente exportado a código. La interfaz está desarrollada con las siguientes herramientas:

- **React** + **TypeScript** para la lógica y estructura de la aplicación.
- **Tailwind CSS** para la composición de estilos utilitarios.
- Componentes de **shadcn/ui** basados en **Radix UI**.
- Iconos proporcionados por **lucide-react**.

### Dependencias principales

Este repositorio declara, entre otras, las siguientes dependencias en `package.json`:

- `react` y `react-dom`
- Paquetes de `@radix-ui` para los distintos componentes de interfaz
- `tailwindcss`, `postcss` y `autoprefixer`
- `clsx`, `tailwind-merge` y `class-variance-authority`
- Utilidades como `react-hook-form`, `react-day-picker`, `embla-carousel-react`, `lucide-react` y `sonner`

## 📦 Instalación

Este proyecto utiliza un entorno **React** con **Vite**. Todas las dependencias necesarias se encuentran especificadas en `package.json` e incluyen React, TypeScript, Tailwind CSS y los paquetes de **Radix UI** utilizados por los componentes de `shadcn/ui`.

Si desea ejecutarlo de forma local sin contenedores:

```bash
npm install
npm run dev
```

### Ejecución con Docker

1. Construya la imagen:
   ```bash
   docker build -t sowtic-landing .
   ```
2. Ejecute el contenedor resultante:
   ```bash
   docker run --rm -p 4173:4173 sowtic-landing
   ```
3. Abra `http://localhost:4173` en su navegador para ver la aplicación.

## 💻 Interfaz

Este es un proyecto con **interfaz web** responsiva, pensado para navegadores modernos y dispositivos móviles.

## 🧑‍💻 Autor

Desarrollado por [Tu Nombre Aquí].

## 📄 Licencia

Este proyecto aún no cuenta con una licencia definida.
