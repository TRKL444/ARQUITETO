import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Activity, Target, BarChart3, User, Settings } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { path: '/dashboard', icon: Home, label: 'Dashboard' },
    { path: '/activities', icon: Activity, label: 'Atividades' },
    { path: '/goals', icon: Target, label: 'Objetivos' },
    { path: '/analytics', icon: BarChart3, label: 'Analytics' },
    { path: '/profile', icon: User, label: 'Perfil' },
    { path: '/settings', icon: Settings, label: 'Configurações' },
  ];

  const handleClick = (path) => {
    // Debug removed
  };

  return (
    <aside className="w-20 bg-slate-900/80 backdrop-blur-md border-r border-slate-700/50 min-h-screen flex flex-col items-center py-6">
      <nav className="flex-1">
        <ul className="space-y-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => handleClick(item.path)}
                  className={`flex flex-col items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 group ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-400 shadow-lg shadow-cyan-500/20'
                      : 'text-slate-400 hover:bg-slate-800/50 hover:text-cyan-400 hover:shadow-md hover:shadow-cyan-500/10'
                  }`}
                  title={item.label}
                >
                  <Icon className="w-6 h-6" />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;