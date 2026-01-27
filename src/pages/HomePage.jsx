import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">ARCHITECT</div>
          <div className="space-x-6">
            <Link to="/login" className="text-gray-600 hover:text-gray-800 transition">Login</Link>
            <Link to="/register" className="text-gray-600 hover:text-gray-800 transition">Cadastro</Link>
            <Link to="/documentation" className="text-gray-600 hover:text-gray-800 transition">Documentação</Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-800 transition">Sobre Nós</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Bem-vindo ao ARCHITECT</h1>
          <p className="text-lg text-gray-600 mb-8">Transforme sua vida em um RPG com IA</p>
          <div className="space-x-4">
            <Link to="/login" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Entrar
            </Link>
            <Link to="/register" className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 hover:text-white transition">
              Cadastrar
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2026 ARCHITECT. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default HomePage;