import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="page-container">
      <div className="glass-card max-w-lg p-10 text-center shadow-2xl">
        <div className="mb-6 text-8xl">🔦</div>
        <h1 className="mb-4 text-4xl font-bold uppercase tracking-widest text-primary">
          404 - Sala Extraviada
        </h1>
        <div
          className="mx-auto mb-8 h-1 w-24 rounded-full"
          style={{ backgroundColor: 'var(--color-accent)' }}
        ></div>
        <p className="mb-8 text-lg" style={{ color: 'var(--color-text-secondary)' }}>
          Tus antorchas se han apagado y no reconoces estas paredes. Parece que has tomado un giro equivocado en la oscuridad.
        </p>
        <Link to="/" className="btn btn-primary">
          📜 Volver a la Entrada
        </Link>
      </div>
    </div>
  );
}
