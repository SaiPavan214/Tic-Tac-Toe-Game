import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GameSettings from './pages/GameSettings';
import Game from './pages/Game';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<GameSettings />} />
      <Route path="/ticTacToe" element={<Game />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
