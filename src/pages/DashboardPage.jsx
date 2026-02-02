import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { useAuth } from '../context/AuthContext';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import '../styles/DashboardPage.css';
import {
  CheckSquare,
  Zap,
  Trophy
} from 'lucide-react';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const DashboardPage = () => {
  const { user } = useAuth(); // Agora pegamos o user real do contexto!
  
  // Estado local para missões (futuramente virá da tabela 'goals' ou 'activities')
  const [missions, setMissions] = useState([
    {
      id: 1,
      title: 'Completar configuração inicial',
      tag: 'SYS',
      xpReward: 500,
      completed: false,
      category: 'work'
    }
  ]);

  // Se o user não tiver atributos carregados ainda, usamos valores padrão para não quebrar o gráfico
  const userAttributes = user?.attributes || { FOR: 50, INT: 50, VIT: 50, AGI: 50, REC: 50 };

  const attributesData = {
    labels: ['FOR', 'INT', 'VIT', 'AGI', 'REC'],
    datasets: [{
      label: 'Seus Atributos',
      // Mapeamos os valores reais do banco de dados
      data: [
        userAttributes.FOR, 
        userAttributes.INT, 
        userAttributes.VIT, 
        userAttributes.AGI, 
        userAttributes.REC
      ],
      fill: true,
      backgroundColor: 'rgba(34, 211, 238, 0.2)', // Ciano translúcido
      borderColor: 'rgba(34, 211, 238, 1)',      // Ciano sólido
      borderWidth: 2,
      pointBackgroundColor: 'rgba(168, 85, 247, 1)', // Roxo
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(168, 85, 247, 1)',
    }],
  };

  const radarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      r: {
        angleLines: {
          color: 'rgba(148, 163, 184, 0.1)',
        },
        grid: {
          color: 'rgba(148, 163, 184, 0.1)',
        },
        pointLabels: {
          color: 'rgba(148, 163, 184, 0.8)',
          font: {
            size: 12,
            family: 'monospace', // Fonte mono para combinar com o tema
          },
        },
        ticks: {
          display: false, // Esconde os números do eixo para ficar mais limpo
          backdropColor: 'transparent',
        },
        suggestedMin: 0,
        suggestedMax: 100, // Escala fixa para dar sensação de progresso real
      },
    },
  };

  // Função mock para completar missão (apenas visual por enquanto)
  const completeMission = (missionId) => {
    setMissions(prev => prev.map(mission => {
      if (mission.id === missionId && !mission.completed) {
        return { ...mission, completed: true };
      }
      return mission;
    }));
  };

  return (
    <div className="dashboard-container">
      <Header />
      <div className="dashboard-main">
        <Sidebar />
        <main className="dashboard-content">
          <div className="p-6 max-w-7xl mx-auto">
            {/* Welcome Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h1 className="text-3xl font-bold text-white mb-2 font-mono uppercase">
                Olá, {user?.name || 'Jogador'}
              </h1>
              <div className="flex items-center space-x-4">
                <span className="bg-purple-600/20 text-purple-400 border border-purple-500/50 px-3 py-1 rounded font-mono text-sm">
                  NÍVEL {user?.level || 1}
                </span>
                <span className="text-slate-400 font-mono text-sm">
                  XP ATUAL: {user?.current_xp || 0} / {user?.next_level_xp || 1000}
                </span>
              </div>
              
              {/* Barra de XP */}
              <div className="w-full h-2 bg-slate-800 rounded-full mt-4 overflow-hidden border border-slate-700">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(((user?.current_xp || 0) / (user?.next_level_xp || 1000)) * 100, 100)}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-cyan-500 to-purple-600"
                />
              </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Radar Chart - AGORA REAL */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-1 bg-slate-900/40 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-6 flex flex-col"
              >
                <h3 className="text-lg font-bold text-white mb-4 font-mono border-b border-slate-800 pb-2">
                  STATUS
                </h3>
                <div className="flex-1 min-h-[300px] relative">
                  <Radar data={attributesData} options={radarOptions} />
                </div>
              </motion.div>

              {/* Missions - Ainda Mock (Próximo passo: conectar ao banco) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="lg:col-span-2 bg-slate-900/40 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold text-white mb-4 font-mono flex items-center space-x-2 border-b border-slate-800 pb-2">
                  <CheckSquare className="w-5 h-5 text-cyan-400" />
                  <span>MISSÕES DIÁRIAS</span>
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {missions.map((mission) => (
                    <div
                      key={mission.id}
                      className={`p-4 rounded-lg border transition-all duration-300 flex items-center justify-between ${
                        mission.completed
                          ? 'bg-slate-800/30 border-slate-800 opacity-60'
                          : 'bg-slate-800/50 border-slate-700 hover:border-cyan-500/50'
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={() => completeMission(mission.id)}
                          className={`w-6 h-6 rounded border flex items-center justify-center transition-colors ${
                            mission.completed
                              ? 'bg-cyan-500 border-cyan-500 text-black'
                              : 'border-slate-500 hover:border-cyan-400'
                          }`}
                        >
                          {mission.completed && <CheckSquare size={14} />}
                        </button>
                        <div>
                          <p className={`font-medium ${mission.completed ? 'line-through text-slate-500' : 'text-slate-200'}`}>
                            {mission.title}
                          </p>
                          <span className="text-xs font-mono text-purple-400 bg-purple-400/10 px-2 py-0.5 rounded">
                            {mission.tag}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 text-cyan-400 font-mono text-sm">
                        <Zap size={14} />
                        <span>+{mission.xpReward} XP</span>
                      </div>
                    </div>
                  ))}
                  
                  {missions.length === 0 && (
                    <div className="text-center py-8 text-slate-500">
                      Nenhuma missão ativa. Descanse, soldado.
                    </div>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Quick Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              <div className="bg-slate-900/40 border border-slate-800/50 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <p className="text-slate-500 text-xs font-mono uppercase">Total XP</p>
                  <p className="text-2xl font-bold text-white">{user?.current_xp || 0}</p>
                </div>
                <Zap className="text-yellow-500" />
              </div>
              
              <div className="bg-slate-900/40 border border-slate-800/50 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <p className="text-slate-500 text-xs font-mono uppercase">Atributo Maior</p>
                  <p className="text-2xl font-bold text-cyan-400">
                    {/* Lógica simples para achar o maior atributo */}
                    {Object.entries(userAttributes).reduce((a, b) => a[1] > b[1] ? a : b)[0]}
                  </p>
                </div>
                <Trophy className="text-cyan-500" />
              </div>

              <div className="bg-slate-900/40 border border-slate-800/50 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <p className="text-slate-500 text-xs font-mono uppercase">Streak</p>
                  <p className="text-2xl font-bold text-green-400">1 Dia</p>
                </div>
                <div className="text-green-500 font-mono text-xs border border-green-500/30 px-2 py-1 rounded">ATIVO</div>
              </div>
            </motion.div>

          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;