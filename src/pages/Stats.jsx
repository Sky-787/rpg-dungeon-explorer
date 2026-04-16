import React from 'react';
import useGameStore from '../store/useGameStore';
import worldMap from '../data/worldMap.json';

export default function Stats() {
  const { totalSteps, visitedRooms, playerName } = useGameStore();

  const totalRooms = worldMap.length;
  const visitedCount = visitedRooms.length;
  const completionPercentage = Math.round((visitedCount / totalRooms) * 100);

  return (
    <div className="page-container">
      <div className="w-full max-w-4xl px-4">
        {/* Header */}
        <div className="animate-fade-in mb-10 text-center">
          <h1 className="mb-2 text-4xl font-bold">📊 Estadísticas del Héroe</h1>
          <p style={{ color: 'var(--color-text-muted)' }}>
            El progreso de <span className="font-bold text-accent">{playerName}</span> en la mazmorra
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Main Stats */}
          <div className="glass-card flex flex-col items-center justify-center p-8 transition-transform hover:scale-105">
            <span className="mb-2 text-4xl">👣</span>
            <span className="text-3xl font-black">{totalSteps}</span>
            <span className="text-xs font-bold uppercase tracking-widest opacity-70">Pasos Dados</span>
          </div>

          <div className="glass-card flex flex-col items-center justify-center p-8 transition-transform hover:scale-105">
            <span className="mb-2 text-4xl">🗺️</span>
            <span className="text-3xl font-black">{visitedCount} / {totalRooms}</span>
            <span className="text-xs font-bold uppercase tracking-widest opacity-70">Salas Descubiertas</span>
          </div>

          <div className="glass-card flex flex-col items-center justify-center p-8 transition-transform hover:scale-105">
            <span className="mb-2 text-4xl">🏆</span>
            <span className="text-3xl font-black">{completionPercentage}%</span>
            <span className="text-xs font-bold uppercase tracking-widest opacity-70">Exploración Total</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="glass-card mt-10 p-8">
          <div className="mb-4 flex justify-between text-sm font-bold uppercase tracking-tight">
            <span>Progreso de Exploración</span>
            <span>{visitedCount} de {totalRooms} salas</span>
          </div>
          <div className="h-4 w-full overflow-hidden rounded-full bg-secondary shadow-inner">
            <div
              className="h-full rounded-full transition-all duration-1000 ease-out"
              style={{
                width: `${completionPercentage}%`,
                background: 'linear-gradient(90deg, var(--color-accent) 0%, var(--color-accent-hover) 100%)',
                boxShadow: '0 0 15px var(--color-accent)'
              }}
            ></div>
          </div>
        </div>

        {/* Visited Rooms List */}
        <div className="mt-10">
          <h2 className="mb-6 text-2xl font-bold">Bitácora de Viaje</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {worldMap.map((room) => {
              const visited = visitedRooms.includes(room.id);
              return (
                <div
                  key={room.id}
                  className={`flex flex-col items-center rounded-xl p-4 text-center transition-all ${visited
                      ? 'glass-card border-accent opacity-100'
                      : 'border-dashed border-gray-400 opacity-30 grayscale'
                    }`}
                  style={{ borderWidth: visited ? '1px' : '2px' }}
                >
                  <span className="mb-2 text-3xl">{visited ? room.emoji : '❓'}</span>
                  <span className="text-xs font-bold leading-tight">
                    {visited ? room.nombre : 'Desconocida'}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
