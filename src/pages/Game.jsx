import { useMemo } from 'react';
import useGameStore from '../store/useGameStore';
import DirectionButton from '../components/DirectionButton';
import worldMap from '../data/worldMap.json';

export default function Game() {
  const playerName = useGameStore((state) => state.playerName);
  const currentLocationId = useGameStore((state) => state.currentLocationId);
  const moveHistory = useGameStore((state) => state.moveHistory);
  const move = useGameStore((state) => state.move);

  const currentRoom = useMemo(() => {
    return worldMap.find((room) => room.id === currentLocationId);
  }, [currentLocationId]);

  if (!currentRoom) {
    return (
      <div className="page-container justify-center">
        <div className="glass-card p-10 text-center">
          <p className="text-xl font-bold" style={{ color: 'var(--color-text-muted)' }}>
            ⚠️ Sala no encontrada. Algo salió mal...
          </p>
        </div>
      </div>
    );
  }

  const directions = ['norte', 'sur', 'este', 'oeste'];

  return (
    <div className="page-container">
      <div className="w-full max-w-2xl px-4">
        {/* Player Header */}
        <div
          className="animate-fade-in mb-8 text-center"
        >
          <span className="rounded-full bg-secondary px-4 py-1.5 text-xs font-black uppercase tracking-widest shadow-sm">
            🧙 {playerName} — Explorando
          </span>
        </div>

        {/* Room Card - Con animación de cambio */}
        <div
          key={currentLocationId}
          className="card animate-room-change mb-10 overflow-hidden"
        >
          {/* Room Header */}
          <div
            className="px-6 py-8 text-center"
            style={{
              borderBottom: '1px solid var(--color-border)',
              background: 'linear-gradient(135deg, var(--color-bg-secondary), var(--color-bg-card))',
            }}
          >
            <span className="animate-float mb-4 block text-6xl">{currentRoom.emoji}</span>
            <h1 className="text-3xl font-black uppercase tracking-tight">
              {currentRoom.nombre}
            </h1>
          </div>

          {/* Room Description */}
          <div className="px-8 py-8">
            <p
              className="text-center text-xl leading-relaxed opacity-90"
              style={{
                color: 'var(--color-text-secondary)',
                fontStyle: 'italic',
              }}
            >
              "{currentRoom.descripcion}"
            </p>
          </div>
        </div>

        {/* Controls and History Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

          {/* Direction Controls */}
          <div className="glass-card animate-slide-up p-6">
            <h2 className="mb-6 text-center text-sm font-bold uppercase tracking-widest opacity-70">
              🧭 Movimiento
            </h2>

            <div className="flex flex-col items-center gap-3">
              <DirectionButton
                direction="norte"
                targetId={currentRoom.direcciones.norte}
                onClick={move}
              />

              <div className="flex items-center gap-3">
                <DirectionButton
                  direction="oeste"
                  targetId={currentRoom.direcciones.oeste}
                  onClick={move}
                />

                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full text-xl shadow-inner"
                  style={{
                    backgroundColor: 'var(--color-bg-secondary)',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  🧭
                </div>

                <DirectionButton
                  direction="este"
                  targetId={currentRoom.direcciones.este}
                  onClick={move}
                />
              </div>

              <DirectionButton
                direction="sur"
                targetId={currentRoom.direcciones.sur}
                onClick={move}
              />
            </div>

            <div className="mt-6 text-center text-[10px] font-bold uppercase tracking-widest opacity-40">
              {directions.filter(d => currentRoom.direcciones[d]).length} Salidas disponibles
            </div>
          </div>

          {/* Move History */}
          <div className="glass-card animate-slide-up p-6" style={{ animationDelay: '0.2s' }}>
            <h2 className="mb-4 text-center text-sm font-bold uppercase tracking-widest opacity-70">
              📜 Historial Reciente
            </h2>

            <div className="flex flex-col gap-3">
              {moveHistory.length > 0 ? (
                moveHistory.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between rounded-lg bg-secondary bg-opacity-30 p-2.5 text-xs transition-all hover:bg-opacity-50"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{step.emoji}</span>
                      <span className="font-bold">{step.roomName}</span>
                    </div>
                    <span className="opacity-50">{step.timestamp}</span>
                  </div>
                ))
              ) : (
                <div className="py-10 text-center text-xs italic opacity-40">
                  Aún no has dado ningún paso...
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
