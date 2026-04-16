import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function MainLayout() {
  return (
    <div
      className="flex min-h-screen flex-col"
      style={{ backgroundColor: 'var(--color-bg-primary)' }}
    >
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer
        className="mt-auto py-8 text-center text-sm"
        style={{
          color: 'var(--color-text-muted)',
          borderTop: '1px solid var(--color-border)',
          fontFamily: 'var(--font-body)',
          backgroundColor: 'rgba(0,0,0,0.02)'
        }}
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-4 flex justify-center gap-6 text-xl">
            <span className="animate-float" style={{ animationDelay: '0s' }}>🏰</span>
            <span className="animate-float" style={{ animationDelay: '0.5s' }}>⚔️</span>
            <span className="animate-float" style={{ animationDelay: '1s' }}>💎</span>
          </div>
          <p className="font-semibold" style={{ color: 'var(--color-text-primary)' }}>
            🐉 RPG Dungeon Explorer &copy; {new Date().getFullYear()}
          </p>
          <p className="mt-1 opacity-80">
            Una aventura épica construida con React, Zustand y Tailwind CSS.
          </p>
          <div className="mt-4 flex justify-center gap-4 text-xs font-medium uppercase tracking-wider">
            <span>Explora</span>
            <span>Descubre</span>
            <span>Sobrevive</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
