import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Game from './pages/Game';
import MapView from './pages/MapView';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          {/* Ruta pública: Inicio */}
          <Route path="/" element={<Home />} />

          {/* Rutas protegidas: requieren playerName */}
          <Route element={<ProtectedRoute />}>
            <Route path="/game" element={<Game />} />
            <Route path="/map" element={<MapView />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
