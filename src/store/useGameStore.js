import { create } from 'zustand';
import worldMap from '../data/worldMap.json';

const useGameStore = create((set, get) => ({
  // Estado del jugador
  playerName: '',
  currentLocationId: 'entrada',

  // Establecer nombre del jugador
  setPlayerName: (name) => set({ playerName: name }),

  // Mover al jugador en una dirección
  move: (direction) => {
    const { currentLocationId } = get();
    const currentRoom = worldMap.find((room) => room.id === currentLocationId);

    if (!currentRoom) return;

    const targetId = currentRoom.direcciones[direction];
    if (targetId) {
      set({ currentLocationId: targetId });
    }
  },

  // Obtener datos de la sala actual
  getCurrentRoom: () => {
    const { currentLocationId } = get();
    return worldMap.find((room) => room.id === currentLocationId) || null;
  },

  // Reiniciar juego
  resetGame: () => set({ playerName: '', currentLocationId: 'entrada' }),
}));

export default useGameStore;
