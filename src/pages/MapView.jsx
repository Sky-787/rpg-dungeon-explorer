import useGameStore from '../store/useGameStore';
import worldMap from '../data/worldMap.json';

export default function MapView() {
  const currentLocationId = useGameStore((state) => state.currentLocationId);
  const playerName = useGameStore((state) => state.playerName);

  return (
    <div className="page-container">
      <div className="w-full max-w-3xl px-4">
        {/* Header */}
        <div className="animate-fade-in mb-8 text-center">
          <h1
            className="mb-2 text-3xl font-bold sm:text-4xl"
            style={{
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-text-primary)',
            }}
          >
            🗺️ Mapa de la Mazmorra
          </h1>
          <p
            className="text-sm"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Ubicación de {playerName}:&nbsp;
            <strong style={{ color: 'var(--color-text-accent)' }}>
              {worldMap.find((r) => r.id === currentLocationId)?.nombre}
            </strong>
          </p>
        </div>

        {/* Room List */}
        <div className="flex flex-col gap-4">
          {worldMap.map((room, index) => {
            const isCurrentRoom = room.id === currentLocationId;
            const availableExits = Object.entries(room.direcciones)
              .filter(([, value]) => value !== null)
              .map(([dir]) => dir.charAt(0).toUpperCase() + dir.slice(1));

            return (
              <div
                key={room.id}
                className="card animate-slide-up overflow-hidden"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  borderColor: isCurrentRoom
                    ? 'var(--color-border-highlight)'
                    : 'var(--color-border-card)',
                  borderWidth: isCurrentRoom ? '2px' : '1px',
                  backgroundColor: isCurrentRoom
                    ? 'var(--color-bg-highlight)'
                    : 'var(--color-bg-card)',
                  ...(isCurrentRoom && {
                    boxShadow: 'var(--shadow-glow)',
                  }),
                }}
              >
                <div className="flex items-start gap-4 p-5">
                  {/* Room Emoji */}
                  <div
                    className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl text-3xl"
                    style={{
                      backgroundColor: isCurrentRoom
                        ? 'var(--color-accent)'
                        : 'var(--color-bg-secondary)',
                      ...(isCurrentRoom && {
                        color: 'white',
                      }),
                    }}
                  >
                    {room.emoji}
                  </div>

                  {/* Room Info */}
                  <div className="flex-1">
                    <div className="mb-1 flex flex-wrap items-center gap-2">
                      <h2
                        className="text-lg font-bold"
                        style={{
                          fontFamily: 'var(--font-heading)',
                          color: 'var(--color-text-primary)',
                        }}
                      >
                        {room.nombre}
                      </h2>

                      {isCurrentRoom && (
                        <span
                          className="pulse-glow-anim inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider"
                          style={{
                            backgroundColor: 'var(--color-accent)',
                            color: 'white',
                          }}
                        >
                          🚩 ESTÁS AQUÍ
                        </span>
                      )}
                    </div>

                    <p
                      className="mb-3 text-sm leading-relaxed"
                      style={{ color: 'var(--color-text-secondary)' }}
                    >
                      {room.descripcion}
                    </p>

                    {/* Exits */}
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span
                        className="text-xs font-medium"
                        style={{ color: 'var(--color-text-muted)' }}
                      >
                        Salidas:
                      </span>
                      {availableExits.length > 0 ? (
                        availableExits.map((exit) => (
                          <span
                            key={exit}
                            className="rounded px-2 py-0.5 text-xs font-medium"
                            style={{
                              backgroundColor: 'var(--color-bg-secondary)',
                              color: 'var(--color-text-secondary)',
                              border: '1px solid var(--color-border)',
                            }}
                          >
                            {exit}
                          </span>
                        ))
                      ) : (
                        <span
                          className="text-xs italic"
                          style={{ color: 'var(--color-text-muted)' }}
                        >
                          Sin salidas
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
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
