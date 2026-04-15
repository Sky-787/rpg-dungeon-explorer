import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useGameStore from '../store/useGameStore';

export default function Home() {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const setPlayerName = useGameStore((state) => state.setPlayerName);
  const existingName = useGameStore((state) => state.playerName);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) {
      setError('Debes ingresar un nombre para tu personaje');
      return;
    }
    if (trimmed.length < 2) {
      setError('El nombre debe tener al menos 2 caracteres');
      return;
    }
    setPlayerName(trimmed);
    navigate('/game');
  };

  const handleContinue = () => {
    navigate('/game');
  };

  return (
    <div className="page-container justify-center">
      <div className="animate-slide-up w-full max-w-lg px-4">
        {/* Title Section */}
        <div className="mb-10 text-center">
          <div className="animate-float mb-4 text-7xl">🐉</div>
          <h1
            className="mb-3 text-4xl font-bold tracking-wide sm:text-5xl"
            style={{
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-text-primary)',
            }}
          >
            Dungeon Explorer
          </h1>
          <p
            className="text-lg"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Adéntrate en las profundidades y descubre los secretos de la mazmorra
          </p>
        </div>

        {/* Form Card */}
        <div className="card p-8">
          {existingName ? (
            /* Continue Adventure */
            <div className="text-center">
              <p
                className="mb-2 text-lg"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                ¡Bienvenido de vuelta!
              </p>
              <p
                className="mb-6 text-2xl font-bold"
                style={{
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--color-text-accent)',
                }}
              >
                🧙 {existingName}
              </p>
              <button
                onClick={handleContinue}
                className="btn btn-primary mb-4 w-full text-lg"
              >
                ⚔️ Continuar Aventura
              </button>
              <button
                onClick={() => {
                  useGameStore.getState().resetGame();
                  setName('');
                }}
                className="btn w-full"
                style={{
                  backgroundColor: 'transparent',
                  color: 'var(--color-text-muted)',
                  border: '1px solid var(--color-border)',
                }}
              >
                Nuevo Personaje
              </button>
            </div>
          ) : (
            /* New Adventure Form */
            <form onSubmit={handleSubmit}>
              <label
                htmlFor="player-name"
                className="mb-2 block text-lg font-semibold"
                style={{
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--color-text-secondary)',
                }}
              >
                Nombra a tu héroe
              </label>
              <p
                className="mb-4 text-sm"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Elige sabiamente, pues tu nombre resonará por los pasillos de la mazmorra
              </p>

              <input
                id="player-name"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (error) setError('');
                }}
                placeholder="Ej: Aragorn, Gandalf, Luna..."
                className="input-field mb-2"
                autoFocus
                maxLength={20}
              />

              {error && (
                <p
                  className="mb-3 text-sm font-medium"
                  style={{ color: 'var(--color-btn-danger)' }}
                >
                  ⚠️ {error}
                </p>
              )}

              <button
                type="submit"
                className="btn btn-primary mt-4 w-full text-lg"
              >
                🗡️ Comenzar Aventura
              </button>
            </form>
          )}
        </div>

        {/* Decorative hint */}
        <p
          className="animate-torch mt-8 text-center text-sm"
          style={{ color: 'var(--color-text-muted)' }}
        >
          🕯️ Las antorchas parpadean... algo te espera en la oscuridad
        </p>
      </div>
    </div>
  );
}
