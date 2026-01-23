import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import '../styles/DashboardPage.css';

const DashboardPage = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    totalActivities: 0,
    completedActivities: 0,
    totalGoals: 0,
    completedGoals: 0
  });

  useEffect(() => {
    // TODO: Carregar estatísticas do backend
    setStats({
      totalActivities: 12,
      completedActivities: 8,
      totalGoals: 5,
      completedGoals: 2
    });
  }, []);

  return (
    <div className="dashboard-container">
      <Header />
      <div className="dashboard-main">
        <Sidebar />
        <main className="dashboard-content">
          <div className="dashboard-header">
            <h1>Bem-vindo, {user?.name}! 👋</h1>
            <p>Seu progresso pessoal em um único lugar</p>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">📋</div>
              <div className="stat-info">
                <h3>Atividades</h3>
                <p className="stat-number">{stats.totalActivities}</p>
                <p className="stat-subtitle">{stats.completedActivities} concluídas</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">🎯</div>
              <div className="stat-info">
                <h3>Metas</h3>
                <p className="stat-number">{stats.totalGoals}</p>
                <p className="stat-subtitle">{stats.completedGoals} alcançadas</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">📊</div>
              <div className="stat-info">
                <h3>Taxa de Conclusão</h3>
                <p className="stat-number">
                  {stats.totalActivities > 0
                    ? Math.round((stats.completedActivities / stats.totalActivities) * 100)
                    : 0}%
                </p>
                <p className="stat-subtitle">De atividades</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">🔥</div>
              <div className="stat-info">
                <h3>Sequência</h3>
                <p className="stat-number">7</p>
                <p className="stat-subtitle">Dias consecutivos</p>
              </div>
            </div>
          </div>

          <div className="dashboard-sections">
            <section className="dashboard-section">
              <h2>Atividades Recentes</h2>
              <div className="empty-state">
                <p>Nenhuma atividade registrada ainda</p>
              </div>
            </section>

            <section className="dashboard-section">
              <h2>Metas em Progresso</h2>
              <div className="empty-state">
                <p>Nenhuma meta criada ainda</p>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
