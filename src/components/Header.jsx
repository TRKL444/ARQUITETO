import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Header.css';

const Header = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [showUserMenu, setShowUserMenu] = React.useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-brand">
          <h1 className="header-title">🏗️ ARCHITECT</h1>
        </div>

        <div className="header-user">
          <div className="user-info">
            <span className="user-name">{user?.name}</span>
          </div>
          <button
            className="user-menu-button"
            onClick={() => setShowUserMenu(!showUserMenu)}
          >
            <div className="user-avatar">
              {user?.name?.charAt(0)?.toUpperCase()}
            </div>
          </button>

          {showUserMenu && (
            <div className="user-menu">
              <a href="/profile">👤 Perfil</a>
              <a href="/settings">⚙️ Configurações</a>
              <hr />
              <button onClick={handleLogout} className="logout-button">
                🚪 Sair
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
