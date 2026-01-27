import React from 'react';

const DocumentationPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Transforme sua vida em um RPG</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            ARCHITECT é uma plataforma de produtividade impulsionada por IA que converte suas atividades diárias em progresso mensurável.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Explorar Demo
            </button>
            <button className="border-2 border-gray-600 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 hover:text-white transition">
              Documentação
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Recursos Principais</h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            Tudo que você precisa para otimizar sua evolução pessoal, alimentado por inteligência artificial de ponta.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-gray-800 p-6 rounded-lg">
              <div className="bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Processamento Natural</h3>
              <p className="text-gray-400">Registre suas atividades em linguagem natural. A IA extrai automaticamente categorias, atributos e XP estimado.</p>
            </div>
            <div className="text-center bg-gray-800 p-6 rounded-lg">
              <div className="bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚔️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Sistema de Atributos</h3>
              <p className="text-gray-400">Evolua em 5 dimensões: Força, Inteligência, Vitalidade, Agilidade e Recursos.</p>
            </div>
            <div className="text-center bg-gray-800 p-6 rounded-lg">
              <div className="bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Analytics Profundo</h3>
              <p className="text-gray-400">Visualize correlações entre sono, produtividade e desempenho.</p>
            </div>
            <div className="text-center bg-gray-800 p-6 rounded-lg">
              <div className="bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Segurança em Primeiro Lugar</h3>
              <p className="text-gray-400">Dados criptografados, conformidade LGPD/GDPR.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Stack Tecnológico</h2>
          <p className="text-center text-gray-400 mb-16">Construído com as tecnologias mais modernas e confiáveis do mercado.</p>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { name: 'React 19', desc: 'Interface reativa e performática' },
              { name: 'TypeScript', desc: 'Tipagem segura' },
              { name: 'Tailwind CSS', desc: 'Design system escalável' },
              { name: 'Supabase', desc: 'Backend serverless' },
              { name: 'Google Gemini', desc: 'IA avançada' },
              { name: 'Recharts', desc: 'Visualizações dinâmicas' }
            ].map((tech, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="font-semibold mb-2 text-white">{tech.name}</h3>
                  <p className="text-sm text-gray-400">{tech.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Roadmap de Desenvolvimento</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center bg-gray-800 p-6 rounded-lg">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">1</div>
              <h3 className="font-semibold mb-2 text-white">Fundação (MVP Core)</h3>
              <p className="text-sm text-gray-400">Em Progresso<br/>React + Tailwind + Supabase<br/>Autenticação<br/>Modelagem de Dados</p>
            </div>
            <div className="text-center bg-gray-800 p-6 rounded-lg">
              <div className="bg-gray-600 text-gray-400 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">2</div>
              <h3 className="font-semibold mb-2 text-white">O Motor de IA</h3>
              <p className="text-sm text-gray-400">Planejado<br/>Edge Functions<br/>Engenharia de Prompt<br/>Parser JSON</p>
            </div>
            <div className="text-center bg-gray-800 p-6 rounded-lg">
              <div className="bg-gray-600 text-gray-400 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">3</div>
              <h3 className="font-semibold mb-2 text-white">Dashboard e UI</h3>
              <p className="text-sm text-gray-400">Planejado<br/>Terminal de Input<br/>Gráfico de Radar<br/>Barras de Progresso</p>
            </div>
            <div className="text-center bg-gray-800 p-6 rounded-lg">
              <div className="bg-gray-600 text-gray-400 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">4</div>
              <h3 className="font-semibold mb-2 text-white">Inteligência de Dados</h3>
              <p className="text-sm text-gray-400">Planejado<br/>Analytics Avançado<br/>Correlações<br/>Sistema de Streaks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Attributes Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Sistema de Atributos</h2>
          <p className="text-center text-gray-400 mb-16">Cinco dimensões de evolução que representam diferentes aspectos do seu desenvolvimento pessoal.</p>
          <div className="grid md:grid-cols-5 gap-8">
            {[
              { abbr: 'FOR', name: 'Força', desc: 'Atividades físicas e resistência' },
              { abbr: 'INT', name: 'Inteligência', desc: 'Estudos e aprendizado' },
              { abbr: 'VIT', name: 'Vitalidade', desc: 'Saúde mental e bem-estar' },
              { abbr: 'AGI', name: 'Agilidade', desc: 'Produtividade e organização' },
              { abbr: 'REC', name: 'Recursos', desc: 'Gestão financeira' }
            ].map((attr, index) => (
              <div key={index} className="text-center bg-gray-800 p-6 rounded-lg">
                <div className="text-2xl font-bold text-blue-400 mb-2">{attr.abbr}</div>
                <h3 className="font-semibold mb-2 text-white">{attr.name}</h3>
                <p className="text-sm text-gray-400">{attr.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para arquitetar sua evolução?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Junte-se aos primeiros usuários que estão transformando sua vida em um RPG pessoal.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Acessar Beta
            </button>
            <button className="border-2 border-gray-600 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 hover:text-white transition">
              Saiba Mais
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">ARCHITECT</h3>
              <p className="text-gray-400">Evolução pessoal gamificada com IA.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button className="hover:text-white">Features</button></li>
                <li><button className="hover:text-white">Roadmap</button></li>
                <li><button className="hover:text-white">Preços</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Recursos</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button className="hover:text-white">Documentação</button></li>
                <li><button className="hover:text-white">Blog</button></li>
                <li><button className="hover:text-white">API</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button className="hover:text-white">Sobre</button></li>
                <li><button className="hover:text-white">Contato</button></li>
                <li><button className="hover:text-white">Privacidade</button></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 ARCHITECT. Todos os direitos reservados.</p>
            <div className="flex justify-center space-x-4 mt-4">
              <button className="hover:text-white">Twitter</button>
              <button className="hover:text-white">GitHub</button>
              <button className="hover:text-white">LinkedIn</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DocumentationPage;