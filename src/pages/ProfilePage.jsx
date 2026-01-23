import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { userService } from '../services/api.service';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import '../styles/ProfilePage.css';

const ProfilePage = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    bio: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // TODO: Implementar atualização de perfil
      setIsEditing(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="profile-container">
      <Header />
      <div className="profile-main">
        <Sidebar />
        <main className="profile-content">
          <div className="profile-header">
            <h1>👤 Meu Perfil</h1>
          </div>

          <div className="profile-card">
            <div className="profile-avatar">
              <div className="avatar-placeholder">
                {user?.name?.charAt(0)?.toUpperCase()}
              </div>
            </div>

            {isEditing ? (
              <form className="profile-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Nome</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>E-mail</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Bio</label>
                  <textarea
                    value={formData.bio}
                    onChange={(e) =>
                      setFormData({ ...formData, bio: e.target.value })
                    }
                    placeholder="Conte-nos sobre você"
                  />
                </div>
                <div className="form-actions">
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancelar
                  </button>
                  <button type="submit" className="btn-primary" disabled={loading}>
                    {loading ? 'Salvando...' : 'Salvar'}
                  </button>
                </div>
              </form>
            ) : (
              <div className="profile-info">
                <h2>{user?.name}</h2>
                <p className="profile-email">{user?.email}</p>
                <button
                  className="btn-primary"
                  onClick={() => setIsEditing(true)}
                >
                  Editar Perfil
                </button>
              </div>
            )}
          </div>

          <section className="profile-section">
            <h3>Estatísticas</h3>
            <div className="stats-overview">
              <div className="stat">
                <span className="stat-label">Membro desde</span>
                <span className="stat-value">{new Date(user?.created_at).toLocaleDateString('pt-BR')}</span>
              </div>
              <div className="stat">
                <span className="stat-label">Atividades</span>
                <span className="stat-value">--</span>
              </div>
              <div className="stat">
                <span className="stat-label">Metas</span>
                <span className="stat-value">--</span>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ProfilePage;
