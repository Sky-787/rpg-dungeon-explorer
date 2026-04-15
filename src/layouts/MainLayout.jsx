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
        className="py-4 text-center text-sm"
        style={{
          color: 'var(--color-text-muted)',
          borderTop: '1px solid var(--color-border)',
          fontFamily: 'var(--font-body)',
        }}
      >
        🐉 RPG Dungeon Explorer &copy; {new Date().getFullYear()} — Hecho con React + Zustand
      </footer>
    </div>
  );
}
