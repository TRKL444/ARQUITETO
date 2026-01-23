import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Sidebar.css';

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <Link
          to="/dashboard"
          className={`nav-item ${isActive('/dashboard') ? 'active' : ''}`}
        >
          📊 Dashboard
        </Link>
        <Link
          to="/activities"
          className={`nav-item ${isActive('/activities') ? 'active' : ''}`}
        >
          📋 Atividades
        </Link>
        <Link
          to="/goals"
          className={`nav-item ${isActive('/goals') ? 'active' : ''}`}
        >
          🎯 Metas
        </Link>
        <Link
          to="/analytics"
          className={`nav-item ${isActive('/analytics') ? 'active' : ''}`}
        >
          📈 Analytics
        </Link>
        <Link
          to="/profile"
          className={`nav-item ${isActive('/profile') ? 'active' : ''}`}
        >
          👤 Perfil
        </Link>
        <Link
          to="/settings"
          className={`nav-item ${isActive('/settings') ? 'active' : ''}`}
        >
          ⚙️ Configurações
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
