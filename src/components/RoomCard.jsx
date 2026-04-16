import React from 'react';

/**
 * RoomCard component for displaying room information in a consistent way.
 * @param {Object} props
 * @param {Object} props.room - Room data object
 * @param {boolean} props.isCurrentRoom - Whether this is the player's current location
 * @param {number} props.index - Index for animation delay
 */
export default function RoomCard({ room, isCurrentRoom, index }) {
  const availableExits = Object.entries(room.direcciones)
    .filter(([, value]) => value !== null)
    .map(([dir]) => dir.charAt(0).toUpperCase() + dir.slice(1));

  return (
    <div
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
          className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl text-3xl transition-transform hover:scale-110"
          style={{
            backgroundColor: isCurrentRoom
              ? 'var(--color-accent)'
              : 'var(--color-bg-secondary)',
            color: isCurrentRoom ? 'white' : 'inherit',
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
              className="text-xs font-semibold uppercase tracking-tight"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Salidas:
            </span>
            {availableExits.length > 0 ? (
              availableExits.map((exit) => (
                <span
                  key={exit}
                  className="rounded-md px-2 py-0.5 text-xs font-medium transition-colors hover:bg-opacity-80"
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
                Sin salidas conocidas
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
