import React, { useState } from 'react';
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
  // eslint-disable-next-line no-unused-vars
  const { user } = useAuth();
  const [xp, setXp] = useState(1250);
  const [missions, setMissions] = useState([
    {
      id: 1,
      title: 'Completar relatório semanal',
      tag: 'INTEL',
      xpReward: 150,
      completed: false,
      category: 'work'
    },
    {
      id: 2,
      title: 'Treino de musculação',
      tag: 'FORÇA',
      xpReward: 100,
      completed: false,
      category: 'health'
    },
    {
      id: 3,
      title: 'Meditar por 20 minutos',
      tag: 'VITAL',
      xpReward: 80,
      completed: true,
      category: 'personal'
    },
    {
      id: 4,
      title: 'Revisar orçamento mensal',
      tag: 'SORTE',
      xpReward: 120,
      completed: false,
      category: 'finance'
    }
  ]);

  const attributes = {
    labels: ['FOR', 'INT', 'VIT', 'AGI', 'SOR'],
    datasets: [{
      label: 'Atributos',
      data: [65, 85, 70, 60, 75],
      fill: true,
      backgroundColor: 'rgba(34, 211, 238, 0.1)',
      borderColor: 'rgba(34, 211, 238, 0.8)',
      borderWidth: 2,
      pointBackgroundColor: 'rgba(168, 85, 247, 1)',
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
            family: 'JetBrains Mono',
          },
        },
        ticks: {
          display: false,
        },
      },
    },
  };

  const completeMission = (missionId) => {
    setMissions(prev => prev.map(mission => {
      if (mission.id === missionId && !mission.completed) {
        setXp(prevXp => prevXp + mission.xpReward);
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
              <h1 className="text-3xl font-bold text-white mb-2 font-mono">
                BEM-VINDO AO ARCHITECT
              </h1>
              <p className="text-slate-400 font-mono">
                Sistema de produtividade gamificado - Rank C
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Radar Chart */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-1 bg-slate-900/40 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold text-white mb-4 font-mono">ATRIBUTOS</h3>
                <div className="h-64">
                  <Radar data={attributes} options={radarOptions} />
                </div>
              </motion.div>

              {/* Missions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="lg:col-span-2 bg-slate-900/40 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold text-white mb-4 font-mono flex items-center space-x-2">
                  <CheckSquare className="w-5 h-5 text-cyan-400" />
                  <span>MISSÕES ATIVAS</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {missions.slice(0, 4).map((mission) => (
                    <motion.div
                      key={mission.id}
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0.5, scale: 0.95 }}
                      className={`p-4 rounded-lg border transition-all duration-300 cursor-pointer ${
                        mission.completed
                          ? 'bg-slate-800/50 border-slate-700/50 opacity-50'
                          : 'bg-slate-800/30 border-slate-700/50 hover:border-cyan-400/50 hover:bg-slate-800/50'
                      }`}
                      onClick={() => !mission.completed && completeMission(mission.id)}
                    >
                      <div className="flex items-center space-x-3">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-all ${
                            mission.completed
                              ? 'bg-cyan-400 border-cyan-400'
                              : 'border-slate-600 hover:border-cyan-400'
                          }`}
                        >
                          {mission.completed && <CheckSquare className="w-3 h-3 text-slate-900" />}
                        </motion.div>
                        <div className="flex-1">
                          <h4 className={`font-semibold text-sm ${mission.completed ? 'line-through text-slate-500' : 'text-white'}`}>
                            {mission.title}
                          </h4>
                          <div className="flex items-center justify-between mt-1">
                            <span className={`text-xs px-2 py-1 rounded font-mono ${
                              mission.tag === 'INTEL' ? 'bg-blue-500/20 text-blue-400' :
                              mission.tag === 'FORÇA' ? 'bg-red-500/20 text-red-400' :
                              mission.tag === 'VITAL' ? 'bg-green-500/20 text-green-400' :
                              'bg-purple-500/20 text-purple-400'
                            }`}>
                              {mission.tag}
                            </span>
                            <span className="text-cyan-400 font-mono text-sm">+{mission.xpReward} XP</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-400 text-sm font-mono">Missões Hoje</p>
                    <p className="text-cyan-400 font-bold text-xl">{missions.filter(m => m.completed).length}/{missions.length}</p>
                  </div>
                  <CheckSquare className="w-8 h-8 text-cyan-400/50" />
                </div>
              </div>

              <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-400 text-sm font-mono">XP Ganho</p>
                    <p className="text-purple-400 font-bold text-xl">+{missions.filter(m => m.completed).reduce((sum, m) => sum + m.xpReward, 0)}</p>
                  </div>
                  <Zap className="w-8 h-8 text-purple-400/50" />
                </div>
              </div>

              <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-400 text-sm font-mono">Sequência</p>
                    <p className="text-green-400 font-bold text-xl flex items-center space-x-1">
                      <span>7</span>
                      <Trophy className="w-4 h-4" />
                    </p>
                  </div>
                  <Trophy className="w-8 h-8 text-green-400/50" />
                </div>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;