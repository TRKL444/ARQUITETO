import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import '../styles/AnalyticsPage.css';

const AnalyticsPage = () => {
  const [analyticsData, setAnalyticsData] = useState({
    attributeGrowth: [],
    productivityByHour: [],
    correlations: [],
    metrics: {}
  });

  useEffect(() => {
    // Simular dados de analytics
    setAnalyticsData({
      attributeGrowth: [
        { day: 'Seg', FOR: 60, INT: 70, VIT: 65, AGI: 75, REC: 55 },
        { day: 'Ter', FOR: 62, INT: 72, VIT: 67, AGI: 77, REC: 57 },
        { day: 'Qua', FOR: 64, INT: 75, VIT: 70, AGI: 80, REC: 58 },
        { day: 'Qui', FOR: 65, INT: 76, VIT: 71, AGI: 82, REC: 59 },
        { day: 'Sex', FOR: 65, INT: 78, VIT: 72, AGI: 85, REC: 60 },
      ],
      productivityByHour: [
        { hour: '06h', activity: 10 },
        { hour: '08h', activity: 25 },
        { hour: '10h', activity: 45 },
        { hour: '12h', activity: 35 },
        { hour: '14h', activity: 50 },
        { hour: '16h', activity: 60 },
        { hour: '18h', activity: 40 },
        { hour: '20h', activity: 30 },
      ],
      correlations: [
        {
          title: 'Sono & Inteligência',
          correlation: '+42%',
          description: 'Noites com 8+ horas de sono correlacionam com +42% de XP em Inteligência'
        },
        {
          title: 'Exercício & Agilidade',
          correlation: '+35%',
          description: 'Atividades físicas diárias aumentam Agilidade em média 35%'
        },
        {
          title: 'Leitura & Inteligência',
          correlation: '+28%',
          description: 'Cada 30 minutos de leitura gera +28% de XP em Inteligência'
        }
      ],
      metrics: {
        activitiesRegistered: 24,
        currentStreak: 5,
        totalXp: 2450,
        strongestAttribute: 'Agilidade'
      }
    });
  }, []);

  return (
    <div className="analytics-container">
      <Header />
      <div className="analytics-main">
        <Sidebar />
        <main className="analytics-content">
          <div className="analytics-header">
            <h1>Analytics</h1>
            <p>Visualize suas tendências e correlações de desempenho</p>
          </div>

          {/* Correlations Section */}
          <section className="analytics-section">
            <h2>Correlações Detectadas</h2>
            <div className="correlations-grid">
              {analyticsData.correlations.map((insight, idx) => (
                <div key={idx} className="correlation-card">
                  <div className="correlation-header">
                    <h3>{insight.title}</h3>
                    <span className="correlation-value">{insight.correlation}</span>
                  </div>
                  <p className="correlation-description">{insight.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Performance Metrics Section */}
          <section className="analytics-section">
            <h2>Métricas de Desempenho</h2>
            <div className="metrics-grid">
              <div className="metric-card">
                <p className="metric-label">Atividades Registradas</p>
                <p className="metric-value">{analyticsData.metrics.activitiesRegistered}</p>
                <p className="metric-change">+3 esta semana</p>
              </div>
              <div className="metric-card">
                <p className="metric-label">Streak Atual</p>
                <p className="metric-value">{analyticsData.metrics.currentStreak} dias</p>
                <p className="metric-change">Excelente!</p>
              </div>
              <div className="metric-card">
                <p className="metric-label">XP Total Ganho</p>
                <p className="metric-value">{analyticsData.metrics.totalXp}</p>
                <p className="metric-change">+450 esta semana</p>
              </div>
              <div className="metric-card">
                <p className="metric-label">Atributo Mais Forte</p>
                <p className="metric-value">{analyticsData.metrics.strongestAttribute}</p>
                <p className="metric-change">85 pontos</p>
              </div>
            </div>
          </section>

          {/* Attribute Growth Chart Placeholder */}
          <section className="analytics-section">
            <h2>Evolução de Atributos</h2>
            <div className="chart-placeholder">
              <p>Gráfico de evolução de atributos (FOR, INT, VIT, AGI, REC)</p>
              <div className="chart-data">
                {analyticsData.attributeGrowth.map((data, idx) => (
                  <div key={idx} className="chart-row">
                    <span className="chart-day">{data.day}</span>
                    <div className="chart-bars">
                      <div className="bar" style={{ height: `${data.FOR * 0.8}px`, backgroundColor: '#ff6b6b' }} title={`FOR: ${data.FOR}`}></div>
                      <div className="bar" style={{ height: `${data.INT * 0.8}px`, backgroundColor: '#4c6ef5' }} title={`INT: ${data.INT}`}></div>
                      <div className="bar" style={{ height: `${data.VIT * 0.8}px`, backgroundColor: '#a78bfa' }} title={`VIT: ${data.VIT}`}></div>
                      <div className="bar" style={{ height: `${data.AGI * 0.8}px`, backgroundColor: '#22c55e' }} title={`AGI: ${data.AGI}`}></div>
                      <div className="bar" style={{ height: `${data.REC * 0.8}px`, backgroundColor: '#f59e0b' }} title={`REC: ${data.REC}`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default AnalyticsPage;
