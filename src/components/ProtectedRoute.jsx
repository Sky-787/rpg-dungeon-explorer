import { Navigate, Outlet } from 'react-router-dom';
import useGameStore from '../store/useGameStore';

export default function ProtectedRoute() {
  const playerName = useGameStore((state) => state.playerName);

  if (!playerName) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
