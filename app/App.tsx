import React from 'react';
import { Home } from './pages';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route
        path="*"
        element={
          <main style={{ padding: '1rem' }}>
            <p>Página não encontrada!</p>
          </main>
        }
      />
    </Routes>
  );
}
