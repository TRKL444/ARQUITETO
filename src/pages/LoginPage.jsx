import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { Mail, Lock, User, ArrowRight, Github, Chrome } from 'lucide-react';

const LoginPage = ({ isRegister = false }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { login, register, error, setError } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [isRegisterMode, setIsRegisterMode] = useState(isRegister || searchParams.get('mode') === 'register');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const accentColor = isRegisterMode ? 'purple' : 'cyan';
  const accentHex = isRegisterMode ? '#a855f7' : '#06b6d4';

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      if (isRegisterMode) {
        if (formData.password !== formData.confirmPassword) {
          setError('Senhas não coincidem');
          setIsLoading(false);
          return;
        }
        const success = await register(formData.name, formData.email, formData.password);
        if (success) navigate('/dashboard');
      } else {
        const success = await login(formData.email, formData.password);
        if (success) navigate('/dashboard');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const toggleMode = () => {
    setIsRegisterMode(!isRegisterMode);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden flex items-center justify-center p-4">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(22, 163, 74, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-400/5 rounded-full blur-[80px]"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-400/5 rounded-full blur-[80px]"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md relative z-10"
      >
        {/* Card */}
        <div className="relative bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-2xl p-8 shadow-2xl">
          {/* Top Glow */}
          <div
            className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
            style={{
              background: `linear-gradient(90deg, transparent, ${accentHex}, transparent)`,
              boxShadow: `0 0 20px ${accentHex}40`
            }}
          ></div>

          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              key={isRegisterMode ? 'register' : 'login'}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="mb-4"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-800 flex items-center justify-center">
                <User className={`w-8 h-8 text-${accentColor}-400`} />
              </div>
            </motion.div>
            <motion.h1
              key={isRegisterMode ? 'register-title' : 'login-title'}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-2xl font-bold text-white mb-2"
            >
              {isRegisterMode ? 'CRIAR PERFIL' : 'ACESSAR SISTEMA'}
            </motion.h1>
            <motion.p
              key={isRegisterMode ? 'register-subtitle' : 'login-subtitle'}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-slate-400 text-sm"
            >
              {isRegisterMode ? 'Junte-se aos jogadores de elite' : 'Bem-vindo de volta, jogador'}
            </motion.p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <AnimatePresence mode="wait">
              {isRegisterMode && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                      NOME COMPLETO
                    </label>
                    <div className="relative">
                      <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-${accentColor}-400`} />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Seu nome completo"
                        className={`w-full bg-slate-950 border border-slate-800 rounded-lg py-3 pl-10 pr-4 text-white placeholder-slate-700 focus:outline-none focus:border-${accentColor}-400 focus:shadow-lg transition-all duration-300`}
                        style={{
                          boxShadow: `0 0 0 0 ${accentHex}40`,
                        }}
                        required
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                E-MAIL
              </label>
              <div className="relative">
                <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-${accentColor}-400`} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="seu@email.com"
                  className={`w-full bg-slate-950 border border-slate-800 rounded-lg py-3 pl-10 pr-4 text-white placeholder-slate-700 focus:outline-none focus:border-${accentColor}-400 focus:shadow-lg transition-all duration-300`}
                  style={{
                    boxShadow: `0 0 0 0 ${accentHex}40`,
                  }}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                SENHA
              </label>
              <div className="relative">
                <Lock className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-${accentColor}-400`} />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Sua senha"
                  className={`w-full bg-slate-950 border border-slate-800 rounded-lg py-3 pl-10 pr-4 text-white placeholder-slate-700 focus:outline-none focus:border-${accentColor}-400 focus:shadow-lg transition-all duration-300`}
                  style={{
                    boxShadow: `0 0 0 0 ${accentHex}40`,
                  }}
                  required
                />
              </div>
            </div>

            <AnimatePresence mode="wait">
              {isRegisterMode && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                      CONFIRMAR SENHA
                    </label>
                    <div className="relative">
                      <Lock className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-${accentColor}-400`} />
                      <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        placeholder="Confirme sua senha"
                        className={`w-full bg-slate-950 border border-slate-800 rounded-lg py-3 pl-10 pr-4 text-white placeholder-slate-700 focus:outline-none focus:border-${accentColor}-400 focus:shadow-lg transition-all duration-300`}
                        style={{
                          boxShadow: `0 0 0 0 ${accentHex}40`,
                        }}
                        required
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm text-center bg-red-400/10 border border-red-400/20 rounded-lg p-3"
              >
                {error}
              </motion.div>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 px-4 rounded-lg font-bold text-sm uppercase tracking-widest flex items-center justify-center space-x-2 transition-all duration-300 ${
                isRegisterMode
                  ? 'bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-white hover:bg-slate-100 text-slate-950 shadow-lg'
              }`}
            >
              <span>{isLoading ? 'CARREGANDO...' : isRegisterMode ? 'CRIAR PERFIL' : 'ACESSAR'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </form>

          {/* Social Auth */}
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-slate-900/40 text-slate-500">Ou continue com</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button className="w-full inline-flex justify-center py-2 px-4 border border-slate-700 rounded-lg shadow-sm bg-slate-800 text-sm font-medium text-slate-300 hover:bg-slate-700 transition-colors">
                <Chrome className="w-5 h-5" />
              </button>
              <button className="w-full inline-flex justify-center py-2 px-4 border border-slate-700 rounded-lg shadow-sm bg-slate-800 text-sm font-medium text-slate-300 hover:bg-slate-700 transition-colors">
                <Github className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Toggle */}
          <div className="mt-8 text-center">
            <p className="text-slate-500 text-sm">
              {isRegisterMode ? 'Já é um jogador?' : 'Ainda não é um jogador?'}
              <button
                onClick={toggleMode}
                className={`ml-1 font-semibold hover:text-${accentColor}-400 transition-colors`}
                style={{ color: accentHex }}
              >
                {isRegisterMode ? 'Acesse aqui' : 'Crie seu perfil'}
              </button>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
