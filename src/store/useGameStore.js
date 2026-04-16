import { create } from 'zustand';
import worldMap from '../data/worldMap.json';

const useGameStore = create((set, get) => ({
  // Estado del jugador
  playerName: '',
  currentLocationId: 'entrada',

  // Estadísticas y Seguimiento
  moveHistory: [],
  visitedRooms: ['entrada'], // Empezamos en la entrada
  totalSteps: 0,

  // Establecer nombre del jugador
  setPlayerName: (name) => set({ playerName: name }),

  // Mover al jugador en una dirección
  move: (direction) => {
    const { currentLocationId, moveHistory, visitedRooms, totalSteps } = get();
    const currentRoom = worldMap.find((room) => room.id === currentLocationId);

    if (!currentRoom) return;

    const targetId = currentRoom.direcciones[direction];
    const targetRoom = worldMap.find((room) => room.id === targetId);

    if (targetId && targetRoom) {
      set({
        currentLocationId: targetId,
        totalSteps: totalSteps + 1,
        // Guardar en el historial (los últimos 10 movimientos)
        moveHistory: [
          {
            roomName: targetRoom.nombre,
            emoji: targetRoom.emoji,
            timestamp: new Date().toLocaleTimeString(),
          },
          ...moveHistory,
        ].slice(0, 10),
        // Agregar a salas visitadas si no estaba
        visitedRooms: visitedRooms.includes(targetId)
          ? visitedRooms
          : [...visitedRooms, targetId],
      });
    }
  },

  // Obtener datos de la sala actual
  getCurrentRoom: () => {
    const { currentLocationId } = get();
    return worldMap.find((room) => room.id === currentLocationId) || null;
  },

  // Reiniciar juego
  resetGame: () =>
    set({
      playerName: '',
      currentLocationId: 'entrada',
      moveHistory: [],
      visitedRooms: ['entrada'],
      totalSteps: 0,
    }),
}));

export default useGameStore;
