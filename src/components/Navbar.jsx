import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import useGameStore from '../store/useGameStore';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const playerName = useGameStore((state) => state.playerName);

  const navLinks = [
    { to: '/', label: 'Inicio', icon: '🏠' },
    { to: '/game', label: 'Explorar', icon: '⚔️' },
    { to: '/map', label: 'Mapa', icon: '🗺️' },
    { to: '/stats', label: 'Stats', icon: '📊' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      style={{
        backgroundColor: 'var(--color-bg-navbar)',
        boxShadow: 'var(--shadow-navbar)',
        backdropFilter: 'blur(10px)',
      }}
      className="sticky top-0 z-50 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between">
        {/* Logo / Brand */}
        <Link
          to="/"
          className="flex items-center gap-2 no-underline transition-transform hover:scale-105"
          style={{ color: 'var(--color-text-navbar)' }}
        >
          <span className="text-2xl">🐉</span>
          <span
            className="hidden text-xl font-bold sm:block"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Dungeon Explorer
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-1 sm:gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium no-underline transition-all sm:px-4"
              style={{
                color: 'var(--color-text-navbar)',
                backgroundColor: isActive(link.to)
                  ? 'rgba(255, 255, 255, 0.15)'
                  : 'transparent',
                borderBottom: isActive(link.to)
                  ? '2px solid var(--color-accent)'
                  : '2px solid transparent',
              }}
              onMouseEnter={(e) => {
                if (!isActive(link.to)) {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive(link.to)) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              <span>{link.icon}</span>
              <span className="hidden sm:inline">{link.label}</span>
            </Link>
          ))}
        </div>

        {/* Right side: Player name + Theme toggle */}
        <div className="flex items-center gap-3">
          {playerName && (
            <span
              className="hidden items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium md:flex"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: 'var(--color-text-navbar)',
              }}
            >
              <span>🧙</span>
              {playerName}
            </span>
          )}

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-full text-xl transition-all hover:scale-110 active:scale-95"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: 'var(--color-text-navbar)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
            title={theme === 'light' ? 'Modo Calabozo (Oscuro)' : 'Modo Pergamino (Claro)'}
            aria-label="Cambiar tema"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </nav>
  );
}
