const directionConfig = {
  norte: { label: 'Norte', icon: '⬆️', arrow: '↑' },
  sur:   { label: 'Sur',   icon: '⬇️', arrow: '↓' },
  este:  { label: 'Este',  icon: '➡️', arrow: '→' },
  oeste: { label: 'Oeste', icon: '⬅️', arrow: '←' },
};

export default function DirectionButton({ direction, targetId, onClick }) {
  const config = directionConfig[direction];
  const isDisabled = !targetId;

  return (
    <button
      onClick={() => onClick(direction)}
      disabled={isDisabled}
      className="btn btn-primary flex items-center justify-center gap-2 text-base"
      style={{
        minWidth: '130px',
        padding: '0.8rem 1.2rem',
        ...(isDisabled && {
          backgroundColor: 'var(--color-btn-disabled)',
          color: 'var(--color-text-muted)',
        }),
      }}
      title={
        isDisabled
          ? `No hay salida hacia el ${config.label}`
          : `Ir al ${config.label}`
      }
    >
      <span className="text-lg">{config.icon}</span>
      <span>{config.label}</span>
    </button>
  );
}
