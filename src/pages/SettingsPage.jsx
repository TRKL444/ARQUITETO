import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import '../styles/SettingsPage.css';

const SettingsPage = () => {
  const [settings, setSettings] = React.useState({
    notifications: true,
    emailAlerts: true,
    darkMode: false,
    language: 'pt-BR'
  });

  const handleToggle = (key) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSelectChange = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="settings-container">
      <Header />
      <div className="settings-main">
        <Sidebar />
        <main className="settings-content">
          <div className="settings-header">
            <h1>⚙️ Configurações</h1>
          </div>

          <div className="settings-card">
            <h2>Notificações</h2>
            <div className="setting-item">
              <label>
                <input
                  type="checkbox"
                  checked={settings.notifications}
                  onChange={() => handleToggle('notifications')}
                />
                Ativar notificações
              </label>
            </div>
            <div className="setting-item">
              <label>
                <input
                  type="checkbox"
                  checked={settings.emailAlerts}
                  onChange={() => handleToggle('emailAlerts')}
                />
                Receber alertas por e-mail
              </label>
            </div>
          </div>

          <div className="settings-card">
            <h2>Aparência</h2>
            <div className="setting-item">
              <label>
                <input
                  type="checkbox"
                  checked={settings.darkMode}
                  onChange={() => handleToggle('darkMode')}
                />
                Modo escuro
              </label>
            </div>
            <div className="setting-item">
              <label>
                Idioma:
                <select
                  value={settings.language}
                  onChange={(e) => handleSelectChange('language', e.target.value)}
                >
                  <option value="pt-BR">Português (Brasil)</option>
                  <option value="en-US">English (USA)</option>
                  <option value="es-ES">Español</option>
                </select>
              </label>
            </div>
          </div>

          <div className="settings-card danger">
            <h2>Zona de Perigo</h2>
            <p>Estas ações não podem ser desfeitas</p>
            <button className="btn-danger">Deletar Conta</button>
          </div>

          <button className="btn-primary" style={{ marginTop: '2rem' }}>
            Salvar Configurações
          </button>
        </main>
      </div>
    </div>
  );
};

export default SettingsPage;
