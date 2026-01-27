import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="bg-slate-900 border-b border-slate-800 px-6 py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold text-white">ARCHITECT</h1>
          <span className="text-slate-400">Sistema de Evolução Pessoal</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-slate-300">Olá, {user?.name || 'Jogador'}</span>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors"
          >
            Sair
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;