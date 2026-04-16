![RPG Dungeon Explorer Banner](./banner.png)

# 🐉 RPG Dungeon Explorer

**RPG Dungeon Explorer** es una aplicación web de aventura y exploración de mazmorras diseñada con un enfoque en la experiencia de usuario inmersiva y una arquitectura técnica moderna. El proyecto permite a los jugadores adentrarse en un mundo dinámico de fantasía, rastrear su progreso y descubrir secretos ocultos mediante una interfaz intuitiva y visualmente impactante.

## 🕹️ Funcionalidades del Juego

El proyecto integra múltiples sistemas para ofrecer una experiencia de juego completa:

- **Sistema de Exploración Interactiva**: Navegación fluida entre salas mediante un compás direccional (Norte, Sur, Este, Oeste). Las conexiones entre salas son dinámicas y dependen de la lógica interna del mapa.
- **Bitácora de Movimiento**: Un registro en tiempo real que muestra los últimos 10 pasos del jugador, incluyendo el nombre de la sala, su emoji representativo y la hora exacta del movimiento.
- **Mapa Dinámico y Visual**: Una vista completa de la mazmorra que destaca la ubicación actual del héroe y muestra la información de cada sala de forma organizada.
- **Panel de Estadísticas Avanzado**: Una sección dedicada al seguimiento del progreso del jugador que incluye:
    - **Contador de pasos totales**: Mide la actividad del aventurero.
    - **Progreso de exploración**: Una barra dinámica que calcula el porcentaje de salas descubiertas.
    - **Registro de Descubrimientos**: Una cuadrícula visual que diferencia las salas visitadas de las desconocidas.

## 🛠️ Arquitectura y Tecnologías

El proyecto está construido bajo los más altos estándares de desarrollo web actual:

- **React 19 & Vite**: Para una interfaz reactiva, modular y un rendimiento de carga optimizado.
- **Manejo de Estado con Zustand 5**: Gestión centralizada de los datos del jugador (nombre, posición e historial) que permite una persistencia lógica durante la sesión de juego.
- **Navegación con React Router 7**: Sistema de rutas robusto que incluye protección de rutas (requiere nombre de jugador para entrar a la mazmorra) y una **página 404 personalizada** integrada en la temática del juego.
- **Diseño Premium con Tailwind CSS 4**: 
    - Uso de **Glassmorphism** para tarjetas y paneles traslúcidos.
    - Sistema de temas (Claro/Oscuro) adaptado a la narrativa (Modo Pergamino y Modo Calabozo).
    - Animaciones suaves (`animate-fade-in`, `animate-slide-up`, `animate-room-change`) que mejoran la inmersión del usuario.
- **Componentización**: Estructura de código limpia con componentes reutilizables como `RoomCard` y `DirectionButton`, facilitando la mantenibilidad y escalabilidad del mapa.

## 📦 Instalación y Ejecución

Para ejecutar este proyecto en tu entorno local, sigue estos pasos:

1.  **Clonación del repositorio**:
    ```bash
    git clone [url-del-repositorio]
    ```
2.  **Instalación de dependencias**:
    ```bash
    npm install
    ```
3.  **Lanzamiento del servidor de desarrollo**:
    ```bash
    npm run dev
    ```
4.  **Acceso web**: Abre tu navegador en `http://localhost:5173`.

---

**Explora, descubre y sobrevive en las profundidades de la mazmorra.** ⚔️📜
