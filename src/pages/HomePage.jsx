import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Terminal, Zap } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden" style={{
      backgroundImage: `url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundBlendMode: 'overlay'
    }}>
      {/* Overlay para manter o dark mode */}
      <div className="absolute inset-0 bg-slate-950/80"></div>
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(22, 163, 74, 0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/5 rounded-full blur-[100px]"></div>

      {/* Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 backdrop-blur-md bg-slate-900/20 border-b border-slate-800/50"
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="relative"
            >
              <Zap className="w-8 h-8 text-cyan-400" />
              <div className="absolute inset-0 bg-cyan-400/20 rounded-full animate-ping"></div>
            </motion.div>
            <span className="text-xl font-mono font-bold text-slate-200 tracking-wider">ARCHITECT</span>
          </div>
          <div className="flex space-x-8">
            <Link to="/login" className="text-slate-400 hover:text-cyan-400 transition-colors font-mono tracking-widest text-sm uppercase">
              Login
            </Link>
            <Link to="/register" className="text-cyan-400 border border-cyan-400/50 px-3 py-1 rounded font-mono tracking-widest text-sm uppercase hover:bg-cyan-400/10 transition-all duration-300">
              Cadastro
            </Link>
            <Link to="/documentation" className="text-slate-400 hover:text-cyan-400 transition-colors font-mono tracking-widest text-sm uppercase">
              Documentação
            </Link>
            <Link to="/about" className="text-slate-400 hover:text-cyan-400 transition-colors font-mono tracking-widest text-sm uppercase">
              Sobre Nós
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="relative z-10 flex items-center justify-center min-h-[calc(100vh-80px)]">
        <div className="text-center px-6">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-full px-4 py-2 mb-8"
          >
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-xs font-mono text-slate-400 tracking-wider">Sistema Online • v4.0.2</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-8xl font-black mb-6 tracking-tight"
          >
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              ARCHITECT
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Sistema de produtividade gamificado com IA avançada.
            <br />
            Transforme suas atividades em experiência mensurável.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link
              to="/login"
              className="group bg-white text-slate-950 px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-100 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Iniciar Sessão</span>
              <motion.div
                className="opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
              >
                →
              </motion.div>
            </Link>
            <Link
              to="/documentation"
              className="group bg-slate-900/50 backdrop-blur-sm border border-slate-700 text-slate-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-800/50 hover:border-cyan-400/50 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Terminal className="w-5 h-5" />
              <span>Documentação Técnica</span>
            </Link>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="relative z-10 bg-slate-900/20 backdrop-blur-sm border-t border-slate-800/50 py-6"
      >
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-500 text-sm font-mono tracking-wider">
            © 2026 ARCHITECT • Sistema de Evolução Pessoal
          </p>
        </div>
      </motion.footer>
    </div>
  );
};

export default HomePage;