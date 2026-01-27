import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
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
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Sobre o ARCHITECT</h1>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-lg text-gray-700 mb-6">
              O ARCHITECT é uma plataforma inovadora que transforma sua vida cotidiana em uma experiência de RPG gamificada,
              utilizando inteligência artificial para analisar e quantificar seu progresso pessoal.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Nossa missão é ajudar pessoas a evoluírem de forma consciente e motivada, convertendo atividades diárias
              em pontos de experiência (XP) e atributos mensuráveis em cinco dimensões: Força, Inteligência, Vitalidade,
              Agilidade e Recursos.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Desenvolvido com as tecnologias mais modernas, incluindo React, Tailwind CSS, Supabase e Google Gemini,
              o ARCHITECT oferece uma experiência segura, intuitiva e poderosa para otimizar sua evolução pessoal.
            </p>
            <div className="text-center mt-8">
              <Link to="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Voltar ao Início
              </Link>
            </div>
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

export default AboutPage;