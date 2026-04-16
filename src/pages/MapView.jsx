import useGameStore from '../store/useGameStore';
import worldMap from '../data/worldMap.json';
import RoomCard from '../components/RoomCard';

export default function MapView() {
  const currentLocationId = useGameStore((state) => state.currentLocationId);
  const playerName = useGameStore((state) => state.playerName);

  return (
    <div className="page-container">
      <div className="w-full max-w-3xl px-4">
        {/* Header */}
        <div className="animate-fade-in mb-12 text-center">
          <h1 className="mb-3 text-4xl font-black uppercase tracking-tight">
            🗺️ Mapa de la Mazmorra
          </h1>
          <p className="text-sm font-medium opacity-70">
            Explorador: <span className="text-accent">{playerName}</span> | Ubicación: <span className="font-bold">{worldMap.find((r) => r.id === currentLocationId)?.nombre}</span>
          </p>
        </div>

        {/* Room List */}
        <div className="flex flex-col gap-6">
          {worldMap.map((room, index) => (
            <RoomCard
              key={room.id}
              room={room}
              isCurrentRoom={room.id === currentLocationId}
              index={index}
            />
          ))}
        </div>

        {/* Legend */}
        <div
          className="mt-8 text-center text-sm"
          style={{ color: 'var(--color-text-muted)' }}
        >
          <p>🚩 = Tu ubicación actual &nbsp;|&nbsp; Total de salas: {worldMap.length}</p>
        </div>
      </div>
    </div>
  );
}
