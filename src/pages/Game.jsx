import { useMemo } from 'react';
import useGameStore from '../store/useGameStore';
import DirectionButton from '../components/DirectionButton';
import worldMap from '../data/worldMap.json';

export default function Game() {
  const playerName = useGameStore((state) => state.playerName);
  const currentLocationId = useGameStore((state) => state.currentLocationId);
  const move = useGameStore((state) => state.move);

  const currentRoom = useMemo(() => {
    return worldMap.find((room) => room.id === currentLocationId);
  }, [currentLocationId]);

  if (!currentRoom) {
    return (
      <div className="page-container justify-center">
        <p style={{ color: 'var(--color-text-muted)' }}>
          ⚠️ Sala no encontrada. Algo salió mal...
        </p>
      </div>
    );
  }

  const directions = ['norte', 'sur', 'este', 'oeste'];

  return (
    <div className="page-container">
      <div className="w-full max-w-2xl px-4">
        {/* Player Header */}
        <div
          className="animate-fade-in mb-6 text-center"
          style={{ color: 'var(--color-text-muted)' }}
        >
          <span className="text-sm uppercase tracking-widest">
            🧙 {playerName} — Explorando
          </span>
        </div>

        {/* Room Card */}
        <div className="card animate-slide-up mb-8 overflow-hidden">
          {/* Room Header */}
          <div
            className="px-6 py-5 text-center"
            style={{
              borderBottom: '1px solid var(--color-border)',
              background: 'linear-gradient(135deg, var(--color-bg-secondary), var(--color-bg-card))',
            }}
          >
            <span className="mb-2 block text-5xl">{currentRoom.emoji}</span>
            <h1
              className="text-2xl font-bold sm:text-3xl"
              style={{
                fontFamily: 'var(--font-heading)',
                color: 'var(--color-text-primary)',
              }}
            >
              {currentRoom.nombre}
            </h1>
          </div>

          {/* Room Description */}
          <div className="px-6 py-6">
            <p
              className="text-center text-lg leading-relaxed"
              style={{
                color: 'var(--color-text-secondary)',
                fontStyle: 'italic',
              }}
            >
              "{currentRoom.descripcion}"
            </p>
          </div>
        </div>

        {/* Direction Controls — Compass Layout */}
        <div className="animate-fade-in mb-6">
          <h2
            className="mb-4 text-center text-lg font-semibold"
            style={{
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-text-secondary)',
            }}
          >
            🧭 ¿Hacia dónde quieres ir?
          </h2>

          <div className="flex flex-col items-center gap-2">
            {/* Norte */}
            <DirectionButton
              direction="norte"
              targetId={currentRoom.direcciones.norte}
              onClick={move}
            />

            {/* Oeste - Centro - Este */}
            <div className="flex items-center gap-2">
              <DirectionButton
                direction="oeste"
                targetId={currentRoom.direcciones.oeste}
                onClick={move}
              />

              {/* Center compass indicator */}
              <div
                className="flex h-[52px] w-[52px] items-center justify-center rounded-full text-2xl"
                style={{
                  backgroundColor: 'var(--color-bg-secondary)',
                  border: '2px solid var(--color-border)',
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

            {/* Sur */}
            <DirectionButton
              direction="sur"
              targetId={currentRoom.direcciones.sur}
              onClick={move}
            />
          </div>
        </div>

        {/* Available exits hint */}
        <div
          className="text-center text-sm"
          style={{ color: 'var(--color-text-muted)' }}
        >
          <p>
            Salidas disponibles:{' '}
            {directions
              .filter((d) => currentRoom.direcciones[d])
              .map((d) => d.charAt(0).toUpperCase() + d.slice(1))
              .join(', ') || 'Ninguna'}
          </p>
        </div>
      </div>
    </div>
  );
}
